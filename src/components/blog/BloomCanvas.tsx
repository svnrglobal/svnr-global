import { useEffect, useRef } from "react";

// The dot-matrix "bloom": terracotta pixel-squares assemble from the centre into
// a radial flower, then recede, on a loop. Inspired by Anthropic's article
// heroes. Canvas-based and cheap; respects prefers-reduced-motion.
export default function BloomCanvas({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const CELL = 13;
    const GAP = 5;
    const STEP = CELL + GAP;
    const PERIOD = 4600; // ms per bloom loop

    let W = 0, H = 0, cols = 0, rows = 0, cx = 0, cy = 0, dpr = 1;
    let raf = 0;
    const start = performance.now();

    const resize = () => {
      const r = canvas.getBoundingClientRect();
      if (!r.width || !r.height) return;
      dpr = Math.min(2, window.devicePixelRatio || 1);
      W = r.width;
      H = r.height;
      canvas.width = Math.round(W * dpr);
      canvas.height = Math.round(H * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      cols = Math.ceil(W / STEP) + 1;
      rows = Math.ceil(H / STEP) + 1;
      cx = (cols - 1) / 2;
      cy = (rows - 1) / 2;
    };

    const renderFrame = (now: number) => {
      const t = (((now - start) % PERIOD) / PERIOD); // 0..1
      // grow to ~0.62 of the loop, then recede
      const grow = t < 0.62 ? t / 0.62 : 1 - (t - 0.62) / 0.38;
      const eased = grow * grow * (3 - 2 * grow); // smoothstep
      const maxR = Math.hypot(cols, rows) / 2 * 0.95;

      ctx.clearRect(0, 0, W, H);
      for (let gy = 0; gy < rows; gy++) {
        for (let gx = 0; gx < cols; gx++) {
          const dx = gx - cx;
          const dy = gy - cy;
          const r = Math.hypot(dx, dy);
          const ang = Math.atan2(dy, dx);
          const petal = 0.6 + 0.4 * Math.cos(6 * ang + t * Math.PI * 0.6);
          const reach = eased * maxR * petal;
          const edge = reach - r;
          if (edge <= -1.1) continue;

          let a = edge < 0 ? 1 + edge / 1.1 : Math.max(0.1, 1 - edge / (maxR * 0.7));
          a *= 0.7 + 0.3 * Math.sin(gx * 1.3 + gy * 0.7 + now * 0.0035);
          a = a < 0 ? 0 : a > 1 ? 1 : a;
          if (a < 0.04) continue;

          ctx.fillStyle = `rgba(188,74,48,${a.toFixed(3)})`;
          ctx.fillRect(gx * STEP - GAP, gy * STEP - GAP, CELL, CELL);
        }
      }
    };

    const loop = (now: number) => {
      renderFrame(now);
      raf = requestAnimationFrame(loop);
    };

    resize();
    const ro = new ResizeObserver(() => {
      resize();
      if (reduce) renderFrame(start + PERIOD * 0.55);
    });
    ro.observe(canvas);

    if (reduce) {
      renderFrame(start + PERIOD * 0.55);
    } else {
      raf = requestAnimationFrame(loop);
    }

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={ref}
      className={className}
      style={{ display: "block", width: "100%", height: "100%" }}
      aria-hidden="true"
    />
  );
}
