import type { PersonalData, Project, Patent, Experience, Certification } from '../types/portfolio';

export const personalData_zh: PersonalData = {
    name: "刘圣质(Beam Liu)",
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
        hobbies: ["阅读", "小提琴", "科幻物理"],
        bookList: {
            technical: "《深度学习》、《深度学习的数学》、《工业级知识图谱》、《OpenCV》、《制造业知识工程》...",
            philosophy: "《苏格拉底的申辩》、《理想国》、《尼采》、《一个悲观主义者的积极思考》、《涌现》...",
            management: "《从优秀到卓越》、《创新者的窘境》、《飞轮效应》、《竞争战略》、《增长五线》...",
            scifi: "《时间简史》、《量子简史》、《平行宇宙》、《超弦轮》、《奇点临近》、《深渊上的火》..."
        }
    },
    education: {
        university: "杭州电子科技大学",
        degree: "软件工程学士",
        year: "2001-2005"
    },
    languages: "中文母语，英文工作语言，听说读写熟练，可进行技术交流与文档撰写"
};

export const experiences_zh: Experience[] = [
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

export const projects_zh: Project[] = [
    {
        id: "emop",
        name: "EMOP 工业互联网平台",
        year: "2017 - Present",
        role: "平台负责人",
        description: "自主研发融合及对标西门子 Teamcenter 的底层工业软件平台，核心服务经历完整重构与稳定迭代（1.0 到 3.0）。",
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
        role: "项目管理&技术架构",
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
        role: "项目总监&技术架构",
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
        role: "技术架构",
        description: "解决集团百个成本中心的组织结构协同以及设备全生命周期物料管理。",
        challenges: "产线超过上万个零件管理复杂度；长周期物料呆滞问题；百个项目中心使用。",
        impact: "集团级研发项目成本管控降低 20%，物料采购成本降低 5%，设计效率提升 8%。",
        tags: ["PLM", "MCAD", "ECAD", "物料", "BOM", "变更", "项目", "文档"],
        media: {
            image: "/images/hanslaser.png"
        }
    }
];

export const aiShows_zh: Project[] = [
    {
        id: "emop3",
        name: "EMOP 3.0 平台端到端构建",
        year: "2024年-2025年",
        role: "平台负责人",
        description: "24年开始Claude结对编程完成工业互联网平台(对标TC)的全栈重构，效率10x以上，10个月独立完成平台核心服务的完整重构与稳定迭代。",
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
            github: "https://github.com/BeamLiu/codesnippet/tree/main/build_llm/style_midi",
            weblink: "http://8.134.38.136/stylemidi/"
        }
    },
    {
        id: "ai-process",
        name: "AI 自动化工艺产品",
        year: "2022年",
        role: "Tech Explorer",
        description: "使用模式识别算法进行PCB工艺编制，将传统依赖工程师经验编写耗时超3小时的流程，大幅缩减至1分钟，自动生成的工艺路线正确率>98%，并获得专利授权。",
        challenges: "将确定性的工程规则与概率性大模型结合，解构非结构化规则，保证工艺节点生成 100% 准确性。",
        impact: "为企业工艺工程师极大地减轻了规则编写工作量，降低了工艺流转错误率，在 PCB 制造流程中验证了极致的效率跃升。",
        tags: ["工艺优化", "专利授权", "模式识别"],
        media: {
            image: "/images/pcb.png"
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

export const geekProjects_zh: Project[] = [
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

export const patents_zh: Patent[] = [
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

export const certifications_zh: Certification[] = [
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


export const personalData_en: PersonalData = {
    name: "Beam Liu",
    fullName: "Shengzhi Liu",
    title: "AI Explorer, Presales Expert",
    slogan: "Engineer / Manager connecting cutting-edge AI with industrial digitalization",
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
        projectsValue: "30M+",
        teamSize: "70+"
    },
    interests: {
        readingHours: 1600,
        books: 250,
        hobbies: ["Reading (Philosophy, Tech, Sci-Fi)", "Violin", "Astronomy & Physics"],
        bookList: {
            technical: "Deep Learning, Mathematics of Deep Learning, Industrial Knowledge Graph, OpenCV, Manufacturing Knowledge Engineering",
            philosophy: "Apology of Socrates, The Republic, Nietzsche, Positive Thinking of a Pessimist, Emergence",
            management: "Good to Great, The Innovator's Dilemma, Flywheel Effect, Competitive Strategy, Five Lines of Growth",
            scifi: "A Brief History of Time, A Brief History of Quantum, Parallel Universes, Superstring Theory, The Singularity Is Near"
        }
    },
    education: {
        university: "Hangzhou Dianzi University",
        degree: "Bachelor of Software Engineering",
        year: "2001-2005"
    },
    languages: "Native Chinese, fluent English for working, proficient in technical communication and documentation"
};

export const experiences_en: Experience[] = [
    {
        id: "eingsoft",
        company: "Guangzhou Eingsoft",
        role: "CTO & Co-founder",
        period: "2017 - Present",
        achievement: "Led the team to develop the EMOP industrial internet platform, achieving 30 million sales from top manufacturing clients, pioneering AI-assisted programming in China, leading the team to full AI automation.",
        description: "Responsible for the R&D of the proprietary EMOP product, benchmarking against leading industrial software Siemens Teamcenter (PLM). Handled presales and aftersales for multiple large manufacturing clients (e.g., COMAC, FAW-Volkswagen, Han's Laser)."
    },
    {
        id: "dell",
        company: "Dell",
        role: "Software Development Manager",
        period: "2010 - 2017",
        achievement: "Led the R&D of the Foglight platform, one of the earliest teams to practice microservices architecture in China.",
        description: "Introduced and implemented microservices architecture, led the R&D of the Gartner Magic Quadrant product Foglight platform."
    },
    {
        id: "oocl",
        company: "OOCL",
        role: "Senior Software Developer",
        period: "2005 - 2010",
        achievement: "Participated in the R&D of Cargosmart, one of the world's top three shipping data platforms. One of the earliest agile development teams in China.",
        description: "Participated in core product line development, awarded outstanding employee multiple times, practiced Agile development process."
    }
];

export const projects_en: Project[] = [
    {
        id: "emop",
        name: "EMOP Industrial Internet Platform",
        year: "2017 - Present",
        role: "CTO / Chief Architect",
        description: "Independently developed a foundational industrial software platform benchmarked against Siemens Teamcenter, with core services undergoing complete refactoring and stable iteration (1.0 to 3.0).",
        challenges: "Complex industrial software system architecture design; building product lines from scratch; core technology breakthroughs and presales solution presentations to build trust.",
        impact: "Achieved 30 million in sales within two years, verified platform implementation with multiple top clients like JOMOO, Han's Laser, and Honda Biotech.",
        tags: ["PLM", "Cloud Native", "MCAD/ECAD Convergence", "Large Enterprise Core System"],
        media: {
            pdfs: [
                { title: "EMOP 2.0 Intro", url: "http://www.eingsoft.com:81/public/emop2.0_introduce.pdf" },
            ],
            videos: [
                { title: "CAD Integration", url: "http://www.eingsoft.com:81/public/emop2-cad.mp4" },
                { title: "Material Service", url: "http://www.eingsoft.com:81/public/emop2-mat.mp4" },
                { title: "Project Management", url: "http://www.eingsoft.com:81/public/emop2-pm.mp4" }
            ],
            image: "/images/emop3-1.png"
        }
    },
    {
        id: "c919",
        name: "COMAC C919/CR929 MOM & IIoT",
        year: "2019",
        role: "Project Manager & Architect",
        description: "Built domain services for logistics, quality, planning, AO, AOSR, FO, and equipment based on a private cloud environment.",
        challenges: "Involved national-secret-level security requirements; complex tracking of machining workshop data collection and full-process quality inspection of spare parts.",
        impact: "Realized interconnection and integration of civil aircraft equipment, established standard specifications for machining capability sharing and digital procurement.",
        tags: ["MOM", "IIoT", "Servitization"],
        media: {
            image: "/images/comac.png"
        }
    },
    {
        id: "vwn",
        name: "FAW-Volkswagen Industrial Internet Platform",
        year: "2022",
        role: "Project Director & Architect",
        description: "Centered on the Go Digital project of the DTO digital transformation office, unified the entire plant's IoT platform based on Siemens MindSphere.",
        challenges: "Massive equipment data collection challenges across five regions and six plants; how to effectively implement 180+ digital innovation scenarios into industrial Apps.",
        impact: "Achieved standardized equipment data integration and centralized cloud management, promoting the shift from traditional production to digitally connected smart production.",
        tags: ["IIoT", "MindSphere", "Multi-Plant", "Digital Transformation"],
        media: {
            image: "/images/faw.png"
        }
    },
    {
        id: "hanslaser",
        name: "Han's Laser PLM Platform",
        year: "2023",
        role: "Architect & Consultant",
        description: "Solved the organizational synergy of hundreds of cost centers in the group and the full-lifecycle material management.",
        challenges: "Management complexity of over tens of thousands of parts across production lines; long-cycle material stagnation issues; usage across hundreds of project centers.",
        impact: "Reduced group-level R&D project cost control by 20%, material procurement costs by 5%, and improved design efficiency by 8%.",
        tags: ["PLM", "MCAD", "ECAD", "Material", "BOM", "Change Mgt", "Project", "Document"],
        media: {
            image: "/images/hanslaser.png"
        }
    }
];

export const aiShows_en: Project[] = [
    {
        id: "emop3",
        name: "EMOP 3.0 Platform E2E Build",
        year: "2024-2025",
        role: "CTO / Chief Architect",
        description: "Since 2024, completed full-stack refactoring of the industrial internet platform via Claude pair programming, achieving 10x+ efficiency. Independently completed the full refactoring and stable iteration of core platform services in 10 months.",
        challenges: "Comprehensive upgrade of frontend and backend architecture, AI-assisted code refactoring and optimization, production of complete presales materials and demo videos, cloud-native microservices architecture design.",
        impact: "Realized complete technological evolution from 1.0 to 3.0, significantly improving platform scalability and stability, providing a solid technical foundation for multi-million scale project implementations.",
        tags: ["Human Code < 20%", "Full Code Review", "Benchmarked against TC"],
        media: {
            image: "/images/emop3-1.png",
            videos: [
                { title: "Platform Demo", url: "http://www.eingsoft.com:81/public/emop3-demo.mp4" },
                { title: "CAD Integration", url: "http://www.eingsoft.com:81/public/creo-integration.mp4" },
                { title: "Object Graph Demo", url: "http://www.eingsoft.com:81/public/object_network.mp4" },
                { title: "MCP Demo", url: "http://www.eingsoft.com:81/public/mcp.mp4" }
            ],
            pdfs: [
                { title: "EMOP 3.0 Intro", url: "http://www.eingsoft.com:81/public/emop3.0_introduce.pdf" },
            ],
            github: "https://github.com/BeamLiu/emop3-dev-portal/tree/main"
        }
    },
    {
        id: "cad-converter",
        name: "CAD Format Converter (UG → CATIA)",
        year: "2025",
        role: "Developer",
        description: "AI-assisted CAD file format conversion tool, involving CAD kernel knowledge. Built MCP (see Github) to supplement LLM's accuracy in the CAD domain. Completed independently in 3 months.",
        challenges: "Supporting UG to CATIA format conversion, maintaining geometric accuracy and feature integrity, lossless parsing and tessellation error control of B-REP data, batch processing capabilities.",
        impact: "Effectively improved engineers' graphics rendering performance and reading efficiency, solved data interoperability challenges between different CAD systems.",
        tags: ["AI Pair Programming", "CAD Kernel"],
        media: {
            image: "/images/cad-converter.png",
            videos: [
                { title: "Assembly Conversion", url: "http://www.eingsoft.com:81/public/assembly.mp4" },
                { title: "Part Conversion", url: "http://www.eingsoft.com:81/public/prt.mp4" }
            ],
            github: "https://github.com/BeamLiu/mcp-java-doc"
        }
    },
    {
        id: "ai-cad",
        name: "AI-Assisted CAD Design",
        year: "2025-2026",
        role: "Researcher",
        description: "Exploring AI application in industrial design to smarten CAD workflows. LLM task breakdown and planning, Agent execution, with small models supplementing during the design process.",
        challenges: "Generating CAD models via natural language, smart design parameter optimization, integration of engineering knowledge graphs.",
        impact: "Providing technical exploration & verification for future intelligent industrial design, promoting deep integration of AI and traditional industrial software.",
        tags: ["AI Agent", "Small Model Training", "2-Person Team", "In Development"],
        media: {
            image: "/images/ai-cad-1.png",
            videos: [
                { title: "Concept Demo", url: "http://www.eingsoft.com:81/public/Agentic_CAD_Concept.mp4" }
            ],
            pdfs: [
                { title: "Architecture Intro", url: "http://www.eingsoft.com:81/public/Agentic_CAD_Architecture.pdf" }
            ],
        }
    },
    {
        id: "stylemidi",
        name: "StyleMidi - AI Piano Companion",
        year: "2026",
        role: "Developer",
        description: "AI music learning tool built with ambient programming, training a small model on classical piano datasets. Users specify pitch, tune, and author style to generate real-time music for play-along. Full-stack app developed in 2 days.",
        challenges: "Low-latency audio analysis, real-time MIDI synchronization, user performance feedback mechanism, MIDI analysis, and real-time evaluation.",
        impact: "Helped countless learners achieve self-correction at home, achieving educational accessibility through a tech geek project, verified in real-world family scenarios.",
        tags: ["Ambient Programming", "Small Model Training", "Music Education"],
        media: {
            image: "/images/stylemidi-1.png",
            videos: [
                { title: "Product Demo", url: "http://www.eingsoft.com:81/public/style_midi.mp4" },
            ],
            github: "https://github.com/BeamLiu/codesnippet/tree/main/build_llm/style_midi",
            weblink: "http://8.134.38.136/stylemidi/"
        }
    },
    {
        id: "ai-process",
        name: "AI Automated Process App",
        year: "2022",
        role: "Product Owner & Architect",
        description: "Developed an AI-automated PCB process planning. Transformed traditional manual rule authoring (averaging 3 hours) into an automated generation flow taking around 1 minute.",
        challenges: "Integrating deterministic engineering rules with probabilistic LLM generation, structuring unstructured rules into actionable workflows, and ensuring 100% accuracy in critical process steps.",
        impact: "Reduced process engineers' workload drastically, decreased error rates, and achieved an extreme efficiency boost for PCB manufacturing workflows.",
        tags: ["PCB Manufacturing", "Pattern Recognition"],
        media: {
            image: "/images/pcb.png"
        }
    },
    {
        id: "maintenance",
        name: "Motor Equipment Predictive Maintenance",
        year: "2023",
        role: "Tech Explorer",
        description: "Processed and analyzed vibration signals based on ISO mechanistic models for motor equipment, detecting over 10 anomalies like misalignment and ball wear. Reproduced XJTU dataset experiments, validated and deployed at a top-tier automotive plant.",
        challenges: "",
        impact: "",
        tags: ["ISO Mechanism Model", "Dataset", "Machine Learning"],
        media: {
            image: "/images/maintenance.png",
        }
    }
];

export const geekProjects_en: Project[] = [
    {
        id: "vr",
        name: "Industrial VR Application",
        year: "2020-2022",
        role: "Tech Explorer",
        description: "Exploration and implementation of VR in industrial scenarios, simulating and optimizing physical world process parameters. Physical world IIoT feeds back to simulation parameters, forming a bi-directional validation loop.",
        challenges: "",
        impact: "",
        tags: ["VR", "Digital Twin", "IIoT"],
        media: {
            videos: [
                { title: "Digital Manufacturing", url: "http://www.eingsoft.com:81/public/vr1.mp4" },
                { title: "Simulation & IIoT", url: "http://www.eingsoft.com:81/public/vr2.mp4" },
            ],
            image: "/images/vr.png"
        }
    },
    {
        id: "ar-maintenance",
        name: "AR Drawing Approval",
        year: "2019",
        role: "Tech Explorer",
        description: "AR implementation for displaying 3D lightweight models in PLM. Printed QR codes on review materials/brochures, allowing users to scan via mobile App and achieve two-way data transmission with PLM.",
        challenges: "AR spatial positioning, real-time command overlay.",
        impact: "",
        tags: ["AR", "Lightweight Model", "PLM Two-Way Integration"],
        media: {
            videos: [
                { title: "Product Demo", url: "http://www.eingsoft.com:81/public/ar.mp4" },
            ],
            image: "/images/ar.png"
        }
    }
];

export const patents_en: Patent[] = [
    { id: "1", number: "US10592616B2", year: "-", title: "Generating simulation data using a linear curve simplification and reverse simplification method", description: "Simulation Performance Optimization" },
    { id: "2", number: "US9274758B1", year: "-", title: "System and method for creating customized performance-monitoring applications", description: "Performance Monitoring" },
    { id: "3", number: "US10657099B1", year: "-", title: "Systems and methods for transformation and analysis of logfile data", description: "Log Analysis" },
    { id: "4", number: "US20170109268A1", year: "-", title: "Dynamic adjustment of instrumentation scope", description: "Dynamic Instrumentation" },
    { id: "5", number: "US10516743B1", year: "-", title: "Systems and methods for facilitating portable user sessions", description: "Session Management" },
    { id: "6", number: "CN107948134B", year: "-", title: "Data Interaction Method and Device", description: "Data Interaction" },
    { id: "7", number: "CN113347260A", year: "-", title: "Cloud-based Microservice Development Method", description: "Microservices Architecture" },
    { id: "8", number: "CN113347261A", year: "-", title: "Mechanism for Populating Access Token Information Based on Business Domain", description: "Security & Authentication" },
    { id: "9", number: "CN108900363B", year: "-", title: "Method, Device and System for Adjusting LAN Working Status", description: "Network Management" },
    { id: "10", number: "CN111858717B", year: "-", title: "Real-time Intelligent Recommendation Method for Material Creation", description: "Intelligent Recommendation" },
    { id: "11", number: "CN111986044B", year: "-", title: "Auto-generation Method for Process Workflows Based on Pattern Matching", description: "Algorithm Design" },
    { id: "12", number: "CN114416211A", year: "-", title: "Method for Converting Customized Industrial Software Development into Industrial Apps", description: "Industrial App Conversion" }
];

export const certifications_en: Certification[] = [
    {
        id: "google-dl",
        name: "Google TF Deep Learning Developer",
        organization: "Google",
        year: "2023",
        description: "Traditional Machine Learning, Deep Learning Model Design, Training & Deployment"
    },
    {
        id: "google-ml",
        name: "Google Cloud Machine Learning Engineer",
        organization: "Google",
        year: "2023",
        description: "Cloud Machine Learning Solution Architecture & Implementation"
    },
    {
        id: "siemens-iiot",
        name: "Siemens Presales Engineer",
        organization: "Siemens",
        year: "2022",
        description: "IIoT Solution Presales & Technical Consulting"
    },
    {
        id: "das-tech",
        name: "Dassault Technical Support Engineer",
        organization: "Dassault",
        year: "2025",
        description: "Dassault Industrial Software Product After-sales Technical Consulting"
    }
];



export interface CoreCompetency {
    title: string;
    desc: string;
}

export const coreCompetencies_zh: CoreCompetency[] = [
    {
        title: "制造业数字化全栈理解",
        desc: "从 PLM 到 MOM/MES 再到 IIoT，大量制造业头部客户数字化实践。"
    },
    {
        title: "AI 技术实践者",
        desc: "谷歌及谷歌云AI领域双认证，大模型微调、小模型训练、传统机器学习、数据准备到工业场景落地的完整实践，Vibe Coding周边的大量实践。"
    },
    {
        title: "售前与商业转化",
        desc: "长期与西门子、达索等工业巨头团队合作售前售后，持有相关认证，精准把握客户痛点。"
    },
    {
        title: "敏捷团队AI化",
        desc: "微服务架构先行者，曾带领 70+ 人敏捷团队，AI时代微型团队全面AI化。"
    }
];

export const coreCompetencies_en: CoreCompetency[] = [
    {
        title: "Full-Stack Industrial Digitalization",
        desc: "Extensive digitalization practices with top manufacturing clients, from PLM to MOM/MES and IIoT."
    },
    {
        title: "AI Technology Practitioner",
        desc: "Dual certified by Google and Google Cloud in AI. Experience in LLM fine-tuning, small model training, traditional ML, data prep, and industrial implementation, with extensive Vibe Coding practices."
    },
    {
        title: "Presales & Commercialization",
        desc: "Certified by Siemens and Dassault in presales/aftersales. Understands both tech and customers—secured a 7 million RMB order in 1 hour."
    },
    {
        title: "Agile Team AI Transformation",
        desc: "Pioneer in microservices architecture. Previously led a 70+ agile team; now fully AI-enabling micro-teams in the AI era."
    }
];
