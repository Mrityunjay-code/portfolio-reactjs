import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Protocol from './components/Protocol';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import About from './components/About';
import Skills from './components/Skills';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';
import Contact from './components/Contact';
import WhatsAppBtn from './components/WhatsAppBtn';

import { SmoothScroll, ScrollProgress } from './components/ScrollUtils';

const SectionWrapper = ({ children, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

function App() {
  const [showResume, setShowResume] = useState(false);

  const openResume = () => setShowResume(true);

  return (
    <SmoothScroll>
      <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-white font-sans">
        <ScrollProgress />
        <Navbar />
        <main>
        <Hero openResume={openResume} />
        <SectionWrapper>
          <Skills />
        </SectionWrapper>
        <SectionWrapper>
          <Services />
        </SectionWrapper>
        <SectionWrapper>
          <About openResume={openResume} />
        </SectionWrapper>
        <SectionWrapper>
          <Experience />
        </SectionWrapper>
        <SectionWrapper>
          <Projects />
        </SectionWrapper>
        <SectionWrapper>
          <Protocol />
        </SectionWrapper>
        <SectionWrapper>
          <Pricing />
        </SectionWrapper>
        <SectionWrapper>
          <FAQ />
        </SectionWrapper>
        <SectionWrapper>
          <Contact />
        </SectionWrapper>
      </main>
      <Footer />
      <ResumeModal isOpen={showResume} onClose={() => setShowResume(false)} />
      <WhatsAppBtn />
      </div>
    </SmoothScroll>
  );
}

export default App;
