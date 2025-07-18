import { useTranslation } from 'react-i18next';

const AboutUs = () => {
  const { t } = useTranslation();
  return (
    <section id="nosotros" className="py-20 bg-neblina">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 reveal">
          <h2 className="text-4xl font-bold" style={{ color: '#1565FF' }}>
            {t('aboutUs.title')}
          </h2>
          <p className="text-urbano mt-2">
            {t('aboutUs.subtitle')}
          </p>
        </div>
        {/* Nuestro Proceso */}
        <div className="mb-16 reveal">
          <h3 className="text-3xl font-bold text-secondary text-center mb-8">{t('aboutUs.processTitle')}</h3>
          <div className="relative">
            {/* Línea de tiempo */}
            <div
              className="hidden md:block border-l-4 absolute h-full top-0 left-1/2 -ml-2"
              style={{ borderColor: '#00CFFF' }}
            ></div>
            {/* Items del Proceso */}
            <div className="space-y-12 md:space-y-0">
              {/* Item 1 */}
              <article className="md:grid md:grid-cols-2 md:gap-8 items-center">
                <div className="md:text-right md:pr-8">
                  <div className="bg-accent w-8 h-8 rounded-full inline-flex items-center justify-center text-white font-bold mb-2">
                    1
                  </div>
                  <h4 className="text-xl font-bold text-urbano">{t('aboutUs.process1.title')}</h4>
                  <p className="text-urbano">
                    {t('aboutUs.process1.description')}
                  </p>
                </div>
                <div className="hidden md:block"></div>
              </article>
              {/* Item 2 */}
              <article className="md:grid md:grid-cols-2 md:gap-8 items-center">
                <div className="hidden md:block"></div>
                <div className="md:pl-8">
                  <div className="bg-secondary w-8 h-8 rounded-full inline-flex items-center justify-center text-white font-bold mb-2">
                    2
                  </div>
                  <h4 className="text-xl font-bold text-urbano">{t('aboutUs.process2.title')}</h4>
                  <p className="text-urbano">
                    {t('aboutUs.process2.description')}
                  </p>
                </div>
              </article>
              {/* Item 3 */}
              <article className="md:grid md:grid-cols-2 md:gap-8 items-center">
                <div className="md:text-right md:pr-8">
                  <div className="bg-urbano w-8 h-8 rounded-full inline-flex items-center justify-center text-white font-bold mb-2">
                    3
                  </div>
                  <h4 className="text-xl font-bold text-urbano">{t('aboutUs.process3.title')}</h4>
                  <p className="text-urbano">
                    {t('aboutUs.process3.description')}
                  </p>
                </div>
                <div className="hidden md:block"></div>
              </article>
              {/* Item 4 */}
              <article className="md:grid md:grid-cols-2 md:gap-8 items-center">
                <div className="hidden md:block"></div>
                <div className="md:pl-8">
                  <div className="bg-accent w-8 h-8 rounded-full inline-flex items-center justify-center text-white font-bold mb-2">
                    4
                  </div>
                  <h4 className="text-xl font-bold text-urbano">{t('aboutUs.process4.title')}</h4>
                  <p className="text-urbano">
                    {t('aboutUs.process4.description')}
                  </p>
                </div>
              </article>
            </div>
          </div>
        </div>
        {/* El Equipo */}
        <div className="reveal">
          <h3 className="text-3xl font-bold text-secondary text-center mb-8">{t('aboutUs.teamTitle')}</h3>
          <div className="flex flex-wrap justify-center gap-8">
            <article className="text-center">
              <img
                src="https://placehold.co/150x150/00CFFF/FFFFFF?text=CEO"
                alt="Foto del CEO"
                className="rounded-full w-32 h-32 mx-auto mb-4 border-4 border-accent"
              />
              <a
                href="https://www.linkedin.com/in/pedro-cortez-a407b715b/"
                target="_blank"
                className="inline-flex items-center gap-2 text-xl font-bold text-urbano hover:text-accent"
              >
                {t('aboutUs.teamMember1.name')} <i className="fab fa-linkedin text-secondary" aria-hidden="true"></i>
              </a>
              <p className="text-urbano">{t('aboutUs.teamMember1.role')}</p>
              <p className="text-urbano text-sm">{t('aboutUs.teamMember1.country')}</p>
            </article>
            <article className="text-center">
              <img
                src="https://placehold.co/150x150/00CFFF/FFFFFF?text=CTO"
                alt="Foto del CTO"
                className="rounded-full w-32 h-32 mx-auto mb-4 border-4 border-accent"
              />
              <a
                href="https://www.linkedin.com/in/ricardo-cortez-86191a16b/"
                target="_blank"
                className="inline-flex items-center gap-2 text-xl font-bold text-urbano hover:text-accent"
              >
                {t('aboutUs.teamMember2.name')} <i className="fab fa-linkedin text-secondary" aria-hidden="true"></i>
              </a>
              <p className="text-urbano">{t('aboutUs.teamMember2.role')}</p>
              <p className="text-urbano text-sm">{t('aboutUs.teamMember2.country')}</p>
            </article>
            <article className="text-center">
              <img
                src="https://placehold.co/150x150/1565FF/FFFFFF?text=WEB"
                alt="Foto del CTO"
                className="rounded-full w-32 h-32 mx-auto mb-4 border-4 border-secondary"
              />
              <h4 className="text-xl font-bold text-urbano">{t('aboutUs.teamMember3.name')}</h4>
              <p className="text-urbano">{t('aboutUs.teamMember3.role')}</p>
              <p className="text-urbano text-sm">{t('aboutUs.teamMember3.country')}</p>
            </article>
            <article className="text-center">
              <img
                src="https://placehold.co/150x150/2D2D2D/FFFFFF?text=UI/UX"
                alt="Foto del Lead Designer"
                className="rounded-full w-32 h-32 mx-auto mb-4 border-4 border-urbano"
              />
              <a
                href="https://www.linkedin.com/in/rubenboost/"
                target="_blank"
                className="inline-flex items-center gap-2 text-xl font-bold text-urbano hover:text-accent"
              >
                {t('aboutUs.teamMember4.name')} <i className="fab fa-linkedin text-secondary" aria-hidden="true"></i>
              </a>
              <p className="text-urbano">{t('aboutUs.teamMember4.role')}</p>
              <p className="text-urbano text-sm">{t('aboutUs.teamMember4.country')}</p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
