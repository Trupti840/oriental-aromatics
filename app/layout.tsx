import type { Metadata } from "next";
import { Inter } from "next/font/google";
// @ts-ignore
import "./globals.css";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://sgfrag.com"),

  title: "SG Fragrance House",
  description:
    "Leading manufacturer of aroma chemicals, fragrances, flavours and camphor products.",

  keywords: [
    "aroma chemicals",
    "fragrances",
    "flavours",
    "camphor",
    "SG Fragrance House",
  ],

  // ✅ FIXED ICONS (important for Google favicon)
  icons: {
    icon: "/favicon.png", // <-- change this
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },

  openGraph: {
    title: "SG Fragrance House",
    description: "Experience the essence of aroma and flavour",
    url: "https://sgfrag.com",
    siteName: "SG Fragrance House",

    images: [
      {
        url: "https://sgfrag.com/logo.png", // ✅ FULL URL (important)
        width: 1200,
        height: 630,
        alt: "SG Fragrance House",
      },
    ],

    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* ✅ MOVE SCRIPT INTO HEAD (IMPORTANT FIX) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "SG Fragrance House",
              url: "https://sgfrag.com",
              logo: "https://sgfrag.com/logo.png",
            }),
          }}
        />
      </head>

      <body className={inter.className}>
        <Toaster position="top-right" />
        {children}
      </body>
    </html>
  );
}
