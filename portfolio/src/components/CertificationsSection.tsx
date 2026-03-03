import { useTranslation } from 'react-i18next';
import { certifications } from '../data/portfolio';

export const CertificationsSection = () => {
    const { t } = useTranslation();
    
    return (
        <section className="py-24 px-4 bg-background max-w-5xl mx-auto w-full">
            <div className="mb-12">
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">{t('sections.certifications')}</h2>
                <p className="text-text-secondary">{t('sections.certificationsSub')}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {certifications.map((cert) => (
                    <div 
                        key={cert.id} 
                        className="bg-surface border border-border rounded-xl p-6 hover:border-accent/40 hover:shadow-lg transition-all group"
                    >
                        <div className="flex items-start justify-between mb-4">
                            <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                </svg>
                            </div>
                            <span className="text-xs font-mono text-text-secondary bg-background px-2 py-1 rounded">
                                {cert.year}
                            </span>
                        </div>
                        
                        <h3 className="text-lg font-bold text-text-primary mb-2 group-hover:text-accent transition-colors">
                            {cert.name}
                        </h3>
                        
                        <p className="text-sm font-medium text-accent/80 mb-3">
                            {cert.organization}
                        </p>
                        
                        <p className="text-sm text-text-secondary leading-relaxed">
                            {cert.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};
