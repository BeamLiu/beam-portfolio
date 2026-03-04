import { useTranslation } from 'react-i18next';

const values = [
    {
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
        ),
        title: "制造业数字化全栈理解",
        desc: "从 PLM 到 MOM/MES 再到 IIoT，大量制造业头部客户数字化实践。"
    },
    {
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
        ),
        title: "AI 技术实践者",
        desc: "谷歌及谷歌云AI领域双认证，大模型微调、小模型训练、传统机器学习、数据准备到工业场景落地的完整实践，Vibe Coding周边的大量实践。"
    },
    {
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        ),
        title: "售前与商业转化",
        desc: "西门子、达索工业软件领域售前售后认证，懂技术更懂客户，1 小时拿下 700 万订单。"
    },
    {
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        ),
        title: "敏捷团队AI化",
        desc: "微服务架构先行者，曾带领 70+ 人敏捷团队，AI时代微型团队全面AI化。"
    }
];

export const ValueCards = () => {
    const { t } = useTranslation();

    return (
        <section className="py-24 px-4 bg-background border-t border-border/50">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">{t('sections.values')}</h2>
                    <p className="text-text-secondary">{t('sections.valuesSub')}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {values.map((v, i) => (
                        <div
                            key={i}
                            className="p-8 rounded-2xl bg-surface border border-border mt-0 shadow-sm transition-all duration-300 group hover:-translate-y-1 hover:shadow-md"
                        >
                            <div className="flex items-start gap-4 mb-4">
                                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all">
                                    {v.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-text-primary group-hover:text-accent transition-colors flex-1 pt-2">{v.title}</h3>
                            </div>
                            <p className="text-lg text-text-secondary leading-relaxed ml-16">{v.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
