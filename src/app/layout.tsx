import "./globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import ScrollProgress from "@/components/layout/ScrollProgress";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import PageFade from "@/components/ui/PageFade";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pdip-cimahi-modern.vercel.app"), // ganti dengan domain asli nanti

  title: "PDIP Kota Cimahi",
  description: "Platform progresif dan transparan PDIP Kota Cimahi.",

  openGraph: {
    title: "PDIP Kota Cimahi",
    description: "Gerakan progresif untuk masa depan Cimahi.",
    url: "https://pdip-cimahi-modern.vercel.app",
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
      </body>
    </html>
  );
}