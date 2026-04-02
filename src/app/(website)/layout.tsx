import { Navbar } from "@/components/website/navbar";
import { Footer } from "@/components/website/footer";

export default function WebsiteLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-primary/10 via-background to-accent/10">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
