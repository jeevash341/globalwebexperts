import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, Phone, Quote } from "lucide-react";
import founderOfficePortrait from "@/assets/founder-office-portrait.png.asset.json";
import { LeadForm } from "@/components/contact/lead-form";
import { Reveal } from "@/components/ui-kit/reveal";
import { Section } from "@/components/ui-kit/section";
import { addressOneLine, mailtoUrl, mapsEmbedUrl, site, telUrl, whatsappUrl } from "@/data/site";
import { canonical, pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: pageMeta({
      title: "Contact Global Web Experts | Free Consultation in Karachi & Worldwide",
      description:
        "Call, WhatsApp or email Global Web Experts for a free consultation on web development, branding, SEO, AI video and business systems.",
      path: "/contact",
    }),
    links: canonical("/contact"),
  }),
  component: Contact,
});

function Contact() {
  return (
    <>
      <Section className="border-b border-border grid-lines">
        <p className="eyebrow">Contact</p>
        <h1 className="mt-4 max-w-3xl text-balance font-display text-4xl font-extrabold leading-[1.05] sm:text-5xl">
          Let's talk about what your business needs next
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          Send the form, message us on WhatsApp or call directly. We reply within one business day.
        </p>
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <LeadForm />
          <div className="space-y-4">
            <a
              href={telUrl}
              className="flex items-start gap-3 rounded-sm border border-border bg-surface p-5 transition-colors hover:border-accent/60"
            >
              <Phone className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
              <span>
                <span className="block text-sm font-semibold">Call</span>
                <span className="text-sm text-muted-foreground">{site.phoneDisplay}</span>
              </span>
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3 rounded-sm border border-border bg-surface p-5 transition-colors hover:border-accent/60"
            >
              <Phone className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
              <span>
                <span className="block text-sm font-semibold">WhatsApp</span>
                <span className="text-sm text-muted-foreground">Fastest response</span>
              </span>
            </a>
            <a
              href={mailtoUrl}
              className="flex items-start gap-3 rounded-sm border border-border bg-surface p-5 transition-colors hover:border-accent/60"
            >
              <Mail className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
              <span className="min-w-0">
                <span className="block text-sm font-semibold">Email</span>
                <span className="block break-all text-sm text-muted-foreground">{site.email}</span>
              </span>
            </a>
            <div className="flex items-start gap-3 rounded-sm border border-border bg-surface p-5">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
              <span>
                <span className="block text-sm font-semibold">Office</span>
                <span className="text-sm text-muted-foreground">{addressOneLine}</span>
              </span>
            </div>
            <div className="flex items-start gap-3 rounded-sm border border-border bg-surface p-5">
              <Clock className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
              <span>
                <span className="block text-sm font-semibold">Business hours</span>
                <span className="text-sm text-muted-foreground">{site.hours}</span>
              </span>
            </div>
            <iframe
              title="Global Web Experts office location"
              src={mapsEmbedUrl}
              loading="lazy"
              className="h-64 w-full rounded-sm border border-border"
            />
          </div>
        </div>
      </Section>
    </>
  );
}