import { useCallback, useEffect, useRef, useState } from "react";
import { Send, Sparkles, X } from "lucide-react";
import logo from "@/assets/logo-sphere.asset.json";
import { mailtoUrl, telUrl, whatsappUrl } from "@/data/site";

type Msg = { role: "user" | "assistant"; content: string };

const WELCOME =
  "Hi! I'm the Global Web Experts AI Assistant. How can I help you today?";

const QUICK_ACTIONS = [
  { label: "Explore Services", prompt: "What services does Global Web Experts offer?" },
  { label: "Get a Free Quote", prompt: "How can I get a free quote for my project?" },
  { label: "Talk to the Team", prompt: "How do I talk to the Global Web Experts team?" },
];

export function AiAssistant() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([{ role: "assistant", content: WELCOME }]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const scrollRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, loading]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const send = useCallback(
    async (text: string) => {
      const trimmed = text.trim();
      if (!trimmed || loading) return;

      setError(null);
      setInput("");
      const next: Msg[] = [...messages, { role: "user", content: trimmed }];
      setMessages(next);
      setLoading(true);

      try {
        const res = await fetch("/api/assistant", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ messages: next.filter((m, i) => !(i === 0 && m.content === WELCOME)) }),
        });

        if (!res.ok || !res.body) {
          throw new Error(String(res.status));
        }

        const reader = res.body.getReader();
        const decoder = new TextDecoder();
        let acc = "";
        setMessages([...next, { role: "assistant", content: "" }]);

        while (true) {
          const { value, done } = await reader.read();
          if (done) break;
          acc += decoder.decode(value, { stream: true });
          setMessages([...next, { role: "assistant", content: acc }]);
        }

        if (!acc.trim()) throw new Error("empty");
      } catch {
        setMessages(next);
        setError(
          "The assistant is temporarily unavailable. Please try again, or reach us on WhatsApp at 0334-3215006.",
        );
      } finally {
        setLoading(false);
        inputRef.current?.focus();
      }
    },
    [loading, messages],
  );

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-haspopup="dialog"
        aria-label={open ? "Close Global Web Experts AI Assistant" : "Open Global Web Experts AI Assistant"}
        className="fixed bottom-4 left-4 z-40 inline-flex items-center gap-2 rounded-md border border-border bg-surface px-3 py-2 text-xs font-semibold text-foreground shadow-lg backdrop-blur transition-colors hover:border-accent/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:bottom-6 sm:left-6"
      >
        <span className="grid h-6 w-6 place-items-center overflow-hidden rounded-sm">
          <img src={logo.url} alt="" aria-hidden="true" className="h-full w-full object-contain" />
        </span>
        <span className="hidden sm:inline">AI Assistant</span>
        <Sparkles className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
      </button>

      {open ? (
        <div
          ref={panelRef}
          role="dialog"
          aria-modal="false"
          aria-label="Global Web Experts AI Assistant"
          className="motion-safe:animate-in motion-safe:fade-in motion-safe:zoom-in-95 motion-safe:slide-in-from-bottom-2 fixed bottom-16 left-2 right-2 z-50 flex max-h-[75vh] flex-col overflow-hidden rounded-md border border-border bg-background shadow-2xl duration-200 sm:bottom-20 sm:left-6 sm:right-auto sm:w-[22rem] md:w-[24rem]"
        >
          <div className="flex items-center gap-2 border-b border-border bg-surface px-3 py-2.5">
            <span className="grid h-7 w-7 shrink-0 place-items-center overflow-hidden rounded-sm">
              <img src={logo.url} alt="" aria-hidden="true" className="h-full w-full object-contain" />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block truncate font-display text-sm font-bold">
                Global Web Experts AI Assistant
              </span>
              <span className="block text-[11px] text-muted-foreground">
                Usually replies instantly
              </span>
            </span>
            <button
              type="button"
              onClick={() => {
                setOpen(false);
                triggerRef.current?.focus();
              }}
              aria-label="Close assistant"
              className="grid h-7 w-7 place-items-center rounded-sm border border-transparent text-muted-foreground transition-colors hover:border-border hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>

          <div
            ref={scrollRef}
            className="flex-1 space-y-3 overflow-y-auto px-3 py-3"
            aria-live="polite"
            aria-atomic="false"
          >
            {messages.map((m, i) => (
              <div
                key={i}
                className={
                  m.role === "user"
                    ? "ml-auto max-w-[85%] rounded-md bg-primary px-3 py-2 text-sm text-primary-foreground"
                    : "mr-auto max-w-[90%] rounded-md border border-border bg-surface px-3 py-2 text-sm text-foreground"
                }
              >
                <p className="whitespace-pre-wrap break-words leading-relaxed">
                  {m.content || "…"}
                </p>
              </div>
            ))}

            {loading ? (
              <div className="mr-auto flex items-center gap-1.5 rounded-md border border-border bg-surface px-3 py-2.5">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent [animation-delay:150ms]" />
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent [animation-delay:300ms]" />
                <span className="sr-only">Assistant is typing</span>
              </div>
            ) : null}

            {error ? (
              <p role="alert" className="rounded-md border border-destructive/40 bg-destructive/10 px-3 py-2 text-xs text-foreground">
                {error}
              </p>
            ) : null}
          </div>

          {messages.length <= 1 ? (
            <div className="flex flex-wrap gap-1.5 border-t border-border px-3 py-2">
              {QUICK_ACTIONS.map((q) => (
                <button
                  key={q.label}
                  type="button"
                  disabled={loading}
                  onClick={() => void send(q.prompt)}
                  className="rounded-sm border border-border px-2.5 py-1.5 text-[11px] font-semibold transition-colors hover:border-accent/60 hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent disabled:opacity-50"
                >
                  {q.label}
                </button>
              ))}
            </div>
          ) : null}

          <form
            onSubmit={(e) => {
              e.preventDefault();
              void send(input);
            }}
            className="flex items-center gap-2 border-t border-border bg-surface px-3 py-2.5"
          >
            <label htmlFor="gwe-assistant-input" className="sr-only">
              Message the Global Web Experts AI Assistant
            </label>
            <input
              id="gwe-assistant-input"
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about services, quotes, SEO…"
              autoComplete="off"
              className="min-w-0 flex-1 rounded-sm border border-border bg-background px-2.5 py-2 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              aria-label="Send message"
              className="grid h-9 w-9 shrink-0 place-items-center rounded-sm bg-primary text-primary-foreground transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent disabled:opacity-40"
            >
              <Send className="h-4 w-4" aria-hidden="true" />
            </button>
          </form>

          <div className="flex items-center justify-center gap-3 border-t border-border px-3 py-2 text-[11px] text-muted-foreground">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="font-semibold hover:text-accent">
              WhatsApp
            </a>
            <a href={telUrl} className="font-semibold hover:text-accent">
              Call
            </a>
            <a href={mailtoUrl} className="font-semibold hover:text-accent">
              Email
            </a>
          </div>
        </div>
      ) : null}
    </>
  );
}