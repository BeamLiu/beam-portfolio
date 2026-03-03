import { useTranslation } from 'react-i18next';
import { aiShows } from '../data/portfolio';
import { MediaPlayer } from './MediaPlayer';

export const AIShowcase = () => {
    const { t } = useTranslation();

    return (
        <section className="py-24 px-4 bg-background max-w-7xl mx-auto w-full">
            <div className="text-left mb-20 max-w-4xl">
                <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-text-primary">
                    {t('sections.aiShows')}
                </h2>
                <p className="text-xl text-text-secondary font-light">
                    {t('sections.aiShowsSub')}
                </p>
            </div>

            <div className="space-y-32">
                {aiShows.map((project, index) => (
                    <div
                        key={project.id}
                        className={`flex flex-col md:flex-row gap-12 lg:gap-20 items-start ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
                    >
                        {/* Media Side */}
                        <div className="w-full md:w-5/12">
                            <MediaPlayer
                                videos={project.media?.videos}
                                pdfs={project.media?.pdfs}
                                image={project.media?.image}
                                github={project.media?.github}
                            />
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
                                    <span key={tag} className="px-3 py-1 bg-surface border border-border rounded-md text-sm text-text-secondary font-mono">
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
