import type { CoreCompetency } from '../portfolio';

export const geekOverrides = {
    personalData_zh: {
        title: "AI App, Full-Stack Developer",
        slogan: "专注大模型应用的全栈开发",
        metrics: {
            yearsOfCoding: "19+",
            aiProjects: "12",
            efficiency: "10x",
            humanCode: "<20%"
        },
        customMetrics: [
            { value: "19+", label: "年全栈架构沉淀" },
            { value: "12", label: "项核心技术专利" },
            { value: "10x", label: "AI 结对研发能效" },
            { value: "<10%", label: "新产品人类代码率" }
        ]
    },
    personalData_en: {
        title: "AI Architect, Full-Stack Developer",
        slogan: "Geek Architect focused on LLM fine-tuning and Agentic Workflows",
        metrics: {
            yearsOfCoding: "19+",
            aiProjects: "12",
            efficiency: "10x",
            humanCode: "<20%"
        },
        customMetrics: [
            { value: "19+", label: "Years of\nArchitecture" },
            { value: "12", label: "Core Tech\nPatents" },
            { value: "10x", label: "AI Dev\nEfficiency" },
            { value: "<20%", label: "Human\nCode Ratio" }
        ]
    },
    coreCompetencies_zh: [
        {
            title: "大模型架构与应用微调",
            desc: "Google Cloud机器学习及Google TF 深度学习认证，理解数据预处理到大模型微调、小模型训练的流程。"
        },
        {
            title: "Agentic 代码生成与结对编程",
            desc: "极深度的 Vibe Coding 实践者，24年中期开始利用 Claude/Agent 等AI工具，10倍效能重写底层工业软件平台全栈项目。"
        },
        {
            title: "对新兴技术的狂热",
            desc: "制造业云、边、端全栈技术探索，尝试传统机器学习在制造业的落地，现在尝试大模型在工业领域的深度应用，具备较强的学习能力和创新精神。"
        },
        {
            title: "端到端业务理解与复杂项目交付",
            desc: "深耕制造业数字化转型，具备从方案构建、架构设计到落地交付的端到端闭环能力。曾多次深度主导或参与大型企业级复杂项目售前交流与实施，拥有出色的业务分析洞察与客户沟通协作能力。"
        }
    ] as CoreCompetency[],
    coreCompetencies_en: [
        {
            title: "LLM Architecture & Fine-Tuning",
            desc: "Google Cloud ML and TF Deep Learning certified; understanding the full process from data preprocessing to LLM fine-tuning and small model training."
        },
        {
            title: "Agentic Generation & Pair Programming",
            desc: "Deep Vibe Coding practitioner. Using AI tools like Claude/Agent since mid-2024 to rewrite full-stack industrial core platforms at 10x efficiency."
        },
        {
            title: "Passion for Emerging Technologies",
            desc: "Exploring full-stack technologies (cloud, edge, device) in manufacturing. Verifying traditional ML deployment while advancing the deep application of LLMs/Agents in industrial domains. Possesses strong learning capabilities and innovative spirit."
        },
        {
            title: "End-to-End Business Insights & Delivery",
            desc: "Deep expertise in manufacturing digital transformation encompassing architecture design, pre-sales consulting, and deployment. Extensive experience in steering large enterprise projects and communicating complex solutions to clients."
        }
    ] as CoreCompetency[]
};
