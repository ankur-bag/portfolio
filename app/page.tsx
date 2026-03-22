import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import TravellingText from "@/components/TravellingText";
import Hackathons from "@/components/Hackathons";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import TechStack from "@/components/TechStack";
import GithubHeatmap from "@/components/GithubHeatmap";
import Contact from "@/components/Contact";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ankur Bag — Full Stack Developer | MERN, AI & GenAI",
  description:
    "Explore the portfolio of Ankur Bag — Full Stack Developer building AI-powered applications, MERN stack platforms, and GenAI tools like Cosmic Canvas and OutreachX.",

  keywords: [
    "Ankur Bag portfolio",
    "Full stack developer portfolio India",
    "Full stack developer portfolio West Bengal",
    "MERN developer portfolio",
    "Frontend developer portfolio",
    "AI developer portfolio",
    "GenAI developer portfolio",
    "GenAI projects",
    "Next.js portfolio",
    "Cosmic Canvas AI",
    "OutreachX project",
    "developer Kolkata portfolio , RCCIIT",
  ],

  openGraph: {
    title: "Ankur Bag — Portfolio",
    description:
      "AI-powered projects, modern web apps, and full stack engineering by Ankur Bag.",
    url: "https://www.ankurbag.tech",
    images: [
      {
        url: "https://www.ankurbag.tech/preview.png",
        width: 1200,
        height: 630,
        alt: "Ankur Bag Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Ankur Bag — Portfolio",
    description:
      "Full Stack Developer building AI-powered products and scalable web apps.",
    images: ["https://www.ankurbag.tech/preview.png"],
  },

  alternates: {
    canonical: "https://www.ankurbag.tech",
  },
};

export default function Home() {
  return (
    <main className="relative bg-background">
      <TravellingText />
      <Navbar />
      <Hero />
      <About />
      <Hackathons />
      <Projects
        limit={4}
      />
      <Experience />
      <TechStack />
      <GithubHeatmap />
      <Contact />
    </main>
  );
}




