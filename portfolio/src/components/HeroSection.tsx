import { useTranslation } from 'react-i18next';
import { usePortfolioData } from '../hooks/usePortfolioData';

export const HeroSection = () => {
    const { personalData } = usePortfolioData();
    const { t } = useTranslation();

    return (
        <section className="relative min-h-[90vh] flex flex-col justify-center items-center text-center px-4 overflow-hidden pt-20">
            {/* Background Watermark Pattern */}
            <div className="absolute inset-0 z-0 opacity-[0.03] bg-watermark-pattern bg-repeat" />

            <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
                <div className="mb-8">
                    {personalData.avatar ? (
                        <img src={personalData.avatar} alt="Avatar" className="w-32 h-32 rounded-3xl object-cover border border-border shadow-sm mx-auto" />
                    ) : (
                        <div className="w-32 h-32 rounded-3xl bg-surface border border-border shadow-sm mx-auto flex items-center justify-center text-3xl font-heading text-text-secondary font-bold">
                            BL
                        </div>
                    )}
                </div>

                <h1 className="text-5xl md:text-4xl font-bold text-text-primary mb-6">
                    {personalData.name}
                </h1>

                <p className="text-xl md:text-2xl text-text-secondary mb-4 font-medium">
                    {personalData.title}
                </p>

                <p className="text-lg md:text-xl text-text-secondary/80 max-w-2xl font-light italic">
                    "{personalData.slogan}"
                </p>

                {/* Metrics Banner */}
                <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 pt-8 border-t border-border w-full">
                    {personalData.customMetrics ? (
                        personalData.customMetrics.map((item, idx) => (
                            <div key={idx} className="flex flex-col items-center text-center">
                                <span className="text-4xl font-bold text-accent mb-2">{item.value}</span>
                                <span className="text-sm text-text-secondary uppercase tracking-wider whitespace-pre-line leading-relaxed">{item.label}</span>
                            </div>
                        ))
                    ) : (
                        <>
                            <div className="flex flex-col items-center text-center">
                                <span className="text-4xl font-bold text-accent mb-2">{personalData.metrics.yearsOfExperience}</span>
                                <span className="text-sm text-text-secondary uppercase tracking-wider">{t('hero.yearsExp')}</span>
                            </div>
                            <div className="flex flex-col items-center text-center">
                                <span className="text-4xl font-bold text-accent mb-2">{personalData.metrics.patents}</span>
                                <span className="text-sm text-text-secondary uppercase tracking-wider">{t('hero.patents')}</span>
                            </div>
                            <div className="flex flex-col items-center text-center">
                                <span className="text-4xl font-bold text-accent mb-2">{personalData.metrics.projectsValue}</span>
                                <span className="text-sm text-text-secondary uppercase tracking-wider">{t('hero.volume')}</span>
                            </div>
                            <div className="flex flex-col items-center text-center">
                                <span className="text-4xl font-bold text-accent mb-2">{personalData.metrics.teamSize}</span>
                                <span className="text-sm text-text-secondary uppercase tracking-wider">{t('hero.team')}</span>
                            </div>
                        </>
                    )}
                </div>

                {/* Quick Links / Contact */}
                {/* <div className="mt-12 flex flex-wrap justify-center gap-4">
                    {personalData.contact.resumePDF && (
                        <a href={personalData.contact.resumePDF} target="_blank" rel="noreferrer" className="px-6 py-2 bg-accent text-white rounded-full font-medium hover:bg-accent/90 transition-colors">
                            {t('hero.viewResume')}
                        </a>
                    )}
                    {personalData.contact.github && (
                        <a href={personalData.contact.github} target="_blank" rel="noreferrer" className="px-6 py-2 border border-border text-text-primary rounded-full font-medium hover:bg-surface transition-colors">
                            GitHub
                        </a>
                    )}
                    {personalData.contact.linkedin && (
                        <a href={personalData.contact.linkedin} target="_blank" rel="noreferrer" className="px-6 py-2 border border-border text-text-primary rounded-full font-medium hover:bg-surface transition-colors">
                            LinkedIn
                        </a>
                    )}
                </div> */}
            </div>
        </section>
    );
};
