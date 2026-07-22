import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import ThemeToggle from "@/components/ThemeToggle";
import PhosphorToggle from "@/components/PhosphorToggle";
import AmbientGlow from "@/components/AmbientGlow";
import ScrollProgress from "@/components/ScrollProgress";
import BootSequence from "@/components/BootSequence";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import OpenSource from "@/components/OpenSource";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="relative">
      <BootSequence />
      <AmbientGlow />
      <ScrollProgress />
      <ThemeToggle />
      <PhosphorToggle />
      <Nav />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <OpenSource />
      <Testimonials />
      <Contact />
    </main>
  );
}
