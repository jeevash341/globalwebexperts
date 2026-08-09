import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { Section } from "@/components/ui-kit/section";
import { postBySlug, posts, type BlogPost } from "@/data/blog";
import { canonical, pageMeta } from "@/lib/seo";
import { site } from "@/data/site";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = postBySlug(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Article not found" }, { name: "robots", content: "noindex" }] };
    }
    const p = loaderData.post;
    return {
      meta: pageMeta({
        title: p.metaTitle,
        description: p.metaDescription,
        path: `/blog/${params.slug}`,
        type: "article",
      }),
      links: canonical(`/blog/${params.slug}`),
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: p.title,
            description: p.metaDescription,
            datePublished: p.published,
            author: { "@type": "Person", name: site.founder },
            publisher: { "@type": "Organization", name: site.name },
          }),
        },
      ],
    };
  },
  component: BlogPostPage,
});

function BlogPostPage() {
  const { post } = Route.useLoaderData() as { post: BlogPost };
  const related = post.related
    .map((slug) => posts.find((p) => p.slug === slug))
    .filter((p): p is BlogPost => Boolean(p));

  return (
    <Section>
      <article className="mx-auto max-w-3xl">
        <nav aria-label="Breadcrumb" className="text-xs text-muted-foreground">
          <Link to="/blog" className="hover:text-foreground">
            Blog
          </Link>{" "}
          / <span className="text-foreground">{post.category}</span>
        </nav>
        <h1 className="mt-5 text-balance font-display text-3xl font-extrabold leading-[1.1] sm:text-4xl">
          {post.h1}
        </h1>
        <p className="mt-3 font-mono text-xs uppercase tracking-[0.16em] text-accent">
          {post.publishedLabel} · {post.readingTime}
        </p>

        <div className="mt-8 space-y-4 text-base leading-relaxed text-muted-foreground">
          {post.intro.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>

        {post.sections.map((s) => (
          <section key={s.heading} className="mt-10">
            {s.level === 2 ? (
              <h2 className="font-display text-2xl font-bold text-foreground">{s.heading}</h2>
            ) : (
              <h3 className="font-display text-xl font-bold text-foreground">{s.heading}</h3>
            )}
            {s.paragraphs?.map((p) => (
              <p key={p} className="mt-4 text-base leading-relaxed text-muted-foreground">
                {p}
              </p>
            ))}
            {s.bullets ? (
              <ul className="mt-4 space-y-2">
                {s.bullets.map((b) => (
                  <li key={b} className="text-base leading-relaxed text-muted-foreground">
                    · {b}
                  </li>
                ))}
              </ul>
            ) : null}
          </section>
        ))}

        <div className="mt-10 space-y-4 border-t border-border pt-8 text-base leading-relaxed text-muted-foreground">
          {post.conclusion.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>

        <div className="mt-8 rounded-sm border border-border bg-surface-2 p-6">
          <h2 className="font-display text-lg font-bold">Want this handled for you?</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Get a free consultation with {site.founder} and a straight answer on what to build first.
          </p>
          <Link
            to="/contact"
            className="mt-4 inline-flex rounded-sm bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
          >
            Book a free consultation
          </Link>
        </div>

        {related.length ? (
          <div className="mt-10">
            <h2 className="font-display text-lg font-bold">Related reading</h2>
            <ul className="mt-3 space-y-2">
              {related.map((r) => (
                <li key={r.slug}>
                  <Link
                    to="/blog/$slug"
                    params={{ slug: r.slug }}
                    className="text-sm font-medium text-accent"
                  >
                    {r.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </article>
    </Section>
  );
}