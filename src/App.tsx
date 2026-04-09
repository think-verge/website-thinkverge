import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Vision from "./components/Vision";
import Services from "./components/Services";
import Process from "./components/Process";
import TechStack from "./components/TechStack";
import About from "./components/About";
import Contact from "./components/Contact";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Vision />
        <Services />
        <Process />
        <TechStack />
        <About />
        <Contact />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
