import type { Metadata } from "next";
import { Montserrat, JetBrains_Mono } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { site } from "@/lib/content";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const HOME_TITLE = "Valtaris | Human Data for Reliable AI — Annotation & Evaluation";
const HOME_DESCRIPTION =
  "Valtaris designs and operates the data collection, annotation, and evaluation pipelines behind reliable AI models. Talk to our team about your dataset.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: HOME_TITLE,
    template: `%s — ${site.name}`,
  },
  description: HOME_DESCRIPTION,
  keywords: [
    "data annotation company",
    "human data layer for AI",
    "AI training data services",
    "data labeling and evaluation",
    "LLM evaluation",
    "AI model evaluation",
    "computer vision annotation",
    "multilingual AI data",
    "Southeast Asia AI data",
    "RLHF human preference data",
  ],
  authors: [{ name: site.name }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: site.name,
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    url: site.url,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
  },
  robots: { index: true, follow: true },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  slogan: site.tagline,
  description:
    "The human-data layer for reliable AI. Valtaris designs and operates the collection, annotation and evaluation your models need, from a Southeast Asian data network serving teams worldwide.",
  url: site.url,
  email: site.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Kuala Lumpur",
    addressCountry: "MY",
  },
  areaServed: ["Southeast Asia", "Worldwide"],
  knowsAbout: [
    "AI training data",
    "Data annotation",
    "LLM evaluation",
    "Human preference data",
    "Computer vision annotation",
    "Multilingual AI data",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${jetbrains.variable}`}>
      <body className="min-h-screen antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-[#04140F]"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
