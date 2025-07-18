import { useTranslation } from 'react-i18next';

const SocialProof = () => {
  const { t } = useTranslation();
  return (
    <section className="py-12 bg-neblina">
      <div className="container mx-auto px-6 text-center reveal">
        <h3 className="text-secondary text-sm font-bold tracking-widest uppercase mb-6">
          {t('socialProof.title')}
        </h3>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          <i className="fab fa-microsoft fa-3x text-urbano" aria-hidden="true"></i>
          <i className="fab fa-apple fa-3x text-urbano" aria-hidden="true"></i>
          <i className="fab fa-google fa-3x text-urbano" aria-hidden="true"></i>
          <i className="fab fa-amazon fa-3x text-urbano" aria-hidden="true"></i>
          <i className="fab fa-spotify fa-3x text-urbano" aria-hidden="true"></i>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
