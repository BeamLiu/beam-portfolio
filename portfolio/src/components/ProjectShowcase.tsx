import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { projects } from '../data/portfolio';
import { MediaPlayer } from './MediaPlayer';
import type { Project } from '../types/portfolio';

export const ProjectShowcase = () => {
    const { t } = useTranslation();
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [initialMediaType, setInitialMediaType] = useState<'video' | 'pdf'>('video');

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
                            {((project.media?.video || (project.media?.videos && project.media.videos.length > 0)) || 
                              (project.media?.pdf || (project.media?.pdfs && project.media.pdfs.length > 0))) && (
                                <div className="relative z-10 text-center bg-background/80 backdrop-blur-sm p-6 rounded-xl border border-border/50 shadow-sm">
                                    <h3 className="text-2xl font-bold font-mono text-text-primary/70 mb-4">{project.id.toUpperCase()}</h3>
                                    <div className="flex flex-col gap-3 items-center">
                                        {(project.media?.video || (project.media?.videos && project.media.videos.length > 0)) && (
                                            <button
                                                onClick={() => {
                                                    setInitialMediaType('video');
                                                    setSelectedProject(project);
                                                }}
                                                className="inline-flex items-center justify-center gap-2 px-6 py-2 bg-accent text-white border border-accent rounded-full text-sm font-medium hover:bg-accent/90 transition-all cursor-pointer shadow-lg"
                                            >
                                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                                                </svg>
                                                {t('labels.playVideo')}
                                                {project.media?.videos && project.media.videos.length > 1 && (
                                                    <span className="ml-1">({project.media.videos.length})</span>
                                                )}
                                            </button>
                                        )}
                                        {(project.media?.pdf || (project.media?.pdfs && project.media.pdfs.length > 0)) && (
                                            <button
                                                onClick={() => {
                                                    setInitialMediaType('pdf');
                                                    setSelectedProject(project);
                                                }}
                                                className="inline-flex items-center justify-center gap-2 px-6 py-2 border border-border rounded-full text-sm font-medium hover:bg-accent/5 hover:text-accent hover:border-accent/30 transition-all cursor-pointer"
                                            >
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                                </svg>
                                                {t('labels.viewDoc')}
                                                {project.media?.pdfs && project.media.pdfs.length > 1 && (
                                                    <span className="ml-1">({project.media.pdfs.length})</span>
                                                )}
                                            </button>
                                        )}
                                    </div>
                                </div>
                            )}
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

            {/* Modal */}
            {selectedProject && (
                <div
                    className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
                    onClick={() => setSelectedProject(null)}
                >
                    <div
                        className="bg-surface border border-border rounded-xl max-w-5xl w-full p-6 relative"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setSelectedProject(null)}
                            className="absolute top-4 right-4 p-2 hover:bg-background rounded-lg transition-colors z-10"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        <MediaPlayer
                            videos={selectedProject.media?.videos || (selectedProject.media?.video ? [{ title: t('labels.playVideo'), url: selectedProject.media.video }] : undefined)}
                            pdfs={selectedProject.media?.pdfs || (selectedProject.media?.pdf ? [{ title: t('labels.viewDoc'), url: selectedProject.media.pdf }] : undefined)}
                            image={selectedProject.media?.image}
                            github={selectedProject.media?.github}
                            weblink={selectedProject.media?.weblink}
                            initialMediaType={initialMediaType}
                        />
                    </div>
                </div>
            )}
        </section>
    );
};
