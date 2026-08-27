import { motion } from "motion/react";
import type { LucideIcon } from "lucide-react";
import { Cpu } from "lucide-react";
import Counter from "./Counter";

// SaaS-style system diagram: inputs feed the engine, the engine produces the
// outcome. Pulse dots travel along the connectors continuously. Horizontal on
// desktop, stacked on mobile.
function Connector({ vertical = false }: { vertical?: boolean }) {
  return (
    <div
      aria-hidden="true"
      className={vertical ? "relative h-10 w-px mx-auto" : "relative w-10 lg:w-16 h-px"}
      style={{ background: "rgba(255,255,255,0.12)" }}
    >
      {[0, 1].map((k) => (
        <motion.span
          key={k}
          className="absolute w-1.5 h-1.5 rounded-full"
          style={{
            background: "#fda4af",
            boxShadow: "0 0 8px rgba(251,113,133,0.8)",
            ...(vertical ? { left: -2.5, top: 0 } : { top: -2.5, left: 0 }),
          }}
          animate={vertical ? { y: [0, 40], opacity: [0, 1, 0] } : { x: [0, 40], opacity: [0, 1, 0] }}
          transition={{ duration: 1.6, delay: k * 0.8, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}

export default function SystemFlow({
  inputs,
  engine,
  engineIcon: EngineIcon = Cpu,
  output,
  gradient,
}: {
  inputs: string[];
  engine: string;
  engineIcon?: LucideIcon;
  output: { value: string; label: string };
  gradient: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="liquid-glass rounded-3xl p-6 sm:p-10"
    >
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0">
        {/* inputs */}
        <div className="flex flex-col gap-2 w-full md:w-auto">
          {inputs.map((label, i) => (
            <motion.span
              key={label}
              initial={{ opacity: 0, x: -14 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.09, duration: 0.5 }}
              className="rounded-full border border-white/10 px-4 py-2 text-[11px] text-white/55 text-center md:text-left whitespace-nowrap overflow-hidden text-ellipsis"
              style={{ background: "rgba(255,255,255,0.03)" }}
            >
              {label}
            </motion.span>
          ))}
        </div>

        <div className="hidden md:block mx-4 lg:mx-6"><Connector /></div>
        <div className="md:hidden"><Connector vertical /></div>

        {/* engine */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, type: "spring", bounce: 0.35, duration: 0.8 }}
          className="relative flex flex-col items-center text-center px-6 py-5 rounded-2xl shrink-0"
          style={{ border: "1px solid rgba(251,113,133,0.35)", background: "rgba(251,113,133,0.06)" }}
        >
          <motion.span
            aria-hidden="true"
            className="absolute inset-0 rounded-2xl blur-xl -z-10"
            style={{ background: "rgba(251,113,133,0.18)" }}
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-2" style={{ background: gradient }}>
            <EngineIcon size={18} className="text-white" />
          </div>
          <span className="text-white text-sm font-medium max-w-[180px]">{engine}</span>
          <span className="text-[9px] uppercase tracking-[0.2em] text-white/35 mt-1">runs continuously</span>
        </motion.div>

        <div className="hidden md:block mx-4 lg:mx-6"><Connector /></div>
        <div className="md:hidden"><Connector vertical /></div>

        {/* outcome */}
        <motion.div
          initial={{ opacity: 0, x: 14 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35, duration: 0.6 }}
          className="text-center md:text-left shrink-0"
        >
          <div
            className="text-4xl md:text-5xl font-medium mb-1 stat-number"
            style={{ background: gradient, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}
          >
            <Counter value={output.value} duration={1.8} />
          </div>
          <p className="text-[10px] uppercase tracking-widest text-white/40 max-w-[180px]">{output.label}</p>
        </motion.div>
      </div>
    </motion.div>
  );
}
