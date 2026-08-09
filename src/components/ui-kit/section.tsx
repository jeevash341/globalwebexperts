import type { ReactNode } from "react";
import { Reveal } from "./reveal";

export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "left",
  className = "",
}: {
  eyebrow?: string;
  title: ReactNode;
  lead?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <Reveal
      className={`${align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"} ${className}`}
    >
      {eyebrow ? <p className="eyebrow mb-3">{eyebrow}</p> : null}
      <h2 className="text-balance text-3xl font-bold leading-[1.1] sm:text-4xl lg:text-[2.75rem]">
        {title}
      </h2>
      {lead ? (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">{lead}</p>
      ) : null}
    </Reveal>
  );
}

export function Section({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`py-16 sm:py-20 lg:py-28 ${className}`}>
      <div className="container-page">{children}</div>
    </section>
  );
}