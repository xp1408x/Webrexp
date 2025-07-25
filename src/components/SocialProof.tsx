import { useTranslation } from 'react-i18next';
import { useTheme } from '../context/ThemeContext';

const SocialProof = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();
  return (
    <section className={`py-12 ${theme === 'dark' ? 'bg-gris-neblina' : 'bg-gray-100'}`}>
      <div className="container mx-auto px-6 text-center reveal">
        <h3 className={`text-sm font-bold tracking-widest uppercase mb-6 ${theme === 'dark' ? 'text-azul-conectado' : 'text-cian-futurista'}`}>
          {t('socialProof.title')}
        </h3>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          <i className={`fab fa-microsoft fa-3x ${theme === 'dark' ? 'text-gris-urbano' : 'text-gray-700'}`} aria-hidden="true"></i>
          <i className={`fab fa-apple fa-3x ${theme === 'dark' ? 'text-gris-urbano' : 'text-gray-700'}`} aria-hidden="true"></i>
          <i className={`fab fa-google fa-3x ${theme === 'dark' ? 'text-gris-urbano' : 'text-gray-700'}`} aria-hidden="true"></i>
          <i className={`fab fa-amazon fa-3x ${theme === 'dark' ? 'text-gris-urbano' : 'text-gray-700'}`} aria-hidden="true"></i>
          <i className={`fab fa-spotify fa-3x ${theme === 'dark' ? 'text-gris-urbano' : 'text-gray-700'}`} aria-hidden="true"></i>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
