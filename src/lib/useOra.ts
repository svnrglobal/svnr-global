import { useCallback, useEffect, useRef, useState } from "react";
import { oraAnswer } from "../data/oraQA";
import { ORA_LIMIT, ORA_WINDOW_MS } from "../data/aetherContent";

export interface OraMessage {
  role: "user" | "ora";
  text: string;
  id: string;
}

const KEY = "ora_usage_v1"; // rolling list of question timestamps (ms)

function uid(): string {
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`;
}

function loadStamps(): number[] {
  try {
    const raw = localStorage.getItem(KEY);
    const arr = raw ? (JSON.parse(raw) as unknown) : [];
    return Array.isArray(arr) ? (arr as number[]) : [];
  } catch {
    return [];
  }
}

function saveStamps(a: number[]): void {
  try {
    localStorage.setItem(KEY, JSON.stringify(a));
  } catch {
    /* ignore */
  }
}

function limitMessage(): string {
  return "You have reached Ora's free limit of 20 questions. It refills over the next five hours. To remove the limit, upgrade to Soleth or Aether, or book a call and the team will help directly.";
}

/**
 * Drives an Ora conversation: curated answers, a brief "thinking" beat so the
 * mark spins, and the 20-questions / 5-hours rolling limit (stored locally).
 */
export function useOra(greeting?: string) {
  const [messages, setMessages] = useState<OraMessage[]>(
    greeting ? [{ role: "ora", text: greeting, id: "greeting" }] : []
  );
  const [thinking, setThinking] = useState(false);
  const [stamps, setStamps] = useState<number[]>([]);
  const timer = useRef<number | null>(null);

  const prune = useCallback((): number[] => {
    const now = Date.now();
    const fresh = loadStamps().filter((t) => now - t < ORA_WINDOW_MS);
    saveStamps(fresh);
    setStamps(fresh);
    return fresh;
  }, []);

  useEffect(() => {
    prune();
  }, [prune]);

  useEffect(() => {
    return () => {
      if (timer.current) window.clearTimeout(timer.current);
    };
  }, []);

  const remaining = Math.max(0, ORA_LIMIT - stamps.length);
  const blocked = remaining <= 0;
  const resetAt = stamps.length ? Math.min(...stamps) + ORA_WINDOW_MS : null;

  const ask = useCallback(
    (raw: string) => {
      const text = raw.trim();
      if (!text || thinking) return;

      const fresh = prune();
      if (fresh.length >= ORA_LIMIT) {
        setMessages((m) => [
          ...m,
          { role: "user", text, id: uid() },
          { role: "ora", text: limitMessage(), id: uid() },
        ]);
        return;
      }

      const next = [...fresh, Date.now()];
      saveStamps(next);
      setStamps(next);

      setMessages((m) => [...m, { role: "user", text, id: uid() }]);
      setThinking(true);

      const { answer } = oraAnswer(text);
      if (timer.current) window.clearTimeout(timer.current);
      timer.current = window.setTimeout(() => {
        setMessages((m) => [...m, { role: "ora", text: answer, id: uid() }]);
        setThinking(false);
      }, 560);
    },
    [thinking, prune]
  );

  return { messages, ask, thinking, remaining, blocked, resetAt, setMessages };
}
