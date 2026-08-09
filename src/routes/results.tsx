import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHeading } from "@/components/ui-kit/section";
import { projects } from "@/data/portfolio";
import { seoResults } from "@/data/seo-results";
import { launchedSites } from "@/data/websites";
import { canonical, pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/results")({
  head: () => ({
    meta: pageMeta({
      title: "Client Results & Social Proof | Global Web Experts",
      description:
        "Verified client results from Global Web Experts — Google Search Console SEO performance plus YouTube, Facebook, Instagram and TikTok growth across real client accounts.",
      path: "/results",
    }),
    links: canonical("/results"),
  }),
  component: Results,
});

function Results() {
  return (
    <>
      <Section className="border-b border-border grid-lines">
        <p className="eyebrow">Results</p>
        <h1 className="mt-4 max-w-3xl text-balance font-display text-4xl font-extrabold leading-[1.05] sm:text-5xl">
          Social proof, taken directly from client accounts
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          These are our clients' own audience numbers, captured from their live profiles. They belong
          to the businesses named, not to Global Web Experts.
        </p>
      </Section>

      <Section className="border-b border-border bg-surface-2">
        <SectionHeading
          eyebrow="Delivered projects"
          title="Websites built, launched and handed over"
          lead="Live client projects delivered by Global Web Experts. Each preview is taken from the project as it runs today."
        />
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

      <Section className="border-b border-border">
        <SectionHeading
          eyebrow="Search performance"
          title="SEO results, measured in Google's own reporting"
          lead="Each figure below is read directly from the client's Google Search Console or Rank Math dashboard. Clicks and impressions are Google's numbers, not our estimates."
        />
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

      {projects.map((p) => (
        <Section key={p.slug} className="border-b border-border">
          <SectionHeading eyebrow={p.industry} title={p.name} lead={p.resultsNote} />
          <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-3">
            {p.metrics.map((m) => (
              <div
                key={`${m.platform}-${m.label}`}
                className="rounded-sm border border-border bg-surface p-5"
              >
                <p className="font-display text-2xl font-extrabold sm:text-3xl">{m.value}</p>
                <p className="mt-1 text-sm font-medium">{m.label}</p>
                <p className="text-xs text-muted-foreground">{m.platform}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {p.proof.map((shot) => (
              <figure key={shot.url} className="overflow-hidden rounded-sm border border-border">
                <img
                  src={shot.url}
                  alt={shot.alt}
                  loading="lazy"
                  decoding="async"
                  className="w-full object-contain"
                />
                <figcaption className="border-t border-border p-3 text-xs text-muted-foreground">
                  {shot.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </Section>
      ))}
    </>
  );
}