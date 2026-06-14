import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import ThemeToggle from "@/components/ThemeToggle";
import AmbientGlow from "@/components/AmbientGlow";
import ScrollProgress from "@/components/ScrollProgress";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import OpenSource from "@/components/OpenSource";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="relative">
      <AmbientGlow />
      <ScrollProgress />
      <ThemeToggle />
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
