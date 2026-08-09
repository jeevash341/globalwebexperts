import previewBunshaw from "@/assets/preview-bunshaw.asset.json";
import previewAaPool from "@/assets/preview-aapool.asset.json";
import previewAaaRentACar from "@/assets/preview-aaarentacar.asset.json";
import previewIslamabadTensile from "@/assets/preview-islamabadtensile.asset.json";
import previewSafelink from "@/assets/preview-safelink.asset.json";
import previewCruise from "@/assets/preview-cruiserentacar.asset.json";

export type LaunchedSite = {
  site: string;
  url: string;
  industry: string;
  scope: string;
  note: string;
  image: string;
  alt: string;
};

export const launchedSites: LaunchedSite[] = [
  {
    site: "bunshaw.com",
    url: "https://www.bunshaw.com",
    industry: "Food & Restaurant",
    scope: "Website development, brand creative and ordering experience",
    note: "A fast, conversion-focused restaurant site with menu, deals and direct ordering built around the Bun Shaw brand.",
    image: previewBunshaw.url,
    alt: "Homepage preview of bunshaw.com showing the Taste the Legend hero and 14% discount campaign",
  },
  {
    site: "aapoolservicespk.com",
    url: "https://www.aapoolservicespk.com",
    industry: "Swimming Pool Construction & Maintenance",
    scope: "Website development, service architecture and on-page SEO",
    note: "A nationwide pool services site structured around construction, maintenance and renovation, with clear trust signals and enquiry paths.",
    image: previewAaPool.url,
    alt: "Homepage preview of aapoolservicespk.com showing the services grid and company introduction",
  },
  {
    site: "aaarentacar.pk",
    url: "https://aaarentacar.pk",
    industry: "Car Rental & Transport",
    scope: "On-page SEO — completed and handed over",
    note: "A completed on-page SEO engagement covering titles, meta, headings, internal linking and service-page structure for Karachi rental searches.",
    image: previewAaaRentACar.url,
    alt: "Homepage preview of aaarentacar.pk showing the booking form and fleet statistics",
  },
  {
    site: "islamabadtensile.com",
    url: "https://islamabadtensile.com",
    industry: "Tensile & Shade Structures",
    scope: "Website development, product catalogue and brand presentation",
    note: "A catalogue-driven site for tensile and shade structures, with category browsing, project galleries and quote requests throughout.",
    image: previewIslamabadTensile.url,
    alt: "Homepage preview of islamabadtensile.com showing the hero slider and shade structure categories",
  },
  {
    site: "safelinktecnologies.com",
    url: "https://www.safelinktecnologies.com",
    industry: "Security Systems — Electric Fencing, CCTV & Automation",
    scope: "Website development, on-page SEO and ongoing optimisation",
    note: "A security-installation site built to convert: clear service positioning, prominent quote and call actions, and a maintained content rhythm.",
    image: previewSafelink.url,
    alt: "Homepage preview of safelinktecnologies.com showing the security services hero and free quote actions",
  },
  {
    site: "cruiserentacar.pk",
    url: "https://www.cruiserentacar.pk",
    industry: "Car Rental Services",
    scope: "Website development, branding and SEO",
    note: "A premium rental site with a browsable fleet, per-vehicle detail pages and instant booking actions on every card.",
    image: previewCruise.url,
    alt: "Preview of cruiserentacar.pk showing the top vehicles grid with booking actions",
  },
];