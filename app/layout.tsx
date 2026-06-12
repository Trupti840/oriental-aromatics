import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://sgfrag.com"),

  title: {
    default: "SG Fragrance House",
    template: "%s | SG Fragrance House",
  },

  applicationName: "SG Fragrance House",

  description:
    "Leading manufacturer of aroma chemicals, fragrances, flavours and camphor products.",

  keywords: [
    "aroma chemicals",
    "fragrances",
    "flavours",
    "camphor",
    "SG Fragrance House",
  ],

  // ✅ Favicon setup
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },

  // ✅ Canonical (IMPORTANT for SEO)
  alternates: {
    canonical: "https://sgfrag.com",
  },

  openGraph: {
    title: "SG Fragrance House",
    description: "Experience the essence of aroma and flavour",
    url: "https://sgfrag.com",
    siteName: "SG Fragrance House",

    images: [
      {
        url: "https://sgfrag.com/logo.png",
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
        {/* ✅ Website Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "SG Fragrance House",
              alternateName: "SG Frag",
              url: "https://sgfrag.com",
            }),
          }}
        />

        {/* ✅ Organization Schema (Logo for Google) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "SG Fragrance House",
              url: "https://sgfrag.com",
              logo: "https://sgfrag.com/logo.png",
              sameAs: [
                "https://www.instagram.com/YOUR_REAL_PAGE",
                "https://www.linkedin.com/company/YOUR_REAL_PAGE",
              ],
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
