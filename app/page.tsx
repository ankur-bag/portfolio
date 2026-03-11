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




