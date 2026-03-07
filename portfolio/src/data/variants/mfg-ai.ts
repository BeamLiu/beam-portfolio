import type { CoreCompetency } from '../portfolio';
import type { SimpleProject } from '../../types/portfolio';

export const mfgAiOverrides = {
    personalData_zh: {
        title: "MFG+AI Expert, Solution Architect",
        slogan: "融合制造业与 AI 技术的数字化转型专家",
        metrics: {
            yearsOfExperience: "19+",
            patents: "12",
            projectsValue: "3000W+",
            teamSize: "70+"
        },
        customMetrics: [
            { value: "19+", label: "年制造业数字化经验" },
            { value: "12", label: "项核心技术专利" },
            { value: "3000W+", label: "产品营收" },
            { value: "70+", label: "人敏捷工程师团队" }
        ]
    },
    personalData_en: {
        title: "MFG+AI Expert, Solution Architect",
        slogan: "Digital Transformation Expert integrating Manufacturing and AI",
        metrics: {
            yearsOfExperience: "19+",
            patents: "12",
            projectsValue: "30M+",
            teamSize: "70+"
        },
        customMetrics: [
            { value: "19+", label: "Years in\nMFG Digital" },
            { value: "12", label: "Core Tech\nPatents" },
            { value: "30M+", label: "MFG Project\nRevenue" },
            { value: "70+", label: "Agile\nEngineers" }
        ]
    },
    coreCompetencies_zh: [
        {
            title: "制造业数字化转型架构",
            desc: "深度参与商飞、大众、大族激光等头部制造企业的数字化转型，熟悉 MOM、PLM、IIoT 全链路解决方案。"
        },
        {
            title: "AI 赋能工业场景落地",
            desc: "将大模型、机器学习应用于工艺优化、预测性维护、智能推荐等实际场景。"
        },
        {
            title: "工业互联网平台构建",
            desc: "主导 EMOP 等自研工业底座系统开发，多个头部客户落地案例。"
        },
        {
            title: "大型项目售前与交付",
            desc: "长期与西门子、达索等工业巨头团队合作售前售后，持有相关认证，客户满意度高。"
        }
    ] as CoreCompetency[],
    coreCompetencies_en: [
        {
            title: "Manufacturing Digital Transformation",
            desc: "Deep involvement in digital transformation of top manufacturers like COMAC, VW, Han's Laser. Expert in MOM, PLM, IIoT end-to-end solutions."
        },
        {
            title: "AI-Powered Industrial Applications",
            desc: "Applied LLM and ML to process optimization, predictive maintenance, intelligent recommendation, achieving 10x efficiency gains."
        },
        {
            title: "Industrial Internet Platform Development",
            desc: "Led development of proprietary industrial platforms like EMOP, enabling device connectivity, data collection, real-time monitoring, and intelligent analysis."
        },
        {
            title: "Enterprise Presales & Delivery",
            desc: "Dual-certified in Siemens and Dassault, excelling at multi-million project solution design, business negotiation, and delivery with high customer satisfaction."
        }
    ] as CoreCompetency[]
};
