import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo-sphere.asset.json";

export function Logo({
  className = "",
  showWordmark = true,
}: {
  className?: string;
  showWordmark?: boolean;
}) {
  return (
    <Link
      to="/"
      className={`group inline-flex shrink-0 items-center gap-2.5 ${className}`}
      aria-label="Global Web Experts — home"
    >
      <span className="relative block h-9 w-9 shrink-0 overflow-hidden">
        <img
          src={logo.url}
          alt=""
          aria-hidden="true"
          width={512}
          height={512}
          className="h-full w-full object-contain"
        />
      </span>
      {showWordmark ? (
        <span className="min-w-0 leading-none">
          <span className="block font-display text-[0.95rem] font-bold tracking-tight text-foreground">
            Global
          </span>
          <span className="block font-display text-[0.95rem] font-semibold tracking-tight text-accent">
            Web Experts
          </span>
        </span>
      ) : null}
    </Link>
  );
}