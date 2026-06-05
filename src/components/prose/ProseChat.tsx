import { useEffect, useRef, useState, useCallback } from "react";
import { motion } from "motion/react";
import { ArrowUp, X } from "lucide-react";
import { getProseContent } from "../../data/proseContent";

type Role = "user" | "assistant";
interface Turn {
  role: Role;
  content: string;
  animate?: boolean;
}

interface ProseChatProps {
  page?: string;
  seed?: string;
  autoSend?: boolean;
  onClose?: () => void;
  variant?: "panel" | "page";
}

/* ── Typewriter (reveals assistant text in small chunks) ── */
function Typewriter({ text, onTick }: { text: string; onTick?: () => void }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    setN(0);
    let i = 0;
    const id = setInterval(() => {
      i += 3;
      setN(i);
      onTick?.();
      if (i >= text.length) clearInterval(id);
    }, 16);
    return () => clearInterval(id);
  }, [text, onTick]);
  return <>{text.slice(0, n)}</>;
}

function ThinkingDots() {
  return (
    <span className="inline-flex gap-1 items-center py-1">
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="w-1.5 h-1.5 rounded-full bg-white/40"
          animate={{ opacity: [0.25, 1, 0.25], y: [0, -2, 0] }}
          transition={{ duration: 1, repeat: Infinity, delay: i * 0.15 }}
        />
      ))}
    </span>
  );
}

export default function ProseChat({
  page = "/",
  seed,
  autoSend = false,
  onClose,
  variant = "panel",
}: ProseChatProps) {
  const content = getProseContent(page);
  const [turns, setTurns] = useState<Turn[]>([]);
  const [input, setInput] = useState(seed ?? "");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const taRef = useRef<HTMLTextAreaElement>(null);
  const seededRef = useRef(false);

  const scrollToBottom = useCallback(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [turns, loading, scrollToBottom]);

  const send = useCallback(
    async (text: string) => {
      const message = text.trim();
      if (!message || loading) return;
      setInput("");
      const history: Turn[] = [...turns, { role: "user", content: message }];
      setTurns(history);
      setLoading(true);
      try {
        const res = await fetch("/api/prose", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({
            page,
            messages: history.map((t) => ({ role: t.role, content: t.content })),
          }),
        });
        const data = await res.json().catch(() => ({}));
        const reply =
          (data && typeof data.reply === "string" && data.reply) ||
          "I am having trouble reaching the system right now. You can reach Hamza directly at hamza@svnrglobal.com.";
        setTurns([...history, { role: "assistant", content: reply, animate: true }]);
      } catch {
        setTurns([
          ...history,
          {
            role: "assistant",
            content:
              "I am having trouble reaching the system right now. You can reach Hamza directly at hamza@svnrglobal.com.",
            animate: true,
          },
        ]);
      } finally {
        setLoading(false);
      }
    },
    [turns, loading, page]
  );

  // Auto-send the seed question once, if requested.
  useEffect(() => {
    if (autoSend && seed && !seededRef.current) {
      seededRef.current = true;
      void send(seed);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      void send(input);
    }
  };

  const isPage = variant === "page";
  const showStarters = turns.length === 0 && !loading;

  return (
    <div
      className="flex flex-col h-full min-h-0"
      style={{ fontFamily: "inherit" }}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-white/8 shrink-0">
        <div className="flex items-center gap-3">
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center text-[11px] font-semibold text-black"
            style={{
              background:
                "linear-gradient(135deg, #ffffff 0%, #c9c9d1 100%)",
              boxShadow: "0 0 0 1px rgba(255,255,255,0.12)",
            }}
          >
            P
          </div>
          <div className="leading-tight">
            <p className="text-white text-sm font-medium">PROSE</p>
            <p className="text-white/35 text-[10px]">SVNR website assistant</p>
          </div>
        </div>
        {onClose && (
          <button
            onClick={onClose}
            aria-label="Close"
            className="text-white/40 hover:text-white transition-colors"
          >
            <X size={18} />
          </button>
        )}
      </div>

      {/* Messages */}
      <div
        ref={scrollRef}
        className="flex-1 min-h-0 overflow-y-auto px-5 py-5 space-y-4 prose-scroll"
      >
        {/* Greeting (display only, not sent to the model) */}
        <div className="flex">
          <div className="max-w-[88%] rounded-2xl rounded-tl-sm bg-white/[0.06] border border-white/8 px-4 py-3">
            <p className="text-white/80 text-[13.5px] leading-relaxed">
              {content.greeting}
            </p>
          </div>
        </div>

        {turns.map((t, i) =>
          t.role === "user" ? (
            <div key={i} className="flex justify-end">
              <div className="max-w-[88%] rounded-2xl rounded-tr-sm bg-white text-black px-4 py-3">
                <p className="text-[13.5px] leading-relaxed whitespace-pre-wrap">
                  {t.content}
                </p>
              </div>
            </div>
          ) : (
            <div key={i} className="flex">
              <div className="max-w-[88%] rounded-2xl rounded-tl-sm bg-white/[0.06] border border-white/8 px-4 py-3">
                <p className="text-white/80 text-[13.5px] leading-relaxed whitespace-pre-wrap">
                  {t.animate && i === turns.length - 1 ? (
                    <Typewriter text={t.content} onTick={scrollToBottom} />
                  ) : (
                    t.content
                  )}
                </p>
              </div>
            </div>
          )
        )}

        {loading && (
          <div className="flex">
            <div className="rounded-2xl rounded-tl-sm bg-white/[0.06] border border-white/8 px-4 py-3">
              <ThinkingDots />
            </div>
          </div>
        )}

        {/* Suggested starters */}
        {showStarters && (
          <div className={`flex flex-wrap gap-2 ${isPage ? "pt-2" : "pt-1"}`}>
            {content.prompts.map((p) => (
              <button
                key={p}
                onClick={() => void send(p)}
                className="text-left text-[12.5px] text-white/65 hover:text-white px-3.5 py-2 rounded-full border border-white/12 hover:border-white/30 bg-white/[0.03] hover:bg-white/[0.06] transition-all"
              >
                {p}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Input */}
      <div className="px-4 pb-4 pt-2 shrink-0">
        <div className="flex items-end gap-2 rounded-2xl border border-white/12 bg-white/[0.04] focus-within:border-white/30 transition-colors px-3 py-2">
          <textarea
            ref={taRef}
            rows={1}
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
              const el = e.target;
              el.style.height = "auto";
              el.style.height = Math.min(el.scrollHeight, 120) + "px";
            }}
            onKeyDown={onKeyDown}
            placeholder="Ask PROSE anything about SVNR..."
            className="flex-1 resize-none bg-transparent text-white text-[13.5px] placeholder:text-white/30 focus:outline-none py-1.5 max-h-[120px]"
          />
          <button
            onClick={() => void send(input)}
            disabled={!input.trim() || loading}
            aria-label="Send"
            className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center bg-white text-black disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/90 transition-all"
          >
            <ArrowUp size={16} />
          </button>
        </div>
        <p className="text-[10px] text-white/25 text-center mt-2">
          PROSE can explain SVNR, your sector fit, and pricing. For specifics, it routes you to Hamza.
        </p>
      </div>
    </div>
  );
}
