import { useTranslation } from 'react-i18next';
import { projects } from '../data/portfolio';

export const ProjectShowcase = () => {
    const { t } = useTranslation();

    return (
        <section className="py-24 px-4 bg-surface max-w-7xl mx-auto w-full">
            <div className="text-left mb-20 max-w-4xl">
                <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-text-primary">
                    {t('sections.projects')}
                </h2>
                <p className="text-xl text-text-secondary font-light">
                    {t('sections.projectsSub')}
                </p>
            </div>

            <div className="space-y-32">
                {projects.map((project, index) => (
                    <div
                        key={project.id}
                        className={`flex flex-col md:flex-row gap-12 lg:gap-20 items-start ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
                    >
                        {/* Visual/Media Side */}
                        <div className="w-full md:w-5/12 aspect-[4/3] bg-background rounded-2xl border border-border shadow-sm flex flex-col items-center justify-center p-8 group relative overflow-hidden">
                            {project.media?.image ? (
                                <img src={project.media.image} alt={project.name} className="absolute inset-0 w-full h-full object-cover z-0 opacity-80" />
                            ) : (
                                <div className="absolute inset-0 bg-gradient-to-br from-surface to-background z-0" />
                            )}
                            <div className="relative z-10 text-center bg-background/80 backdrop-blur-sm p-6 rounded-xl border border-border/50 shadow-sm">
                                <h3 className="text-2xl font-bold font-mono text-text-primary/70 mb-4">{project.id.toUpperCase()}</h3>
                                <div className="flex flex-col gap-3 items-center">
                                    {project.media?.video && (
                                        <a href={project.media.video} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center px-6 py-2 border border-border rounded-full text-sm font-medium hover:bg-accent/5 hover:text-accent hover:border-accent/30 transition-all cursor-pointer">
                                            {t('labels.playVideo')}
                                        </a>
                                    )}
                                    {project.media?.pdf && (
                                        <a href={project.media.pdf} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center px-6 py-2 border border-border rounded-full text-sm font-medium hover:bg-accent/5 hover:text-accent hover:border-accent/30 transition-all cursor-pointer">
                                            {t('labels.viewDoc')}
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Content Side */}
                        <div className="w-full md:w-7/12 flex flex-col justify-center">
                            <div className="flex items-center gap-4 mb-4">
                                <span className="text-sm font-bold text-accent px-3 py-1 bg-accent/10 rounded-full">{project.year}</span>
                                <span className="text-sm font-medium text-text-secondary uppercase tracking-wider">{project.role}</span>
                            </div>

                            <h3 className="text-3xl font-bold text-text-primary mb-6">{project.name}</h3>
                            <p className="text-lg text-text-secondary mb-8 leading-relaxed">
                                {project.description}
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
                                <div>
                                    <h4 className="text-sm font-bold text-text-primary uppercase tracking-wider mb-3">{t('labels.challenge')}</h4>
                                    <p className="text-text-secondary leading-relaxed">{project.challenges}</p>
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold text-text-primary uppercase tracking-wider mb-3">{t('labels.impact')}</h4>
                                    <p className="text-text-primary font-medium leading-relaxed">{project.impact}</p>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-2 mt-auto">
                                {project.tags.map((tag) => (
                                    <span key={tag} className="px-3 py-1 bg-background border border-border rounded-md text-sm text-text-secondary font-mono">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
