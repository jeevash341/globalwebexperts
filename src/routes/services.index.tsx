import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui-kit/reveal";
import { Section, SectionHeading } from "@/components/ui-kit/section";
import { categories, childrenOf } from "@/data/services";
import { canonical, pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: pageMeta({
      title: "Digital Services | Web, Branding, SEO & AI — Global Web Experts",
      description:
        "Web development, e-commerce, branding, SEO, digital marketing, AI video and custom business solutions for companies in Pakistan and internationally.",
      path: "/services",
    }),
    links: canonical("/services"),
  }),
  component: ServicesIndex,
});

function ServicesIndex() {
  return (
    <>
      <Section className="border-b border-border grid-lines">
        <p className="eyebrow">Services</p>
        <h1 className="mt-4 max-w-3xl text-balance font-display text-4xl font-extrabold leading-[1.05] sm:text-5xl">
          Everything your business needs to build, grow and scale digitally
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          Five service lines, delivered individually or as one connected programme. Each one starts
          with the same question: what decision do you need your customer to make?
        </p>
      </Section>

      {categories.map((cat) => (
        <Section key={cat.slug} className="border-b border-border">
          <SectionHeading eyebrow={cat.tagline} title={cat.title} lead={cat.intro[0] ?? ""} />
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Reveal>
              <Link
                to="/services/$slug"
                params={{ slug: cat.slug }}
                className="flex h-full flex-col rounded-sm border border-accent/40 bg-surface-2 p-6 transition-all hover:-translate-y-1"
              >
                <h3 className="font-display text-base font-bold">Overview</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  Full breakdown of {cat.navTitle.toLowerCase()}: process, deliverables and what you
                  get.
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                  Open <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            </Reveal>
            {childrenOf(cat.slug).map((child, i) => (
              <Reveal key={child.slug} delay={(i + 1) * 50}>
                <Link
                  to="/services/$slug"
                  params={{ slug: child.slug }}
                  className="flex h-full flex-col rounded-sm border border-border bg-surface p-6 transition-all hover:-translate-y-1 hover:border-accent/60"
                >
                  <h3 className="font-display text-base font-bold">{child.navTitle}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {child.tagline}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                    Details <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </Section>
      ))}
    </>
  );
}