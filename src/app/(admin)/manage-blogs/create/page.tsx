import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";

export default function CreateBlogPage() {
  return (
    <div className="space-y-6 p-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Create Blog</h1>
          <p className="text-muted-foreground">Write a new blog post.</p>
        </div>
        <Button asChild variant="outline">
          <Link href="/manage-blogs">&larr; Back to Blogs</Link>
        </Button>
      </div>

      <Separator />

      <Card>
        <CardHeader>
          <CardTitle>Blog Details</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="title">Title</Label>
              <Input id="title" placeholder="Enter blog title" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="slug">Slug</Label>
              <Input id="slug" placeholder="enter-blog-slug" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="category">Category</Label>
              <Input id="category" placeholder="e.g. Tutorial, React, CSS" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="excerpt">Excerpt</Label>
              <Textarea id="excerpt" placeholder="Brief description of the blog post..." rows={3} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="content">Content</Label>
              <Textarea id="content" placeholder="Write your blog content here..." rows={12} />
            </div>
            <div className="flex gap-3">
              <Button type="submit">Publish</Button>
              <Button type="button" variant="outline">Save as Draft</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
