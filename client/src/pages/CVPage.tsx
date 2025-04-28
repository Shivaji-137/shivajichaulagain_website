import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CosmicBackground from '@/components/CosmicBackground';
import CVSection from '@/sections/CVSection';
import ScrollToTop from '@/components/ScrollToTop';
import { useEffect } from 'react';

const CVPage = () => {
  useEffect(() => {
    document.title = "CV | Shivaji.dev";
  }, []);

  return (
    <div className="min-h-screen bg-[#0B1026] text-white overflow-x-hidden">
      <CosmicBackground />
      <Header />
      
      <main className="pt-20">
        <CVSection />
      </main>
      
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default CVPage;