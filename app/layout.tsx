import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SG Fragrance House",
  description:
    "Leading manufacturer of aroma chemicals, fragrances, flavours and camphor products.",
  keywords:
    "aroma chemicals, fragrances, flavours, camphor, oriental aromatics",
  openGraph: {
    title: "SG Fragrance House",
    description: "Experience the essence of aroma and flavour",
    images: "/images/hero-bg.jpg",
    siteName: "SG Fragrance House",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
