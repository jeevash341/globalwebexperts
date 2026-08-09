import { Link, createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Reveal } from "@/components/ui-kit/reveal";
import { Section } from "@/components/ui-kit/section";
import { portfolioFilters, projects } from "@/data/portfolio";
import { canonical, pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/portfolio/")({
  head: () => ({
    meta: pageMeta({
      title: "Portfolio & Case Studies | Global Web Experts",
      description:
        "Case studies from Global Web Experts: SafeLink Technologies, Quetta Sudais 2D Car Service and AA Pool Service — with verified platform metrics.",
      path: "/portfolio",
    }),
    links: canonical("/portfolio"),
  }),
  component: PortfolioIndex,
});

function PortfolioIndex() {
  const [filter, setFilter] = useState<string>("All");
  const visible = projects.filter((p) => filter === "All" || p.categories.includes(filter));

  return (
    <>
      <Section className="border-b border-border grid-lines">
        <p className="eyebrow">Portfolio</p>
        <h1 className="mt-4 max-w-3xl text-balance font-display text-4xl font-extrabold leading-[1.05] sm:text-5xl">
          Client work, documented with real numbers
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          Each case study below shows the problem, what we built and the client's own published
          platform statistics. Nothing here is a mock-up.
        </p>
      </Section>

      <Section>
        <div className="flex flex-wrap gap-2">
          {portfolioFilters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              aria-pressed={filter === f}
              className={`rounded-sm border px-3.5 py-2 text-sm font-medium transition-colors ${
                filter === f
                  ? "border-accent bg-accent/10 text-foreground"
                  : "border-border text-muted-foreground hover:text-foreground"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {visible.map((p, i) => (
            <Reveal key={p.slug} delay={i * 70}>
              <Link
                to="/portfolio/$slug"
                params={{ slug: p.slug }}
                className="group flex h-full flex-col overflow-hidden rounded-sm border border-border bg-surface transition-all hover:-translate-y-1 hover:border-accent/60"
              >
                {p.proof[0] ? (
                  <img
                    src={p.proof[0].url}
                    alt={p.proof[0].alt}
                    loading="lazy"
                    className="aspect-[16/10] w-full border-b border-border object-cover object-top"
                  />
                ) : null}
                <div className="flex flex-1 flex-col p-6">
                  <p className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-accent">
                    {p.industry}
                  </p>
                  <h2 className="mt-3 font-display text-xl font-bold leading-snug">{p.name}</h2>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {p.summary}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.metrics.slice(0, 3).map((m) => (
                      <span
                        key={`${m.platform}-${m.label}`}
                        className="rounded-sm border border-border px-2 py-1 text-xs text-muted-foreground"
                      >
                        {m.value} {m.label} · {m.platform}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
        {visible.length === 0 ? (
          <p className="mt-10 text-sm text-muted-foreground">
            No published case studies in this category yet — new work is added as clients approve it.
          </p>
        ) : null}
      </Section>
    </>
  );
}