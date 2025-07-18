import Header from '@/components/Header';
import Hero from '@/components/Hero';
// import About from '@/components/About';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import About from '@/components/AboutSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <HeroSection />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
