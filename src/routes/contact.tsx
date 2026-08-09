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

      <Section className="border-t border-border bg-surface-2">
        <Reveal>
          <div className="mx-auto max-w-4xl">
            <div className="group relative overflow-hidden rounded-sm border border-border bg-background p-1">
              {/* animated corner accents */}
              <span className="absolute left-0 top-0 z-10 h-10 w-10 border-l-2 border-t-2 border-accent transition-all duration-500 group-hover:h-16 group-hover:w-16" />
              <span className="absolute right-0 top-0 z-10 h-10 w-10 border-r-2 border-t-2 border-accent transition-all duration-500 group-hover:h-16 group-hover:w-16" />
              <span className="absolute bottom-0 left-0 z-10 h-10 w-10 border-b-2 border-l-2 border-accent transition-all duration-500 group-hover:h-16 group-hover:w-16" />
              <span className="absolute bottom-0 right-0 z-10 h-10 w-10 border-b-2 border-r-2 border-accent transition-all duration-500 group-hover:h-16 group-hover:w-16" />

              <div className="grid gap-6 p-5 sm:p-8 md:grid-cols-[1fr_1.2fr] md:items-center">
                <div className="relative overflow-hidden rounded-sm border border-border">
                  <img
                    src={founderOfficePortrait.url}
                    alt="Jeevash Khatri, CEO and Founder of Global Web Experts, at the Global Web Experts office"
                    width={900}
                    height={1100}
                    loading="lazy"
                    decoding="async"
                    className="aspect-[4/5] w-full object-contain transition-transform duration-700 group-hover:scale-[1.02]"
                  />
                </div>
                <div className="relative">
                  <Quote className="mb-4 h-8 w-8 text-accent/60" />
                  <p className="font-display text-xl font-bold leading-snug sm:text-2xl">
                    Every project we take is handled personally. You are not talking to a sales team — you are talking to the founder.
                  </p>
                  <div className="mt-6 border-t border-border pt-6">
                    <p className="font-display text-lg font-bold">{site.founder}</p>
                    <p className="text-sm font-semibold text-accent">CEO & Founder</p>
                    <p className="mt-1 text-sm text-muted-foreground">{site.legalName}</p>
                  </div>
                  <div className="mt-5 flex flex-wrap gap-3">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-sm bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02]"
                    >
                      Message on WhatsApp
                    </a>
                    <a
                      href={`mailto:${site.email}`}
                      className="rounded-sm border border-border px-4 py-2.5 text-sm font-semibold transition-colors hover:bg-secondary"
                    >
                      Email directly
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Section>
    </>
  );
}