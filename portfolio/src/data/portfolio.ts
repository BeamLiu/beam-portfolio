import type { PersonalData, Project, Patent, Experience, Certification } from '../types/portfolio';

export const personalData: PersonalData = {
    name: "Beam Liu",
    fullName: "Shengzhi Liu",
    title: "AI Explorer, Presales Expert",
    slogan: "链接前沿 AI 与工业数字化的工程师 / 管理者",
    avatar: "/avatar.jpg",
    contact: {
        github: "https://github.com/beamliu",
        linkedin: "https://linkedin.com/in/beamliu",
        wechat: "13924703788",
        email: "beam.liu@gmail.com",
        resumePDF: "/resume/Beam_Liu_Resume.pdf"
    },
    metrics: {
        yearsOfExperience: "19+",
        patents: "12",
        projectsValue: "500W+",
        teamSize: "70+"
    },
    interests: {
        readingHours: 1600,
        books: 250,
        hobbies: ["Reading (Philosophy, Tech, Sci-Fi)", "Violin", "Astronomy & Physics"],
        bookList: {
            technical: "《深度学习》、《深度学习的数学》、《工业级知识图谱》、《OpenCV》、《制造业知识工程》",
            philosophy: "《苏格拉底的申辩》、《理想国》、《尼采》、《一个悲观主义者的积极思考》、《涌现》",
            management: "《从优秀到卓越》、《创新者的窘境》、《飞轮效应》、《竞争战略》、《增长五线》",
            scifi: "《时间简史》、《量子简史》、《平行宇宙》、《超弦轮》、《奇点临近》"
        }
    },
    education: {
        university: "杭州电子科技大学",
        degree: "软件工程学士",
        year: "2001-2005"
    }
};

export const experiences: Experience[] = [
    {
        id: "eingsoft",
        company: "广州易行数字",
        role: "CTO & 联合创始人",
        period: "2017 - 现在",
        achievement: "带领团队自研 EMOP 工业互联网平台，实现技术突破并两度获得千万级销售额。",
        description: "负责自有产品EMOP的研发，对标一线工业软件Siemens Teamcenter (PLM) 和 MindSphere (IIoT)。负责多个大型制造业客户（如中国商飞、一汽大众、大族激光）的售前及售后工作，主导 500 万至 1000 万人民币的大型项目。管理70+人研发团队。"
    },
    {
        id: "dell",
        company: "Dell",
        role: "Software Development Manager",
        period: "2010 - 2017",
        achievement: "主持 Foglight 平台的研发，实践国内最早一批微服务架构。",
        description: "引入并实践微服务架构，主持 Gartner 魔力象限产品 Foglight 平台的研发工作。"
    },
    {
        id: "oocl",
        company: "OOCL",
        role: "Senior Software Developer",
        period: "2005 - 2010",
        achievement: "参与全球三大船运数据平台 Cargosmart 的研发，国内最早敏捷开发实践团队之一。",
        description: "参与核心产品线开发，获得多次优选员工称号，实践 Agile 敏捷开发流程。"
    }
];

