import { Link, createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/ui-kit/reveal";
import { Section } from "@/components/ui-kit/section";
import { posts } from "@/data/blog";
import { canonical, pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: pageMeta({
      title: "Blog | Web, SEO & AI Insights for Businesses — Global Web Experts",
      description:
        "Practical articles on websites, SEO, Google Business Profile, social media and AI automation for businesses in Pakistan and international markets.",
      path: "/blog",
    }),
    links: canonical("/blog"),
  }),
  component: BlogIndex,
});

function BlogIndex() {
  return (
    <>
      <Section className="border-b border-border grid-lines">
        <p className="eyebrow">Insights</p>
        <h1 className="mt-4 max-w-3xl text-balance font-display text-4xl font-extrabold leading-[1.05] sm:text-5xl">
          Writing for business owners, not for algorithms
        </h1>
      </Section>
      <Section>
        <div className="grid gap-4 md:grid-cols-2">
          {posts.map((post, i) => (
            <Reveal key={post.slug} delay={i * 60}>
              <Link
                to="/blog/$slug"
                params={{ slug: post.slug }}
                className="flex h-full flex-col rounded-sm border border-border bg-surface p-6 transition-all hover:-translate-y-1 hover:border-accent/60"
              >
                <p className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-accent">
                  {post.category} · {post.publishedLabel} · {post.readingTime}
                </p>
                <h2 className="mt-3 font-display text-lg font-bold leading-snug">{post.title}</h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {post.excerpt}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}