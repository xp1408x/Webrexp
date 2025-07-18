import { useTranslation } from 'react-i18next';

const Portfolio = () => {
  const { t } = useTranslation();
  return (
    <section id="portafolio" className="py-20 bg-neblina border-t border-b border-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 reveal">
          <h2 className="text-4xl font-bold" style={{ color: '#1565FF' }}>
            {t('portfolio.title')}
          </h2>
          <p className="text-urbano mt-2">{t('portfolio.subtitle')}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Proyecto 1 */}
          <article className="rounded-xl overflow-hidden shadow-lg bg-white border-t-4 border-cian-futurista group reveal flex flex-col">
            <div className="relative">
              <img
                src="https://placehold.co/600x400/E5E8EC/2D2D2D?text=Proyecto+Alfa"
                alt="Imagen del Proyecto Alfa"
                className="w-full h-56 object-cover"
              />
            </div>
            <div className="flex-1 flex flex-col justify-between p-6">
              <div>
                <h3 className="text-2xl font-bold mb-2" style={{ color: '#1565FF' }}>
                  {t('portfolio.project1.title')}
                </h3>
                <p className="text-urbano mb-4">{t('portfolio.project1.client')}</p>
              </div>
              <button
                className="mt-2 font-semibold px-5 py-2 rounded-lg bg-cian-futurista text-white hover:bg-azul-conectado transition-colors duration-300 w-full"
                style={{ background: '#00CFFF' }}
              >
                {t('portfolio.project1.button')}
              </button>
            </div>
          </article>
          {/* Proyecto 2 */}
          <article className="rounded-xl overflow-hidden shadow-lg bg-white border-t-4 border-azul-conectado group reveal flex flex-col">
            <div className="relative">
              <img
                src="https://placehold.co/600x400/E5E8EC/2D2D2D?text=Proyecto+Beta"
                alt="Imagen del Proyecto Beta"
                className="w-full h-56 object-cover"
              />
            </div>
            <div className="flex-1 flex flex-col justify-between p-6">
              <div>
                <h3 className="text-2xl font-bold mb-2" style={{ color: '#00CFFF' }}>
                  {t('portfolio.project2.title')}
                </h3>
                <p className="text-urbano mb-4">{t('portfolio.project2.client')}</p>
              </div>
              <button
                className="mt-2 font-semibold px-5 py-2 rounded-lg bg-azul-conectado text-white hover:bg-cian-futurista transition-colors duration-300 w-full"
                style={{ background: '#1565FF' }}
              >
                {t('portfolio.project2.button')}
              </button>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
