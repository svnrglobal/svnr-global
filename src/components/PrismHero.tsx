import { useEffect, useRef } from "react";

/**
 * PrismHero — the SVNR mark as a glowing outline, lit the way Vercel's triangle
 * actually behaves (confirmed frame-by-frame from the live site):
 *
 *   • Resting: a single white streak flows around the outline every 3.5s.
 *   • As the cursor approaches the mark, the streak fades out and the LIGHT FOLLOWS
 *     THE CURSOR — the stretch of outline nearest the pointer glows hottest and a
 *     soft halo bleeds toward it, tracking it around the shape (Vercel reads the
 *     real hardware pointer, which is why it only wakes for a real cursor).
 *   • Pull the cursor away from the mark and the streak resumes.
 *
 * Drawn once to an offscreen buffer (no per-segment shadows) then composited
 * through a few GPU blur passes — wide+soft = the halo, tight = the crisp edge.
 * 60fps. Prerender-safe + reduced-motion.
 */

type Pt = { x: number; y: number };
type Edge = { a: Pt; b: Pt; len: number };

// The two interlocking blocks touch only at the diagonal corners (38,38)+(62,62),
// so their combined OUTER silhouette is one continuous loop the light travels.
const OUTLINE: Pt[] = [
  { x: 38, y: 8 }, { x: 92, y: 8 }, { x: 92, y: 62 }, { x: 62, y: 62 },
  { x: 62, y: 92 }, { x: 8, y: 92 }, { x: 8, y: 38 }, { x: 38, y: 38 },
];

function buildEdges(poly: Pt[]): Edge[] {
  const edges: Edge[] = [];
  for (let i = 0; i < poly.length; i++) {
    const a = poly[i];
    const b = poly[(i + 1) % poly.length];
    edges.push({ a, b, len: Math.hypot(b.x - a.x, b.y - a.y) });
  }
  return edges;
}

const OUTLINE_EDGES = buildEdges(OUTLINE);
const PERIM_O = OUTLINE_EDGES.reduce((s, e) => s + e.len, 0);

function pointAtPerimeter(d: number): Pt {
  let dd = ((d % PERIM_O) + PERIM_O) % PERIM_O;
  for (const e of OUTLINE_EDGES) {
    if (dd <= e.len) {
      const t = dd / e.len;
      return { x: e.a.x + (e.b.x - e.a.x) * t, y: e.a.y + (e.b.y - e.a.y) * t };
    }
    dd -= e.len;
  }
  return OUTLINE[0];
}

const SAMP_N = 240;
const SAMPLES: { x: number; y: number; d: number }[] = Array.from(
  { length: SAMP_N + 1 },
  (_, i) => {
    const d = (i / SAMP_N) * PERIM_O;
    const p = pointAtPerimeter(d);
    return { x: p.x, y: p.y, d };
  }
);

const TRAIL = 0.32; // streak length as a fraction of the perimeter
const SWEEP_MS = 7000; // one lap (slow, calm)
const CURSOR_R = 34; // reach of the cursor light, in mark units (0..100 space)

