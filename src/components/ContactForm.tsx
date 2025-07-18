import { useTranslation } from 'react-i18next';

const ContactForm = () => {
  const { t } = useTranslation();
  return (
    <section id="contacto" className="py-20 bg-white border-t border-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 reveal">
          <h2 className="text-4xl font-bold" style={{ color: '#1565FF' }}>
            {t('contactForm.title')}
          </h2>
          <p className="text-urbano mt-2">{t('contactForm.subtitle')}</p>
        </div>
        <form action="#" method="POST" className="max-w-2xl mx-auto reveal">
            <div className="mb-4">
              <label htmlFor="name" className="block text-urbano mb-2">
                {t('contactForm.name')}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-neblina border border-card rounded-lg py-2 px-4 text-urbano focus:outline-none focus:ring-2 focus:ring-accent"
                required
                aria-label={t('contactForm.name')}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-urbano mb-2">
                {t('contactForm.email')}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-neblina border border-card rounded-lg py-2 px-4 text-urbano focus:outline-none focus:ring-2 focus:ring-accent"
                required
                aria-label={t('contactForm.email')}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="service" className="block text-urbano mb-2">
                {t('contactForm.serviceOfInterest')}
              </label>
              <select
                id="service"
                name="service"
                className="w-full bg-neblina border border-card rounded-lg py-2 px-4 text-urbano focus:outline-none focus:ring-2 focus:ring-accent"
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
              <label htmlFor="message" className="block text-urbano mb-2">
                {t('contactForm.message')}
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="w-full bg-neblina border border-card rounded-lg py-2 px-4 text-urbano focus:outline-none focus:ring-2 focus:ring-accent"
                required
                aria-label={t('contactForm.message')}
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="font-bold text-lg px-8 py-3 rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300 w-full md:w-auto bg-secondary text-white bg-accent-hover"
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
