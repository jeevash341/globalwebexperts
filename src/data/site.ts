export const site = {
  name: "Global Web Experts",
  legalName: "Global Web Experts Digital Service",
  domain: "globalwebexperts.online",
  url: "https://globalwebexperts.online",
  tagline: "Building Digital Futures, Empowering Lives.",
  positioning: "Everything Your Business Needs to Build, Grow & Scale Digitally.",
  founded: 2022,
  founder: "Jeevash Khatri",
  founderRole: "CEO & Founder",
  phoneDisplay: "0334-3215006",
  phoneIntl: "+923343215006",
  whatsapp: "923343215006",
  email: "globalwebexpertspk@gmail.com",
  hours: "9:00 AM – 5:00 PM",
  address: {
    line1: "House No. A-194, Gulshan-e-Hadeed, Phase 1",
    line2: "Bin Qasim Town",
    city: "Karachi",
    postalCode: "75010",
    region: "Sindh",
    country: "Pakistan",
  },
  maps: "https://maps.app.goo.gl/",
  socials: {
    facebook: "https://www.facebook.com/profile.php?id=61586366641641",
    instagram: "https://www.instagram.com/globalwebexpertspk",
    tiktok: "https://www.tiktok.com/@jeevash.khatri",
  },
} as const;

export const addressOneLine = `${site.address.line1}, ${site.address.line2}, ${site.address.city}, ${site.address.postalCode}, ${site.address.country}`;

export const mapsSearchUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${site.legalName}, ${addressOneLine}`,
)}`;

export const mapsEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(
  addressOneLine,
)}&output=embed`;

export const whatsappUrl = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
  "Hello Global Web Experts, I'd like to discuss a project.",
)}`;

export const mailtoUrl = `mailto:${site.email}?subject=${encodeURIComponent(
  "Project enquiry — Global Web Experts",
)}`;

export const telUrl = `tel:${site.phoneIntl}`;

export const primaryNav = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Results", to: "/results" },
  { label: "Testimonials", to: "/testimonials" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
] as const;