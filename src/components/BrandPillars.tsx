import { useTranslation } from 'react-i18next';
import { useTheme } from '../context/ThemeContext';

const BrandPillars = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();
  return (
    <section className={`py-20 ${theme === 'dark' ? 'bg-gris-urbano' : 'bg-blanco-puro'}`}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 reveal">
          <h2 className={`text-3xl font-bold mb-4 ${theme === 'dark' ? 'text-cian-futurista' : 'text-azul-conectado'}`}>
            {t('brandPillars.title')}
          </h2>
          <p className={`${theme === 'dark' ? 'text-blanco-puro' : 'text-gris-urbano'}`}>{t('brandPillars.subtitle')}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <article
            className={`${theme === 'dark' ? 'bg-gray-800 border-cian-futurista' : 'bg-gray-100 border-azul-conectado'} rounded-xl p-8 shadow-md flex flex-col items-center reveal`}
            style={{ borderTop: `4px solid ${theme === 'dark' ? '#00CFFF' : '#1565FF'}` }}
          >
            <i className={`fas fa-lightbulb text-4xl mb-4 ${theme === 'dark' ? 'text-cian-futurista' : 'text-azul-conectado'}`} aria-hidden="true"></i>
            <h3 className={`text-xl font-bold mb-2 ${theme === 'dark' ? 'text-blanco-puro' : 'text-gris-urbano'}`}>{t('brandPillars.pillar1.title')}</h3>
            <p className={`${theme === 'dark' ? 'text-gris-neblina' : 'text-gray-600'}`}>
              {t('brandPillars.pillar1.description')}
            </p>
          </article>
          <article
            className={`${theme === 'dark' ? 'bg-gray-800 border-azul-conectado' : 'bg-gray-100 border-cian-futurista'} rounded-xl p-8 shadow-md flex flex-col items-center reveal`}
            style={{ borderTop: `4px solid ${theme === 'dark' ? '#1565FF' : '#00CFFF'}` }}
          >
            <i className={`fas fa-users text-4xl mb-4 ${theme === 'dark' ? 'text-azul-conectado' : 'text-cian-futurista'}`} aria-hidden="true"></i>
            <h3 className={`text-xl font-bold mb-2 ${theme === 'dark' ? 'text-blanco-puro' : 'text-gris-urbano'}`}>
              {t('brandPillars.pillar2.title')}
            </h3>
            <p className={`${theme === 'dark' ? 'text-gris-neblina' : 'text-gray-600'}`}>{t('brandPillars.pillar2.description')}</p>
          </article>
          <article
            className={`${theme === 'dark' ? 'bg-gray-800 border-gris-urbano' : 'bg-gray-100 border-gray-700'} rounded-xl p-8 shadow-md flex flex-col items-center reveal`}
            style={{ borderTop: `4px solid ${theme === 'dark' ? '#2D2D2D' : '#E5E8EC'}` }}
          >
            <i className={`fas fa-handshake text-4xl mb-4 ${theme === 'dark' ? 'text-gris-urbano' : 'text-gray-700'}`} aria-hidden="true"></i>
            <h3 className={`text-xl font-bold mb-2 ${theme === 'dark' ? 'text-blanco-puro' : 'text-gris-urbano'}`}>{t('brandPillars.pillar3.title')}</h3>
            <p className={`${theme === 'dark' ? 'text-gris-neblina' : 'text-gray-600'}`}>{t('brandPillars.pillar3.description')}</p>
          </article>
          <article
            className={`${theme === 'dark' ? 'bg-gray-800 border-cian-futurista' : 'bg-gray-100 border-azul-conectado'} rounded-xl p-8 shadow-md flex flex-col items-center reveal`}
            style={{ borderTop: `4px solid ${theme === 'dark' ? '#00CFFF' : '#1565FF'}` }}
          >
            <i className={`fas fa-rocket text-4xl mb-4 ${theme === 'dark' ? 'text-cian-futurista' : 'text-azul-conectado'}`} aria-hidden="true"></i>
            <h3 className={`text-xl font-bold mb-2 ${theme === 'dark' ? 'text-blanco-puro' : 'text-gris-urbano'}`}>{t('brandPillars.pillar4.title')}</h3>
            <p className={`${theme === 'dark' ? 'text-gris-neblina' : 'text-gray-600'}`}>
              {t('brandPillars.pillar4.description')}
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default BrandPillars;
