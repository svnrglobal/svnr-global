import { Link } from "react-router-dom";
import { motion } from "motion/react";
import ProseMark from "../prose/ProseMark";

export const authInput =
  "glass-input w-full rounded-xl px-3.5 py-2.5 text-white text-sm focus:outline-none";

export default function AuthShell({
  title,
  subtitle,
  children,
  footer,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
}) {
  return (
    <main className="relative min-h-screen bg-[#0A0A0B] flex items-center justify-center px-6 py-24 font-sans overflow-hidden selection:bg-white/20">
      {/* ambient aurora behind the glass */}
      <div className="aurora">
        <span className="a1" />
        <span className="a2" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 22, filter: "blur(6px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 w-full max-w-sm"
      >
        <Link to="/" className="flex items-center justify-center gap-2 mb-8 text-white">
          <ProseMark size={22} />
          <span className="font-medium tracking-tight text-[15px]">PROSE</span>
        </Link>

        <div className="glass glass-sheen rounded-3xl p-7">
          <h1 className="text-white text-xl font-medium tracking-tight mb-1">{title}</h1>
          {subtitle && (
            <p className="text-white/45 text-[13px] leading-relaxed mb-6">{subtitle}</p>
          )}
          {children}
        </div>

        {footer && <div className="text-center mt-5 text-white/40 text-sm">{footer}</div>}
      </motion.div>
    </main>
  );
}
