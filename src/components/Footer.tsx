import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-dark py-8">
      <div className="container mx-auto px-6 text-center text-urbano">
        <div className="mb-4">
          <a href="https://www.linkedin.com/company/werexp?trk=blended-typeahead" target="_blank" rel="noopener noreferrer" className="mx-3 hover:text-accent" aria-label="LinkedIn">
            <i className="fab fa-linkedin fa-2x" aria-hidden="true"></i>
          </a>
          <a href="https://github.com/xp1408x" target="_blank" rel="noopener noreferrer" className="mx-3 hover:text-accent" aria-label="GitHub">
            <i className="fab fa-github fa-2x" aria-hidden="true"></i>
          </a>
          <a href="https://x.com/Werexp1408" target="_blank" rel="noopener noreferrer" className="mx-3 hover:text-accent" aria-label="Twitter">
            <i className="fab fa-twitter fa-2x" aria-hidden="true"></i>
          </a>
        </div>
        <p>{t('footer.copyright')}</p>
      </div>
    </footer>
  );
};

export default Footer;
