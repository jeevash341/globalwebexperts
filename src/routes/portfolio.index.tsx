import { Link, createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Reveal } from "@/components/ui-kit/reveal";
import { Section } from "@/components/ui-kit/section";
import { portfolioFilters, projects } from "@/data/portfolio";
import { launchedSites } from "@/data/websites";
import { seoResults } from "@/data/seo-results";
import { aiVideos, logoDesigns, posterDesigns } from "@/data/showcase";
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
  const show = (category: string) => filter === "All" || filter === category;

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
                    decoding="async"
                    className="w-full border-b border-border bg-surface-2 object-contain"
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

      {show("Web Development") ? (
        <Section className="border-t border-border bg-surface-2">
          <p className="eyebrow">Web Development</p>
          <h2 className="mt-3 font-display text-3xl font-extrabold">
            Websites built, launched and handed over
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Live client projects delivered by Global Web Experts. Each preview is taken from the
            project as it runs today.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {launchedSites.map((s) => (
              <article
                key={s.site}
                className="flex flex-col overflow-hidden rounded-sm border border-border bg-surface"
              >
                <div className="border-b border-border bg-surface-2">
                  <img
                    src={s.image}
                    alt={s.alt}
                    loading="lazy"
                    decoding="async"
                    className="w-full object-contain"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-accent">
                    {s.industry}
                  </p>
                  <h3 className="mt-3 font-display text-lg font-bold">
                    <a href={s.url} target="_blank" rel="noopener noreferrer">
                      {s.site}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm font-medium text-muted-foreground">{s.scope}</p>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {s.note}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Section>
      ) : null}

      {show("SEO & Digital Growth") ? (
        <Section className="border-t border-border">
          <p className="eyebrow">SEO &amp; Digital Growth</p>
          <h2 className="mt-3 font-display text-3xl font-extrabold">
            Search performance, measured in Google&apos;s own reporting
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Each figure below is read directly from the client&apos;s Google Search Console or Rank
            Math dashboard.
          </p>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {seoResults.map((r) => (
              <article
                key={r.site}
                className="flex flex-col rounded-sm border border-border bg-surface p-6"
              >
                <p className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-accent">
                  {r.industry}
                </p>
                <h3 className="mt-3 font-display text-xl font-bold">
                  <a href={r.url} target="_blank" rel="noopener noreferrer">
                    {r.site}
                  </a>
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">{r.scope}</p>
                <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {r.stats.map((s) => (
                    <div key={s.label} className="rounded-sm border border-border bg-surface-2 p-4">
                      <p className="font-display text-2xl font-extrabold">{s.value}</p>
                      <p className="mt-1 text-xs text-muted-foreground">{s.label}</p>
                    </div>
                  ))}
                </div>
                <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{r.narrative}</p>
                <figure className="mt-5 overflow-hidden rounded-sm border border-border">
                  <img
                    src={r.image}
                    alt={r.alt}
                    loading="lazy"
                    decoding="async"
                    className="w-full object-contain"
                  />
                  <figcaption className="border-t border-border p-3 text-xs text-muted-foreground">
                    {r.window} · {r.source}
                  </figcaption>
                </figure>
              </article>
            ))}
          </div>
        </Section>
      ) : null}

      {show("AI Video") ? (
        <Section className="border-t border-border bg-surface-2">
          <p className="eyebrow">AI Video</p>
          <h2 className="mt-3 font-display text-3xl font-extrabold">AI-produced brand videos</h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Campaign videos produced with AI production workflows for client social and paid
            placements.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {aiVideos.map((v) => (
              <article
                key={v.id}
                className="flex flex-col overflow-hidden rounded-sm border border-border bg-surface"
              >
                <video
                  src={v.url}
                  controls
                  preload="metadata"
                  playsInline
                  className="w-full bg-surface-2"
                />
                <div className="p-6">
                  <p className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-accent">
                    {v.meta}
                  </p>
                  <h3 className="mt-3 font-display text-lg font-bold">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.note}</p>
                </div>
              </article>
            ))}
          </div>
        </Section>
      ) : null}

      {show("Branding") ? (
        <Section className="border-t border-border">
          <p className="eyebrow">Branding</p>
          <h2 className="mt-3 font-display text-3xl font-extrabold">Logo design</h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Brand marks designed for client businesses across transport, construction and services.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {logoDesigns.map((l) => (
              <article
                key={l.id}
                className="flex flex-col overflow-hidden rounded-sm border border-border bg-surface"
              >
                <div className="border-b border-border bg-surface-2 p-4">
                  <img
                    src={l.url}
                    alt={l.alt}
                    loading="lazy"
                    decoding="async"
                    className="w-full object-contain"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <p className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-accent">
                    {l.meta}
                  </p>
                  <h3 className="mt-3 font-display text-base font-bold">{l.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{l.note}</p>
                </div>
              </article>
            ))}
          </div>

          <h2 className="mt-16 font-display text-3xl font-extrabold">Poster &amp; campaign design</h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Print and social campaign creative produced for client promotions, service listings and
            storefront branding.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {posterDesigns.map((p) => (
              <article
                key={p.id}
                className="flex flex-col overflow-hidden rounded-sm border border-border bg-surface"
              >
                <div className="border-b border-border bg-surface-2">
                  <img
                    src={p.url}
                    alt={p.alt}
                    loading="lazy"
                    decoding="async"
                    className="w-full object-contain"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-accent">
                    {p.meta}
                  </p>
                  <h3 className="mt-3 font-display text-lg font-bold">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.note}</p>
                </div>
              </article>
            ))}
          </div>
        </Section>
      ) : null}
    </>
  );
}