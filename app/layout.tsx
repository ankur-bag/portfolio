import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScroll, Preloader, Noise } from "@/components/ClientWrappers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import { Quintessential } from "next/font/google";

const quintessential = Quintessential({
  variable: "--font-quintessential",
  subsets: ["latin"],
  weight: "400",
});

import StructuredData from "@/components/StructuredData";
import SEOContext from "@/components/SEOContext";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ankurbag.tech"),
  title: "Ankur Bag | Full Stack Developer & GenAI Builder",
  description:
    "Portfolio of Ankur Bag – Full Stack Developer building AI-powered applications using Next.js, React, Node.js and Generative AI. Hackathon winner and tech enthusiast.",
  applicationName: "Ankur Bag Portfolio",
  category: "technology",
  keywords: [
    "Ankur Bag",
    "Full Stack Developer",
    "GenAI Developer",
    "Next.js Developer",
    "Developer Portfolio",
    "India",
    "RAG Systems",
    "AI-powered apps"
  ],
  authors: [{ name: "Ankur Bag", url: "https://www.ankurbag.tech" }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.ankurbag.tech",
  },
  verification: {
    google: "jHkctzXqPaYapbRARvJD-feb542ZJoNsvBqf1HarIIo",
  },
  openGraph: {
    title: "Ankur Bag | Full Stack Developer & GenAI Builder",
    description:
      "Portfolio of Ankur Bag showcasing AI-powered projects and modern web development.",
    url: "https://www.ankurbag.tech",
    siteName: "Ankur Bag Portfolio",
    images: [
      {
        url: "/preview.png",
        width: 1200,
        height: 630,
        alt: "Ankur Bag Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ankur Bag | Full Stack Developer & GenAI Builder",
    description:
      "AI developer building modern web apps and GenAI tools.",
    images: ["/preview.png"],
    creator: "@ankur_bag",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head />

      <body
        className={`${geistSans.variable} ${geistMono.variable} ${quintessential.variable} antialiased bg-background text-foreground selection:bg-accent selection:text-background overflow-x-hidden`}
      >
        <StructuredData />
        <SEOContext />
        <Preloader />
        <SmoothScroll>
          {children}
        </SmoothScroll>
        <Noise />
      </body>
    </html>
  );
}
