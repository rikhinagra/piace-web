import type { Metadata, Viewport } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";
import "./globals.css";

const SITE_URL = "https://www.piace.ai";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-serif-accent",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

const TITLE = "PIace | AI-native case management for personal injury firms";
const DESCRIPTION =
  "AI-native case management for personal injury firms. Intake, medical chronologies, demand letters and deadlines, with AI inside every step.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s | PIace",
  },
  description: DESCRIPTION,
  applicationName: "PIace",
  keywords: [
    "personal injury case management",
    "PI law firm software",
    "AI legal software",
    "medical chronology AI",
    "demand letter AI",
    "CASEpeer alternative",
    "SmartAdvocate alternative",
    "legal case management",
    "law firm automation",
    "PIace",
  ],
  authors: [{ name: "PIace" }],
  creator: "PIace",
  publisher: "PIace",
  category: "technology",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "PIace",
    title: TITLE,
    description: DESCRIPTION,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${instrumentSerif.variable}`}>
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@300,400,500,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <GoogleTagManager gtmId="GTM-KTGH9WRC" />
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["SoftwareApplication", "Organization"],
              name: "PIace",
              alternateName: "PIace.ai",
              description:
                "AI-native case management software built for personal injury law firms. Intake, medical chronologies, demand letters, deadlines, client texting, and settlement tracking with AI agents inside every stage.",
              url: SITE_URL,
              image: `${SITE_URL}/opengraph-image.png`,
              applicationCategory: "LegalTech",
              operatingSystem: "Web",
              parentOrganization: {
                "@type": "Organization",
                name: "SACHHSOFT",
                url: "https://www.sachhsoft.com",
              },
              audience: {
                "@type": "Audience",
                audienceType: "Personal Injury Law Firms",
              },
              featureList: [
                "AI Intake Agent — qualifies and scores leads 24/7 via web, phone, and text",
                "Medical Chronology AI — turns hundreds of pages of records into an annotated, sourced timeline",
                "Demand Drafter AI — generates demand letters in the firm voice across 7 PI demand types",
                "Deadline Watch — tracks every statute of limitations and case deadline automatically",
                "Settlement Tracking — offers, negotiations, lien resolution, and disbursement end to end",
                "Client Texting — two-way messaging logged to the case file",
                "E-Sign & Documents — retainers and forms generated, sent, and signed inside the case",
                "Custom Agents — firm-specific AI agents for bespoke routine workflows",
              ],
              sameAs: ["https://www.linkedin.com/company/piaceai"],
              keywords:
                "personal injury case management, PI law firm software, AI legal software, medical chronology AI, demand letter AI, CASEpeer alternative, SmartAdvocate alternative, law firm automation",
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
