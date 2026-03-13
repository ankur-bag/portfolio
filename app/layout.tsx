import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import StructuredData from "@/components/StructuredData";
import SEOContext from "@/components/SEOContext";

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
  },
  alternates: {
    canonical: "https://www.ankurbag.tech",
  },
  verification: {
    google: "YOUR_VERIFICATION_CODE", // Replace with actual code from Search Console
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
    icon: "/favicon.svg",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

import Preloader from "@/components/Preloader";
import Noise from "@/components/Noise";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Audiowide&family=Bitcount+Grid+Single:wght@100..900&family=Bungee&family=Google+Sans+Flex:opsz,wght@6..144,1..1000&family=Jersey+25&family=Lexend:wght@100..900&family=Liter&family=Metamorphous&family=Montserrat+Alternates:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Mozilla+Headline:wght@200..700&family=Poiret+One&family=Quintessential&family=Turret+Road:wght@200;300;400;500;700;800&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Shadows+Into+Light+Two&display=swap" rel="stylesheet" />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground selection:bg-accent selection:text-background overflow-x-hidden`}
      >
        <StructuredData />
        <SEOContext />
        <Preloader />
        <Noise />
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
