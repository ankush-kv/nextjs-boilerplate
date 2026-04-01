import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/admin/sidebar";
import { AdminNavbar } from "@/components/admin/navbar";
import { AdminFooter } from "@/components/admin/footer";

export default function AdminLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <AdminNavbar />
        <main className="flex-1">{children}</main>
        <AdminFooter />
      </SidebarInset>
    </SidebarProvider>
  );
}
