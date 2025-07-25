import { useTranslation } from 'react-i18next';
import { useTheme } from '../context/ThemeContext';

const ContactForm = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();
  return (
    <section id="contacto" className={`py-20 ${theme === 'dark' ? 'bg-gris-urbano border-gray-700' : 'bg-blanco-puro border-gray-200'} border-t`}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 reveal">
          <h2 className={`text-4xl font-bold ${theme === 'dark' ? 'text-cian-futurista' : 'text-azul-conectado'}`}>
            {t('contactForm.title')}
          </h2>
          <p className={`${theme === 'dark' ? 'text-blanco-puro' : 'text-gris-urbano'} mt-2`}>{t('contactForm.subtitle')}</p>
        </div>
        <form action="#" method="POST" className="max-w-2xl mx-auto reveal">
            <div className="mb-4">
              <label htmlFor="name" className={`block mb-2 ${theme === 'dark' ? 'text-blanco-puro' : 'text-gris-urbano'}`}>
                {t('contactForm.name')}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className={`w-full rounded-lg py-2 px-4 focus:outline-none focus:ring-2 ${theme === 'dark' ? 'bg-gray-800 border-gray-700 text-blanco-puro focus:ring-azul-conectado' : 'bg-gray-100 border-gray-200 text-gris-urbano focus:ring-cian-futurista'}`}
                required
                aria-label={t('contactForm.name')}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className={`block mb-2 ${theme === 'dark' ? 'text-blanco-puro' : 'text-gris-urbano'}`}>
                {t('contactForm.email')}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className={`w-full rounded-lg py-2 px-4 focus:outline-none focus:ring-2 ${theme === 'dark' ? 'bg-gray-800 border-gray-700 text-blanco-puro focus:ring-azul-conectado' : 'bg-gray-100 border-gray-200 text-gris-urbano focus:ring-cian-futurista'}`}
                required
                aria-label={t('contactForm.email')}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="service" className={`block mb-2 ${theme === 'dark' ? 'text-blanco-puro' : 'text-gris-urbano'}`}>
                {t('contactForm.serviceOfInterest')}
              </label>
              <select
                id="service"
                name="service"
                className={`w-full rounded-lg py-2 px-4 focus:outline-none focus:ring-2 ${theme === 'dark' ? 'bg-gray-800 border-gray-700 text-blanco-puro focus:ring-azul-conectado' : 'bg-gray-100 border-gray-200 text-gris-urbano focus:ring-cian-futurista'}`}
                aria-label={t('contactForm.serviceOfInterest')}
              >
                <option>{t('contactForm.webDevelopment')}</option>
                <option>{t('contactForm.mobileApp')}</option>
                <option>{t('contactForm.arVr')}</option>
                <option>{t('contactForm.digitalMarketing')}</option>
                <option>{t('contactForm.other')}</option>
              </select>
            </div>
            <div className="mb-6">
              <label htmlFor="message" className={`block mb-2 ${theme === 'dark' ? 'text-blanco-puro' : 'text-gris-urbano'}`}>
                {t('contactForm.message')}
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className={`w-full rounded-lg py-2 px-4 focus:outline-none focus:ring-2 ${theme === 'dark' ? 'bg-gray-800 border-gray-700 text-blanco-puro focus:ring-azul-conectado' : 'bg-gray-100 border-gray-200 text-gris-urbano focus:ring-cian-futurista'}`}
                required
                aria-label={t('contactForm.message')}
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className={`font-bold text-lg px-8 py-3 rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300 w-full md:w-auto ${theme === 'dark' ? 'bg-azul-conectado text-blanco-puro hover:bg-cian-futurista' : 'bg-cian-futurista text-blanco-puro hover:bg-azul-conectado'}`}
              >
                {t('contactForm.sendMessage')}
              </button>
            </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
