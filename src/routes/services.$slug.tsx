import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { Reveal } from "@/components/ui-kit/reveal";
import { Section, SectionHeading } from "@/components/ui-kit/section";
import { projectBySlug } from "@/data/portfolio";
import { childrenOf, serviceBySlug, services } from "@/data/services";
import { breadcrumbLd, canonical, pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = serviceBySlug(params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Service not found" }, { name: "robots", content: "noindex" }] };
    }
    const s = loaderData.service;
    return {
      meta: pageMeta({
        title: s.metaTitle,
        description: s.metaDescription,
        path: `/services/${params.slug}`,
      }),
      links: canonical(`/services/${params.slug}`),
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify(
            breadcrumbLd([
              { name: "Home", item: "/" },
              { name: "Services", item: "/services" },
              { name: s.navTitle, item: `/services/${params.slug}` },
            ]),
          ),
        },
      ],
    };
  },
  component: ServicePage,
});

function ServicePage() {
  const { service } = Route.useLoaderData();
  const subs = childrenOf(service.slug);
  const parent = service.parent ? serviceBySlug(service.parent) : undefined;
  const siblings = parent ? childrenOf(parent.slug).filter((s) => s.slug !== service.slug) : [];
  const related = (service.relatedProjects ?? [])
    .map((slug) => projectBySlug(slug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <>
      <Section className="border-b border-border grid-lines">
        <nav aria-label="Breadcrumb" className="text-xs text-muted-foreground">
          <Link to="/" className="hover:text-foreground">
            Home
          </Link>{" "}
          /{" "}
          <Link to="/services" className="hover:text-foreground">
            Services
          </Link>
          {parent ? (
            <>
              {" "}
              /{" "}
              <Link
                to="/services/$slug"
                params={{ slug: parent.slug }}
                className="hover:text-foreground"
              >
                {parent.navTitle}
              </Link>
            </>
          ) : null}{" "}
          / <span className="text-foreground">{service.navTitle}</span>
        </nav>
        <h1 className="mt-5 max-w-3xl text-balance font-display text-4xl font-extrabold leading-[1.06] sm:text-5xl">
          {service.title}
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          {service.tagline}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            to="/contact"
            className="rounded-sm bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground"
          >
            Discuss this service
          </Link>
          <Link
            to="/request-a-quote"
            className="rounded-sm border border-border px-6 py-3.5 text-sm font-semibold"
          >
            Get a free quote
          </Link>
        </div>
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            {service.intro.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <div className="rounded-sm border border-border bg-surface-2 p-6">
            <h2 className="font-display text-base font-bold">What's included</h2>
            <ul className="mt-4 space-y-2">
              {service.offerings.map((o) => (
                <li key={o} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  {o}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {subs.length ? (
        <Section className="border-y border-border bg-surface-2">
          <SectionHeading eyebrow="Specialisms" title={`${service.navTitle} services`} />
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {subs.map((s, i) => (
              <Reveal key={s.slug} delay={i * 50}>
                <Link
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="flex h-full flex-col rounded-sm border border-border bg-surface p-6 transition-all hover:-translate-y-1 hover:border-accent/60"
                >
                  <h3 className="font-display text-base font-bold">{s.navTitle}</h3>
                  <p className="mt-2 flex-1 text-sm text-muted-foreground">{s.tagline}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                    Details <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </Section>
      ) : null}

      <Section>
        <SectionHeading eyebrow="Benefits" title="Why this works" />
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {service.benefits.map((b, i) => (
            <Reveal key={b.title} delay={i * 50}>
              <div className="h-full rounded-sm border border-border bg-surface p-6">
                <h3 className="font-display text-base font-bold">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="border-y border-border bg-surface-2">
        <SectionHeading eyebrow="Process" title="How we deliver" />
        <div className="mt-8 grid gap-4 md:grid-cols-3 lg:grid-cols-5">
          {service.process.map((p, i) => (
            <Reveal key={p.step} delay={i * 50}>
              <div className="h-full rounded-sm border border-border bg-surface p-5">
                <span className="font-mono text-xs font-bold text-accent">{p.step}</span>
                <h3 className="mt-2 font-display text-base font-bold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-bold">Deliverables</h2>
            <ul className="mt-4 space-y-2">
              {service.deliverables.map((d) => (
                <li key={d} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  {d}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-display text-2xl font-bold">Why choose us</h2>
            <ul className="mt-4 space-y-2">
              {service.whyUs.map((d) => (
                <li key={d} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  {d}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {related.length ? (
        <Section className="border-t border-border bg-surface-2">
          <SectionHeading eyebrow="Related work" title="Where we have done this" />
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {related.map((p) => (
              <Link
                key={p.slug}
                to="/portfolio/$slug"
                params={{ slug: p.slug }}
                className="rounded-sm border border-border bg-surface p-6 transition-colors hover:border-accent/60"
              >
                <h3 className="font-display text-base font-bold">{p.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.summary}</p>
              </Link>
            ))}
          </div>
        </Section>
      ) : null}

      {siblings.length ? (
        <Section>
          <h2 className="font-display text-xl font-bold">Related services</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {siblings.map((s) => (
              <Link
                key={s.slug}
                to="/services/$slug"
                params={{ slug: s.slug }}
                className="rounded-sm border border-border px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {s.navTitle}
              </Link>
            ))}
          </div>
        </Section>
      ) : null}

      <div className="sr-only">{services.length} services available</div>
    </>
  );
}