import type { Metadata } from "next";
import { Inter } from "next/font/google";
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

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/logo.png",
  },

  openGraph: {
    title: "SG Fragrance House",
    description: "Experience the essence of aroma and flavour",
    url: "https://sgfrag.com",
    siteName: "SG Fragrance House",

    images: [
      {
        url: "/logo.png",
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
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "SG Fragrance House",
              url: "https://yourdomain.com",
              logo: "https://yourdomain.com/logo.png",
            }),
          }}
        />
        <Toaster position="top-right" />
        {children}
      </body>
    </html>
  );
}