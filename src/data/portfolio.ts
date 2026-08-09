import proofAaPool from "@/assets/proof-aapool.asset.json";
import proofSudais from "@/assets/proof-sudais.asset.json";
import proofSafelinkIg from "@/assets/proof-safelink-ig.asset.json";
import proofSafelinkTt from "@/assets/proof-safelink-tt.asset.json";
import proofSafelinkFb from "@/assets/proof-safelink-fb.asset.json";

export type Metric = {
  value: string;
  label: string;
  platform: string;
  source: string;
  numeric?: number;
  suffix?: string;
  prefix?: string;
};

export type ProofShot = {
  url: string;
  alt: string;
  caption: string;
};

export type Project = {
  slug: string;
  name: string;
  industry: string;
  categories: string[];
  summary: string;
  challenge: string[];
  approach: string[];
  execution: string[];
  servicesDelivered: string[];
  metrics: Metric[];
  proof: ProofShot[];
  resultsNote: string;
  metaTitle: string;
  metaDescription: string;
};

export const portfolioFilters = [
  "All",
  "Web Development",
  "Branding",
  "SEO & Digital Growth",
  "Social Media",
  "AI Video",
] as const;

export const projects: Project[] = [
  {
    slug: "safelink-technologies",
    name: "SafeLink Technologies (Pvt) Ltd",
    industry: "Home & Business Security Systems",
    categories: ["Web Development", "Branding", "Social Media"],
    summary:
      "A security systems company with strong field expertise and a limited digital footprint. We built and maintained a multi-platform presence around electric fencing, CCTV, gate and home automation installation.",
    challenge: [
      "SafeLink installs electric fencing, CCTV, gate automation and home automation systems for homes, farms and commercial sites. The technical credibility existed on the ground but was almost invisible online.",
      "Prospective customers researching security suppliers had little to evaluate — no consistent brand presence, no ongoing content and no clear place to see completed work.",
    ],
    approach: [
      "Treat the security category the way a buyer does: risk first, credibility second, price last. Every asset had to prove competence before it asked for a call.",
      "Build one consistent visual system and apply it across the website, Facebook, Instagram and TikTok so the company reads as a single organised business on every platform.",
      "Publish continuously rather than in bursts, using installation footage, equipment explanations and seasonal brand content.",
    ],
    execution: [
      "Brand-consistent creative templates for posts, offers and announcements across all platforms.",
      "Website presence supporting the core services: electric fence, CCTV, gate automation and home automation installation.",
      "Ongoing social media management with a maintained posting rhythm across Facebook, Instagram and TikTok.",
      "Short-form video content built from real installation and equipment footage.",
      "Profile, cover and highlight assets aligned across every channel.",
    ],
    servicesDelivered: [
      "Digital presence & website",
      "Brand and creative design",
      "Social media management",
      "Short-form video content",
      "Digital marketing support",
    ],
    metrics: [
      {
        value: "1.1K",
        label: "Followers",
        platform: "Facebook",
        source: "Client Facebook page",
        numeric: 1.1,
        suffix: "K",
      },
      { value: "360", label: "Posts", platform: "Facebook", source: "Client Facebook page", numeric: 360 },
      { value: "748", label: "Followers", platform: "Instagram", source: "Client Instagram profile", numeric: 748 },
      { value: "363", label: "Posts", platform: "Instagram", source: "Client Instagram profile", numeric: 363 },
      { value: "15", label: "Followers", platform: "TikTok", source: "Client TikTok profile", numeric: 15 },
      { value: "321", label: "Likes", platform: "TikTok", source: "Client TikTok profile", numeric: 321 },
    ],
    proof: [
      {
        url: proofSafelinkFb.url,
        alt: "SafeLink Technologies Facebook page showing 1.1K followers and 360 posts",
        caption: "Facebook — 1.1K followers, 360 posts",
      },
      {
        url: proofSafelinkIg.url,
        alt: "SafeLink Technologies Instagram profile showing 748 followers and 363 posts",
        caption: "Instagram — 748 followers, 363 posts",
      },
      {
        url: proofSafelinkTt.url,
        alt: "SafeLink Technologies TikTok profile showing 15 followers and 321 likes",
        caption: "TikTok — 15 followers, 321 likes",
      },
    ],
    resultsNote:
      "Figures shown are the client's own platform statistics at the time of capture. They represent SafeLink Technologies' audience, not Global Web Experts' audience.",
    metaTitle: "SafeLink Technologies Case Study | Global Web Experts",
    metaDescription:
      "How Global Web Experts built a consistent multi-platform digital footprint for SafeLink Technologies (Pvt) Ltd across website, Facebook, Instagram and TikTok.",
  },
  {
    slug: "quetta-sudais-2d",
    name: "Quetta Sudais 2D Car Service & Rental Company",
    industry: "Car Rental, Cargo & Transport Services",
    categories: ["Web Development", "Social Media", "AI Video"],
    summary:
      "A car rental, cargo and transport business serving routes across Pakistan. We built a video-led digital presence around real journeys, real fleet and clearly published contact routes.",
    challenge: [
      "Quetta Sudais 2D operates car rental, cargo and transport services on long-distance routes including Quetta, Karachi, Islamabad, Peshawar and Multan.",
      "Transport is a trust purchase made quickly, often on a phone. The business needed a presence that showed the actual fleet and drivers, and that made contacting them immediate.",
    ],
    approach: [
      "Lead with footage of real vehicles, real routes and real journeys rather than stock imagery, because customers are judging condition and reliability.",
      "Use YouTube as the primary content engine, with short-form video repurposed across other channels.",
      "Put contact numbers on the content itself, since most enquiries arrive by phone or WhatsApp rather than through a form.",
    ],
    execution: [
      "YouTube channel content strategy and consistent short-form publishing.",
      "Route, fleet and service content produced from real footage.",
      "Branded titles, covers and on-screen contact overlays.",
      "Website and digital presence supporting rental, cargo and transport enquiries.",
      "Ongoing digital marketing and channel management.",
    ],
    servicesDelivered: [
      "YouTube channel management",
      "Short-form video content",
      "Website & digital presence",
      "Brand creative",
      "Digital marketing",
    ],
    metrics: [
      {
        value: "2.47K",
        label: "Subscribers",
        platform: "YouTube",
        source: "Client YouTube channel",
        numeric: 2.47,
        suffix: "K",
      },
      {
        value: "1M+",
        label: "Views",
        platform: "YouTube",
        source: "Client YouTube channel",
        numeric: 1,
        suffix: "M+",
      },
    ],
    proof: [
      {
        url: proofSudais.url,
        alt: "Quetta Sudais 2D Car Service YouTube channel showing 2.47K subscribers",
        caption: "YouTube — 2.47K subscribers, 1M+ views",
      },
    ],
    resultsNote:
      "Figures shown are the client's own YouTube channel statistics. They represent Quetta Sudais 2D Car Service & Rental Company's audience, not Global Web Experts' audience.",
    metaTitle: "Quetta Sudais 2D Car Service Case Study | Global Web Experts",
    metaDescription:
      "A video-led digital presence for Quetta Sudais 2D Car Service & Rental Company — YouTube content strategy, website and marketing across Pakistani transport routes.",
  },
  {
    slug: "aa-pool-service",
    name: "AA Pool Service",
    industry: "Swimming Pool Design, Construction & Maintenance",
    categories: ["Social Media", "AI Video", "Web Development"],
    summary:
      "A swimming pool construction and maintenance company whose finished work is inherently visual. We turned completed projects into a continuous video-led content engine.",
    challenge: [
      "AA Pool Service designs, builds and maintains swimming pools for residential and commercial clients. The finished work is impressive but was mostly seen only by the people who commissioned it.",
      "Pool construction is a high-consideration purchase. Buyers want to see finished builds, water features, lighting and workmanship before they enquire.",
    ],
    approach: [
      "Convert completed projects into short-form video: process, reveal and detail shots of finished pools, waterfalls and lighting.",
      "Publish consistently so the back catalogue keeps earning views long after each project ends.",
      "Carry branding and the website address into the content so viewers know who to contact.",
    ],
    execution: [
      "YouTube Shorts content programme built from completed pool projects.",
      "Branded overlays, covers and on-screen website reference.",
      "Digital presence and marketing support across channels.",
      "Content series formats such as project reveals and 'design to reality' cuts.",
    ],
    servicesDelivered: [
      "YouTube channel management",
      "Short-form video content",
      "Digital presence & marketing",
      "Brand creative",
    ],
    metrics: [
      {
        value: "3.19K",
        label: "Subscribers",
        platform: "YouTube",
        source: "Client YouTube channel",
        numeric: 3.19,
        suffix: "K",
      },
      {
        value: "2M+",
        label: "Views",
        platform: "YouTube",
        source: "Client YouTube channel",
        numeric: 2,
        suffix: "M+",
      },
    ],
    proof: [
      {
        url: proofAaPool.url,
        alt: "AA Pool Service YouTube channel showing 3.19K subscribers",
        caption: "YouTube — 3.19K subscribers, 2M+ views",
      },
    ],
    resultsNote:
      "Figures shown are the client's own YouTube channel statistics. They represent AA Pool Service's audience, not Global Web Experts' audience.",
    metaTitle: "AA Pool Service Case Study | Global Web Experts",
    metaDescription:
      "How Global Web Experts turned completed swimming pool projects into a consistent video-led YouTube presence for AA Pool Service.",
  },
];

export const projectBySlug = (slug: string) => projects.find((p) => p.slug === slug);