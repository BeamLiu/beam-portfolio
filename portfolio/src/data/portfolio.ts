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
        projectsValue: "3000W+",
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
    },
    languages: "中文母语，英文工作语言，听说读写熟练，可进行技术交流与文档撰写"
};

export const experiences: Experience[] = [
    {
        id: "eingsoft",
        company: "广州易行数字",
        role: "CTO & 联合创始人",
        period: "2017 - 现在",
        achievement: "带领团队自研 EMOP 工业互联网平台，实现头部制造业客户三千万销售额，国内早一批实践AI辅助编程，团队全链路AI化。",
        description: "负责自有产品EMOP的研发，对标一线工业软件Siemens Teamcenter (PLM)。负责多个大型制造业客户（如中国商飞、一汽大众、大族激光）的售前及售后工作。"
    },
    {
        id: "dell",
        company: "Dell",
        role: "Software Development Manager",
        period: "2010 - 2017",
        achievement: "主持 Foglight 平台的研发，国内早一批实践微服务架构。",
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
        description: "自主研发对标西门子 Teamcenter 的底层工业软件平台，核心服务经历完整重构与稳定迭代（1.0 到 3.0）。",
        challenges: "复杂的工业软件系统架构设计；从0到1构建产品线；核心技术突破及售前方案讲解与信任建立。",
        impact: "两年内取得 3000 万销售额，九牧厨卫、大族激光集团、本田生技等多家头部客户的平台落地验证。",
        tags: ["PLM", "云原生", "MCAD、ECAD数据互通", "大型头部客户核心系统"],
        media: {
            pdfs: [
                { title: "EMOP2介绍", url: "http://www.eingsoft.com:81/public/emop2.0_introduce.pdf" },
            ],
            videos: [
                { title: "CAD集成", url: "http://www.eingsoft.com:81/public/emop2-cad.mp4" },
                { title: "物料服务", url: "http://www.eingsoft.com:81/public/emop2-mat.mp4" },
                { title: "项目管理服务", url: "http://www.eingsoft.com:81/public/emop2-pm.mp4" }
            ],
            image: "/images/emop3-1.png"
        }
    },
    {
        id: "c919",
        name: "中国商飞 C919/CR929 MOM & IIoT",
        year: "2019",
        role: "Project Manager & Architect",
        description: "基于私有云环境，构建物流、质量、计划、AO、AOSR、FO、设备等领域服务。",
        challenges: "涉及国家机密级别的安全要求；机加车间数采及零配件全流程质量检测的复杂流转。",
        impact: "实现了民机设备互联与集成，形成了商飞机加能力共享及数字采配的标准规范。",
        tags: ["MOM", "IIoT", "服务化"],
        media: {
            image: "/images/comac.png"
        }
    },
    {
        id: "vwn",
        name: "一汽大众工业互联网平台",
        year: "2022",
        role: "Project Director & Architect",
        description: "围绕 DTO 数字化转型办公室的 Go Digital 项目，统一基于西门子 MindSphere 构建全厂物联网平台。",
        challenges: "五地六厂庞大的设备数据汇集挑战，如何将 180+ 数字化创新场景有效落地为工业 App。",
        impact: "实现了设备数据标准化接入和云端集中管理，推动从传统生产向数字互联智慧生产转变。",
        tags: ["IIoT", "MindSphere", "五地六厂", "数字化转型"],
        media: {
            image: "/images/faw.png"
        }
    },
    {
        id: "hanslaser",
        name: "大族激光 PLM 平台",
        year: "2023",
        role: "Architect & Consultant",
        description: "解决集团百个成本中心的组织结构协同以及设备全生命周期物料管理。",
        challenges: "产线超过上万个零件管理复杂度；长周期物料呆滞问题；百个项目中心使用。",
        impact: "集团级研发项目成本管控降低 20%，物料采购成本降低 5%，设计效率提升 8%。",
        tags: ["PLM", "MCAD", "ECAD", "物料", "BOM", "变更", "项目", "文档"],
        media: {
            image: "/images/hanslaser.png"
        }
    }
];

