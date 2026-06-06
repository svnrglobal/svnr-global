import { motion } from "motion/react";
import { ShoppingBag, Mail, MessageSquare, Phone, BarChart3, Users } from "lucide-react";
import AetherLogo from "./AetherLogo";

const NODES = [
  { label: "Storefront", Icon: ShoppingBag },
  { label: "Outreach", Icon: Mail },
  { label: "Support", Icon: MessageSquare },
  { label: "Voice agents", Icon: Phone },
  { label: "Pipeline", Icon: BarChart3 },
  { label: "Partners", Icon: Users },
];

// Infographic: the flagship Aether model at the centre, building and running the
// agents that operate every online job. Data pulses flow out to each node.
export default function AgentOrbit() {
  const n = NODES.length;
  const pts = NODES.map((_, i) => {
    const ang = ((-90 + (360 / n) * i) * Math.PI) / 180;
    return { x: 50 + Math.cos(ang) * 38, y: 50 + Math.sin(ang) * 38 };
  });

  return (
    <div className="relative w-full max-w-md mx-auto aspect-square">
      <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full" aria-hidden="true">
        {pts.map((p, i) => (
          <line key={i} x1="50" y1="50" x2={p.x} y2={p.y} stroke="rgba(139,125,255,0.22)" strokeWidth="0.4" />
        ))}
        {pts.map((p, i) => (
          <motion.circle
            key={`d${i}`}
            r="0.9"
            fill="#a78bfa"
            initial={{ cx: 50, cy: 50, opacity: 0 }}
            animate={{ cx: [50, p.x], cy: [50, p.y], opacity: [0, 1, 0] }}
            transition={{ duration: 2.2, delay: i * 0.35, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
      </svg>

      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
        <div className="relative">
          <span className="absolute inset-0 rounded-full blur-xl" style={{ background: "rgba(139,125,255,0.35)" }} />
          <AetherLogo size={52} state="pulse" className="relative text-white" />
        </div>
        <span className="mt-2 text-[10px] uppercase tracking-[0.25em] text-white/50">Aether</span>
      </div>

      {NODES.map((node, i) => {
        const p = pts[i];
        return (
          <div
            key={node.label}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${p.x}%`, top: `${p.y}%` }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="flex flex-col items-center gap-1.5"
            >
              <div
                className="w-11 h-11 rounded-2xl flex items-center justify-center"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  backdropFilter: "blur(8px)",
                }}
              >
                <node.Icon size={17} className="text-white/80" />
              </div>
              <span className="text-[10px] text-white/55 whitespace-nowrap">{node.label}</span>
            </motion.div>
          </div>
        );
      })}
    </div>
  );
}
