import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import founder2 from "@/assets/founder-2.asset.json";
import office from "@/assets/office.asset.json";
import { Reveal } from "@/components/ui-kit/reveal";
import { Section, SectionHeading } from "@/components/ui-kit/section";
import { site } from "@/data/site";
import { canonical, pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: pageMeta({
      title: "About Global Web Experts | Digital Agency Founded by Jeevash Khatri",
      description:
        "Global Web Experts is a Karachi-based digital agency founded in 2022 by Jeevash Khatri, serving businesses across Pakistan and international markets.",
      path: "/about",
    }),
    links: canonical("/about"),
  }),
  component: About,
});

const values = [
  {
    title: "Clarity before creativity",
    body: "We define the commercial objective and the customer decision first. Design and code follow that, never the other way around.",
  },
  {
    title: "Honest scope",
    body: "We quote what a project genuinely takes. If something is not needed yet, we say so and phase it instead of padding the invoice.",
  },
  {
    title: "Evidence over adjectives",
    body: "Where we show numbers, they come from the client's own platform statistics. We do not publish invented metrics or fabricated reviews.",
  },
  {
    title: "Long-term ownership",
    body: "Everything we hand over is documented and maintainable, so your business owns the asset rather than renting it from an agency.",
  },
];

const timeline = [
  {
    year: "2022",
    title: "Global Web Experts is founded",
    body: "Jeevash Khatri starts the studio in Karachi, building websites and brand assets for local service businesses.",
  },
  {
    year: "2023",
    title: "Services expand into search and social",
    body: "SEO, Google Business Profile optimisation and ongoing social media management are added as retained services.",
  },
  {
    year: "2024",
    title: "Multi-platform client programmes",
    body: "Longer engagements begin — full digital presence management across website, Facebook, Instagram, TikTok and YouTube.",
  },
  {
    year: "2025",
    title: "AI video and business systems",
    body: "AI-assisted commercial video production and custom business management solutions join the service line-up.",
  },
  {
    year: "2026",
    title: "International delivery",
    body: "The studio now serves clients in Pakistan and abroad from its Karachi base, with remote-first project delivery.",
  },
];

function About() {
  return (
    <>
      <Section className="border-b border-border grid-lines">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="eyebrow">About the studio</p>
            <h1 className="mt-4 text-balance font-display text-4xl font-extrabold leading-[1.05] sm:text-5xl">
              A digital partner built for businesses that need results, not jargon
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {site.legalName} was founded in {site.founded} in Karachi, Pakistan. We work with
              owner-led businesses, growing companies and international clients who want their
              website, brand and online visibility handled properly by one team.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="rounded-sm bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground"
              >
                Talk to us
              </Link>
              <Link
                to="/portfolio"
                className="rounded-sm border border-border px-6 py-3.5 text-sm font-semibold"
              >
                View case studies
              </Link>
            </div>
          </div>
          <Reveal delay={100}>
            <img
              src={office.url}
              alt="The Global Web Experts office in Karachi with the company logo on the wall"
              width={1200}
              height={800}
              className="aspect-[4/3] w-full rounded-sm border border-border object-cover"
            />
          </Reveal>
        </div>
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <Reveal>
            <img
              src={founder2.url}
              alt="Jeevash Khatri, CEO and founder of Global Web Experts"
              width={900}
              height={1100}
              className="aspect-[4/5] w-full rounded-sm border border-border object-cover"
            />
            <p className="mt-4 font-display text-xl font-bold">{site.founder}</p>
            <p className="text-sm text-muted-foreground">{site.founderRole}</p>
          </Reveal>
          <div>
            <SectionHeading eyebrow="Founder's story" title="Why this studio exists" />
            <div className="mt-5 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <p>
                Jeevash Khatri started Global Web Experts after watching capable businesses lose
                customers for reasons that had nothing to do with the quality of their work. Their
                websites loaded slowly or did not exist. Their brand looked different on every
                platform. Their best projects were never documented anywhere a buyer could find them.
              </p>
              <p>
                The studio was built to close that gap: a single team that can design a brand, build
                the website, structure it for search, produce the content that fills it, and keep the
                whole system running afterwards. That combination is normal for large companies and
                rare for everyone else.
              </p>
              <p>
                Since {site.founded} that approach has been applied across security systems, transport
                and rental services, home services and technology businesses — locally in Karachi and
                remotely for international clients.
              </p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {values.map((v, i) => (
                <Reveal key={v.title} delay={i * 60}>
                  <div className="h-full rounded-sm border border-border bg-surface p-5">
                    <h3 className="font-display text-base font-bold">{v.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section className="border-y border-border bg-surface-2">
        <SectionHeading eyebrow="Mission & vision" title="What we are working towards" />
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-sm border border-border bg-surface p-6">
              <h3 className="font-display text-lg font-bold">Mission</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Give every business we work with a digital foundation that earns trust before the
                first conversation — a site that loads, a brand that reads clearly, and content that
                answers what a buyer actually wants to know.
              </p>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div className="h-full rounded-sm border border-border bg-surface p-6">
              <h3 className="font-display text-lg font-bold">Vision</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {site.tagline} To be the digital partner Pakistani businesses recommend to each other,
                and a credible remote studio for international clients who value directness and
                delivery.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Journey" title={`From ${site.founded} to today`} />
        <ol className="mt-10 space-y-0">
          {timeline.map((t, i) => (
            <Reveal key={t.year} delay={i * 60}>
              <li className="grid gap-3 border-l border-border pb-8 pl-6 sm:grid-cols-[6rem_1fr] sm:gap-6">
                <span className="font-mono text-sm font-bold text-accent">{t.year}</span>
                <div>
                  <h3 className="font-display text-base font-bold">{t.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{t.body}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
        <Link
          to="/services"
          className="inline-flex items-center gap-2 text-sm font-semibold text-accent"
        >
          See what we deliver <ArrowRight className="h-4 w-4" />
        </Link>
      </Section>
    </>
  );
}