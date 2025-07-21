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

function App() {
  useScrollReveal();

  return (
    <div className="bg-dark">
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
