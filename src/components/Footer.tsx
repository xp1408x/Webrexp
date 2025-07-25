import { useTranslation } from 'react-i18next';
import { useTheme } from '../context/ThemeContext';

const Footer = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();
  return (
    <footer className={`${theme === 'dark' ? 'bg-gris-urbano' : 'bg-blanco-puro'} py-8`}>
      <div className={`container mx-auto px-6 text-center ${theme === 'dark' ? 'text-blanco-puro' : 'text-gris-urbano'}`}>
        <div className="mb-4">
          <a href="https://github.com/xp1408x" target="_blank" rel="noopener noreferrer" className={`mx-3 ${theme === 'dark' ? 'hover:text-cian-futurista' : 'hover:text-azul-conectado'}`} aria-label="GitHub">
            <i className="fab fa-github fa-2x" aria-hidden="true"></i>
          </a>
          <a href="https://x.com/Pedro0606990430" target="_blank" rel="noopener noreferrer" className={`mx-3 ${theme === 'dark' ? 'hover:text-cian-futurista' : 'hover:text-azul-conectado'}`} aria-label="Twitter">
            <i className="fab fa-twitter fa-2x" aria-hidden="true"></i>
          </a>
        </div>
        <p>{t('footer.copyright')}</p>
      </div>
    </footer>
  );
};

export default Footer;