export const projects: Project[] = [
    {
        id: "emop",
        name: "EMOP 工业互联网平台",
        year: "2017 - Present",
        role: "CTO / Chief Architect",
        description: "自主研发对标西门子 Teamcenter 与 MindSphere 的底层工业软件平台，核心服务经历完整重构与稳定迭代（1.0 到 3.0）。",
        challenges: "复杂的工业软件系统架构设计；从0到1构建产品线；核心技术突破及售前方案讲解与信任建立。",
        impact: "两年内取得 2000 万销售额，主导了商飞、一汽大众等多家头部客户的平台落地验证。",
        tags: ["IIoT", "PLM", "Cloud Native", "React"],
        media: {
            pdf: "/ppt/emop-intro.pdf",
            video: "/videos/emop-presales.mp4",
            image: "/images/emop3-1.png"
        }
    },
    {
        id: "c919",
        name: "中国商飞 C919/CR929 MOM & IIoT",
        year: "2019",
        role: "Project Director",
        description: "基于私有云环境，构建物流、质量、计划、AO、AOSR、FO、设备等领域服务。",
        challenges: "涉及国家机密级别的安全要求；机加车间数采及零配件全流程质量检测的复杂流转。",
        impact: "实现了民机设备互联与集成，形成了商飞机加能力共享及数字采配的标准规范。",
        tags: ["MOM", "IIoT", "MindSphere", "Microservices"],
        media: {
            pdf: "/ppt/mindsphere-solution.pdf"
        }
    },
    {
        id: "vwn",
        name: "一汽大众智能物联网平台",
        year: "2022",
        role: "Lead Architect",
        description: "围绕 DTO 数字化转型办公室的 Go Digital 项目，统一基于西门子 MindSphere 构建全厂物联网平台。",
        challenges: "五地六厂庞大的设备数据汇集挑战，如何将 180+ 数字化创新场景有效落地为工业 App。",
        impact: "实现了设备数据标准化接入和云端集中管理，推动从传统生产向数字互联智慧生产转变。",
        tags: ["IIoT", "MindSphere", "Digital Transformation"],
        media: {
            pdf: "/ppt/mindsphere-solution.pdf"
        }
    },
    {
        id: "hanslaser",
        name: "大族激光 PLM 平台",
        year: "2023",
        role: "Architect & Consultant",
        description: "解决集团百个成本中心的组织结构协同以及设备全生命周期物料管理。",
        challenges: "超过 10 万个零件的装配仿真管理复杂度；长周期物料呆滞问题。",
        impact: "集团级研发项目成本管控降低 20%，物料采购成本降低 5%，设计效率提升 8%。",
        tags: ["PLM", "BOM Management", "Simulation"],
        media: {
            pdf: "/ppt/plm-transformation.pdf"
        }
    }
];

export const aiShows: Project[] = [
    {
        id: "emop3",
        name: "EMOP 3.0 平台端到端重构",
        year: "2024-2025",
        role: "CTO / Chief Architect",
        description: "AI 结对编程完成工业互联网平台的全栈重构，从架构设计到前后端实现。10个月完成平台核心服务的完整重构与稳定迭代。",
        challenges: "前后端架构全面升级，AI 辅助代码重构和优化，完整的售前材料和演示视频制作，云原生微服务架构设计。",
        impact: "实现了从 1.0 到 3.0 的完整技术演进，大幅提升了平台的可扩展性和稳定性，为千万级项目落地提供了坚实的技术底座。",
        tags: ["AI结对编程", "全栈开发", "架构设计", "云原生"],
        media: {
            video: "/videos/emop3-demo.mp4",
            image: "/images/emop3-1.png",
            pdf: "/ppt/emop3-presales.pdf"
        }
    },
    {
        id: "cad-converter",
        name: "CAD 格式转换工具 (UG → CATIA)",
        year: "2025",
        role: "Developer",
        description: "AI 辅助开发的 CAD 文件格式转换工具，解决工业设计软件互操作性问题。针对制造业图纸痛点开发的轻量化与高精度 CAD 转换服务。",
        challenges: "支持 UG 到 CATIA 格式转换，保持几何精度和特征完整性，B-REP 边界表示法数据的无损解析与面片化误差控制，批量处理能力，AI 辅助算法优化。",
        impact: "有效提升了工程师图形渲染性能与读取效率，解决了不同 CAD 系统之间的数据互通难题。",
        tags: ["AI辅助", "CAD", "工业软件", "算法"],
        media: {
            video: "/videos/cad-converter-demo.mp4",
            image: "/images/cad-converter.png"
        }
    },
    {
        id: "stylemidi",
        name: "StyleMidi - AI 钢琴陪练助手",
        year: "2026",
        role: "Indie Developer",
        description: "氛围编程打造的 AI 音乐学习工具，从小模型训练到全栈应用。2天完成从模型到产品的完整开发。",
        challenges: "低延迟音频分析、实时 MIDI 同步和用户演奏反馈机制的设计，MIDI 音乐分析和反馈，实时演奏评估。",
        impact: "帮助无数学习者在家自主实现琴童陪练纠错，通过技术极客项目实现教育普惠，家庭场景实际应用验证。",
        tags: ["氛围编程", "AI模型", "全栈", "音乐教育"],
        media: {
            video: "/videos/stylemidi-demo.mp4",
            image: "/images/stylemidi-1.png",
            github: "https://github.com/beamliu/stylemidi"
        }
    },
    {
        id: "ai-cad",
        name: "AI 辅助 CAD 设计",
        year: "2025-2026",
        role: "Researcher",
        description: "探索 AI 在工业设计领域的应用，智能化 CAD 设计流程。前沿技术探索项目。",
        challenges: "自然语言生成 CAD 模型，设计参数智能优化，工程知识图谱集成。",
        impact: "为未来的智能化工业设计提供技术探索和验证，推动 AI 与传统工业软件的深度融合。",
        tags: ["AI", "CAD", "生成式设计", "研发中"],
        media: {
            image: "/images/ai-cad-1.png"
        }
    }
];

