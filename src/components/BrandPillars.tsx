import { useTranslation } from 'react-i18next';

const BrandPillars = () => {
  const { t } = useTranslation();
  return (
    <section className="py-20 bg-neblina">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 reveal">
          <h2 className="text-3xl font-bold text-urbano mb-4" style={{ color: '#1565FF' }}>
            {t('brandPillars.title')}
          </h2>
          <p className="text-urbano">{t('brandPillars.subtitle')}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <article
            className="bg-white rounded-xl p-8 shadow-md flex flex-col items-center reveal"
            style={{ borderTop: '4px solid #00CFFF' }}
          >
            <i className="fas fa-lightbulb text-accent text-4xl mb-4" style={{ color: '#00CFFF' }} aria-hidden="true"></i>
            <h3 className="text-xl font-bold text-urbano mb-2">{t('brandPillars.pillar1.title')}</h3>
            <p className="text-urbano">
              {t('brandPillars.pillar1.description')}
            </p>
          </article>
          <article
            className="bg-white rounded-xl p-8 shadow-md flex flex-col items-center reveal"
            style={{ borderTop: '4px solid #1565FF' }}
          >
            <i className="fas fa-users text-secondary text-4xl mb-4" style={{ color: '#1565FF' }} aria-hidden="true"></i>
            <h3 className="text-xl font-bold text-urbano mb-2">
              {t('brandPillars.pillar2.title')}
            </h3>
            <p className="text-urbano">{t('brandPillars.pillar2.description')}</p>
          </article>
          <article
            className="bg-white rounded-xl p-8 shadow-md flex flex-col items-center reveal"
            style={{ borderTop: '4px solid #2D2D2D' }}
          >
            <i className="fas fa-handshake text-urbano text-4xl mb-4" style={{ color: '#2D2D2D' }} aria-hidden="true"></i>
            <h3 className="text-xl font-bold text-urbano mb-2">{t('brandPillars.pillar3.title')}</h3>
            <p className="text-urbano">{t('brandPillars.pillar3.description')}</p>
          </article>
          <article
            className="bg-white rounded-xl p-8 shadow-md flex flex-col items-center reveal"
            style={{ borderTop: '4px solid #00CFFF' }}
          >
            <i className="fas fa-rocket text-accent text-4xl mb-4" style={{ color: '#00CFFF' }} aria-hidden="true"></i>
            <h3 className="text-xl font-bold text-urbano mb-2">{t('brandPillars.pillar4.title')}</h3>
            <p className="text-urbano">{t('brandPillars.pillar4.description')}</p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default BrandPillars;
