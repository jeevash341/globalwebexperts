import { site } from "@/data/site";

export const defaultOgImage = `${site.url}/assets/og-image.jpg`;

export function pageMeta({
  title,
  description,
  path,
  type = "website",
  image = defaultOgImage,
}: {
  title: string;
  description: string;
  path: string;
  type?: string;
  image?: string;
}) {
  const meta: Array<Record<string, string>> = [
    { title },
    { name: "description", content: description },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: type },
    { property: "og:url", content: path },
    { property: "og:site_name", content: site.name },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
  ];
  const absoluteImage = image.startsWith("http") ? image : `${site.url}${image}`;
  meta.push({ property: "og:image", content: absoluteImage });
  meta.push({ name: "twitter:image", content: absoluteImage });
  return meta;
}

export const canonical = (path: string) => [{ rel: "canonical", href: path }];

export const breadcrumbLd = (items: { name: string; item: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((it, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: it.name,
    item: `${site.url}${it.item}`,
  })),
});