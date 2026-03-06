import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
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
import { plmOverrides } from '../data/variants/plm';
import { geekOverrides } from '../data/variants/geek';
import type { PersonalData, Project, Patent, Experience, Certification, SimpleProject } from '../types/portfolio';
import type { CoreCompetency } from '../data/portfolio';

export interface PortfolioData {
    personalData: PersonalData;
    experiences: Experience[];
    projects: Project[];
    aiShows: Project[];
    geekProjects: Project[];
    patents: Patent[];
    certifications: Certification[];
    coreCompetencies: CoreCompetency[];
    extraProjects?: SimpleProject[];
}

const mergeData = (base: PortfolioData, override: any): PortfolioData => {
    if (!override) return base;
    return {
        ...base,
        personalData: {
            ...base.personalData,
            ...(override.personalData || {}),
            metrics: override.personalData?.metrics || base.personalData.metrics,
            customMetrics: override.personalData?.customMetrics || base.personalData.customMetrics,
        },
        experiences: override.experiences || base.experiences,
        projects: override.projects || base.projects,
        aiShows: override.aiShows || base.aiShows,
        geekProjects: override.geekProjects || base.geekProjects,
        patents: override.patents || base.patents,
        certifications: override.certifications || base.certifications,
        coreCompetencies: override.coreCompetencies || base.coreCompetencies,
        extraProjects: override.extraProjects || base.extraProjects,
    };
};

export const usePortfolioData = (): PortfolioData => {
    const { i18n } = useTranslation();
    const location = useLocation();
    const isEn = i18n.language.startsWith('en');

    let overrides: any = null;
    let pageTitle = isEn ? "Beam Liu - AI Explorer & Industrial Digitalization Expert" : "刘圣质 (Beam Liu) - AI 探索者 & 工业数字化专家";

    if (location.pathname.startsWith('/plm')) {
        overrides = {
            personalData: isEn ? plmOverrides.personalData_en : plmOverrides.personalData_zh,
            coreCompetencies: isEn ? plmOverrides.coreCompetencies_en : plmOverrides.coreCompetencies_zh,
            extraProjects: isEn ? plmOverrides.extraProjects_en : plmOverrides.extraProjects_zh,
        };
        pageTitle = isEn ? "Beam Liu - PLM Architect & Presales Expert" : "刘圣质 (Beam Liu) - 资深 PLM 架构师 & 售前专家";
    } else if (location.pathname.startsWith('/geek')) {
        overrides = {
            personalData: isEn ? geekOverrides.personalData_en : geekOverrides.personalData_zh,
            coreCompetencies: isEn ? geekOverrides.coreCompetencies_en : geekOverrides.coreCompetencies_zh,
        };
        pageTitle = isEn ? "Beam Liu - AI Architect & Full-Stack Developer" : "刘圣质 (Beam Liu) - AI 架构师 & 全栈极客";
    }

    useEffect(() => {
        document.title = pageTitle;
    }, [pageTitle]);

    const baseData: PortfolioData = {
        personalData: isEn ? personalData_en : personalData_zh,
        experiences: isEn ? experiences_en : experiences_zh,
        projects: isEn ? projects_en : projects_zh,
        aiShows: isEn ? aiShows_en : aiShows_zh,
        geekProjects: isEn ? geekProjects_en : geekProjects_zh,
        patents: isEn ? patents_en : patents_zh,
        certifications: isEn ? certifications_en : certifications_zh,
        coreCompetencies: isEn ? coreCompetencies_en : coreCompetencies_zh,
    };

    return mergeData(baseData, overrides);
};