export const aiShows: Project[] = [
    {
        id: "emop3",
        name: "EMOP 3.0 平台端到端构建",
        year: "2024年-2025年",
        role: "CTO / Chief Architect",
        description: "24年开始Claude结对编程完成工业互联网平台的全栈重构，效率10x以上，10个月独立完成平台核心服务的完整重构与稳定迭代。",
        challenges: "前后端架构全面升级，AI 辅助代码重构和优化，完整的售前材料和演示视频制作，云原生微服务架构设计。",
        impact: "实现了从 1.0 到 3.0 的完整技术演进，大幅提升了平台的可扩展性和稳定性，为千万级项目落地提供了坚实的技术底座。",
        tags: ["人类代码率<20%", "代码全审查", "对标TC平台"],
        media: {
            image: "/images/emop3-1.png",
            videos: [
                { title: "平台演示", url: "http://www.eingsoft.com:81/public/emop3-demo.mp4" },
                { title: "CAD集成演示", url: "http://www.eingsoft.com:81/public/creo-integration.mp4" },
                { title: "对象图谱演示", url: "http://www.eingsoft.com:81/public/object_network.mp4" },
                { title: "MCP演示", url: "http://www.eingsoft.com:81/public/mcp.mp4" }
            ],
            pdfs: [
                { title: "EMOP3介绍", url: "http://www.eingsoft.com:81/public/emop3.0_introduce.pdf" },
            ],
            github: "https://github.com/BeamLiu/emop3-dev-portal/tree/main"
        }
    },
    {
        id: "cad-converter",
        name: "CAD 格式转换工具 (UG → CATIA)",
        year: "2025年",
        role: "Developer",
        description: "AI 辅助开发的 CAD 文件格式转换工具，涉及 CAD 内核相关知识，同时构建MCP(见Github)用于补充大语言模型在CAD领域的知识准确性。3个月独立完成。",
        challenges: "支持 UG 到 CATIA 格式转换，保持几何精度和特征完整性，B-REP 边界表示法数据的无损解析与面片化误差控制，批量处理能力。",
        impact: "有效提升了工程师图形渲染性能与读取效率，解决了不同 CAD 系统之间的数据互通难题。",
        tags: ["AI结对编程", "CAD内核"],
        media: {
            image: "/images/cad-converter.png",
            videos: [
                { title: "装配体转换演示", url: "http://www.eingsoft.com:81/public/assembly.mp4" },
                { title: "零件转换演示", url: "http://www.eingsoft.com:81/public/prt.mp4" }
            ],
            github: "https://github.com/BeamLiu/mcp-java-doc"
        }
    },
    {
        id: "ai-cad",
        name: "AI 辅助 CAD 设计",
        year: "2025年-2026年",
        role: "Researcher",
        description: "探索 AI 在工业设计领域的应用，智能化 CAD 设计流程。大模型任务拆解与规划，Agent执行，小模型设计过程中进行补全。",
        challenges: "自然语言生成 CAD 模型，设计参数智能优化，工程知识图谱集成。",
        impact: "为未来的智能化工业设计提供技术探索和验证，推动 AI 与传统工业软件的深度融合。",
        tags: ["AI Agent", "小模型训练", "2人小团队", "研发中"],
        media: {
            image: "/images/ai-cad-1.png",
            videos: [
                { title: "概念演示", url: "http://www.eingsoft.com:81/public/Agentic_CAD_Concept.mp4" }
            ],
            pdfs: [
                { title: "理念介绍", url: "http://www.eingsoft.com:81/public/Agentic_CAD_Architecture.pdf" }
            ],
        }
    },
    {
        id: "stylemidi",
        name: "StyleMidi - AI 钢琴陪练助手",
        year: "2026年",
        role: "Developer",
        description: "氛围编程打造的AI音乐学习工具，从古典钢琴曲的数据集中训练小模型，用户指定音高，曲调，模仿的作者等内容实时生成音乐，可跟随演奏。全栈应用开发2天完成。",
        challenges: "低延迟音频分析、实时 MIDI 同步和用户演奏反馈机制的设计，MIDI 音乐分析和反馈，实时演奏评估。",
        impact: "帮助无数学习者在家自主实现琴童陪练纠错，通过技术极客项目实现教育普惠，家庭场景实际应用验证。",
        tags: ["氛围编程", "小模型训练", "音乐教育"],
        media: {
            image: "/images/stylemidi-1.png",
            videos: [
                { title: "产品演示", url: "http://www.eingsoft.com:81/public/style_midi.mp4" },
            ],
            github: "https://github.com/BeamLiu/codesnippet/tree/main/build_llm/style_midi"
        }
    },
    {
        id: "maintenance",
        name: "电机类设备预测性维护",
        year: "2023年",
        role: "Tech Explorer",
        description: "基于ISO机理模型针对电机类设备通过振动信号进行处理分析，可检测不对中、滚珠磨损等十余种异常场景，复现西交实验数据集内容，并在某一线车厂验证并部署使用。",
        challenges: "",
        impact: "",
        tags: ["ISO机理模型", "数据集", "机器学习算法"],
        media: {
            image: "/images/maintenance.png",
        }
    }
];

export const geekProjects: Project[] = [
    {
        id: "vr",
        name: "工业制造VR类",
        year: "2020年-2022年",
        role: "Tech Explorer",
        description: "虚拟现实技术在工业场景的探索落地，仿真优化物理世界工艺参数，物理世界的IIoT反馈回仿真参数，从数字世界的仿真到物理世界的IIoT数据形成双向验证闭环",
        challenges: "",
        impact: "",
        tags: ["VR", "数字孪生", "IIoT"],
        media: {
            videos: [
                { title: "数字制造演示", url: "http://www.eingsoft.com:81/public/vr1.mp4" },
                { title: "仿真与IIoT演示", url: "http://www.eingsoft.com:81/public/vr2.mp4" },
            ],
            image: "/images/vr.png"
        }
    },
    {
        id: "ar-maintenance",
        name: "AR 图纸审批",
        year: "2019年",
        role: "Tech Explorer",
        description: "增强现实技术实现PLM中三维轻量化数模的展示，将二维码打印至评审材料，宣传彩印等场景材料中，使用手机App扫描并且可与PLM实现双向数据传递。",
        challenges: "AR 空间定位、实时指令叠加。",
        impact: "",
        tags: ["AR", "轻量化数模", "PLM双向集成"],
        media: {
            videos: [
                { title: "产品演示", url: "http://www.eingsoft.com:81/public/ar.mp4" },
            ],
            image: "/images/ar.png"
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
        name: "Google TF深度学习开发者认证",
        organization: "Google",
        year: "2023",
        description: "传统机器学习、深度学习模型设计、训练与部署"
    },
    {
        id: "google-ml",
        name: "Google Cloud机器学习工程师认证",
        organization: "Google",
        year: "2023",
        description: "云端机器学习解决方案架构与实施"
    },
    {
        id: "siemens-iiot",
        name: "西门子售前工程师认证",
        organization: "Siemens",
        year: "2022",
        description: "工业物联网解决方案售前与技术咨询"
    },
    {
        id: "das-tech",
        name: "达索技术支持工程师认证",
        organization: "Dassault",
        year: "2025",
        description: "达索工业软件产品线售后技术咨询"
    }
];
