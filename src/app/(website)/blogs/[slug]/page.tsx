import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const title = slug.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");

  return (
    <div className="min-h-screen py-16 px-4">
      <div className="mx-auto max-w-3xl">
        <Button asChild variant="ghost" className="mb-6">
          <Link href="/blogs">&larr; Back to Blogs</Link>
        </Button>

        <Badge variant="secondary">Tutorial</Badge>
        <h1 className="mt-4 text-4xl font-bold tracking-tight">{title}</h1>
        <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
          <span>By John Doe</span>
          <span>&middot;</span>
          <span>Mar 25, 2026</span>
          <span>&middot;</span>
          <span>5 min read</span>
        </div>

        <Separator className="my-8" />

        <article className="prose prose-stone max-w-none space-y-6">
          <p className="text-muted-foreground leading-7">
            This is a placeholder for the blog post content. Replace this with actual content
            fetched from your CMS or database. The blog detail page supports rich text content
            with proper typography and spacing.
          </p>
          <p className="text-muted-foreground leading-7">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p className="text-muted-foreground leading-7">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </article>

        <Separator className="my-8" />

        <div className="flex justify-between">
          <Button asChild variant="outline">
            <Link href="/blogs">&larr; All Posts</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
