import type { Metadata, Viewport } from "next";
import { Inter, Instrument_Serif, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument",
});

const grotesk = Space_Grotesk({ subsets: ["latin"], weight: "700", variable: "--font-grotesk" });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.moazzemlabs.com"),
  title: {
    default: "Moazzem Labs — Built for the ummah, not for the algorithm",
    template: "%s — Moazzem Labs",
  },
  description:
    "Moazzem Labs is a small community technology lab. We build software for Muslim communities that respects the people using it, including My Local Masjid.",
  authors: [{ name: "Sadik Moazzem" }],
  openGraph: {
    title: "Moazzem Labs",
    description: "Built for the ummah, not for the algorithm.",
    type: "website",
    locale: "en_GB",
    siteName: "Moazzem Labs",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#05080f",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB" className={`${inter.variable} ${instrument.variable} ${grotesk.variable}`}>
      <body>{children}</body>
    </html>
  );
}
