import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { Footer } from "@/components/site/footer";
import { Navbar } from "@/components/site/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Dhaka Prime Flips — Verified Secondary Apartments",
    template: "%s — Dhaka Prime Flips",
  },
  description:
    "Dhaka Prime Flips is a premium Dhaka-based real estate trading company focused on verified secondary/resale apartments in prime locations. Buy confidently. Sell faster.",
  applicationName: "Dhaka Prime Flips",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Dhaka Prime Flips — Verified Secondary Apartments",
    description:
      "Premium, trustworthy, conversion-focused platform for buying and selling secondary apartments in prime Dhaka locations.",
    type: "website",
    siteName: "Dhaka Prime Flips",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
