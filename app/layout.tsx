import type { Metadata } from "next";
import { Source_Serif_4, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const serif = Source_Serif_4({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600"],
});

const sans = Source_Sans_3({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Kimberly Rufe — Appellate Counsel & Briefing Support",
  description: "Colorado appellate counsel and briefing support. Appeals, issue analysis, and drafting support for attorneys and referred clients.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Attorney",
    "name": "Kimberly Rufe",
    "jobTitle": "Appellate Counsel & Briefing Support",
    "url": "https://kimberlyrufe.com",
    "affiliation": {
      "@type": "LegalService",
      "name": "Alderman Law Firm",
      "url": "https://aldermanlawfirm.com"
    },
    "sameAs": [
      "https://aldermanlawfirm.com",
      "https://www.avvo.com/attorneys/80522-co-kimberly-aldermanrufe-1951271.html",
      "https://www.linkedin.com/in/kimberly-alderman-rufe-a21a6b395"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Fort Collins",
      "addressRegion": "CO",
      "addressCountry": "US"
    }
  };

  return (
    <html lang="en">
      <body
        className={`${serif.variable} ${sans.variable} antialiased bg-[#FAF8F3] text-[#1a1a1a]`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
