import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

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
    <html lang="en" className={`${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
