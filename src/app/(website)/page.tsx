import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center gap-6 py-24 px-4 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
          Welcome to Our Platform
        </h1>
        <p className="max-w-2xl text-lg text-muted-foreground">
          A modern web application built with Next.js, Tailwind CSS, and shadcn/ui components.
        </p>
        <div className="flex gap-4">
          <Button asChild size="lg">
            <Link href="/about">Learn More</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/contact-us">Contact Us</Link>
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-8 text-center text-3xl font-bold">Features</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Fast", description: "Built on Next.js for optimal performance and speed." },
              { title: "Modern", description: "Uses the latest technologies and best practices." },
              { title: "Scalable", description: "Designed to grow with your business needs." },
            ].map((feature) => (
              <Card key={feature.title}>
                <CardHeader>
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 text-center">
        <Card className="mx-auto max-w-2xl">
          <CardHeader>
            <CardTitle className="text-2xl">Ready to Get Started?</CardTitle>
            <CardDescription>Check out our latest blog posts or get in touch with us.</CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center gap-4">
            <Button asChild>
              <Link href="/blogs">Read Blogs</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/contact-us">Contact Us</Link>
            </Button>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
