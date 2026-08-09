import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import founder from "@/assets/founder-portrait-brown.asset.json";
import office from "@/assets/founder-portrait-black.asset.json";
import { Counter } from "@/components/ui-kit/counter";
import { Reveal } from "@/components/ui-kit/reveal";
import { Section, SectionHeading } from "@/components/ui-kit/section";
import { Typewriter } from "@/components/ui-kit/typewriter";
import { posts } from "@/data/blog";
import { projects } from "@/data/portfolio";
import { seoResults } from "@/data/seo-results";
import { testimonials } from "@/data/testimonials";
import { AudioReview } from "@/components/ui-kit/audio-review";
import { categories, childrenOf } from "@/data/services";
import { site } from "@/data/site";
import { canonical, pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: pageMeta({
      title: "Global Web Experts | Web Design, SEO & AI Agency in Pakistan",
      description:
        "Global Web Experts builds websites, brands, SEO growth, AI video and business systems for companies in Pakistan and worldwide. Founded 2022 by Jeevash Khatri.",
      path: "/",
    }),
    links: [
      ...canonical("/"),
      { rel: "preload", as: "image", href: office.url, fetchpriority: "high" },
    ],
  }),
  component: Home,
});

const proofStats = [
  { value: 50, suffix: "+", label: "Projects completed", note: "Across all service lines" },
  { value: 100, suffix: "+", label: "Clients worked for", note: "Pakistan & international" },
  { value: 4.9, suffix: "/5.0", label: "Client rating", note: "Average review score" },
  { value: 2022, suffix: "", label: "Operating since", note: "Karachi, Sindh" },
];

const pillars = [
  "One team for design, build, content and search",
  "Written and built for business outcomes, not awards",
  "Direct access to the founder on every project",
  "Clients across Pakistan and international markets",
];

