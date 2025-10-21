import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import FloatingDonationBar from "@/components/FloatingDonationBar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Moazzem Labs - Innovation with Integrity",
  description: "Building technology that serves communities through innovative, respectful digital solutions. Specializing in mobile apps, web platforms, and privacy-first design.",
  keywords: ["Moazzem Labs", "Innovation with Integrity", "Mobile App Development", "Web Development", "Community Technology", "Privacy-First Design"],
  authors: [{ name: "Sadik Moazzem" }],
  creator: "Sadik Moazzem",
  openGraph: {
    title: "Moazzem Labs - Innovation with Integrity",
    description: "Building technology that serves communities through innovative, respectful digital solutions.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} font-sans antialiased`}
      >
        {children}
        <FloatingDonationBar />
      </body>
    </html>
  );
}
