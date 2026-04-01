import type { Metadata } from "next";
import { Manrope } from "next/font/google";

import { cn } from "@/lib/utils";
import { StoreProvider } from "@/store/provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import "./globals.css";

const manrope = Manrope({ subsets: ['latin'], variable: '--font-sans' });
export const metadata: Metadata = {
  title: "Nextjs boilerplate",
  description: "A boilerplate for Next.js projects with TypeScript, Tailwind CSS, and more.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en" className={cn(manrope.variable, "font-sans")}>
      <body>
        <StoreProvider>
          <TooltipProvider>{children}</TooltipProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
