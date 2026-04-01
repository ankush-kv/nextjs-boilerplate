import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const stats = [
  { title: "Total Users", value: "1,234", description: "+12% from last month" },
  { title: "Total Blogs", value: "56", description: "+3 new this week" },
  { title: "Inquiries", value: "23", description: "5 pending" },
  { title: "Page Views", value: "45.2K", description: "+8% from last month" },
];

export default function DashboardPage() {
  return (
    <div className="space-y-6 p-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">Overview of your application metrics.</p>
      </div>

      <Separator />

      {/* Stats Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="pb-2">
              <CardDescription>{stat.title}</CardDescription>
              <CardTitle className="text-3xl">{stat.value}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground">{stat.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="grid gap-4 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Recent Blogs</CardTitle>
            <CardDescription>Latest blog posts published.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {["Getting Started with Next.js", "Tailwind CSS Tips", "React Best Practices"].map((title) => (
                <div key={title} className="flex items-center justify-between border-b pb-3 last:border-0 last:pb-0">
                  <span className="text-sm font-medium">{title}</span>
                  <span className="text-xs text-muted-foreground">Published</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Inquiries</CardTitle>
            <CardDescription>Latest messages from users.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { name: "John Doe", subject: "Partnership inquiry" },
                { name: "Jane Smith", subject: "Technical support" },
                { name: "Mike Johnson", subject: "Pricing question" },
              ].map((inquiry) => (
                <div key={inquiry.name} className="flex items-center justify-between border-b pb-3 last:border-0 last:pb-0">
                  <div>
                    <p className="text-sm font-medium">{inquiry.name}</p>
                    <p className="text-xs text-muted-foreground">{inquiry.subject}</p>
                  </div>
                  <span className="text-xs text-muted-foreground">Pending</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
