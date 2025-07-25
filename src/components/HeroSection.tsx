import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { heroParticles } from '../utils/heroParticles';
import { useTheme } from '../context/ThemeContext';

const HeroSection = () => {
  const { t, i18n } = useTranslation();
  const { theme } = useTheme();
  useEffect(() => {
    heroParticles();
  }, []);

  const fullTitle = t('heroSection.title');
  let splitWord = 'Ideas';
  if (i18n.language === 'zh') {
    splitWord = '想法';
  }

  const parts = fullTitle.split(splitWord);

  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center relative overflow-hidden pt-20"
      style={{ background: theme === 'dark' ? 'linear-gradient(135deg, #00CFFF 0%, #1565FF 100%)' : 'linear-gradient(135deg, #E5E8EC 0%, #FFFFFF 100%)' }}
    >
      <div id="hero-animation" className="absolute top-0 left-0 w-full h-full z-0 opacity-10"></div>
      <div className="container mx-auto px-6 text-center z-10">
        <h1 className={`text-4xl md:text-6xl lg:text-7xl font-black mb-4 ${theme === 'dark' ? 'text-gris-urbano' : 'text-azul-conectado'}`} style={{ height: '180px' }}>
          {parts[0]}<span className={`${theme === 'dark' ? 'text-azul-conectado' : 'text-cian-futurista'}`}>{splitWord}</span>{parts[1]}
        </h1>
        <p className={`text-lg md:text-xl max-w-3xl mx-auto mb-8 reveal ${theme === 'dark' ? 'text-gris-urbano' : 'text-gris-urbano'}`} style={{ height: '120px' }}>
          {t('heroSection.subtitle')}
        </p>
        <a
          href="#contacto"
          className={`font-bold text-lg px-8 py-4 rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300 inline-block ${theme === 'dark' ? 'bg-azul-conectado text-blanco-puro hover:bg-cian-futurista' : 'bg-cian-futurista text-blanco-puro hover:bg-azul-conectado'} reveal`}
        >
          {t('heroSection.callToAction')}
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
