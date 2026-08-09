import { createFileRoute } from "@tanstack/react-router";
import { LeadForm } from "@/components/contact/lead-form";
import { Section } from "@/components/ui-kit/section";
import { canonical, pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/request-a-quote")({
  head: () => ({
    meta: pageMeta({
      title: "Request a Free Quote | Global Web Experts",
      description:
        "Tell us about your project and get a clear, itemised quote for web development, branding, SEO, AI video or custom business systems.",
      path: "/request-a-quote",
    }),
    links: canonical("/request-a-quote"),
  }),
  component: Quote,
});

const steps = [
  "You send the brief — goals, timeline and budget range.",
  "We review it and ask only the questions that change the answer.",
  "You receive a scoped quote with phases, deliverables and timings.",
];

function Quote() {
  return (
    <Section>
      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="eyebrow">Free quote</p>
          <h1 className="mt-4 text-balance font-display text-4xl font-extrabold leading-[1.05]">
            Get a clear, itemised quote
          </h1>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            No obligation, no retainer talk before we understand the problem.
          </p>
          <ol className="mt-8 space-y-4">
            {steps.map((s, i) => (
              <li key={s} className="flex gap-3 text-sm text-muted-foreground">
                <span className="font-mono text-xs font-bold text-accent">0{i + 1}</span>
                {s}
              </li>
            ))}
          </ol>
        </div>
        <LeadForm variant="quote" />
      </div>
    </Section>
  );
}