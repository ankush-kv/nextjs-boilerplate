import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function AboutPage() {
  return (
    <div className="min-h-screen py-16 px-4">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold tracking-tight">About Us</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Learn more about our mission, values, and the team behind the platform.
        </p>

        <Separator className="my-8" />

        {/* Mission */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-semibold">Our Mission</h2>
          <p className="text-muted-foreground">
            We are dedicated to building modern, scalable web solutions that empower businesses
            and individuals to achieve their goals. Our platform combines cutting-edge technology
            with intuitive design.
          </p>
        </section>

        {/* Values */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-semibold">Our Values</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {[
              { title: "Innovation", description: "We constantly push boundaries and explore new technologies." },
              { title: "Quality", description: "We deliver high-quality solutions that exceed expectations." },
              { title: "Transparency", description: "We believe in open communication and honest relationships." },
              { title: "Community", description: "We foster a supportive and inclusive community." },
            ].map((value) => (
              <Card key={value.title}>
                <CardHeader>
                  <CardTitle>{value.title}</CardTitle>
                  <CardDescription>{value.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        {/* Team */}
        <section>
          <h2 className="mb-6 text-2xl font-semibold">Our Team</h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {[
              { name: "John Doe", role: "CEO & Founder" },
              { name: "Jane Smith", role: "CTO" },
              { name: "Mike Johnson", role: "Lead Designer" },
            ].map((member) => (
              <Card key={member.name}>
                <CardContent className="pt-6 text-center">
                  <div className="mx-auto mb-4 h-20 w-20 rounded-full bg-muted" />
                  <h3 className="font-semibold">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
