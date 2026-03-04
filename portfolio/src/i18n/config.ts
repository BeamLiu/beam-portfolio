import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Define resources
const resources = {
    zh: {
        translation: {
            "nav": {
                "explore": "探索",
            },
            "hero": {
                "viewResume": "查看简历 (PDF)",
                "yearsExp": "年研发与管理经验",
                "patents": "项核心技术专利",
                "volume": "工业软件产品营收",
                "team": "人敏捷工程师团队",
            },
            "sections": {
                "values": "核心竞争力",
                "valuesSub": "售前转化、技术架构与团队管理的全面支撑体系",
                "products": "AI 产品与技术探索",
                "productsSub": "AI 结对编程、氛围编程与前沿技术的实践探索。",
                "projects": "标杆项目与商业案例",
                "projectsSub": "千万级大型企业服务落地验证。",
                "career": "职业轨迹与成就",
                "careerSub": "高管级技术履历，推动全栈业务增长。",
                "patents": "技术专利",
                "patentsSub": "深入底层的技术突破与长效资产沉淀。",
                "certifications": "专业认证",
                "certificationsSub": "Google AI领域、西门子及达索工业软件领域能力认证。",
                "tech": "技术雷达图谱",
                "beyond": "认知与视野 (Beyond Code)"
            },
            "labels": {
                "playVideo": "▷ 播放视频",
                "viewDoc": "📄 查看方案",
                "viewCode": " 代码仓库",
                "challenge": "业务挑战/背景",
                "impact": "商业收益/成果",
                "readingHours": "+ 阅读时长",
                "edu": "教育背景",
                "languages": "语言能力",
            }
        }
    },
    en: {
        translation: {
            "nav": {
                "explore": "Explore",
            },
            "hero": {
                "viewResume": "View Resume (PDF)",
                "yearsExp": "Years Experience",
                "patents": "Origin Patents",
                "volume": "Enterprise Deals",
                "team": "Eng Team Managed",
            },
            "sections": {
                "values": "Core Competencies",
                "valuesSub": "Full-stack support across presales, architecture, and team management.",
                "aiShows": "AI Products & Tech Explorations",
                "aiShowsSub": "Cutting-edge AI pair programming, ambient coding, and emerging tech practices.",
                "products": "AI Products & Tech Explorations",
                "productsSub": "Cutting-edge AI pair programming, ambient coding, and emerging tech practices.",
                "projects": "Case Studies & Ventures",
                "projectsSub": "Multi-million enterprise platform implementations.",
                "career": "Career Trajectory",
                "careerSub": "Executive track record driving full-stack business growth.",
                "patents": "Origin Patents",
                "patentsSub": "Deep-tech breakthroughs and long-term asset accumulation.",
                "certifications": "Professional Certifications",
                "certificationsSub": "Google AI/ML and Siemens IIoT professional certifications.",
                "tech": "Technology Radar",
                "beyond": "Beyond Code"
            },
            "labels": {
                "playVideo": "▷ Play Video",
                "viewDoc": "📄 View Document",
                "viewCode": " Source Code",
                "challenge": "Business Challenge / Context",
                "impact": "Commercial Impact / Results",
                "readingHours": "+ Reading Hours",
                "edu": "Education",
                "languages": "Language Proficiency",
                "chinese": "Chinese",
                "english": "English",
                "listening": "Listening",
                "speaking": "Speaking",
                "reading": "Reading",
                "writing": "Writing"
            }
        }
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'zh', // default language
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
