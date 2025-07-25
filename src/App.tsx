import Header from './components/Header';
import HeroSection from './components/HeroSection';
import SocialProof from './components/SocialProof';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import AboutUs from './components/AboutUs';
import BrandPillars from './components/BrandPillars';
import ContactForm from './components/ContactForm';
import PricingPlans from './components/PricingPlans';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import { useScrollReveal } from './utils/scrollReveal';
import { useTheme } from './context/ThemeContext';

function App() {
  useScrollReveal();
  const { theme } = useTheme();

  return (
    <div className={`${theme === 'dark' ? 'bg-gris-carbon-profundo text-white' : 'bg-gris-claro-niebla text-azul-indigo-digital'}`}>
      <Header />
      <main>
        <HeroSection />
        <SocialProof />
        <Services />
        <Portfolio />
        <AboutUs />
        <BrandPillars />
        <PricingPlans />
        <ContactForm />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
