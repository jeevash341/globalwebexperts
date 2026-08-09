import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { Reveal } from "@/components/ui-kit/reveal";
import { Section, SectionHeading } from "@/components/ui-kit/section";
import { projectBySlug, type Project } from "@/data/portfolio";
import { breadcrumbLd, canonical, pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/portfolio/$slug")({
  loader: ({ params }) => {
    const project = projectBySlug(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Case study not found" }, { name: "robots", content: "noindex" }] };
    }
    const p = loaderData.project;
    return {
      meta: pageMeta({
        title: p.metaTitle,
        description: p.metaDescription,
        path: `/portfolio/${params.slug}`,
        type: "article",
        ...(p.proof[0] ? { image: p.proof[0].url } : {}),
      }),
      links: canonical(`/portfolio/${params.slug}`),
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify(
            breadcrumbLd([
              { name: "Home", item: "/" },
              { name: "Portfolio", item: "/portfolio" },
              { name: p.name, item: `/portfolio/${params.slug}` },
            ]),
          ),
        },
      ],
    };
  },
  component: CaseStudy,
});

function CaseStudy() {
  const { project } = Route.useLoaderData() as { project: Project };

  return (
    <>
      <Section className="border-b border-border grid-lines">
        <nav aria-label="Breadcrumb" className="text-xs text-muted-foreground">
          <Link to="/portfolio" className="hover:text-foreground">
            Portfolio
          </Link>{" "}
          / <span className="text-foreground">{project.name}</span>
        </nav>
        <p className="eyebrow mt-5">{project.industry}</p>
        <h1 className="mt-3 max-w-3xl text-balance font-display text-4xl font-extrabold leading-[1.06] sm:text-5xl">
          {project.name}
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          {project.summary}
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {project.servicesDelivered.map((s) => (
            <span key={s} className="rounded-sm border border-border px-3 py-1.5 text-xs text-muted-foreground">
              {s}
            </span>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-3">
          {(
            [
              ["The challenge", project.challenge],
              ["Our approach", project.approach],
              ["What we delivered", project.execution],
            ] as const
          ).map(([title, items], i) => (
            <Reveal key={title} delay={i * 60}>
              <h2 className="font-display text-xl font-bold">{title}</h2>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
                {items.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="border-y border-border bg-surface-2">
        <SectionHeading eyebrow="Results" title="Verified platform metrics" lead={project.resultsNote} />
        <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-3">
          {project.metrics.map((m) => (
            <div key={`${m.platform}-${m.label}`} className="rounded-sm border border-border bg-surface p-5">
              <p className="font-display text-2xl font-extrabold sm:text-3xl">{m.value}</p>
              <p className="mt-1 text-sm font-medium">{m.label}</p>
              <p className="text-xs text-muted-foreground">{m.platform}</p>
              <p className="mt-2 text-[0.65rem] uppercase tracking-wide text-muted-foreground">
                Source: {m.source}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {project.proof.map((shot) => (
            <figure key={shot.url} className="overflow-hidden rounded-sm border border-border bg-surface">
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

      <Section>
        <div className="flex flex-wrap items-center justify-between gap-4 rounded-sm border border-border bg-surface p-8">
          <div>
            <h2 className="font-display text-xl font-bold">Want results like this?</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Tell us about your business and we will map the fastest path to visibility.
            </p>
          </div>
          <Link
            to="/contact"
            className="rounded-sm bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground"
          >
            Start a conversation
          </Link>
        </div>
      </Section>
    </>
  );
}