import { useTranslation } from 'react-i18next';
import { usePortfolioData } from '../hooks/usePortfolioData';

export const SimpleProjectShowcase = () => {
    const { extraProjects } = usePortfolioData();
    const { i18n } = useTranslation();
    const isEn = i18n.language.startsWith('en');

    if (!extraProjects || extraProjects.length === 0) {
        return null;
    }

    return (
        <section className="py-24 px-4 bg-surface" id="extra-projects">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4 font-heading">
                        {isEn ? "Enterprise PLM Implementations" : "其他典型 PLM 项目"}
                    </h2>
                    <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                        {isEn ? "More records of digital transformation platforms driven by PLM methodology." : "基于 PLM 及工业互联架构主导落地的更多头部制造业数字化研发中台案例。"}
                    </p>
                </div>

                <div className="grid gap-6">
                    {extraProjects.map((project) => (
                        <div
                            key={project.id}
                            className="bg-background border border-border rounded-xl p-6 hover:border-accent/40 transition-colors shadow-sm"
                        >
                            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                                <h3 className="text-xl font-bold text-text-primary">
                                    {project.name}
                                </h3>

                                {project.tags && project.tags.length > 0 && (
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map(tag => (
                                            <span key={tag} className="px-3 py-1 bg-surface border border-border text-text-secondary text-xs rounded-full font-mono">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </div>

                            <p className="text-text-secondary mb-4 leading-relaxed">
                                {project.description}
                            </p>

                            {project.techStack && (
                                <div className="mt-4 pt-4 border-t border-border flex flex-wrap items-center gap-2">
                                    <span className="text-xs text-text-secondary/60 font-mono uppercase">
                                        {isEn ? "Architecture:" : "技术架构:"}
                                    </span>
                                    <span className="text-sm font-medium text-accent">
                                        {project.techStack}
                                    </span>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
