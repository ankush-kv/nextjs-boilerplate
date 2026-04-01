import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const inquiries = [
  { id: "1", name: "John Doe", email: "john@example.com", subject: "Partnership inquiry", status: "Pending", date: "Mar 28, 2026" },
  { id: "2", name: "Jane Smith", email: "jane@example.com", subject: "Technical support", status: "Replied", date: "Mar 27, 2026" },
  { id: "3", name: "Mike Johnson", email: "mike@example.com", subject: "Pricing question", status: "Pending", date: "Mar 26, 2026" },
  { id: "4", name: "Sarah Wilson", email: "sarah@example.com", subject: "Feature request", status: "Closed", date: "Mar 25, 2026" },
  { id: "5", name: "Tom Brown", email: "tom@example.com", subject: "Bug report", status: "Replied", date: "Mar 24, 2026" },
];

export default function InquiriesPage() {
  return (
    <div className="space-y-6 p-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Inquiries</h1>
        <p className="text-muted-foreground">View and manage contact form submissions.</p>
      </div>

      <Separator />

      <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Subject</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Date</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {inquiries.map((inquiry) => (
              <TableRow key={inquiry.id}>
                <TableCell className="font-medium">{inquiry.name}</TableCell>
                <TableCell className="text-muted-foreground">{inquiry.email}</TableCell>
                <TableCell>{inquiry.subject}</TableCell>
                <TableCell>
                  <Badge
                    variant={
                      inquiry.status === "Pending" ? "default" :
                      inquiry.status === "Replied" ? "secondary" :
                      "outline"
                    }
                  >
                    {inquiry.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-muted-foreground">{inquiry.date}</TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button variant="outline" size="sm">View</Button>
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
