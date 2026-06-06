import { useEffect, useRef } from "react";

export type HeroKind =
  | "bloom"
  | "rays"
  | "grid"
  | "waves"
  | "network"
  | "rings"
  | "stack"
  | "orbit";

function hexRgb(hex: string): [number, number, number] {
  let h = hex.replace("#", "");
  if (h.length === 3) h = h.split("").map((c) => c + c).join("");
  const n = parseInt(h, 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

// One canvas, many "art kinds". Each post maps to a (kind, color) so every
// hero looks distinct. Cheap, GPU-free, respects prefers-reduced-motion.
export default function BlogHeroArt({
  kind,
  color,
  className = "",
}: {
  kind: HeroKind;
  color: string;
  className?: string;
}) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const [r, g, b] = hexRgb(color);
    const C = (a: number) => `rgba(${r},${g},${b},${a})`;

    let W = 0, H = 0, dpr = 1, raf = 0;
    const start = performance.now();
    let nodes: Node[] = [];

    const seedNodes = () => {
      const n = Math.max(10, Math.min(28, Math.round((W * H) / 26000)));
      nodes = Array.from({ length: n }, () => ({
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
      }));
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      if (!rect.width || !rect.height) return;
      dpr = Math.min(2, window.devicePixelRatio || 1);
      W = rect.width;
      H = rect.height;
      canvas.width = Math.round(W * dpr);
      canvas.height = Math.round(H * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (kind === "network") seedNodes();
    };

    // ── draws ──────────────────────────────────────────────────────
    const bloom = (t: number) => {
      const STEP = 18, cell = 13;
      const cols = Math.ceil(W / STEP) + 1, rows = Math.ceil(H / STEP) + 1;
      const cx = (cols - 1) / 2, cy = (rows - 1) / 2;
      const tt = (t % 4.6) / 4.6;
      const grow = tt < 0.62 ? tt / 0.62 : 1 - (tt - 0.62) / 0.38;
      const eased = grow * grow * (3 - 2 * grow);
      const maxR = (Math.hypot(cols, rows) / 2) * 0.95;
      for (let gy = 0; gy < rows; gy++)
        for (let gx = 0; gx < cols; gx++) {
          const dx = gx - cx, dy = gy - cy, rr = Math.hypot(dx, dy);
          const ang = Math.atan2(dy, dx);
          const petal = 0.6 + 0.4 * Math.cos(6 * ang + tt * 2);
          const edge = eased * maxR * petal - rr;
          if (edge <= -1.1) continue;
          let a = edge < 0 ? 1 + edge / 1.1 : Math.max(0.1, 1 - edge / (maxR * 0.7));
          a *= 0.7 + 0.3 * Math.sin(gx * 1.3 + gy * 0.7 + t * 3.5);
          if (a < 0.04) continue;
          ctx.fillStyle = C(Math.min(1, a));
          ctx.fillRect(gx * STEP - 6, gy * STEP - 6, cell, cell);
        }
    };

    const rays = (t: number) => {
      const cx = W / 2, cy = H / 2;
      const N = 18, R = Math.hypot(W, H) / 2;
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(t * 0.12);
      for (let i = 0; i < N; i++) {
        const ang = (i / N) * Math.PI * 2;
        const len = R * (0.5 + 0.5 * Math.abs(Math.sin(i * 1.7 + t * 0.6)));
        const w = i % 2 === 0 ? 3 : 1.4;
        ctx.save();
        ctx.rotate(ang);
        const grad = ctx.createLinearGradient(0, 0, len, 0);
        grad.addColorStop(0, C(0.0));
        grad.addColorStop(0.15, C(0.5));
        grad.addColorStop(1, C(0.0));
        ctx.fillStyle = grad;
        ctx.fillRect(0, -w / 2, len, w);
        ctx.restore();
      }
      ctx.restore();
    };

    const grid = (t: number) => {
      const STEP = 22, cx = W / 2, cy = H / 2;
      for (let y = STEP / 2; y < H; y += STEP)
        for (let x = STEP / 2; x < W; x += STEP) {
          const d = Math.hypot(x - cx, y - cy);
          const a = 0.08 + 0.42 * (0.5 + 0.5 * Math.sin(d * 0.03 - t * 1.6));
          const s = 2 + 2 * (0.5 + 0.5 * Math.sin(d * 0.03 - t * 1.6));
          ctx.fillStyle = C(a);
          ctx.beginPath();
          ctx.arc(x, y, s, 0, Math.PI * 2);
          ctx.fill();
        }
    };

    const waves = (t: number) => {
      const lines = 6;
      for (let l = 0; l < lines; l++) {
        const baseY = (H * (l + 0.5)) / lines;
        const amp = 12 + l * 6;
        ctx.beginPath();
        for (let x = 0; x <= W; x += 8) {
          const y = baseY + Math.sin(x * 0.012 + t * 0.9 + l * 0.8) * amp + Math.sin(x * 0.03 - t) * 4;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.strokeStyle = C(0.12 + (l / lines) * 0.4);
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }
    };

    const network = (t: number) => {
      void t;
      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > W) n.vx *= -1;
        if (n.y < 0 || n.y > H) n.vy *= -1;
      }
      for (let i = 0; i < nodes.length; i++)
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i], c = nodes[j];
          const d = Math.hypot(a.x - c.x, a.y - c.y);
          if (d < 150) {
            ctx.strokeStyle = C(0.18 * (1 - d / 150));
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(c.x, c.y);
            ctx.stroke();
          }
        }
      for (const n of nodes) {
        ctx.fillStyle = C(0.7);
        ctx.beginPath();
        ctx.arc(n.x, n.y, 2.2, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const rings = (t: number) => {
      const cx = W / 2, cy = H / 2, maxR = Math.hypot(W, H) / 2;
      const count = 6;
      for (let i = 0; i < count; i++) {
        const phase = (t * 0.18 + i / count) % 1;
        const rr = phase * maxR;
        ctx.strokeStyle = C(0.5 * (1 - phase));
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.arc(cx, cy, rr, 0, Math.PI * 2);
        ctx.stroke();
      }
    };

    const stack = (t: number) => {
      const bars = Math.max(10, Math.round(W / 26));
      const bw = W / bars;
      for (let i = 0; i < bars; i++) {
        const h = (0.2 + 0.8 * (0.5 + 0.5 * Math.sin(i * 0.5 + t * 1.4))) * H * 0.7;
        const grad = ctx.createLinearGradient(0, H, 0, H - h);
        grad.addColorStop(0, C(0.05));
        grad.addColorStop(1, C(0.45));
        ctx.fillStyle = grad;
        ctx.fillRect(i * bw + bw * 0.18, H - h, bw * 0.64, h);
      }
    };

    const orbit = (t: number) => {
      const cx = W / 2, cy = H / 2;
      const count = 40;
      for (let i = 0; i < count; i++) {
        const ringR = 30 + (i % 5) * 42;
        const speed = 0.3 + (i % 5) * 0.06;
        const ang = (i / count) * Math.PI * 2 + t * speed * (i % 2 ? 1 : -1);
        const x = cx + Math.cos(ang) * ringR * 1.6;
        const y = cy + Math.sin(ang) * ringR * 0.8;
        ctx.fillStyle = C(0.18 + 0.5 * (0.5 + 0.5 * Math.sin(ang)));
        ctx.beginPath();
        ctx.arc(x, y, 2, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const renderFrame = (now: number) => {
      const t = (now - start) / 1000;
      ctx.clearRect(0, 0, W, H);
      switch (kind) {
        case "bloom": bloom(t); break;
        case "rays": rays(t); break;
        case "grid": grid(t); break;
        case "waves": waves(t); break;
        case "network": network(t); break;
        case "rings": rings(t); break;
        case "stack": stack(t); break;
        case "orbit": orbit(t); break;
      }
    };

    const loop = (now: number) => {
      renderFrame(now);
      raf = requestAnimationFrame(loop);
    };

    resize();
    const ro = new ResizeObserver(() => {
      resize();
      if (reduce) renderFrame(start + 1400);
    });
    ro.observe(canvas);

    if (reduce) renderFrame(start + 1400);
    else raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, [kind, color]);

  return (
    <canvas
      ref={ref}
      className={className}
      style={{ display: "block", width: "100%", height: "100%" }}
      aria-hidden="true"
    />
  );
}
