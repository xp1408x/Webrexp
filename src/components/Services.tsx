import { useTranslation } from 'react-i18next';

const Services = () => {
  const { t } = useTranslation();
  return (
    <section id="servicios" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 reveal">
          <h2 className="text-4xl font-bold" style={{ color: '#1565FF' }}>
            {t('services.title')}
          </h2>
          <p className="text-urbano mt-2">{t('services.subtitle')}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Tarjeta de Servicio 1 */}
          <article
            className="bg-neblina border border-card rounded-lg p-8 transform hover:-translate-y-2 transition-transform duration-300 reveal"
            style={{ borderTop: '4px solid #00CFFF' }}
          >
            <i className="fas fa-laptop-code text-accent text-4xl mb-4" style={{ color: '#00CFFF' }} aria-hidden="true"></i>
            <h3 className="text-2xl font-bold text-urbano mb-2">{t('services.webDevelopment.title')}</h3>
            <p className="text-urbano">
              {t('services.webDevelopment.description')}
            </p>
          </article>
          {/* Tarjeta de Servicio 2 */}
          <article
            className="bg-neblina border border-card rounded-lg p-8 transform hover:-translate-y-2 transition-transform duration-300 reveal"
            style={{ borderTop: '4px solid #1565FF' }}
          >
            <i className="fas fa-mobile-alt text-secondary text-4xl mb-4" style={{ color: '#1565FF' }} aria-hidden="true"></i>
            <h3 className="text-2xl font-bold text-urbano mb-2">{t('services.mobileApps.title')}</h3>
            <p className="text-urbano">
              {t('services.mobileApps.description')}
            </p>
          </article>
          {/* Tarjeta de Servicio 3 */}
          <article
            className="bg-neblina border border-card rounded-lg p-8 transform hover:-translate-y-2 transition-transform duration-300 reveal"
            style={{ borderTop: '4px solid #2D2D2D' }}
          >
            <i className="fas fa-vr-cardboard text-urbano text-4xl mb-4" style={{ color: '#2D2D2D' }} aria-hidden="true"></i>
            <h3 className="text-2xl font-bold text-urbano mb-2">{t('services.arVr.title')}</h3>
            <p className="text-urbano">
              {t('services.arVr.description')}
            </p>
          </article>
          {/* Tarjeta de Servicio 4: Marketing Digital (NUEVO) */}
          <article
            className="bg-neblina border border-card rounded-lg p-8 transform hover:-translate-y-2 transition-transform duration-300 reveal"
            style={{ borderTop: '4px solid #00CFFF' }}
          >
            <i className="fas fa-chart-line text-accent text-4xl mb-4" style={{ color: '#00CFFF' }} aria-hidden="true"></i>
            <h3 className="text-2xl font-bold text-urbano mb-2">{t('services.digitalMarketing.title')}</h3>
            <p className="text-urbano">
              {t('services.digitalMarketing.description')}
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Services;
