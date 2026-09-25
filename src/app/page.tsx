import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Values from "@/components/Values";
import Vision from "@/components/Vision";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";

export default function Home() {
  return (
    <main className="min-h-screen bg-black-main selection:bg-gold-main/30 selection:text-gold-light">
      <Preloader />
      <Navbar />
      <Hero />
      <About />
      <Values />
      <Vision />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
