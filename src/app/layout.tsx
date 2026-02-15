import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // BARIS INI YANG BIKIN TERMINAL BERSIH DARI WARNING KUNING
  metadataBase: new URL('http://localhost:3000'), 
  title: 'PDIP CIMAHI | SIKAT HABIS!',
  description: 'Waktunya anak muda turun tangan. Spill aspirasi lo untuk Cimahi Reborn 2026.',
  openGraph: {
    title: 'PDIP CIMAHI - GERAKAN ANAK MUDA',
    description: 'Aksi nyata bukan drama. Klik untuk kirim aspirasi!',
    images: ['/og-image.jpg'],
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}