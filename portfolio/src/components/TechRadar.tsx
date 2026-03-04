import { useTranslation } from 'react-i18next';
import { personalData } from '../data/portfolio';

const techCategories = [
    { name: "Backend / Microservices", tags: ["Python", "Java", "Kubernetes", "Spring Boot", "FastAPI"] },
    { name: "AI / ML / Data", tags: ["PyTorch", "TensorFlow", "Generative AI", "LLM", "Data Engineering"] },
    { name: "Manufacturing / IIoT", tags: ["MindSphere", "Teamcenter", "MES/MOM", "S7 OPCUA", "Edge Computing"] },
    { name: "Frontend / Web", tags: ["React", "Vue", "TypeScript", "TailwindCSS", "Node.js"] }
];

export const TechRadar = () => {
    const { t } = useTranslation();
    return (
        <section className="py-24 px-4 bg-background max-w-7xl mx-auto w-full border-t border-border/50">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

                {/* Left Side: Tech Stack */}
                <div>
                    <h2 className="text-3xl font-heading font-bold mb-8">{t('sections.tech')}</h2>
                    <div className="space-y-8">
                        {techCategories.map((category) => (
                            <div key={category.name}>
                                <h3 className="text-lg font-bold text-text-primary mb-3">{category.name}</h3>
                                <div className="flex flex-wrap gap-2">
                                    {category.tags.map(tag => (
                                        <span key={tag} className="px-3 py-1 bg-surface border border-border/60 hover:border-accent/40 rounded-lg text-sm text-text-secondary transition-colors cursor-default">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12">
                        <h3 className="text-lg font-bold text-text-primary mb-3">{t('labels.edu')}</h3>
                        {personalData.education && (
                            <div className="p-4 rounded-xl bg-surface border border-border">
                                <div className="font-medium text-text-primary">{personalData.education.university}</div>
                                <div className="text-sm text-text-secondary mt-1">{personalData.education.degree} ({personalData.education.year})</div>
                            </div>
                        )}
                    </div>

                    <div className="mt-12">
                        <h3 className="text-lg font-bold text-text-primary mb-3">{t('labels.languages')}</h3>
                        {personalData.languages && (
                            <div className="p-4 rounded-xl bg-surface border border-border">
                                <div className="text-sm text-text-secondary">{personalData.languages}</div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Right Side: Beyond Code */}
                <div>
                    <h2 className="text-3xl font-heading font-bold mb-8">{t('sections.beyond')}</h2>

                    <div className="p-8 rounded-2xl bg-surface border border-border shadow-sm mb-6">
                        <div className="flex items-end gap-4 mb-6">
                            <span className="text-5xl font-bold text-accent">{personalData.interests.readingHours}</span>
                            <span className="text-xl text-text-secondary font-medium pb-1">{t('labels.readingHours')}</span>
                        </div>

                        <p className="text-text-primary leading-relaxed mb-6 font-medium">
                            精读 <span className="text-accent font-bold">{personalData.interests.books}+</span> 本专业书籍，跨界建立体系化认知底座。
                        </p>

                        <div className="space-y-4">
                            <div className="flex flex-col text-sm border-b border-border/50 pb-3">
                                <div className="flex justify-between items-center mb-1">
                                    <span className="text-text-primary font-bold">技术架构与 AI</span>
                                    <span className="font-mono text-text-secondary">35%</span>
                                </div>
                                <span className="text-text-secondary/70 italic">{personalData.interests.bookList?.technical}</span>
                            </div>
                            <div className="flex flex-col text-sm border-b border-border/50 pb-3">
                                <div className="flex justify-between items-center mb-1">
                                    <span className="text-text-primary font-bold">经管社科与商业</span>
                                    <span className="font-mono text-text-secondary">30%</span>
                                </div>
                                <span className="text-text-secondary/70 italic">{personalData.interests.bookList?.management}</span>
                            </div>
                            <div className="flex flex-col text-sm border-b border-border/50 pb-3">
                                <div className="flex justify-between items-center mb-1">
                                    <span className="text-text-primary font-bold">哲学与思想史</span>
                                    <span className="font-mono text-text-secondary">20%</span>
                                </div>
                                <span className="text-text-secondary/70 italic">{personalData.interests.bookList?.philosophy}</span>
                            </div>
                            <div className="flex flex-col text-sm pb-1">
                                <div className="flex justify-between items-center mb-1">
                                    <span className="text-text-primary font-bold">天文与硬科幻</span>
                                    <span className="font-mono text-text-secondary">15%</span>
                                </div>
                                <span className="text-text-secondary/70 italic">{personalData.interests.bookList?.scifi}</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-3">
                        {personalData.interests.hobbies.map(hobby => (
                            <span key={hobby} className="px-4 py-2 bg-background border border-border rounded-full text-sm font-medium text-text-secondary">
                                {hobby}
                            </span>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};
