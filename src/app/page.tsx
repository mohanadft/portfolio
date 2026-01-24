import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import OpenSource from "@/components/OpenSource";
import Writing from "@/components/Writing";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <About />
      <Projects />
      <OpenSource />
      <Writing />
      <Testimonials />
      <Contact />
    </main>
  );
}
