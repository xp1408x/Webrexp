import { useTranslation } from 'react-i18next';
import { useTheme } from '../context/ThemeContext';

const AboutUs = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();
  return (
    <section id="nosotros" className={`py-20 ${theme === 'dark' ? 'bg-gris-urbano' : 'bg-blanco-puro'}`}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 reveal">
          <h2 className={`text-4xl font-bold ${theme === 'dark' ? 'text-cian-futurista' : 'text-azul-conectado'}`}>
            {t('aboutUs.title')}
          </h2>
          <p className={`${theme === 'dark' ? 'text-blanco-puro' : 'text-gris-urbano'} mt-2`}>
            {t('aboutUs.subtitle')}
          </p>
        </div>
        {/* Nuestro Proceso */}
        <div className="mb-16 reveal">
          <h3 className={`text-3xl font-bold text-center mb-8 ${theme === 'dark' ? 'text-azul-conectado' : 'text-cian-futurista'}`}>{t('aboutUs.processTitle')}</h3>
          <div className="relative">
            {/* Línea de tiempo */}
            <div
              className={`hidden md:block border-l-4 absolute h-full top-0 left-1/2 -ml-2 ${theme === 'dark' ? 'border-cian-futurista' : 'border-azul-conectado'}`}
            ></div>
            {/* Items del Proceso */}
            <div className="space-y-12 md:space-y-0">
              {/* Item 1 */}
              <article className="md:grid md:grid-cols-2 md:gap-8 items-center">
                <div className="md:text-right md:pr-8">
                  <div className={`${theme === 'dark' ? 'bg-azul-conectado' : 'bg-cian-futurista'} w-8 h-8 rounded-full inline-flex items-center justify-center text-white font-bold mb-2`}>
                    1
                  </div>
                  <h4 className={`text-xl font-bold ${theme === 'dark' ? 'text-blanco-puro' : 'text-gris-urbano'}`}>{t('aboutUs.process1.title')}</h4>
                  <p className={`${theme === 'dark' ? 'text-gris-neblina' : 'text-gray-600'}`}>
                    {t('aboutUs.process1.description')}
                  </p>
                </div>
                <div className="hidden md:block"></div>
              </article>
              {/* Item 2 */}
              <article className="md:grid md:grid-cols-2 md:gap-8 items-center">
                <div className="hidden md:block"></div>
                <div className="md:pl-8">
                  <div className={`${theme === 'dark' ? 'bg-cian-futurista' : 'bg-azul-conectado'} w-8 h-8 rounded-full inline-flex items-center justify-center text-white font-bold mb-2`}>
                    2
                  </div>
                  <h4 className={`text-xl font-bold ${theme === 'dark' ? 'text-blanco-puro' : 'text-gris-urbano'}`}>{t('aboutUs.process2.title')}</h4>
                  <p className={`${theme === 'dark' ? 'text-gris-neblina' : 'text-gray-600'}`}>
                    {t('aboutUs.process2.description')}
                  </p>
                </div>
              </article>
              {/* Item 3 */}
              <article className="md:grid md:grid-cols-2 md:gap-8 items-center">
                <div className="md:text-right md:pr-8">
                  <div className={`${theme === 'dark' ? 'bg-gris-urbano' : 'bg-gray-700'} w-8 h-8 rounded-full inline-flex items-center justify-center text-white font-bold mb-2`}>
                    3
                  </div>
                  <h4 className={`text-xl font-bold ${theme === 'dark' ? 'text-blanco-puro' : 'text-gris-urbano'}`}>{t('aboutUs.process3.title')}</h4>
                  <p className={`${theme === 'dark' ? 'text-gris-neblina' : 'text-gray-600'}`}>
                    {t('aboutUs.process3.description')}
                  </p>
                </div>
                <div className="hidden md:block"></div>
              </article>
              {/* Item 4 */}
              <article className="md:grid md:grid-cols-2 md:gap-8 items-center">
                <div className="hidden md:block"></div>
                <div className="md:pl-8">
                  <div className={`${theme === 'dark' ? 'bg-azul-conectado' : 'bg-cian-futurista'} w-8 h-8 rounded-full inline-flex items-center justify-center text-white font-bold mb-2`}>
                    4
                  </div>
                  <h4 className={`text-xl font-bold ${theme === 'dark' ? 'text-blanco-puro' : 'text-gris-urbano'}`}>{t('aboutUs.process4.title')}</h4>
                  <p className={`${theme === 'dark' ? 'text-gris-neblina' : 'text-gray-600'}`}>
                    {t('aboutUs.process4.description')}
                  </p>
                </div>
              </article>
            </div>
          </div>
        </div>
        {/* El Equipo */}
        <div className="reveal">
          <h3 className={`text-3xl font-bold text-center mb-8 ${theme === 'dark' ? 'text-azul-conectado' : 'text-cian-futurista'}`}>{t('aboutUs.teamTitle')}</h3>
          <div className="flex flex-wrap justify-center gap-8">
            <article className="text-center">
              <img
                src="https://placehold.co/150x150/00CFFF/FFFFFF?text=MTL"
                alt="Foto del CEO"
                className={`rounded-full w-32 h-32 mx-auto mb-4 border-4 ${theme === 'dark' ? 'border-azul-conectado' : 'border-cian-futurista'}`}
              />
              <a
                href="https://www.linkedin.com/in/pedro-cortez-a407b715b/"
                target="_blank"
                className={`inline-flex items-center gap-2 text-xl font-bold ${theme === 'dark' ? 'text-blanco-puro hover:text-cian-futurista' : 'text-gris-urbano hover:text-azul-conectado'}`}
              >
                {t('aboutUs.teamMember1.name')} <i className={`${theme === 'dark' ? 'text-cian-futurista' : 'text-azul-conectado'} fab fa-linkedin`} aria-hidden="true"></i>
              </a>
              <p className={`${theme === 'dark' ? 'text-gris-neblina' : 'text-gray-600'}`}>{t('aboutUs.teamMember1.role')}</p>
              <p className={`${theme === 'dark' ? 'text-gris-neblina' : 'text-gray-600'} text-sm`}>{t('aboutUs.teamMember1.country')}</p>
            </article>
            <article className="text-center">
              <img
                src="https://placehold.co/150x150/00CFFF/FFFFFF?text=WEB"
                alt="Foto del CTO"
                className={`rounded-full w-32 h-32 mx-auto mb-4 border-4 ${theme === 'dark' ? 'border-azul-conectado' : 'border-cian-futurista'}`}
              />
              <a
                href="https://www.linkedin.com/in/ivan-alonso-chucas-rojas-8549ab85/"
                target="_blank"
                className={`inline-flex items-center gap-2 text-xl font-bold ${theme === 'dark' ? 'text-blanco-puro hover:text-cian-futurista' : 'text-gris-urbano hover:text-azul-conectado'}`}
              >
                {t('aboutUs.teamMember2.name')} <i className={`${theme === 'dark' ? 'text-cian-futurista' : 'text-azul-conectado'} fab fa-linkedin`} aria-hidden="true"></i>
              </a>
              <p className={`${theme === 'dark' ? 'text-gris-neblina' : 'text-gray-600'}`}>{t('aboutUs.teamMember2.role')}</p>
              <p className={`${theme === 'dark' ? 'text-gris-neblina' : 'text-gray-600'} text-sm`}>{t('aboutUs.teamMember2.country')}</p>
            </article>
            <article className="text-center">
              <img
                src="https://placehold.co/150x150/1565FF/FFFFFF?text=TI"
                alt="Foto del CTO"
                className={`rounded-full w-32 h-32 mx-auto mb-4 border-4 ${theme === 'dark' ? 'border-cian-futurista' : 'border-azul-conectado'}`}
              />
               <a
                href="https://www.linkedin.com/in/andresmelendres/"
                target="_blank"
                className={`inline-flex items-center gap-2 text-xl font-bold ${theme === 'dark' ? 'text-blanco-puro hover:text-cian-futurista' : 'text-gris-urbano hover:text-azul-conectado'}`}
              >
                {t('aboutUs.teamMember3.name')} <i className={`${theme === 'dark' ? 'text-cian-futurista' : 'text-azul-conectado'} fab fa-linkedin`} aria-hidden="true"></i>
              </a>
              <p className={`${theme === 'dark' ? 'text-gris-neblina' : 'text-gray-600'}`}>{t('aboutUs.teamMember3.role')}</p>
              <p className={`${theme === 'dark' ? 'text-gris-neblina' : 'text-gray-600'} text-sm`}>{t('aboutUs.teamMember3.country')}</p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
