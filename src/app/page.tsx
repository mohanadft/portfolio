import SectionRail from "@/components/SectionRail";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Work from "@/components/Work";
import Projects from "@/components/Projects";
import OpenSource from "@/components/OpenSource";
import Words from "@/components/Words";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="relative">
      <SectionRail />
      <Hero />
      <About />
      <Work />
      <Projects />
      <OpenSource />
      <Words />
      <Contact />
    </main>
  );
}
