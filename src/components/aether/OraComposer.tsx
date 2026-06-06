import { useMemo, useState, useEffect, type KeyboardEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUp } from "lucide-react";
import { searchOra, oraFeatured, type QA } from "../../data/oraQA";
import AetherLogo from "./AetherLogo";

// Emphasises the part of a suggestion that matches what the user has typed.
function Highlight({ text, q }: { text: string; q: string }) {
  const query = q.trim();
  if (!query) return <>{text}</>;
  const i = text.toLowerCase().indexOf(query.toLowerCase());
  if (i < 0) return <>{text}</>;
  return (
    <>
      {text.slice(0, i)}
      <span className="text-white">{text.slice(i, i + query.length)}</span>
      {text.slice(i + query.length)}
    </>
  );
}

// The Ora input with a command-palette autocomplete: as the user types, a dark
// rounded panel of suggested conversations filters above the field.
export default function OraComposer({
  onSubmit,
  disabled = false,
  placeholder = "Ask Ora about SVNR",
  autoFocus = false,
}: {
  onSubmit: (text: string) => void;
  disabled?: boolean;
  placeholder?: string;
  autoFocus?: boolean;
}) {
  const [value, setValue] = useState("");
  const [focused, setFocused] = useState(false);
  const [active, setActive] = useState(0);

  const suggestions = useMemo<QA[]>(() => {
    const v = value.trim();
    return v ? searchOra(v, 6) : oraFeatured(6);
  }, [value]);

  useEffect(() => setActive(0), [value]);

  const open = focused && !disabled && suggestions.length > 0;

  const submit = (text: string) => {
    const t = text.trim();
    if (!t || disabled) return;
    onSubmit(t);
    setValue("");
  };

  const onKey = (e: KeyboardEvent<HTMLInputElement>) => {
    if (open) {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setActive((a) => (a + 1) % suggestions.length);
        return;
      }
      if (e.key === "ArrowUp") {
        e.preventDefault();
        setActive((a) => (a - 1 + suggestions.length) % suggestions.length);
        return;
      }
      if (e.key === "Escape") {
        setFocused(false);
        return;
      }
      if (e.key === "Enter") {
        e.preventDefault();
        const pick = suggestions[active];
        submit(pick ? pick.q : value);
        return;
      }
    } else if (e.key === "Enter") {
      e.preventDefault();
      submit(value);
    }
  };

  return (
    <div className="relative">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.98 }}
            transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="absolute bottom-full mb-2 left-0 right-0 z-20 rounded-2xl overflow-hidden p-1.5"
            style={{
              background: "rgba(16,16,19,0.96)",
              backdropFilter: "blur(28px)",
              WebkitBackdropFilter: "blur(28px)",
              border: "1px solid rgba(255,255,255,0.10)",
              boxShadow: "0 24px 70px rgba(0,0,0,0.6)",
            }}
          >
            <p className="px-3 pt-1.5 pb-1 text-[9px] uppercase tracking-[0.25em] text-white/25">
              {value.trim() ? "Suggested" : "Ask Ora about"}
            </p>
            <div className="max-h-[260px] overflow-y-auto">
              {suggestions.map((s, i) => (
                <button
                  key={s.id}
                  onMouseDown={(e) => e.preventDefault()}
                  onMouseEnter={() => setActive(i)}
                  onClick={() => submit(s.q)}
                  className="w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-left transition-colors"
                  style={{ background: i === active ? "rgba(255,255,255,0.07)" : "transparent" }}
                >
                  <AetherLogo size={14} state="static" className="text-white/45 shrink-0" />
                  <span className="flex-1 text-[13px] text-white/55 truncate">
                    <Highlight text={s.q} q={value} />
                  </span>
                  <span className="text-[8.5px] uppercase tracking-[0.18em] text-white/25 shrink-0">
                    {s.category}
                  </span>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div
        className="flex items-center gap-2 rounded-2xl pl-4 pr-2 py-2"
        style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.12)" }}
      >
        <input
          value={value}
          autoFocus={autoFocus}
          disabled={disabled}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={onKey}
          onFocus={() => setFocused(true)}
          onBlur={() => window.setTimeout(() => setFocused(false), 120)}
          placeholder={disabled ? "Ora limit reached — refills soon" : placeholder}
          className="flex-1 bg-transparent outline-none text-[14px] text-white placeholder:text-white/30 disabled:opacity-50"
        />
        <button
          onClick={() => submit(value)}
          disabled={disabled || !value.trim()}
          aria-label="Send"
          className="shrink-0 w-8 h-8 rounded-xl flex items-center justify-center transition-all disabled:opacity-30"
          style={{ background: value.trim() && !disabled ? "#fff" : "rgba(255,255,255,0.1)" }}
        >
          <ArrowUp size={16} className={value.trim() && !disabled ? "text-black" : "text-white/50"} />
        </button>
      </div>
    </div>
  );
}
