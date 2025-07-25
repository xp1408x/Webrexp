import { useTranslation } from 'react-i18next';
import { useTheme } from '../context/ThemeContext';

const Services = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();
  return (
    <section id="servicios" className={`py-20 ${theme === 'dark' ? 'bg-gris-urbano' : 'bg-blanco-puro'}`}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 reveal">
          <h2 className={`text-4xl font-bold ${theme === 'dark' ? 'text-cian-futurista' : 'text-azul-conectado'}`}>
            {t('services.title')}
          </h2>
          <p className={`${theme === 'dark' ? 'text-blanco-puro' : 'text-gris-urbano'} mt-2`}>{t('services.subtitle')}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Tarjeta de Servicio 1 */}
          <article
            className={`${theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-gray-100 border-gray-200'} rounded-lg p-8 transform hover:-translate-y-2 transition-transform duration-300 reveal`}
            style={{ borderTop: `4px solid ${theme === 'dark' ? '#00CFFF' : '#1565FF'}` }}
          >
            <i className={`fas fa-laptop-code text-4xl mb-4 ${theme === 'dark' ? 'text-cian-futurista' : 'text-azul-conectado'}`} aria-hidden="true"></i>
            <h3 className={`text-2xl font-bold mb-2 ${theme === 'dark' ? 'text-blanco-puro' : 'text-gris-urbano'}`}>{t('services.webDevelopment.title')}</h3>
            <p className={`${theme === 'dark' ? 'text-gris-neblina' : 'text-gray-600'}`}>
              {t('services.webDevelopment.description')}
            </p>
          </article>
          {/* Tarjeta de Servicio 2 */}
          <article
            className={`${theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-gray-100 border-gray-200'} rounded-lg p-8 transform hover:-translate-y-2 transition-transform duration-300 reveal`}
            style={{ borderTop: `4px solid ${theme === 'dark' ? '#1565FF' : '#00CFFF'}` }}
          >
            <i className={`fas fa-mobile-alt text-4xl mb-4 ${theme === 'dark' ? 'text-azul-conectado' : 'text-cian-futurista'}`} aria-hidden="true"></i>
            <h3 className={`text-2xl font-bold mb-2 ${theme === 'dark' ? 'text-blanco-puro' : 'text-gris-urbano'}`}>{t('services.mobileApps.title')}</h3>
            <p className={`${theme === 'dark' ? 'text-gris-neblina' : 'text-gray-600'}`}>
              {t('services.mobileApps.description')}
            </p>
          </article>
          {/* Tarjeta de Servicio 3 */}
          <article
            className={`${theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-gray-100 border-gray-200'} rounded-lg p-8 transform hover:-translate-y-2 transition-transform duration-300 reveal`}
            style={{ borderTop: `4px solid ${theme === 'dark' ? '#2D2D2D' : '#E5E8EC'}` }}
          >
            <i className={`fas fa-vr-cardboard text-4xl mb-4 ${theme === 'dark' ? 'text-gris-urbano' : 'text-gray-700'}`} aria-hidden="true"></i>
            <h3 className={`text-2xl font-bold mb-2 ${theme === 'dark' ? 'text-blanco-puro' : 'text-gris-urbano'}`}>{t('services.arVr.title')}</h3>
            <p className={`${theme === 'dark' ? 'text-gris-neblina' : 'text-gray-600'}`}>
              {t('services.arVr.description')}
            </p>
          </article>
          {/* Tarjeta de Servicio 4: Marketing Digital (NUEVO) */}
          <article
            className={`${theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-gray-100 border-gray-200'} rounded-lg p-8 transform hover:-translate-y-2 transition-transform duration-300 reveal`}
            style={{ borderTop: `4px solid ${theme === 'dark' ? '#00CFFF' : '#1565FF'}` }}
          >
            <i className={`fas fa-chart-line text-4xl mb-4 ${theme === 'dark' ? 'text-cian-futurista' : 'text-azul-conectado'}`} aria-hidden="true"></i>
            <h3 className={`text-2xl font-bold mb-2 ${theme === 'dark' ? 'text-blanco-puro' : 'text-gris-urbano'}`}>{t('services.digitalMarketing.title')}</h3>
            <p className={`${theme === 'dark' ? 'text-gris-neblina' : 'text-gray-600'}`}>
              {t('services.digitalMarketing.description')}
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Services;
