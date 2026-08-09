import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHeading } from "@/components/ui-kit/section";
import { projects } from "@/data/portfolio";
import { seoResults } from "@/data/seo-results";
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

      <Section className="border-b border-border">
        <SectionHeading
          eyebrow="Search performance"
          title="Google Search Console results"
          lead="Verified search data taken from client Search Console accounts, covering a 16 month period."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {seoResults
            .filter((r) => r.site !== "aaarentacar.pk")
            .map((r) => (
              <article
                key={r.site}
                className="overflow-hidden rounded-sm border border-border bg-surface"
              >
                <img
                  src={r.image}
                  alt={r.alt}
                  loading="lazy"
                  decoding="async"
                  className="w-full object-contain"
                />
                <div className="border-t border-border p-6">
                  <h3 className="font-display text-xl font-bold">{r.site}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{r.industry}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{r.scope}</p>
                  <div className="mt-4 flex flex-wrap gap-4">
                    {r.stats.map((s) => (
                      <div key={s.label}>
                        <p className="font-display text-2xl font-extrabold">{s.value}</p>
                        <p className="text-xs text-muted-foreground">{s.label}</p>
                      </div>
                    ))}
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{r.narrative}</p>
                  <p className="mt-3 text-xs text-muted-foreground">
                    {r.window} · {r.source}
                  </p>
                  <a
                    href={r.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block text-sm font-semibold underline underline-offset-4"
                  >
                    Visit {r.site}
                  </a>
                </div>
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