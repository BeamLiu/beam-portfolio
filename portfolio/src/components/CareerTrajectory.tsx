import { useTranslation } from 'react-i18next';
import { usePortfolioData } from '../hooks/usePortfolioData';

export const CareerTrajectory = () => {
    const { experiences } = usePortfolioData();
    const { t } = useTranslation();
    return (
        <section className="py-24 px-4 bg-background max-w-7xl mx-auto w-full border-t border-border/50">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">{t('sections.career')}</h2>
                <p className="text-text-secondary">{t('sections.careerSub')}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {experiences.map((exp, index) => (
                    <div
                        key={exp.id}
                        className="flex flex-col p-8 bg-surface rounded-2xl border border-border group hover:shadow-md transition-all shadow-sm relative overflow-hidden"
                    >
                        {/* Decorative Number */}
                        <div className="absolute -right-4 -top-8 text-[120px] font-bold text-text-secondary/5 font-heading pointer-events-none select-none z-0">
                            {index + 1}
                        </div>

                        <div className="relative z-10 flex flex-col h-full">
                            <span className="text-accent font-mono text-sm tracking-wider mb-2 bg-accent/5 px-3 py-1 w-fit rounded-full">{exp.period}</span>
                            <h3 className="text-2xl font-bold text-text-primary mb-1">{exp.company}</h3>
                            <p className="text-text-secondary font-medium uppercase tracking-wide text-sm mb-6 pb-6 border-b border-border/60">{exp.role}</p>

                            <p className="text-text-primary mb-4 leading-relaxed font-medium italic">"{exp.achievement}"</p>
                            <p className="text-text-secondary/80 text-sm leading-relaxed mt-auto">
                                {exp.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
