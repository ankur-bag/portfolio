import type { Metadata, Viewport } from "next";
import "./globals.css";
import { SmoothScroll, Preloader, Noise } from "@/components/ClientWrappers";



import StructuredData from "@/components/StructuredData";
import SEOContext from "@/components/SEOContext";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
};

export async function generateMetadata(): Promise<Metadata> {
  const title = "Ankur Bag — Full Stack Developer | MERN, AI & GenAI";
  const description =
    "Ankur Bag is a Full Stack Developer specializing in MERN stack, AI integrations, and GenAI-powered applications. Building scalable web platforms and intelligent user experiences. Available for freelance, startups, and product development.";
  const url = "https://www.ankurbag.tech";

  return {
    metadataBase: new URL(url),
    title: {
      default: title,
      template: `%s | Ankur Bag`,
    },
    description,
    applicationName: "Ankur Bag Portfolio",
    category: "technology",
    keywords: [
      "Ankur Bag",
      "Ankur Bag developer",
      "ankurbag.tech",
      "full stack developer India",
      "MERN stack developer",
      "React developer",
      "Next.js developer",
      "Node.js developer",
      "AI developer India",
      "GenAI developer",
      "hire web developer",
      "freelance developer India",
      "developer Kolkata",
      "web developer West Bengal",
      "AI web apps",
      "LLM integration developer",
      "student developer portfolio",
      "Cosmic Canvas AI",
      "OutreachX AI project",
      "RAG Systems",
    ],
    authors: [{ name: "Ankur Bag", url }],
    creator: "Ankur Bag",
    publisher: "Ankur Bag",
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
      canonical: url,
      types: {
        "text/plain": `${url}/llms.txt`,
        "text/markdown": `${url}/llms.txt`,
      },
    },
    verification: {
      google: "jHkctzXqPaYapbRARvJD-feb542ZJoNsvBqf1HarIIo",
    },
    openGraph: {
      title,
      description:
        "Building intelligent interfaces where great design meets GenAI-powered engineering.",
      url,
      siteName: "Ankur Bag Portfolio",
      locale: "en_US",
      type: "website",
      images: [
        {
          url: `${url}/preview.png`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      title,
      description:
        "Full Stack Developer | MERN, Nextjs & GenAI. Building real-world AI-powered products.",
      card: "summary_large_image",
      creator: "@ankur_bag",
      images: [`${url}/preview.png`],
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
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    other: {
      "google-site-verification": "jHkctzXqPaYapbRARvJD-feb542ZJoNsvBqf1HarIIo",
    },
  };
}


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
        <link href="https://fonts.googleapis.com/css2?family=Google+Sans+Flex:opsz,wght@6..144,1..1000&family=Quintessential&display=swap" rel="stylesheet" />
      </head>

      <body
        className="antialiased bg-background text-foreground selection:bg-accent selection:text-white overflow-x-hidden"
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