export default function PrismHero({
  className = "",
  markSize = 240,
  highlight = null,
}: {
  className?: string;
  markSize?: number;
  highlight?: number | null;
}) {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const highlightRef = useRef<number | null>(null);
  useEffect(() => { highlightRef.current = highlight ?? null; }, [highlight]);

  useEffect(() => {
    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    if (!wrap || !canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const dpr = Math.min(typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1, 2);

    const fx = document.createElement("canvas");
    const fctx = fx.getContext("2d");
    if (!fctx) return;

    let Wd = 0;
    let Hd = 0;

    const resize = () => {
      const r = canvas.getBoundingClientRect();
      Wd = Math.max(1, Math.round(r.width * dpr));
      Hd = Math.max(1, Math.round(r.height * dpr));
      canvas.width = Wd;
      canvas.height = Hd;
      fx.width = Wd;
      fx.height = Hd;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      fctx.setTransform(1, 0, 0, 1, 0, 0);
    };
    resize();

    const ro = typeof ResizeObserver !== "undefined" ? new ResizeObserver(resize) : null;
    ro?.observe(wrap);
    window.addEventListener("resize", resize);

    // grain tile — bright-biased noise that speckles the glow
    const grain = document.createElement("canvas");
    grain.width = 160;
    grain.height = 160;
    const gctx = grain.getContext("2d");
    if (gctx) {
      const img = gctx.createImageData(160, 160);
      for (let i = 0; i < img.data.length; i += 4) {
        const v = 90 + ((Math.random() * 165) | 0);
        img.data[i] = img.data[i + 1] = img.data[i + 2] = v;
        img.data[i + 3] = 255;
      }
      gctx.putImageData(img, 0, 0);
    }
    const grainPattern = gctx ? ctx.createPattern(grain, "repeat") : null;

    let start = 0;
    let raf = 0;

    // layout in device pixels
    let MS = markSize * dpr;
    let s = MS / 100;
    let ox = 0;
    let oy = 0;
    const layout = () => {
      MS = markSize * dpr;
      s = MS / 100;
      ox = Wd / 2 - MS / 2;
      oy = Hd / 2 - MS / 2;
    };

    // pointer state (device px). target = raw pointer; cur = smoothed (trailing).
    let tmx = 0;
    let tmy = 0;
    let cmx = 0;
    let cmy = 0;
    let primed = false;
    let over = false;
    let mAmt = 0; // smoothed cursor influence 0..1 (how close the cursor is to the mark)
    let hAmt = 0;   // smoothed hover-highlight influence 0..1
    let hRegion = 0; // which of 3 regions is lit (latched while active)
    const onMove = (e: PointerEvent) => {
      const r = canvas.getBoundingClientRect();
      tmx = (e.clientX - r.left) * dpr;
      tmy = (e.clientY - r.top) * dpr;
      if (!primed) {
        cmx = tmx;
        cmy = tmy;
        primed = true;
      }
      over = true;
    };
    const onLeave = () => {
      over = false;
    };
    if (!reduce) {
      wrap.addEventListener("pointermove", onMove);
      wrap.addEventListener("pointerleave", onLeave);
    }

    // draw the light onto the offscreen buffer — flat colour, no shadow, additive.
    const renderFx = (e: number, head: number) => {
      fctx.setTransform(1, 0, 0, 1, 0, 0);
      fctx.clearRect(0, 0, Wd, Hd);
      fctx.globalCompositeOperation = "lighter";
      fctx.lineCap = "round";
      fctx.lineJoin = "round";

      // faint constant rim so the whole shape always reads
      fctx.beginPath();
      const p0 = SAMPLES[0];
      fctx.moveTo(ox + p0.x * s, oy + p0.y * s);
      for (let i = 1; i < SAMPLES.length; i++) {
        fctx.lineTo(ox + SAMPLES[i].x * s, oy + SAMPLES[i].y * s);
      }
      fctx.closePath();
      fctx.strokeStyle = `rgba(255,255,255,${0.09 * e})`;
      fctx.lineWidth = Math.max(1, MS * 0.005);
      fctx.stroke();

      const coreW = Math.max(1.2, MS * 0.01);
      const R = CURSOR_R * s;
      const streakAmt = 1 - Math.max(mAmt, hAmt); // streak fades on cursor OR hover
      const cursorOn = mAmt > 0.001;
      const hoverOn = hAmt > 0.001;
      const regionC = (hRegion + 0.5) / 3; // center of the lit arc (0..1 of perimeter)

      for (let i = 0; i < SAMP_N; i++) {
        const a0 = SAMPLES[i];
        const a1 = SAMPLES[i + 1];
        const x0 = ox + a0.x * s;
        const y0 = oy + a0.y * s;

        // travelling streak (fades while the cursor is engaged)
        let streak = 1 - ((((head - a0.d) % PERIM_O) + PERIM_O) % PERIM_O) / (PERIM_O * TRAIL);
        streak = streak > 0.01 ? streak * streak * streakAmt : 0;

        // cursor pool: the outline nearest the (smoothed) pointer glows + spills toward it
        let pool = 0;
        if (cursorOn) {
          const dx = x0 - cmx;
          const dy = y0 - cmy;
          const q = (dx * dx + dy * dy) / (R * R);
          if (q < 9) pool = Math.exp(-q) * mAmt;
        }

        // region glow: hovering a hero line lights one arc of the outline
        let region = 0;
        if (hoverOn) {
          const pn = a0.d / PERIM_O;
          let dd = Math.abs(pn - regionC);
          dd = Math.min(dd, 1 - dd); // wrap around the loop
          const SIG = 0.12;
          region = Math.exp(-(dd * dd) / (SIG * SIG)) * hAmt;
        }

        const bright = streak + pool + region;
        if (bright < 0.02) continue;
        const x1 = ox + a1.x * s;
        const y1 = oy + a1.y * s;
        fctx.strokeStyle = `rgba(255,255,255,${Math.min(1, bright * e)})`;
        fctx.lineWidth = coreW + (pool + region) * coreW * 1.8;
        fctx.beginPath();
        fctx.moveTo(x0, y0);
        fctx.lineTo(x1, y1);
        fctx.stroke();
      }
    };

    // Vercel-matched halo: a wide soft outer glow down to a crisp core edge.
    const compositeFx = () => {
      ctx.globalCompositeOperation = "lighter";
      ctx.filter = `blur(${MS * 0.2}px)`; // big soft halo (the outward spill)
      ctx.globalAlpha = 0.26;
      ctx.drawImage(fx, 0, 0);
      ctx.filter = `blur(${MS * 0.08}px)`;
      ctx.globalAlpha = 0.42;
      ctx.drawImage(fx, 0, 0);
      ctx.filter = `blur(${MS * 0.025}px)`;
      ctx.globalAlpha = 0.62;
      ctx.drawImage(fx, 0, 0);
      ctx.filter = "none";
      ctx.globalAlpha = 1;
      ctx.drawImage(fx, 0, 0); // crisp edge
      ctx.globalAlpha = 1;
    };

    const applyGrain = () => {
      if (!grainPattern) return;
      ctx.globalCompositeOperation = "source-atop";
      ctx.globalAlpha = 0.35;
      ctx.fillStyle = grainPattern;
      ctx.fillRect(0, 0, Wd, Hd);
      ctx.globalAlpha = 1;
    };

    // nearest distance² (device px) from the smoothed cursor to the outline
    const nearestDist2 = () => {
      let md = Infinity;
      for (let i = 0; i < SAMPLES.length; i += 2) {
        const dx = ox + SAMPLES[i].x * s - cmx;
        const dy = oy + SAMPLES[i].y * s - cmy;
        const d = dx * dx + dy * dy;
        if (d < md) md = d;
      }
      return md;
    };

    const frame = (now: number) => {
      if (!start) start = now;
      layout();

      // smooth the cursor toward the raw pointer for a trailing follow
      cmx += (tmx - cmx) * 0.2;
      cmy += (tmy - cmy) * 0.2;
      const R = CURSOR_R * s;
      const target = over && primed ? Math.exp(-nearestDist2() / (R * R)) : 0;
      mAmt += (target - mAmt) * 0.12; // ease influence in/out

      // hover-highlight: a hero line lights one of 3 outline regions (and stops the streak)
      const hl = highlightRef.current;
      if (hl != null) hRegion = hl;
      hAmt += ((hl != null ? 1 : 0) - hAmt) * 0.12;

      const t = Math.min(1, (now - start) / 1300);
      const e = 1 - Math.pow(1 - t, 3); // easeOutCubic bloom-in

      ctx.globalCompositeOperation = "source-over";
      ctx.clearRect(0, 0, Wd, Hd);

      if (e > 0.002) {
        const head = ((now % SWEEP_MS) / SWEEP_MS) * PERIM_O;
        renderFx(e, head);
        compositeFx();
        applyGrain();
      }

      ctx.globalCompositeOperation = "source-over";
      raf = requestAnimationFrame(frame);
    };

    if (reduce) {
      layout();
      ctx.clearRect(0, 0, Wd, Hd);
      renderFx(1, PERIM_O * 0.12);
      compositeFx();
      applyGrain();
      ctx.globalCompositeOperation = "source-over";
    } else {
      raf = requestAnimationFrame(frame);
    }

    return () => {
      cancelAnimationFrame(raf);
      ro?.disconnect();
      window.removeEventListener("resize", resize);
      wrap.removeEventListener("pointermove", onMove);
      wrap.removeEventListener("pointerleave", onLeave);
    };
  }, [markSize]);

  return (
    <div ref={wrapRef} className={className} aria-hidden="true">
      <canvas
        ref={canvasRef}
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", display: "block" }}
      />
    </div>
  );
}
