import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const manrope = Manrope({subsets:['latin'],variable:'--font-sans'});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Nextjs boilerplate",
  description: "A boilerplate for Next.js projects with TypeScript, Tailwind CSS, and more.",
};

export default function RootLayout({  children}: Readonly<{  children: React.ReactNode;}>) {
  return (
    <html lang="en" className={cn(inter.variable, "font-sans", manrope.variable)}>
      <body>{children}</body>
    </html>
  );
}
