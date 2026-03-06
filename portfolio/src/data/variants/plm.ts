import type { CoreCompetency } from '../portfolio';
import type { SimpleProject } from '../../types/portfolio';

export const plmOverrides = {
    personalData_zh: {
        title: "PLM Architect, Presales Expert",
        slogan: "深耕 PLM 领域的工业数字化专家",
        metrics: {
            yearsOfExperience: "19+",
            patents: "12",
            projectsValue: "3000W+",
            teamSize: "70+"
        },
        customMetrics: [
            { value: "10+", label: "PLM大型制造业项目" },
            { value: "12", label: "项核心技术专利" },
            { value: "3000W+", label: "PLM自有产品营收" },
            { value: "70+", label: "人敏捷工程师团队" }
        ]
    },
    personalData_en: {
        title: "PLM Architect, Presales Expert",
        slogan: "Industrial Digitalization Expert focusing on PLM",
        metrics: {
            yearsOfExperience: "19+",
            patents: "12",
            projectsValue: "30M+",
            teamSize: "70+"
        },
        customMetrics: [
            { value: "10+", label: "Enterprise PLM Projects" },
            { value: "12", label: "Core Tech Patents" },
            { value: "30M+", label: "PLM Product Revenue" },
            { value: "70+", label: "Agile Engineers Team" }
        ]
    },
    coreCompetencies_zh: [
        {
            title: "大型头部制造业PLM落地",
            desc: "主导多个五百万至千万级重点PLM项目的设计与实施，熟悉APQP, IPD流程。"
        },
        {
            title: "成熟的售前与商业转化",
            desc: "具有西门子、达索产品售前实施双重认证，精准把握客户痛点，1小时内实现百万级成单。"
        },
        {
            title: "微服务架构与AI落地",
            desc: "主导EMOP等自研工业底座系统的开发，成功实现MCAD/ECAD融合，大量工业AI落地经验。"
        },
        {
            title: "敏捷交付与百人团队管理",
            desc: "国内最早一批敏捷实践者，曾管理70+人研发大团队，推行可落地的交付保障。"
        }
    ] as CoreCompetency[],
    coreCompetencies_en: [
        {
            title: "Enterprise PLM Implementation",
            desc: "Led multi-million PLM project design and implementation for top-tier manufacturing clients, familiar with APQP, IPD processes."
        },
        {
            title: "Presales & Commercial Conversion",
            desc: "Dual-certified in Siemens and Dassault product presales/implementation, precise understanding of customer pain points."
        },
        {
            title: "Microservices & AI Implementation",
            desc: "Architected proprietary industrial platforms like EMOP, successfully integrating MCAD/ECAD, AI implementation experience."
        },
        {
            title: "Agile Delivery & Team Management",
            desc: "Early agile practitioner in China, managed 70+ developer teams with guaranteed delivery frameworks."
        }
    ] as CoreCompetency[],
    extraProjects_zh: [
        {
            id: "ruisong",
            name: "广州瑞松智能科技 PLM 项目",
            description: "建设统一的研发创新平台，实现全国多地协同；推动设计标准化，打通研发体系数据流。以 Teamcenter 为基础、EMOP 为标准产品满足全业务线的全生命周期管理。",
            techStack: "Teamcenter + EMOP 微服务架构 + APP 应用",
            tags: ["汽车产线装备"]
        },
        {
            id: "honda",
            name: "本田汽车(EGCH)研发生产管理系统",
            description: "搭建以项目管理为业务承载的平台，串联 PLM 系统内数据对象，实现业务流和数据流的协作，并延伸至财务端的成本管理与生产端的计划管理。",
            techStack: "Teamcenter + 工业 APP",
            tags: ["汽车整车"]
        },
        {
            id: "foton",
            name: "福田汽车数字化平台",
            description: "采用新一代 IT 架构设计企业的数字化平台，以西门子 PLM 系统为数据后台，构建研发数据中台。汇聚 14 个子系统数据，完成一站式搜索、一站式流程审批和一站式知识管理。",
            techStack: "Teamcenter + EMOP 基础平台 + 易联/易观/易算/易搭",
            tags: ["商用车"]
        },
        {
            id: "fastprint",
            name: "兴森快捷生产工艺优化系统",
            description: "以微服务架构设计和开发交付自动化工艺 APP，通过自动化规则提升 PCB 设计的工艺编写效率，将编写耗时从平均 3 小时降到 1 分钟。",
            techStack: "Teamcenter + EMOP 基础平台 + 易联/易算",
            tags: ["PCB制造"]
        },
        {
            id: "hytera",
            name: "海能达研发管理平台",
            description: "构建研发数据中台，实现更快速的产品研发和交付。通过物料优选 APP 推荐相似物料，使得物料重用率提升了近十个百分点。",
            techStack: "Teamcenter + EMOP 基础平台 + 易联/易观/易算/易搭",
            tags: ["通信设备"]
        }
    ] as SimpleProject[],
    extraProjects_en: [
        {
            id: "ruisong",
            name: "Ruisong Technology PLM Project",
            description: "Built a unified R&D innovation platform for multi-site collaboration. Promoted design standardization and integrated R&D data flow.",
            techStack: "Teamcenter + EMOP Microservices + APPs",
            tags: ["Automotive Production Equipment"]
        },
        {
            id: "honda",
            name: "Honda (EGCH) R&D & Production Mgmt",
            description: "Project management-driven platform connecting PLM data objects. Integrated business flows and extended management to finance and production planning.",
            techStack: "Teamcenter + Industrial APPs",
            tags: ["Automotive"]
        },
        {
            id: "foton",
            name: "Foton Motors Digital Platform",
            description: "Built an R&D Data Hub based on next-gen IT architecture. Aggregated data from 14 subsystems for one-stop search, approval, and knowledge management.",
            techStack: "Teamcenter + EMOP Core + Plugins",
            tags: ["Commercial Vehicles"]
        },
        {
            id: "fastprint",
            name: "Fastprint Process Optimization System",
            description: "Developed automated process APPs using microservices. Reduced PCB process authoring time from 3 hours to 1 minute through automated rules.",
            techStack: "Teamcenter + EMOP Core + Plugins",
            tags: ["PCB Manufacturing"]
        },
        {
            id: "hytera",
            name: "Hytera R&D Management Platform",
            description: "Implemented R&D Material Selection APP, improving material reuse rates by nearly 10% through similarity recommendation features.",
            techStack: "Teamcenter + EMOP Core + Plugins",
            tags: ["Communications Equipment"]
        }
    ] as SimpleProject[]
};
