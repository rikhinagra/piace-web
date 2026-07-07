import type { Metadata, Viewport } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";

const SITE_URL = "https://piace.ai";

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
  "Case management for personal injury firms with AI built into every step: intake, medical chronologies, demand letters, deadlines. Built AI-native, not bolted on.";

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
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "PIace",
              applicationCategory: "BusinessApplication",
              applicationSubCategory: "Legal Case Management",
              operatingSystem: "Web",
              description: DESCRIPTION,
              url: SITE_URL,
              audience: {
                "@type": "Audience",
                audienceType: "Personal injury law firms",
              },
              publisher: {
                "@type": "Organization",
                name: "PIace",
                url: SITE_URL,
              },
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
