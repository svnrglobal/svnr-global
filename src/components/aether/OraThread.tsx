import { motion, AnimatePresence } from "motion/react";
import AetherLogo from "./AetherLogo";
import AetherMark from "./AetherMark";
import type { OraMessage } from "../../lib/useOra";

// Renders an Ora conversation. `avatar` controls Ora's mark: the brand asterisk
// everywhere (default), or the pixel creature on the dedicated /chat page.
export default function OraThread({
  messages,
  thinking,
  avatar = "logo",
}: {
  messages: OraMessage[];
  thinking: boolean;
  avatar?: "logo" | "creature";
}) {
  const Mark = ({ spinning }: { spinning: boolean }) =>
    avatar === "creature" ? (
      <AetherMark size={20} state={spinning ? "thinking" : "idle"} className="text-white/85 mt-0.5" />
    ) : (
      <AetherLogo size={18} state={spinning ? "thinking" : "static"} className="text-white/85 mt-0.5" />
    );

  return (
    <div className="space-y-4">
      <AnimatePresence initial={false}>
        {messages.map((m) => (
          <motion.div
            key={m.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className={`flex gap-2.5 ${m.role === "user" ? "justify-end" : ""}`}
          >
            {m.role === "ora" && <Mark spinning={false} />}
            <div
              className={
                m.role === "user"
                  ? "max-w-[80%] rounded-2xl rounded-br-md bg-white text-black px-3.5 py-2 text-[13.5px] leading-relaxed"
                  : "max-w-[88%] text-white/85 text-[13.5px] leading-relaxed pt-0.5"
              }
            >
              {m.text}
            </div>
          </motion.div>
        ))}
      </AnimatePresence>

      {thinking && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex gap-2.5 items-center">
          <Mark spinning={true} />
          <span className="text-white/40 text-[12px]">Ora is thinking</span>
        </motion.div>
      )}
    </div>
  );
}
