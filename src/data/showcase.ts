import logoAsadKhan from "@/assets/logo-asadkhan.jpg.asset.json";
import logoAlMuzzamil from "@/assets/logo-almuzzamil.jpg.asset.json";
import logoNaseeb from "@/assets/logo-naseeb.jpg.asset.json";
import logoKpk from "@/assets/logo-kpk.jpg.asset.json";
import posterBunshaw from "@/assets/poster-bunshaw.jpg.asset.json";
import posterPoolPride from "@/assets/poster-poolpride.jpg.asset.json";
import posterAaPool from "@/assets/poster-aapool.jpg.asset.json";
import posterAaPoolStore from "@/assets/poster-aapool-storefront.jpg.asset.json";
import aiVideo1 from "@/assets/ai-video-1.mp4.asset.json";
import aiVideo2 from "@/assets/ai-video-2.mp4.asset.json";

export type ShowcaseItem = {
  id: string;
  title: string;
  meta: string;
  note: string;
  url: string;
  alt: string;
  link?: string;
};

export const logoDesigns: ShowcaseItem[] = [
  {
    id: "asad-khan-enterprises",
    title: "Asad Khan Enterprises",
    meta: "Construction & Heavy Machinery",
    note: "Emblem-style logo built around excavation and haulage equipment, with a bold navy and gold wordmark for signage and vehicle branding.",
    url: logoAsadKhan.url,
    alt: "Asad Khan Enterprises logo with excavator and dump truck in navy and gold",
  },
  {
    id: "al-muzzamil-rent-a-car",
    title: "Al Muzzamil Rent A Car",
    meta: "Car Rental",
    note: "Premium gold-on-black identity with a sculpted car silhouette, badge lockup and steering-wheel crest for a luxury rental brand.",
    url: logoAlMuzzamil.url,
    alt: "Al Muzzamil Rent A Car gold and black logo",
  },
  {
    id: "naseeb-rent-a-car",
    title: "Naseeb Rent A Car",
    meta: "Premium Travel & VIP Transport",
    note: "Circular gold seal combining a winged monogram, fleet line-up and service promises for a VIP travel operator.",
    url: logoNaseeb.url,
    alt: "Naseeb Rent A Car circular gold logo with fleet vehicles",
  },
  {
    id: "kpk-rent-a-car",
    title: "KPK Rent A Car",
    meta: "Regional Car Rental — Peshawar",
    note: "Regional identity built on the northern landscape and open road, with the fleet shown directly in the mark for instant recognition.",
    url: logoKpk.url,
    alt: "KPK Rent A Car logo with mountains, road and fleet vehicles",
  },
];

export const posterDesigns: ShowcaseItem[] = [
  {
    id: "bunshaw-summer",
    title: "Bun Shaw — Summer Campaign",
    meta: "Food & Restaurant",
    note: "Seasonal campaign poster pairing appetite-led photography with clear contact and website calls to action.",
    url: posterBunshaw.url,
    alt: "Bun Shaw summer campaign poster with burger and loaded fries",
  },
  {
    id: "pool-pride",
    title: "Pool Pride — Service Poster",
    meta: "Swimming Pool Services",
    note: "Service breakdown layout with branded vehicle mock-up, on-site imagery and a satisfaction guarantee badge.",
    url: posterPoolPride.url,
    alt: "Pool Pride complete pool care service poster",
  },
  {
    id: "aa-pool-products",
    title: "AA Pool Service — Product Catalogue Poster",
    meta: "Pool Construction & Equipment",
    note: "Dense catalogue poster covering construction, renovation, maintenance and equipment ranges with a wholesale offer block.",
    url: posterAaPool.url,
    alt: "AA Pool Service poster showing pool solutions and product ranges",
  },
  {
    id: "aa-pool-storefront",
    title: "AA Pool Service — Storefront Branding",
    meta: "Retail & Signage",
    note: "Storefront and signage visual establishing the retail identity, service lines and contact details in one frame.",
    url: posterAaPoolStore.url,
    alt: "AA Pool Service branded storefront with signage and product display",
  },
];

export const aiVideos = [
  {
    id: "ai-video-1",
    title: "AI Brand Video — Concept 1",
    meta: "AI Video Production",
    note: "AI-generated brand video produced for client campaign use across social channels.",
    url: aiVideo1.url,
  },
  {
    id: "ai-video-2",
    title: "AI Brand Video — Concept 2",
    meta: "AI Video Production",
    note: "AI-generated promotional video built for short-form placement and paid distribution.",
    url: aiVideo2.url,
  },
];
