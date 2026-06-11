import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import AetherLogo from "./AetherLogo";
import AetherMark from "./AetherMark";
import type { OraMessage } from "../../lib/useOra";

// Types a message out character by character on first appearance, then holds the
// full text. Each message has a stable key, so the instance persists across
// re-renders and only types once.
function TypedText({ text, speed = 14, onTick }: { text: string; speed?: number; onTick?: () => void }) {
  const [n, setN] = useState(0);
  const done = useRef(false);
  useEffect(() => {
    if (done.current) {
      setN(text.length);
      return;
    }
    if (n >= text.length) {
      done.current = true;
      return;
    }
    const t = window.setTimeout(() => {
      setN((v) => v + 1);
      onTick?.();
    }, speed);
    return () => window.clearTimeout(t);
  }, [n, text.length, speed, onTick]);

  const revealed = text.slice(0, n);
  const typing = n < text.length;
  return (
    <>
      {revealed}
      {typing && (
        <span
          aria-hidden="true"
          className="inline-block w-[2px] h-[0.95em] ml-[2px] align-[-0.1em] bg-white/60"
          style={{ animation: "oraCaret 1s steps(1) infinite" }}
        />
      )}
    </>
  );
}

// Renders an Ora conversation. `avatar` controls Ora's mark: the brand asterisk
// everywhere (default), or the pixel creature on the dedicated /chat page.
// `typeLast` types out the final Ora message (used on the full chat page).
export default function OraThread({
  messages,
  thinking,
  avatar = "logo",
  typeLast = false,
  onTick,
}: {
  messages: OraMessage[];
  thinking: boolean;
  avatar?: "logo" | "creature";
  typeLast?: boolean;
  onTick?: () => void;
}) {
  const Mark = ({ spinning }: { spinning: boolean }) =>
    avatar === "creature" ? (
      <AetherMark size={20} state={spinning ? "thinking" : "idle"} className="text-white/85 mt-0.5" />
    ) : (
      <AetherLogo size={18} state={spinning ? "thinking" : "static"} className="text-white/85 mt-0.5" />
    );

  const lastId = messages[messages.length - 1]?.id;

  return (
    <div className="space-y-4">
      <AnimatePresence initial={false}>
        {messages.map((m) => {
          const animate = typeLast && m.role === "ora" && m.id === lastId;
          return (
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
                {m.role === "ora" ? (
                  animate ? (
                    <TypedText text={m.text} onTick={onTick} />
                  ) : (
                    m.text
                  )
                ) : (
                  m.text
                )}
              </div>
            </motion.div>
          );
        })}
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
