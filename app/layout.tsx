import type { Metadata } from "next";
import { Playfair_Display, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600", "700"], // Regular, SemiBold, Bold
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"], // Regular, Medium
});

export const metadata: Metadata = {
  title: "Alderman Law Firm | Premium Appellate & Civil Litigation",
  description: "Restrained, authoritative legal representation for complex disputes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${sourceSans.variable} antialiased bg-paper text-charcoal`}
      >
        {children}
      </body>
    </html>
  );
}
