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
import posterSafelinkCctv from "@/assets/poster-safelink-cctv.jpg.asset.json";
import posterSafelinkLahore from "@/assets/poster-safelink-lahore.jpg.asset.json";
import posterSafelinkBillboard from "@/assets/poster-safelink-billboard.jpg.asset.json";
import posterSafelinkRashid from "@/assets/poster-safelink-review-rashid.jpg.asset.json";
import posterSafelinkRizwan from "@/assets/poster-safelink-review-rizwan.jpg.asset.json";
import posterMuharram from "@/assets/poster-gwe-muharram.jpg.asset.json";
import billbookMalik from "@/assets/billbook-malik.jpg.asset.json";
import cardMalik from "@/assets/visitingcard-malik.jpg.asset.json";

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
  {
    id: "safelink-cctv",
    title: "SafeLink Technologies — CCTV Service Poster",
    meta: "Security Systems",
    note: "Offer-led social poster built around the CCTV service line, with discount call-out, QR code and direct contact block.",
    url: posterSafelinkCctv.url,
    alt: "SafeLink Technologies CCTV service poster with 50% discount offer",
  },
  {
    id: "safelink-lahore",
    title: "SafeLink Technologies — Lahore Launch Poster",
    meta: "Brand Campaign",
    note: "Premium launch announcement poster presenting the full security service range in a black and gold skyline treatment.",
    url: posterSafelinkLahore.url,
    alt: "SafeLink Technologies Now Open in Lahore launch poster",
  },
  {
    id: "safelink-billboard",
    title: "SafeLink Technologies — Billboard Creative",
    meta: "Outdoor Advertising",
    note: "Large-format billboard concept pairing the leadership portrait with service icons and a single trusted-partner message.",
    url: posterSafelinkBillboard.url,
    alt: "SafeLink Technologies billboard creative mock-up on a city highway",
  },
  {
    id: "safelink-review-rashid",
    title: "SafeLink Technologies — Review Post (Rashid Sheikh)",
    meta: "Social Proof Creative",
    note: "Customer review template turning verified feedback into a clean, branded social post with service trust badges.",
    url: posterSafelinkRashid.url,
    alt: "SafeLink Technologies customer review poster for Rashid Sheikh",
  },
  {
    id: "safelink-review-rizwan",
    title: "SafeLink Technologies — Review Post (Rizwan Ali)",
    meta: "Social Proof Creative",
    note: "Google review creative in the same template system, keeping testimonial posts instantly recognisable in the feed.",
    url: posterSafelinkRizwan.url,
    alt: "SafeLink Technologies Google review poster for Rizwan Ali",
  },
  {
    id: "gwe-muharram",
    title: "Global Web Experts — Muharram Greeting",
    meta: "Occasion Campaign",
    note: "In-house occasion creative using the brand palette, arch motif and a WhatsApp QR for direct enquiries.",
    url: posterMuharram.url,
    alt: "Global Web Experts Muharram greeting poster",
  },
];

export const stationeryDesigns: ShowcaseItem[] = [
  {
    id: "malik-billbook",
    title: "Malik Rent A Car — Bill Book & Cash Memo",
    meta: "Print & Stationery Design",
    note: "Print-ready bill book and cash memo layout with rental booking fields, itemised billing table and signature blocks.",
    url: billbookMalik.url,
    alt: "Malik Rent A Car bill book and cash memo design in navy and gold",
  },
  {
    id: "malik-visiting-card",
    title: "Malik Car Rentals — Visiting Card",
    meta: "Print & Stationery Design",
    note: "Double-sided visiting card design with the crest logo, contact stack and premium gold-on-navy finish.",
    url: cardMalik.url,
    alt: "Malik Car Rentals visiting card design with gold crest logo",
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
