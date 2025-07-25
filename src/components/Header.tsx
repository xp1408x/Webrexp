import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import LanguageDropdown from './LanguageDropdown';
import { useTheme } from '../context/ThemeContext';
import apiConsultingLogo from '../assets/logo_api.png';

const Header = () => {
  const { t } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);

  return (
    <header className={`${theme === 'dark' ? 'bg-gris-urbano/80 border-gray-700' : 'bg-blanco-puro/80 border-gray-200'} backdrop-blur-sm fixed top-0 left-0 right-0 z-50 border-b`}>
      <div className="container mx-auto pl-6 pr-5 py-4 flex justify-between items-center"> {/* Changed px-6 to pl-6 pr-5 */}
        <a href="#inicio" className="logo">
          <img src={apiConsultingLogo} alt="API Consulting Logo" className="h-12" />
        </a>
        <nav className="hidden md:flex space-x-8 menu">
          <a href="#servicios" className={`${theme === 'dark' ? 'text-blanco-puro' : 'text-gris-urbano'} hover:text-accent transition duration-300`}>
            {t('header.services')}
          </a>
          <a href="#portafolio" className={`${theme === 'dark' ? 'text-blanco-puro' : 'text-gris-urbano'} hover:text-accent transition duration-300`}>
            {t('header.portfolio')}
          </a>
          <a href="#nosotros" className={`${theme === 'dark' ? 'text-blanco-puro' : 'text-gris-urbano'} hover:text-accent transition duration-300`}>
            {t('header.aboutUs')}
          </a>
          <a href="#contacto" className={`${theme === 'dark' ? 'text-blanco-puro' : 'text-gris-urbano'} hover:text-accent transition duration-300`}>
            {t('header.contact')}
          </a>
        </nav>
        <a
          href="#contacto"
          className="hidden md:block cta font-semibold px-5 py-2 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
        >
          {t('header.quoteProject')}
        </a>
        <div className="relative flex items-center space-x-4"> {/* Removed mr-8 */}
          <button
            className={`${theme === 'dark' ? 'text-blanco-puro hover:text-cian-futurista' : 'text-gris-urbano hover:text-azul-conectado'} transition duration-300`}
            onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
          >
            <i className="fas fa-cog text-2xl" aria-hidden="true"></i>
          </button>
          <button
            className={`${theme === 'dark' ? 'text-blanco-puro hover:text-cian-futurista' : 'text-gris-urbano hover:text-azul-conectado'} transition duration-300`}
            onClick={toggleTheme}
          >
            {theme === 'dark' ? (
              <i className="fas fa-sun text-2xl" aria-hidden="true"></i>
            ) : (
              <i className="fas fa-moon text-2xl" aria-hidden="true"></i>
            )}
          </button>
          {isLanguageDropdownOpen && (
            <div className="absolute top-full right-0 mt-2 z-10">
              <LanguageDropdown onClose={() => setIsLanguageDropdownOpen(false)} />
            </div>
          )}
          <button
            id="mobile-menu-button"
            className={`md:hidden ${theme === 'dark' ? 'text-blanco-puro' : 'text-gris-urbano'}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className="fas fa-bars text-2xl" aria-hidden="true"></i>
          </button>
        </div>
      </div>
      {/* Menú Móvil */}
      <div id="mobile-menu" className={`${isMenuOpen ? '' : 'hidden'} md:hidden ${theme === 'dark' ? 'bg-gris-urbano' : 'bg-blanco-puro'}`}>
        <a href="#servicios" className={`block text-center py-3 px-6 ${theme === 'dark' ? 'text-blanco-puro hover:bg-gray-700' : 'text-gris-urbano hover:bg-gray-200'}`}>
          {t('header.services')}
        </a>
        <a href="#portafolio" className={`block text-center py-3 px-6 ${theme === 'dark' ? 'text-blanco-puro hover:bg-gray-700' : 'text-gris-urbano hover:bg-gray-200'}`}>
          {t('header.portfolio')}
        </a>
        <a href="#nosotros" className={`block text-center py-3 px-6 ${theme === 'dark' ? 'text-blanco-puro hover:bg-gray-700' : 'text-gris-urbano hover:bg-gray-200'}`}>
          {t('header.aboutUs')}
        </a>
        <a href="#contacto" className={`block text-center py-3 px-6 ${theme === 'dark' ? 'text-blanco-puro hover:bg-gray-700' : 'text-gris-urbano hover:bg-gray-200'}`}>
          {t('header.contact')}
        </a>
        <a href="#contacto" className="block text-center py-3 px-6 font-semibold rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 mx-auto my-4 bg-accent text-white">
          {t('header.quoteProject')}
        </a>
        <div className="flex justify-center py-3">
          <button
            className={`${theme === 'dark' ? 'text-blanco-puro hover:bg-gray-700' : 'text-gris-urbano hover:bg-gray-200'} px-4 py-2 rounded`}
            onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
          >
            <i className="fas fa-cog text-2xl" aria-hidden="true"></i>
          </button>
          <button
            className={`${theme === 'dark' ? 'text-blanco-puro hover:bg-gray-700' : 'text-gris-urbano hover:bg-gray-200'} px-4 py-2 rounded`}
            onClick={toggleTheme}
          >
            {theme === 'dark' ? (
              <i className="fas fa-sun text-2xl" aria-hidden="true"></i>
            ) : (
              <i className="fas fa-moon text-2xl" aria-hidden="true"></i>
            )}
          </button>
          {isLanguageDropdownOpen && (
            <div className="mt-2 z-10">
              <LanguageDropdown onClose={() => setIsLanguageDropdownOpen(false)} />
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
