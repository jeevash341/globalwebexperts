import reviewSafelink from "@/assets/review-safelink.asset.json";
import testimonialCruise from "@/assets/testimonial-cruise.asset.json";

export type Testimonial = {
  name: string;
  business: string;
  website?: string;
  websiteUrl?: string;
  project: string;
  services: string[];
  quote: string;
  language?: string;
  audioUrl?: string;
  audioLabel?: string;
  proofImage?: string;
  proofAlt?: string;
  proofCaption?: string;
  videoUrl?: string;
};

/**
 * Verified client testimonials only. Every entry below is backed by a client-supplied
 * voice note or a screenshot of the client's own message.
 */
export const testimonials: Testimonial[] = [
  {
    name: "SafeLink Technologies (Pvt) Ltd",
    business: "Home & Business Security Systems",
    website: "safelinktecnologies.com",
    websiteUrl: "https://www.safelinktecnologies.com",
    project: "Website development, SEO, social media management and ongoing digital support",
    services: [
      "Website development",
      "SEO & digital growth",
      "Social media management",
      "Brand creative",
    ],
    quote:
      "A recorded voice review from the SafeLink Technologies team covering their website, search results and the ongoing social media management we handle for them.",
    language: "Voice note — Urdu",
    audioUrl: reviewSafelink.url,
    audioLabel: "Play the client's voice review",
  },
  {
    name: "Cruise Rent A Car",
    business: "Car Rental Services",
    website: "cruiserentacar.pk",
    websiteUrl: "https://www.cruiserentacar.pk",
    project: "Website development, branding and SEO",
    services: ["Website development", "Branding", "SEO"],
    quote:
      "Asked directly how the delivered website felt to work with, the client replied simply: “G acha ha boht” — yes, it's very good.",
    proofImage: testimonialCruise.url,
    proofAlt:
      "WhatsApp message from the Cruise Rent A Car client replying that the delivered website is very good",
    proofCaption: "Client message — WhatsApp, unedited screenshot",
  },
];