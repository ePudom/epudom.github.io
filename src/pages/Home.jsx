import Navbar from "@/components/portfolio/Navbar";
import Footer from "@/components/portfolio/Footer";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Journey from "@/components/portfolio/Journey";
import Skills from "@/components/portfolio/Skills";
import Projects from "@/components/portfolio/Projects";
import VizShowcase from "@/components/portfolio/VizShowcase";
import Process from "@/components/portfolio/Process";
import Certifications from "@/components/portfolio/Certifications";
import Resume from "@/components/portfolio/Resume";
import Contact from "@/components/portfolio/Contact";

export default function Home() {
  return (
    <div className="relative">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Journey />
        <Skills />
        <Projects limit={6} />
        <VizShowcase />
        <Process />
        <Certifications />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
