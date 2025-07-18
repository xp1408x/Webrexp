import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/80 backdrop-blur-sm fixed top-0 left-0 right-0 z-50 border-b border-card">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#inicio" className="logo text-2xl font-bold text-urbano">
          Wer<span className="text-accent">exp</span>
        </a>
        <nav className="hidden md:flex space-x-8 menu">
          <a href="#servicios" className="text-urbano hover:text-accent transition duration-300">
            {t('header.services')}
          </a>
          <a href="#portafolio" className="text-urbano hover:text-accent transition duration-300">
            {t('header.portfolio')}
          </a>
          <a href="#nosotros" className="text-urbano hover:text-accent transition duration-300">
            {t('header.aboutUs')}
          </a>
          <a href="#contacto" className="text-urbano hover:text-accent transition duration-300">
            {t('header.contact')}
          </a>
        </nav>
        <a
          href="#contacto"
          className="hidden md:block cta font-semibold px-5 py-2 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
        >
          {t('header.quoteProject')}
        </a>
        <div className="flex items-center space-x-4">
          <div className="hidden md:flex space-x-2">
            <button
              className="text-urbano hover:text-accent transition duration-300"
              onClick={() => i18n.changeLanguage('en')}
            >
              EN
            </button>
            <button
              className="text-urbano hover:text-accent transition duration-300"
              onClick={() => i18n.changeLanguage('es')}
            >
              ES
            </button>
            <button
              className="text-urbano hover:text-accent transition duration-300"
              onClick={() => i18n.changeLanguage('zh')}
            >
              ZH
            </button>
          </div>
          <button
            id="mobile-menu-button"
            className="md:hidden text-urbano"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className="fas fa-bars text-2xl" aria-hidden="true"></i>
          </button>
        </div>
      </div>
      {/* Menú Móvil */}
      <div id="mobile-menu" className={`${isMenuOpen ? '' : 'hidden'} md:hidden bg-white`}>
        <a href="#servicios" className="block text-center py-3 px-6 text-urbano hover:bg-neblina">
          {t('header.services')}
        </a>
        <a href="#portafolio" className="block text-center py-3 px-6 text-urbano hover:bg-neblina">
          {t('header.portfolio')}
        </a>
        <a href="#nosotros" className="block text-center py-3 px-6 text-urbano hover:bg-neblina">
          {t('header.aboutUs')}
        </a>
        <a href="#contacto" className="block text-center py-3 px-6 text-urbano hover:bg-neblina">
          {t('header.contact')}
        </a>
        <div className="flex justify-center space-x-4 py-3">
          <button
            className="text-urbano hover:bg-neblina px-4 py-2 rounded"
            onClick={() => i18n.changeLanguage('en')}
          >
            EN
          </button>
          <button
            className="text-urbano hover:bg-neblina px-4 py-2 rounded"
            onClick={() => i18n.changeLanguage('es')}
          >
            ES
          </button>
          <button
            className="text-urbano hover:bg-neblina px-4 py-2 rounded"
            onClick={() => i18n.changeLanguage('zh')}
          >
            ZH
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
