import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const blogs = [
  { slug: "getting-started-with-nextjs", title: "Getting Started with Next.js", description: "Learn how to build modern web applications with Next.js framework.", category: "Tutorial", date: "Mar 25, 2026" },
  { slug: "tailwind-css-best-practices", title: "Tailwind CSS Best Practices", description: "Discover the best practices for using Tailwind CSS in your projects.", category: "CSS", date: "Mar 20, 2026" },
  { slug: "react-server-components", title: "React Server Components Explained", description: "A deep dive into React Server Components and how they work.", category: "React", date: "Mar 15, 2026" },
  { slug: "building-scalable-apis", title: "Building Scalable APIs", description: "Tips and strategies for building APIs that scale with your application.", category: "Backend", date: "Mar 10, 2026" },
  { slug: "typescript-advanced-patterns", title: "TypeScript Advanced Patterns", description: "Explore advanced TypeScript patterns for better type safety.", category: "TypeScript", date: "Mar 5, 2026" },
  { slug: "deployment-strategies", title: "Modern Deployment Strategies", description: "An overview of modern deployment strategies for web applications.", category: "DevOps", date: "Mar 1, 2026" },
];

export default function BlogsPage() {
  return (
    <div className="min-h-screen py-16 px-4">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold tracking-tight">Blog</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Insights, tutorials, and updates from our team.
        </p>

        <Separator className="my-8" />

        <div className="grid gap-6 sm:grid-cols-2">
          {blogs.map((blog) => (
            <Link key={blog.slug} href={`/blogs/${blog.slug}`}>
              <Card className="h-full transition-colors hover:bg-muted/50">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary">{blog.category}</Badge>
                    <span className="text-sm text-muted-foreground">{blog.date}</span>
                  </div>
                  <CardTitle className="mt-2">{blog.title}</CardTitle>
                  <CardDescription>{blog.description}</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
