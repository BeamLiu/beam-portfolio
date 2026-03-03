import { useTranslation } from 'react-i18next';
import { aiShows, geekProjects } from '../data/portfolio';

export const ProductShowcase = () => {
    const { t } = useTranslation();
    const allProducts = [...aiShows, ...geekProjects];

    return (
        <section className="py-24 px-4 bg-background max-w-7xl mx-auto w-full">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-text-primary">
                    {t('sections.products')}
                </h2>
                <p className="text-xl text-text-secondary font-light max-w-3xl mx-auto">
                    {t('sections.productsSub')}
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {allProducts.map((product) => (
                    <div 
                        key={product.id} 
                        className="bg-surface border border-border rounded-xl overflow-hidden hover:border-accent/40 hover:shadow-xl transition-all group"
                    >
                        {/* Image/Visual Area */}
                        <div className="aspect-video bg-gradient-to-br from-accent/5 via-surface to-background flex items-center justify-center relative overflow-hidden border-b border-border">
                            {product.media?.image ? (
                                <img 
                                    src={product.media.image} 
                                    alt={product.name} 
                                    className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-300"
                                />
                            ) : (
                                <div className="text-center p-6">
                                    <div className="w-16 h-16 mx-auto mb-3 bg-accent/10 rounded-xl flex items-center justify-center">
                                        <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                        </svg>
                                    </div>
                                    <div className="text-xs font-mono text-text-secondary uppercase tracking-wider">
                                        {product.id}
                                    </div>
                                </div>
                            )}
                            <div className="absolute top-3 right-3 bg-accent text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                                {product.year}
                            </div>
                        </div>

                        {/* Content Area */}
                        <div className="p-5">
                            <h3 className="text-xl font-bold text-text-primary mb-2 group-hover:text-accent transition-colors">
                                {product.name}
                            </h3>

                            <p className="text-xs font-medium text-accent/80 mb-3 uppercase tracking-wider">
                                {product.role}
                            </p>

                            <p className="text-sm text-text-secondary mb-4 leading-relaxed line-clamp-3">
                                {product.description}
                            </p>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-1.5 mb-4">
                                {product.tags.slice(0, 4).map((tag) => (
                                    <span 
                                        key={tag} 
                                        className="px-2 py-0.5 bg-background border border-border rounded text-xs text-text-secondary font-mono"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* Action Buttons */}
                            <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                                {product.media?.video && (
                                    <a 
                                        href={product.media.video} 
                                        target="_blank" 
                                        rel="noreferrer"
                                        className="flex-1 text-center px-3 py-2 bg-accent text-white rounded-lg text-xs font-medium hover:bg-accent/90 transition-colors flex items-center justify-center gap-1"
                                    >
                                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                                        </svg>
                                        {t('labels.playVideo')}
                                    </a>
                                )}
                                {product.media?.github && (
                                    <a 
                                        href={product.media.github} 
                                        target="_blank" 
                                        rel="noreferrer"
                                        className="px-3 py-2 border border-border rounded-lg text-xs font-medium hover:bg-background hover:border-accent/40 transition-colors flex items-center justify-center"
                                        title="GitHub"
                                    >
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                        </svg>
                                    </a>
                                )}
                                {product.media?.pdf && (
                                    <a 
                                        href={product.media.pdf} 
                                        target="_blank" 
                                        rel="noreferrer"
                                        className="px-3 py-2 border border-border rounded-lg text-xs font-medium hover:bg-background hover:border-accent/40 transition-colors flex items-center justify-center"
                                        title="Document"
                                    >
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                        </svg>
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
