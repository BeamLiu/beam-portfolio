import { LanguageProvider } from './contexts/LanguageContext';
import LanguageToggle from './components/LanguageToggle';
import HeroSection from './components/HeroSection';
import CoreValues from './components/CoreValues';
import CareerTrajectory from './components/CareerTrajectory';
import AIShowcase from './components/AIShowcase';
import GeekProjects from './components/GeekProjects';
import ProjectShowcase from './components/ProjectShowcase';
import PresalesMaterials from './components/PresalesMaterials';
import PatentsAndCerts from './components/PatentsAndCerts';
import TechAndInsights from './components/TechAndInsights';
import Footer from './components/Footer';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <LanguageToggle />
        <HeroSection />
        <CoreValues />
        <CareerTrajectory />
        <AIShowcase />
        <GeekProjects />
        <ProjectShowcase />
        <PresalesMaterials />
        <PatentsAndCerts />
        <TechAndInsights />
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
