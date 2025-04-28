import { useEffect } from 'react';
import CosmicBackground from '@/components/CosmicBackground';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import HeroSection from '@/sections/HeroSection';
import AboutSection from '@/sections/AboutSection';
import ProjectsSection from '@/sections/ProjectsSection';
import ResearchSection from '@/sections/ResearchSection';
import BlogSection from '@/sections/BlogSection';
import CVSection from '@/sections/CVSection';
import ContactSection from '@/sections/ContactSection';

const HomePage = () => {
  useEffect(() => {
    document.title = "Shivaji.dev - Exploring the Physics of the Universe";
  }, []);

  return (
    <div className="min-h-screen bg-[#0B1026] text-white overflow-x-hidden">
      <CosmicBackground />
      <Header />
      
      <main>
        <HeroSection />
        <AboutSection />
        <div className="hidden">
          <ProjectsSection />
          <ResearchSection />
          <BlogSection />
          <CVSection />
          <ContactSection />
        </div>
      </main>
      
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default HomePage;
