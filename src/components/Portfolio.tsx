import { useTranslation } from 'react-i18next';
import { useTheme } from '../context/ThemeContext';

const Portfolio = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();
  return (
    <section id="portafolio" className={`py-20 ${theme === 'dark' ? 'bg-gris-urbano border-gray-700' : 'bg-blanco-puro border-gray-200'} border-t border-b`}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 reveal">
          <h2 className={`text-4xl font-bold ${theme === 'dark' ? 'text-cian-futurista' : 'text-azul-conectado'}`}>
            {t('portfolio.title')}
          </h2>
          <p className={`${theme === 'dark' ? 'text-blanco-puro' : 'text-gris-urbano'} mt-2`}>{t('portfolio.subtitle')}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Proyecto 1 */}
          <article className={`rounded-xl overflow-hidden shadow-lg ${theme === 'dark' ? 'bg-gray-800 border-cian-futurista' : 'bg-gray-100 border-azul-conectado'} border-t-4 group reveal flex flex-col`}>
            <div className="relative">
              <img
                src="https://placehold.co/600x400/E5E8EC/2D2D2D?text=Proyecto+Alfa"
                alt="Imagen del Proyecto Alfa"
                className="w-full h-56 object-cover"
              />
            </div>
            <div className="flex-1 flex flex-col justify-between p-6">
              <div>
                <h3 className={`text-2xl font-bold mb-2 ${theme === 'dark' ? 'text-cian-futurista' : 'text-azul-conectado'}`}>
                  {t('portfolio.project1.title')}
                </h3>
                <p className={`${theme === 'dark' ? 'text-gris-neblina' : 'text-gray-600'} mb-4`}>{t('portfolio.project1.client')}</p>
              </div>
              <button
                className={`mt-2 font-semibold px-5 py-2 rounded-lg ${theme === 'dark' ? 'bg-azul-conectado text-blanco-puro hover:bg-cian-futurista' : 'bg-cian-futurista text-blanco-puro hover:bg-azul-conectado'} transition-colors duration-300 w-full`}
              >
                {t('portfolio.project1.button')}
              </button>
            </div>
          </article>
          {/* Proyecto 2 */}
          <article className={`rounded-xl overflow-hidden shadow-lg ${theme === 'dark' ? 'bg-gray-800 border-azul-conectado' : 'bg-gray-100 border-cian-futurista'} border-t-4 group reveal flex flex-col`}>
            <div className="relative">
              <img
                src="https://placehold.co/600x400/E5E8EC/2D2D2D?text=Proyecto+Beta"
                alt="Imagen del Proyecto Beta"
                className="w-full h-56 object-cover"
              />
            </div>
            <div className="flex-1 flex flex-col justify-between p-6">
              <div>
                <h3 className={`text-2xl font-bold mb-2 ${theme === 'dark' ? 'text-cian-futurista' : 'text-azul-conectado'}`}>
                  {t('portfolio.project2.title')}
                </h3>
                <p className={`${theme === 'dark' ? 'text-gris-neblina' : 'text-gray-600'} mb-4`}>{t('portfolio.project2.client')}</p>
              </div>
              <button
                className={`mt-2 font-semibold px-5 py-2 rounded-lg ${theme === 'dark' ? 'bg-azul-conectado text-blanco-puro hover:bg-cian-futurista' : 'bg-cian-futurista text-blanco-puro hover:bg-azul-conectado'} transition-colors duration-300 w-full`}
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
