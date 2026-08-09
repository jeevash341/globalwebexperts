import { useEffect, useState } from "react";

export function Typewriter({
  words,
  className = "",
  typeSpeed = 68,
  deleteSpeed = 34,
  hold = 1700,
}: {
  words: string[];
  className?: string;
  typeSpeed?: number;
  deleteSpeed?: number;
  hold?: number;
}) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  useEffect(() => {
    if (reduced) {
      setText(words[0] ?? "");
      return;
    }
    const word = words[index % words.length] ?? "";
    if (!deleting && text === word) {
      const t = setTimeout(() => setDeleting(true), hold);
      return () => clearTimeout(t);
    }
    if (deleting && text === "") {
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
      return;
    }
    const t = setTimeout(
      () => setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1)),
      deleting ? deleteSpeed : typeSpeed,
    );
    return () => clearTimeout(t);
  }, [text, deleting, index, words, typeSpeed, deleteSpeed, hold, reduced]);

  return (
    <span className={className}>
      <span aria-live="polite">{text}</span>
      <span
        aria-hidden="true"
        className="ml-0.5 inline-block h-[0.95em] w-[2px] translate-y-[0.12em] bg-accent"
        style={{ animation: "gwe-caret 1s step-end infinite" }}
      />
    </span>
  );
}