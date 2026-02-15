import type { Metadata, Viewport } from "next"; // Tambahin Viewport di sini
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

// INI KUNCI BIAR DI HP CAKEP
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://pdip-cimahi-2026.vercel.app'), // Ganti localhost ke link vercel lo nanti
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
      >
        {children}
      </body>
    </html>
  );
}