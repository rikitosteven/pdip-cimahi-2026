import "./globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import ScrollProgress from "@/components/layout/ScrollProgress";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import PageFade from "@/components/ui/PageFade";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pdip-cimahi-2026.vercel.app"),

  title: "PDIP Kota Cimahi",
  description: "Platform progresif dan transparan PDIP Kota Cimahi.",

  openGraph: {
    title: "PDIP Kota Cimahi",
    description: "Gerakan progresif untuk masa depan Cimahi.",
    url: "https://pdip-cimahi-2026.vercel.app",
    siteName: "PDIP Kota Cimahi",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "id_ID",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "PDIP Kota Cimahi",
    description: "Gerakan progresif untuk masa depan Cimahi.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body
        className={`${inter.variable} font-sans antialiased bg-white text-[#111] dark:bg-black dark:text-white transition-colors duration-500`}
      >
        <ThemeProvider>
          <ScrollProgress />
          <Navbar />
          <PageFade>
            <div className="pt-24">{children}</div>
          </PageFade>
        </ThemeProvider>

        {/* Structured Data */}
        <Script
          id="ld-json"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "PDIP Kota Cimahi",
              url: "https://pdip-cimahi-2026.vercel.app",
              logo: "https://pdip-cimahi-2026.vercel.app/logo.png",
            }),
          }}
        />
      </body>
    </html>
  );
}