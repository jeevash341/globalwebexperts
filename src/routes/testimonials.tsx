import { Link, createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/ui-kit/section";
import { testimonials } from "@/data/testimonials";
import { canonical, pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: pageMeta({
      title: "Client Testimonials | Global Web Experts",
      description:
        "Feedback from Global Web Experts clients. We publish only verified testimonials supplied directly by the businesses we work with.",
      path: "/testimonials",
    }),
    links: canonical("/testimonials"),
  }),
  component: Testimonials,
});

function Testimonials() {
  return (
    <Section>
      <p className="eyebrow">Testimonials</p>
      <h1 className="mt-4 max-w-3xl text-balance font-display text-4xl font-extrabold leading-[1.05] sm:text-5xl">
        What clients say
      </h1>

      {testimonials.length ? (
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {testimonials.map((t) => (
            <blockquote key={t.name} className="rounded-sm border border-border bg-surface p-6">
              <p className="text-sm leading-relaxed text-muted-foreground">“{t.quote}”</p>
              <footer className="mt-4 text-sm font-semibold">
                {t.name} — <span className="font-normal text-muted-foreground">{t.business}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      ) : (
        <div className="mt-8 max-w-2xl rounded-sm border border-border bg-surface p-8">
          <p className="text-sm leading-relaxed text-muted-foreground">
            We only publish testimonials that clients have supplied and approved in writing, audio or
            video. Written approvals for our current projects are being collected, so this page is
            intentionally empty rather than filled with invented quotes.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            In the meantime, our results page shows verifiable platform statistics from live client
            accounts.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              to="/results"
              className="rounded-sm bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
            >
              See verified results
            </Link>
            <Link
              to="/portfolio"
              className="rounded-sm border border-border px-5 py-3 text-sm font-semibold"
            >
              Read case studies
            </Link>
          </div>
        </div>
      )}
    </Section>
  );
}