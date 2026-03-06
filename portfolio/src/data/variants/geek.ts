import type { CoreCompetency } from '../portfolio';

export const geekOverrides = {
    personalData_zh: {
        title: "AI Architect, Full-Stack Developer",
        slogan: "专注大模型应用与 Agentic Workflow 构建的极客架构师",
        metrics: {
            yearsOfCoding: "19+",
            aiProjects: "12",
            linesOfCode: "100W+",
            openSource: "5+"
        },
        customMetrics: [
            { value: "19+", label: "年代码开发经验" },
            { value: "12", label: "技术专利" },
            { value: "100W+", label: "行有效全栈代码" },
            { value: "5+", label: "个活跃开源项目" }
        ]
    },
    personalData_en: {
        title: "AI Architect, Full-Stack Developer",
        slogan: "Geek Architect focused on LLM fine-tuning and Agentic Workflows",
        metrics: {
            yearsOfCoding: "19+",
            aiProjects: "12",
            linesOfCode: "1M+",
            openSource: "5+"
        },
        customMetrics: [
            { value: "19+", label: "Years of\nCoding" },
            { value: "12", label: "Origin Patents" },
            { value: "1M+", label: "Lines of\nCode" },
            { value: "5+", label: "Active\nOpen Source" }
        ]
    },
    coreCompetencies_zh: [
        {
            title: "大模型架构与应用微调",
            desc: "利用 Google Cloud/TensorFlow 认证能力，从数据预处理到私有化大模型微调、小模型训练的全链条实战。"
        },
        {
            title: "Agentic 代码生成与结对编程",
            desc: "极深度的 Vibe Coding 实践者，利用 Claude/Agent 等AI工具，10倍效能重写底层工业系统、完成 StyleMidi 等全栈项目。"
        },
        {
            title: "CAD 内核与算法创新",
            desc: "独立开发 UG 到 CATIA 的 B-REP 底层无损转换引擎，构建专属 MCP 并探索 AI 辅助复杂几何生成的全新链路。"
        },
        {
            title: "云原生与全栈架构探索",
            desc: "早期微服务开拓者，擅长解决从底层协议分发到底层数据高并发存储到实时展示的复杂全栈难题。"
        }
    ] as CoreCompetency[],
    coreCompetencies_en: [
        {
            title: "LLM Architecture & Fine-tuning",
            desc: "Leveraging Google Cloud/TF skills for full-cycle implementation from data prep to private LLM fine-tuning and small model training."
        },
        {
            title: "Agentic Generation & Pair Programming",
            desc: "Deep Vibe Coding practitioner using AI tools like Claude to rewrite industrial core systems at 10x speed."
        },
        {
            title: "CAD Kernel & Algorithm Innovation",
            desc: "Developed UG to CATIA B-REP lossless translation engine, built MCPs, and explored AI-assisted complex geometry generation."
        },
        {
            title: "Cloud Native & Full-stack Exploring",
            desc: "Early microservices pioneer, excelling at complex full-stack challenges from protocol dispatch to high-concurrency storage."
        }
    ] as CoreCompetency[]
};
