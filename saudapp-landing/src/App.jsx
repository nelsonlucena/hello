import { useState } from "react";
import { MotionConfig } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PainSolution from "./components/PainSolution";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import HowItWorks from "./components/HowItWorks";
import Deadlines from "./components/Deadlines";
import Faq from "./components/Faq";
import Support from "./components/Support";
import Footer from "./components/Footer";
import StickyBar from "./components/StickyBar";

export default function App() {
  const [vidas, setVidas] = useState(1);
  const [anual, setAnual] = useState(false);

  return (
    // reducedMotion="user" respeita prefers-reduced-motion do sistema
    <MotionConfig reducedMotion="user">
      <Navbar />
      <main>
        <Hero />
        <PainSolution />
        <Services />
        <Pricing vidas={vidas} setVidas={setVidas} anual={anual} setAnual={setAnual} />
        <HowItWorks />
        <Deadlines />
        <Faq />
        <Support />
      </main>
      <Footer />
      <StickyBar vidas={vidas} />
    </MotionConfig>
  );
}
