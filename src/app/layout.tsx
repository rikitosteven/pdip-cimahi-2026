import "./globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import ScrollProgress from "@/components/layout/ScrollProgress";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "PDIP Kota Cimahi",
  description: "Platform progresif dan transparan PDIP Kota Cimahi.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body
        className={`${inter.variable} font-sans bg-white text-[#111] antialiased`}
      >
        <ScrollProgress />
        <Navbar />
        <div className="pt-24">{children}</div>
      </body>
    </html>
  );
}