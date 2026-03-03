import { useTranslation } from 'react-i18next';
import { patents } from '../data/portfolio';

export const PatentsTable = () => {
    const { t } = useTranslation();
    return (
        <section className="py-24 px-4 bg-surface max-w-5xl mx-auto w-full">
            <div className="mb-12">
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">{t('sections.patents')}</h2>
                <p className="text-text-secondary">{t('sections.patentsSub')}</p>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="border-b border-text-secondary/20">
                            <th className="py-4 px-6 text-sm font-medium text-text-secondary uppercase tracking-wider">Number</th>
                            <th className="py-4 px-6 text-sm font-medium text-text-secondary uppercase tracking-wider">Title</th>
                            <th className="py-4 px-6 text-sm font-medium text-text-secondary uppercase tracking-wider hidden md:table-cell">Area</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-border/50">
                        {patents.map((patent) => (
                            <tr key={patent.id} className="hover:bg-background/50 transition-colors group">
                                <td className="py-4 px-6 text-sm font-mono text-text-secondary whitespace-nowrap">
                                    {patent.number}
                                </td>
                                <td className="py-4 px-6 text-text-primary font-medium group-hover:text-accent transition-colors">
                                    {patent.title}
                                </td>
                                <td className="py-4 px-6 text-sm text-text-secondary hidden md:table-cell whitespace-nowrap">
                                    {patent.description}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
};
