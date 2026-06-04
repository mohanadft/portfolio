import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import ThemeToggle from "@/components/ThemeToggle";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import OpenSource from "@/components/OpenSource";
import Writing from "@/components/Writing";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="relative">
      <ThemeToggle />
      <Nav />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <OpenSource />
      <Writing />
      <Testimonials />
      <Contact />
    </main>
  );
}
