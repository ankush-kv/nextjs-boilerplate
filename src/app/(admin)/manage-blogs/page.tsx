import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const blogs = [
  { id: "1", title: "Getting Started with Next.js", status: "Published", category: "Tutorial", date: "Mar 25, 2026" },
  { id: "2", title: "Tailwind CSS Best Practices", status: "Published", category: "CSS", date: "Mar 20, 2026" },
  { id: "3", title: "React Server Components", status: "Draft", category: "React", date: "Mar 15, 2026" },
  { id: "4", title: "Building Scalable APIs", status: "Published", category: "Backend", date: "Mar 10, 2026" },
  { id: "5", title: "TypeScript Advanced Patterns", status: "Draft", category: "TypeScript", date: "Mar 5, 2026" },
];

export default function AdminBlogsPage() {
  return (
    <div className="space-y-6 p-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Blogs</h1>
          <p className="text-muted-foreground">Manage your blog posts.</p>
        </div>
        <Button asChild>
          <Link href="/manage-blogs/create">Create Blog</Link>
        </Button>
      </div>

      <Separator />

      <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Date</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {blogs.map((blog) => (
              <TableRow key={blog.id}>
                <TableCell className="font-medium">{blog.title}</TableCell>
                <TableCell>
                  <Badge variant="secondary">{blog.category}</Badge>
                </TableCell>
                <TableCell>
                  <Badge variant={blog.status === "Published" ? "default" : "outline"}>
                    {blog.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-muted-foreground">{blog.date}</TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button asChild variant="outline" size="sm">
                      <Link href={`/manage-blogs/${blog.id}/edit`}>Edit</Link>
                    </Button>
                    <Button variant="destructive" size="sm">Delete</Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
    </div>
  );
}
