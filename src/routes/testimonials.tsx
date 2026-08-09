import { Link, createFileRoute } from "@tanstack/react-router";
import { AudioReview } from "@/components/ui-kit/audio-review";
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

      <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
        We publish only feedback our clients have supplied themselves — recorded voice notes and
        unedited messages. Nothing here is written by us.
      </p>

      {testimonials.length ? (
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {testimonials.map((t) => (
            <article
              key={t.name}
              className="flex flex-col rounded-sm border border-border bg-surface p-6"
            >
              <p className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-accent">
                {t.business}
              </p>
              <h2 className="mt-3 font-display text-xl font-bold leading-snug">{t.name}</h2>
              {t.website ? (
                <a
                  href={t.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 text-sm font-medium text-accent"
                >
                  {t.website}
                </a>
              ) : null}

              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{t.quote}</p>

              {t.audioUrl ? (
                <div className="mt-5">
                  <AudioReview src={t.audioUrl} label={t.audioLabel ?? "Play voice review"} />
                  {t.language ? (
                    <p className="mt-2 text-xs text-muted-foreground">{t.language}</p>
                  ) : null}
                </div>
              ) : null}

              {t.proofImage ? (
                <figure className="mt-5 overflow-hidden rounded-sm border border-border">
                  <img
                    src={t.proofImage}
                    alt={t.proofAlt ?? `Client message from ${t.name}`}
                    loading="lazy"
                    className="w-full object-cover"
                  />
                  {t.proofCaption ? (
                    <figcaption className="border-t border-border p-3 text-xs text-muted-foreground">
                      {t.proofCaption}
                    </figcaption>
                  ) : null}
                </figure>
              ) : null}

              <div className="mt-5 flex flex-wrap gap-2">
                {t.services.map((s) => (
                  <span
                    key={s}
                    className="rounded-sm border border-border px-2 py-1 text-xs text-muted-foreground"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </article>
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