export const geekProjects: Project[] = [
    {
        id: "vr-training",
        name: "VR 工业培训系统",
        year: "2016",
        role: "Tech Explorer",
        description: "虚拟现实技术在工业培训场景的早期探索。",
        challenges: "VR 交互设计、工业场景建模、培训流程数字化。",
        impact: "为工业培训提供了沉浸式体验，降低了实际操作的风险和成本。",
        tags: ["VR", "Unity", "工业培训"],
        media: {
            video: "/videos/vr-training.mp4",
            image: "/images/vr-training-thumb.png"
        }
    },
    {
        id: "ar-maintenance",
        name: "AR 设备维护指导",
        year: "2017",
        role: "Tech Explorer",
        description: "增强现实技术辅助设备维护和操作指导。",
        challenges: "AR 空间定位、实时指令叠加、设备识别。",
        impact: "提升了设备维护效率，降低了操作错误率。",
        tags: ["AR", "HoloLens", "工业维护"],
        media: {
            video: "/videos/ar-maintenance.mp4",
            image: "/images/ar-maintenance-thumb.png"
        }
    },
    {
        id: "digital-twin",
        name: "数字孪生车间",
        year: "2018",
        role: "Tech Explorer",
        description: "工厂车间的数字孪生可视化系统。",
        challenges: "实时数据同步、3D 场景渲染、IoT 设备集成。",
        impact: "实现了车间的数字化镜像，为生产优化提供了数据支撑。",
        tags: ["数字孪生", "3D可视化", "IoT"],
        media: {
            video: "/videos/digital-twin.mp4",
            image: "/images/digital-twin-thumb.png"
        }
    }
];

export const patents: Patent[] = [
    { id: "1", number: "US10592616B2", year: "-", title: "Generating simulation data using a linear curve simplification and reverse simplification method", description: "Simulation Performance Optimization" },
    { id: "2", number: "US9274758B1", year: "-", title: "System and method for creating customized performance-monitoring applications", description: "Performance Monitoring" },
    { id: "3", number: "US10657099B1", year: "-", title: "Systems and methods for transformation and analysis of logfile data", description: "Log Analysis" },
    { id: "4", number: "US20170109268A1", year: "-", title: "Dynamic adjustment of instrumentation scope", description: "Dynamic Instrumentation" },
    { id: "5", number: "US10516743B1", year: "-", title: "Systems and methods for facilitating portable user sessions", description: "Session Management" },
    { id: "6", number: "CN107948134B", year: "-", title: "数据交互方法和装置", description: "数据交互" },
    { id: "7", number: "CN113347260A", year: "-", title: "一种基于云端环境的微服务开发方法", description: "微服务架构" },
    { id: "8", number: "CN113347261A", year: "-", title: "一种基于业务领域填充访问令牌信息的机制", description: "安全与鉴权" },
    { id: "9", number: "CN108900363B", year: "-", title: "调整局域网工作状态的方法、装置及系统", description: "网络管理" },
    { id: "10", number: "CN111858717B", year: "-", title: "一种物料创建的实时智能推荐方法", description: "智能推荐" },
    { id: "11", number: "CN111986044B", year: "-", title: "一种基于模式匹配算法自动生成工艺流程的编排方法", description: "算法设计" },
    { id: "12", number: "CN114416211A", year: "-", title: "一种将工业软件定制化开发转为工业app的方法", description: "工业 App 化" }
];

export const certifications: Certification[] = [
    {
        id: "google-dl",
        name: "Google 深度学习开发者认证",
        organization: "Google",
        year: "2023",
        description: "深度学习模型设计、训练与部署"
    },
    {
        id: "google-ml",
        name: "Google 云机器学习工程师认证",
        organization: "Google",
        year: "2023",
        description: "云端机器学习解决方案架构与实施"
    },
    {
        id: "siemens-iiot",
        name: "西门子 IIoT 售前工程师认证",
        organization: "Siemens",
        year: "2019",
        description: "工业物联网解决方案售前与技术咨询"
    }
];