function Home() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border grid-lines">
        <div className="container-page relative grid gap-12 py-16 sm:py-20 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:py-28">
          <div>
            <Reveal>
              <p className="eyebrow">Digital agency · Karachi · Since {site.founded}</p>
            </Reveal>
            <Reveal delay={60}>
              <h1 className="mt-4 text-balance font-display text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl">
                We build{" "}
                <span className="text-gradient-brand">
                  <Typewriter
                    words={[
                      "websites that sell.",
                      "brands people trust.",
                      "search visibility.",
                      "AI-driven content.",
                      "systems that scale.",
                    ]}
                  />
                </span>
              </h1>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                {site.positioning} Web development, branding, SEO, AI video and custom business
                solutions — delivered by one accountable team.
              </p>
            </Reveal>
            <Reveal delay={180}>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-sm bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02]"
                >
                  Get a Free Consultation <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/portfolio"
                  className="inline-flex items-center gap-2 rounded-sm border border-border px-6 py-3.5 text-sm font-semibold transition-colors hover:bg-secondary"
                >
                  See our work
                </Link>
              </div>
            </Reveal>
            <Reveal delay={240}>
              <ul className="mt-8 grid gap-2 sm:grid-cols-2">
                {pillars.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    {p}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal delay={140} className="relative">
            <div className="surface-panel overflow-hidden rounded-sm">
              <img
                src={office.url}
                alt="Jeevash Khatri, founder and CEO of Global Web Experts"
                width={1200}
                height={800}
                loading="eager"
                fetchPriority="high"
                decoding="async"
                className="w-full bg-surface-2 object-contain"
              />
              <div className="border-t border-border p-5">
                <p className="font-display text-lg font-bold">{site.founder}</p>
                <p className="text-sm text-muted-foreground">{site.founderRole}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  “Most businesses do not need more marketing noise. They need a clear digital
                  foundation that keeps working after the campaign ends.”
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-border bg-surface-2">
        <div className="container-page grid grid-cols-2 gap-6 py-10 lg:grid-cols-4">
          {proofStats.map((s, i) => (
            <Reveal key={s.note} delay={i * 70}>
              <p className="font-display text-3xl font-extrabold text-foreground sm:text-4xl">
                <Counter to={s.value} suffix={s.suffix} decimals={s.value > 100 ? 0 : 2} />
              </p>
              <p className="mt-1 text-sm font-medium text-foreground">{s.label}</p>
              <p className="text-xs text-muted-foreground">{s.note}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <Section>
        <SectionHeading
          eyebrow="What we do"
          title="Five service lines, one accountable team"
          lead="Every engagement starts with the commercial goal, then works backwards into what should be built and in what order."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat, i) => (
            <Reveal key={cat.slug} delay={i * 60}>
              <Link
                to="/services/$slug"
                params={{ slug: cat.slug }}
                className="group flex h-full flex-col rounded-sm border border-border bg-surface p-6 transition-all hover:-translate-y-1 hover:border-accent/60"
              >
                <h3 className="font-display text-lg font-bold">{cat.navTitle}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {cat.tagline}
                </p>
                <ul className="mt-4 space-y-1.5">
                  {cat.offerings.slice(0, 4).map((o) => (
                    <li key={o} className="text-xs text-muted-foreground">
                      · {o}
                    </li>
                  ))}
                </ul>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                  Explore {childrenOf(cat.slug).length ? `${childrenOf(cat.slug).length} services` : "service"}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          ))}
          <Reveal delay={320}>
            <Link
              to="/request-a-quote"
              className="flex h-full flex-col justify-center rounded-sm border border-dashed border-border p-6 transition-colors hover:bg-secondary"
            >
              <h3 className="font-display text-lg font-bold">Not sure what you need?</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Describe the problem. We will tell you what is worth building first — free of charge.
              </p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                Request a free quote <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          </Reveal>
        </div>
      </Section>

      <Section className="border-y border-border bg-surface-2">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal>
            <img
              src={founder.url}
              alt="Jeevash Khatri, founder and CEO of Global Web Experts"
              width={900}
              height={1100}
              loading="lazy"
              decoding="async"
              className="w-full max-w-sm rounded-sm bg-surface-2 object-contain"
            />
          </Reveal>
          <div>
            <SectionHeading
              eyebrow="The founder"
              title="Built and led by Jeevash Khatri"
              lead="Global Web Experts started in 2022 in Karachi with a single conviction: small and mid-sized businesses deserve the same standard of digital work that large companies pay agencies for."
            />
            <Reveal delay={80}>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                Today the studio delivers websites, brand systems, search visibility, AI-assisted
                video and internal business tools for clients in Pakistan and abroad. Every project
                is scoped, reviewed and signed off by the founder — there is no account layer between
                you and the people doing the work.
              </p>
            </Reveal>
            <Reveal delay={140}>
              <Link
                to="/about"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent"
              >
                Read the full story <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Selected work"
          title="Real clients, verifiable numbers"
          lead="Every figure below is taken from the client's own public platform statistics — nothing is estimated or invented."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.slug} delay={i * 70}>
              <Link
                to="/portfolio/$slug"
                params={{ slug: p.slug }}
                className="group flex h-full flex-col rounded-sm border border-border bg-surface p-6 transition-all hover:-translate-y-1 hover:border-accent/60"
              >
                <p className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-accent">
                  {p.industry}
                </p>
                <h3 className="mt-3 font-display text-lg font-bold leading-snug">{p.name}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {p.summary}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.metrics.slice(0, 2).map((m) => (
                    <span
                      key={`${m.platform}-${m.label}`}
                      className="rounded-sm border border-border px-2 py-1 text-xs text-muted-foreground"
                    >
                      {m.value} {m.label} · {m.platform}
                    </span>
                  ))}
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="border-t border-border bg-surface-2">
        <SectionHeading
          eyebrow="Search performance"
          title="SEO results reported by Google itself"
          lead="Clicks, impressions and keyword counts taken straight from our clients' own Search Console and Rank Math dashboards."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {seoResults
            .filter((r) => r.site === "aaarentacar.pk")
            .map((r, i) => (
            <Reveal key={r.site} delay={i * 70}>
              <div className="flex h-full flex-col rounded-sm border border-border bg-surface p-6">
                <p className="font-display text-3xl font-extrabold">{r.stats[0]?.value}</p>
                <p className="mt-1 text-sm font-medium">{r.stats[0]?.label}</p>
                <p className="mt-3 text-xs text-muted-foreground">{r.site}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Link to="/results" className="mt-8 inline-flex text-sm font-semibold text-accent">
          See the full reports →
        </Link>
      </Section>

      {testimonials.length ? (
        <Section>
          <SectionHeading
            eyebrow="In their words"
            title="Client feedback, unedited"
            lead="Recorded voice notes and direct messages from the businesses we work with."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 70}>
                <div className="flex h-full flex-col rounded-sm border border-border bg-surface p-6">
                  <h3 className="font-display text-lg font-bold">{t.name}</h3>
                  {t.website ? (
                    <p className="mt-1 text-sm text-accent">{t.website}</p>
                  ) : null}
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {t.quote}
                  </p>
                  {t.audioUrl ? (
                    <AudioReview
                      className="mt-5"
                      src={t.audioUrl}
                      label={t.audioLabel ?? "Play voice review"}
                    />
                  ) : null}
                  <Link
                    to="/testimonials"
                    className="mt-5 inline-flex text-sm font-semibold text-accent"
                  >
                    All testimonials →
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>
      ) : null}

      <Section className="border-t border-border bg-surface-2">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Insights"
            title="Practical writing for business owners"
            lead="No trend chasing. Just what actually moves enquiries for companies in Pakistan and abroad."
          />
          <Link to="/blog" className="text-sm font-semibold text-accent">
            All articles →
          </Link>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {posts.slice(0, 3).map((post, i) => (
            <Reveal key={post.slug} delay={i * 70}>
              <Link
                to="/blog/$slug"
                params={{ slug: post.slug }}
                className="flex h-full flex-col rounded-sm border border-border bg-surface p-6 transition-all hover:-translate-y-1 hover:border-accent/60"
              >
                <p className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-accent">
                  {post.category} · {post.readingTime}
                </p>
                <h3 className="mt-3 font-display text-base font-bold leading-snug">{post.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {post.excerpt}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
