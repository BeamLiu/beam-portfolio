export const portfolioData = {
  personal: {
    name: "Beam Liu",
    fullName: "Shengzhi Liu",
    title: "链接前沿 AI 与数字化制造的工程师 / 管理者 / 破局者",
    avatar: "/avatar.png",
    metrics: [
      { value: "19+", label: "年全栈架构与研发管理经验" },
      { value: "12", label: "项中美硬核技术发明专利" },
      { value: "500W+", label: "级国家标杆项目操盘手" },
      { value: "70+", label: "人敏捷研发团队管理经验" }
    ],
    social: {
      github: "https://github.com/beamliu",
      linkedin: "https://linkedin.com/in/beamliu",
      wechat: "beam_liu_wechat",
      email: "beam@example.com"
    },
    resumePDF: "/resume/Beam_Liu_Resume.pdf"
  },

  coreValues: [
    {
      title: "制造业全栈理解",
      description: "从 PLM 到 MOM/MES，深谙供应链与生产线痛点。对标西门子 Teamcenter 和 MindSphere，深入理解工业软件架构与业务。"
    },
    {
      title: "AI/大模型原力",
      description: "Google DL/ML 双重认证，从模型训练到工业场景应用。精通 PyTorch、TensorFlow，探索生成式 AI 工业赋能。"
    },
    {
      title: "售前与商业转化",
      description: "不仅懂技术，更懂客户。1小时拿下700万订单的破局能力，出色的 PPT 与宣讲能力。西门子 IIoT 售前认证。"
    },
    {
      title: "敏捷梯队建设",
      description: "带领 70+ 团队，推崇氛围编程，敏捷开发布道者。国内微服务先驱，崇尚 DX (开发者体验)。"
    }
  ],

  career: [
    {
      period: "2017 - 现在",
      company: "广州易行数字",
      role: "CTO & 联合创始人",
      highlights: [
        "负责自有产品 EMOP 的研发，对标西门子 Teamcenter（PLM）和 MindSphere（IIoT）",
        "主导多个千万级项目：中国商飞、一汽大众、大族激光",
        "两年内实现 2000 万销售额",
        "管理 70+ 人研发团队"
      ]
    },
    {
      period: "2010 - 2017",
      company: "Dell",
      role: "Development Manager",
      highlights: [
        "主持 Gartner 魔力象限产品 Foglight 平台研发",
        "参与国内最早一批微服务架构实践"
      ]
    },
    {
      period: "2005 - 2010",
      company: "OOCL",
      role: "Senior Developer",
      highlights: [
        "参与全球三大船运数据平台之一 Cargosmart 产品研发",
        "国内最早实践敏捷开发的团队之一"
      ]
    }
  ],

  projects: [
    {
      name: "EMOP 工业互联网平台",
      client: "自研产品",
      description: "对标西门子 Teamcenter，云原生架构的工业互联网平台",
      tags: ["PLM", "IIoT", "云原生"]
    },
    {
      name: "中国商飞 C919/CR929 MOM & IIoT",
      client: "中国商飞",
      scale: "500-1000万",
      challenges: "国家级大飞机项目智造底座，构建物流、质量、计划、设备等领域服务",
      impact: "实现数据实时在线，全面互联，形成公司设备接入的标准规范",
      tags: ["MOM", "IIoT", "航空制造"]
    },
    {
      name: "大族激光 PLM 项目",
      client: "大族激光",
      scale: "500-1000万",
      challenges: "100多个项目中心复杂组织结构管理，超10万个零件的装配仿真管理",
      impact: "项目管控成本降低 20%，物料成本降低 10%，产品质量提升 8%",
      tags: ["PLM", "BOM管理", "装备制造"]
    },
    {
      name: "一汽大众工业物联网平台",
      client: "一汽大众",
      scale: "500-1000万",
      challenges: "五大生产基地数字化转型，180+ 数字化创新场景",
      impact: "统一使用西门子 MindSphere 平台，实现五地六厂设备数据汇集",
      tags: ["IIoT", "MindSphere", "汽车制造"]
    },
    {
      name: "泸州老窖 PLM 项目",
      client: "泸州老窖",
      scale: "500-1000万",
      challenges: "产品研发项目过程管控松散，各IT系统林立，数据源不统一",
      impact: "研发效率提升 20%，决策效率提升 15%，错误数据降低 60%",
      tags: ["PLM", "研发管理", "快消品"]
    }
  ],

  aiShowcase: [
    {
      title: "EMOP 3.0 平台端到端重构",
      period: "10个月",
      description: "AI 结对编程完成工业互联网平台的全栈重构，从架构设计到前后端实现",
      highlights: [
        "前后端架构全面升级",
        "AI 辅助代码重构和优化",
        "完整的售前材料和演示视频",
        "云原生微服务架构"
      ],
      tags: ["AI结对编程", "全栈开发", "架构设计", "售前"],
      media: {
        video: "/videos/emop3-demo.mp4",
        images: ["/images/emop3-1.png", "/images/emop3-2.png"],
        ppt: "/ppt/emop3-presales.pdf"
      }
    },
    {
      title: "CAD 格式转换工具 (UG → CATIA)",
      period: "3个月",
      description: "AI 辅助开发的 CAD 文件格式转换工具，解决工业设计软件互操作性问题",
      highlights: [
        "支持 UG 到 CATIA 格式转换",
        "保持几何精度和特征完整性",
        "批量处理能力",
        "AI 辅助算法优化"
      ],
      tags: ["AI辅助", "CAD", "工业软件", "算法"],
      media: {
        video: "/videos/cad-converter-demo.mp4",
        images: ["/images/cad-converter.png"]
      }
    },
    {
      title: "StyleMidi - AI 钢琴陪练助手",
      period: "2天",
      description: "氛围编程打造的 AI 音乐学习工具，从小模型训练到全栈应用",
      highlights: [
        "2天完成从模型到产品",
        "MIDI 音乐分析和反馈",
        "实时演奏评估",
        "家庭场景实际应用"
      ],
      tags: ["氛围编程", "AI模型", "全栈", "音乐"],
      media: {
        video: "/videos/stylemidi-demo.mp4",
        images: ["/images/stylemidi-1.png", "/images/stylemidi-2.png"],
        github: "https://github.com/beamliu/stylemidi"
      }
    },
    {
      title: "AI 辅助 CAD 设计",
      period: "进行中",
      description: "探索 AI 在工业设计领域的应用，智能化 CAD 设计流程",
      highlights: [
        "自然语言生成 CAD 模型",
        "设计参数智能优化",
        "工程知识图谱集成",
        "前沿技术探索"
      ],
      tags: ["AI", "CAD", "生成式设计", "研发中"],
      media: {
        images: ["/images/ai-cad-1.png", "/images/ai-cad-2.png"]
      }
    }
  ],

  geekProjects: [
    {
      title: "VR 工业培训系统",
      description: "虚拟现实技术在工业培训场景的早期探索",
      year: "2016",
      tags: ["VR", "Unity", "工业培训"],
      media: {
        video: "/videos/vr-training.mp4",
        thumbnail: "/images/vr-training-thumb.png"
      }
    },
    {
      title: "AR 设备维护指导",
      description: "增强现实技术辅助设备维护和操作指导",
      year: "2017",
      tags: ["AR", "HoloLens", "工业维护"],
      media: {
        video: "/videos/ar-maintenance.mp4",
        thumbnail: "/images/ar-maintenance-thumb.png"
      }
    },
    {
      title: "数字孪生车间",
      description: "工厂车间的数字孪生可视化系统",
      year: "2018",
      tags: ["数字孪生", "3D可视化", "IoT"],
      media: {
        video: "/videos/digital-twin.mp4",
        thumbnail: "/images/digital-twin-thumb.png"
      }
    }
  ],

  presalesMaterials: [
    {
      title: "EMOP 平台售前方案",
      description: "工业互联网平台完整售前演示材料",
      type: "PPT + 视频",
      files: [
        { name: "EMOP产品介绍.pdf", url: "/ppt/emop-intro.pdf" },
        { name: "演示视频", url: "/videos/emop-presales.mp4" }
      ]
    },
    {
      title: "MindSphere 解决方案",
      description: "西门子 MindSphere 平台售前方案",
      type: "PPT",
      files: [
        { name: "MindSphere方案.pdf", url: "/ppt/mindsphere-solution.pdf" }
      ]
    },
    {
      title: "PLM 数字化转型方案",
      description: "制造业 PLM 系统实施方案",
      type: "PPT + 案例",
      files: [
        { name: "PLM转型方案.pdf", url: "/ppt/plm-transformation.pdf" }
      ]
    }
  ],

  patents: [
    { id: "US10592616B2", title: "Generating simulation data using a linear curve simplification and reverse simplification method" },
    { id: "US9274758B1", title: "System and method for creating customized performance-monitoring applications" },
    { id: "US10657099B1", title: "Systems and methods for transformation and analysis of logfile data" },
    { id: "US20170109268A1", title: "Dynamic adjustment of instrumentation scope" },
    { id: "US10516743B1", title: "Systems and methods for facilitating portable user sessions" },
    { id: "CN107948134B", title: "数据交互方法和装置" },
    { id: "CN113347260A", title: "一种基于云端环境的微服务开发方法" },
    { id: "CN113347261A", title: "一种基于业务领域填充访问令牌信息的机制" },
    { id: "CN108900363B", title: "调整局域网工作状态的方法、装置及系统" },
    { id: "CN111858717B", title: "一种物料创建的实时智能推荐方法" },
    { id: "CN111986044B", title: "一种基于模式匹配算法自动生成工艺流程的编排方法" },
    { id: "CN114416211A", title: "一种将工业软件定制化开发转为工业app的方法" }
  ],

  certifications: [
    { name: "Google 深度学习开发者认证", org: "Google" },
    { name: "Google 云机器学习工程师认证", org: "Google" },
    { name: "西门子 IIoT 售前工程师认证", org: "Siemens" }
  ],

  techStack: {
    backend: ["Python", "Java", "Kubernetes", "微服务架构"],
    frontend: ["Vue", "React", "TypeScript"],
    ai: ["PyTorch", "TensorFlow", "大语言模型", "生成式AI"],
    industrial: ["PLM", "MES/MOM", "IIoT", "S7 OPCUA", "边缘计算"]
  },

  insights: {
    reading: {
      total: "250+ 本书籍",
      hours: "1600+ 小时",
      categories: {
        tech: ["深度学习", "深度学习的数学", "工业级知识图谱", "OpenCV", "制造业知识工程"],
        philosophy: ["苏格拉底的申辩", "理想国", "尼采", "一个悲观主义者的积极思考", "涌现"],
        business: ["从优秀到卓越", "创新者的窘境", "飞轮效应", "竞争战略", "增长五线", "高效能人士七个习惯", "刻意练习", "心流"],
        scifi: ["时间简史", "量子简史", "平行宇宙", "超弦轮", "奇点临近"]
      }
    },
    hobbies: ["小提琴", "天文", "哲学思考", "技术创新"]
  }
};
