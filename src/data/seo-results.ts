import gscSafelink from "@/assets/gsc-safelink.asset.json";
import gscBunshaw from "@/assets/gsc-bunshaw.asset.json";
import gscAaPool from "@/assets/gsc-aapool.asset.json";
import gscAaaRentACar from "@/assets/gsc-aaarentacar.asset.json";

export type SeoResult = {
  site: string;
  url: string;
  industry: string;
  scope: string;
  stats: { value: string; label: string }[];
  window: string;
  narrative: string;
  image: string;
  alt: string;
  source: string;
};

export const seoResults: SeoResult[] = [
  {
    site: "safelinktecnologies.com",
    url: "https://www.safelinktecnologies.com",
    industry: "Security Systems — Electric Fencing, CCTV & Automation",
    scope: "Website development, on-page SEO and ongoing search optimisation",
    stats: [
      { value: "839", label: "Search impressions" },
      { value: "70", label: "Search clicks" },
    ],
    window: "Google Search Console — 16 month view",
    narrative:
      "A site that previously had no measurable search presence now appears consistently for security-installation queries and receives qualified organic traffic every week.",
    image: gscSafelink.url,
    alt: "Google Search Console performance for safelinktecnologies.com showing 70 clicks and 839 impressions",
    source: "Client Google Search Console account",
  },
  {
    site: "bunshaw.com",
    url: "https://www.bunshaw.com",
    industry: "Business & Services",
    scope: "Search strategy, technical SEO and continuous content optimisation",
    stats: [
      { value: "12.8K", label: "Search impressions" },
      { value: "893", label: "Search clicks" },
    ],
    window: "Google Search Console — 16 month view",
    narrative:
      "Our strongest search performance to date. Impressions climbed steadily through the period as the site's keyword coverage expanded, turning organic search into a dependable enquiry channel.",
    image: gscBunshaw.url,
    alt: "Google Search Console performance for bunshaw.com showing 893 clicks and 12.8K impressions",
    source: "Client Google Search Console account",
  },
  {
    site: "aapoolservicespk.com",
    url: "https://www.aapoolservicespk.com",
    industry: "Swimming Pool Design, Construction & Maintenance",
    scope: "Website, local SEO and service-page optimisation",
    stats: [
      { value: "2.37K", label: "Search impressions" },
      { value: "66", label: "Search clicks" },
    ],
    window: "Google Search Console — 16 month view",
    narrative:
      "Visibility for pool construction and maintenance searches grew through the second half of the period, supported by service pages built around how customers actually search.",
    image: gscAaPool.url,
    alt: "Google Search Console performance for aapoolservicespk.com showing 66 clicks and 2.37K impressions",
    source: "Client Google Search Console account",
  },
  {
    site: "aaarentacar.pk",
    url: "https://aaarentacar.pk",
    industry: "Car Rental & Transport",
    scope: "SEO project — completed and handed over",
    stats: [
      { value: "199", label: "Ranking keywords" },
      { value: "632", label: "Impressions (30 days)" },
      { value: "14", label: "Clicks (30 days)" },
    ],
    window: "Rank Math analytics — last 30 days",
    narrative:
      "A completed SEO engagement. The site moved from effectively zero indexed visibility to 199 tracked ranking keywords, establishing the foundation for sustained organic growth.",
    image: gscAaaRentACar.url,
    alt: "Rank Math analytics for aaarentacar.pk showing 632 impressions, 14 clicks and 199 keywords",
    source: "Client Rank Math dashboard",
  },
];