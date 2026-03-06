import { useTranslation } from 'react-i18next';
import {
    personalData_zh, personalData_en,
    experiences_zh, experiences_en,
    projects_zh, projects_en,
    aiShows_zh, aiShows_en,
    geekProjects_zh, geekProjects_en,
    patents_zh, patents_en,
    certifications_zh, certifications_en,
    coreCompetencies_zh, coreCompetencies_en
} from '../data/portfolio';

export const usePortfolioData = () => {
    const { i18n } = useTranslation();
    const isEn = i18n.language.startsWith('en');

    return {
        personalData: isEn ? personalData_en : personalData_zh,
        experiences: isEn ? experiences_en : experiences_zh,
        projects: isEn ? projects_en : projects_zh,
        aiShows: isEn ? aiShows_en : aiShows_zh,
        geekProjects: isEn ? geekProjects_en : geekProjects_zh,
        patents: isEn ? patents_en : patents_zh,
        certifications: isEn ? certifications_en : certifications_zh,
        coreCompetencies: isEn ? coreCompetencies_en : coreCompetencies_zh,
    };
};
