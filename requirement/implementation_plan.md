# Beam Liu - "AI+制造业" 个人独立站落地计划 (Implementation Plan)

## 背景与目标
根据提供的 `reference` 中的详尽数据（历任 OOCL、Dell、易行数字 CTO，主导过商飞、一汽大众等千万级项目，拥有 12 项国内外专利，获得 Google 和西门子双重认证），本独立站的目标是打造一个极具 **“极客感、工业深度与高级商业感”** 的线上履历。
它将完全抛弃传统 PDF 的枯燥，通过动态交互展示你在“售前、研发架构、团队管理、AI落地”上的全能（六边形战士）属性。

## 🏆 核心页面架构设计 (Content Structure)

由于信息非常丰富，我们将采用 **现代化超长单页（Long Scrolling Landing Page） + 平滑锚点导航** 的结构。

### 1. 首屏视差 (Hero & Introduction)
*   **视觉**：深色背景，点线粒子连接动画（象征 IIoT 与 AI 神经网络）。
*   **Slogan**：打字机效果出现 `“融合工业底蕴与AI前沿的数字化破局者。”`
*   **数字看点 (Impact Metrics)**：在首屏底部悬浮 4 个醒目的数字资产：
    *   `19+ 年` 全栈架构与研发管理
    *   `12 项` 中美硬核技术发明专利
    *   `500W+` 级国家标杆项目操盘手 (商飞/一汽大众)
    *   `70+ 人` 敏捷研发团队管理经验

### 2. 核心竞争力矩阵 (Core Value Proposition) - 针对售前/管理岗
采用 4 张毛玻璃效果卡片（Glassmorphism），鼠标悬浮时展示炫光边框。
*   **🏭 顶配制造业老兵**：从 PLM 到 MOM/MES 再到 IIoT，深谙工厂痛点与业务。
*   **🧠 AI 与大模型落地先锋**：Google ML/DL 认证，PyTorch 核心，探索生成式 AI 工业赋能。
*   **💼 卓越售前与商业嗅觉**：西门子 IIoT 售前认证，擅长建立信任，1 小时关键沟通搞定 700 万订单。
*   **🚀 敏捷布道与氛围编程**：国内微服务先驱，崇尚 DX (开发者体验)，打造高效战斗力团队。

### 3. 主打硬核产品与项目 (Showcase)
采用水平滑动轮播（Carousel）或交互式时间轴展示：
*   **【自研平台】EMOP 工业互联网平台**：对标西门子 Teamcenter，云原生架构。
*   **【标杆项目】中国商飞 C919/CR929 MOM & IIoT**：国家级大飞机项目智造底座。
*   **【降本增效】大族激光 & 泸州老窖 PLM**：解决千万级 BOM 物料管理与研发协同。

### 4. 职业轨迹与深度案例 (Career Trajectory & Deep Case Studies)
*   **职业轨迹 (Career Trajectory)**：用结构化的大间距网格排版，取代单薄的线条。每一段履历不仅仅是职位，而是带出一句话的“核心成就”。
*   **深度商业案例 (Deep Case Studies)**：设计大型案例展示区块。对于“中国商飞 MOM”、“大族激光 PLM”等项目，提供包含“业务背景”、“技术挑战 (Challenges)”与“可量化收益 (Impact, 如效率提升20%)”的结构化文本框，旁边配以高雅的产品截图或架构预览。内置低调的 PDF/视频播放触发器。
### 5. 技术雷达与软实力 (Tech Stack & Beyond Code)
*   **技术雷达图**：将微服务 (K8s)、AI (PyTorch/TensorFlow)、前端 (Vue/React)、语言 (Python/Java) 分布展示。
*   **认知与高度**：展示你 1600+ 小时、250+ 本书的阅读量（哲学/天文/技术），以及小提琴爱好。展示“不仅仅是工程师，更是思想者”。

## 🛠️ 技术选型与部署 (Tech Stack)
*   **前端框架**：`Vite + React (TypeScript)` - 保证绝佳的性能和开发体验。
*   **样式方案**：`Tailwind CSS` + 纯 CSS 动画控制（满足你深色高级、定制化动效的需求，开发极快）。
*   **动画库**：`Framer Motion`（用于页面滚动时的元素丝滑入场、卡片悬浮特效）。
*   **图标库**：`Lucide React` 或 `Phosphor Icons`（现代化极简图标）。

---

## ⚡ 提议的变更步骤 (Proposed Changes)

### 阶段一：基础架构搭建
*   执行 `npm create vite@latest . -- --template react-ts` 初始化当前目录。
*   安装 Tailwind CSS 配套依赖，配置全局深色主题 (Dark Mode) 与现代化英文字体 (`Inter` 和 `Outfit`)。

### 阶段二：组件原子化开发
*   [NEW] `src/components/HeroSection.tsx`：实现粒子/炫光背景和核心数据展示。
*   [NEW] `src/components/ValueCards.tsx`：实现四大核心能力的毛玻璃交互卡片。
*   [NEW] `src/components/ProjectShowcase.tsx`：商飞、大族激光、EMOP等产品卡片。
*   [NEW] `src/components/PatentMarquee.tsx`：实现无限滚动的专利墙。
*   [NEW] `src/components/TechRadar.tsx` 和 `src/components/PersonalLife.tsx`。

### 阶段三：内容组装与调优
*   [MODIFY] `src/App.tsx`：将所有组件整合，实现平滑滚动。
*   [MODIFY] `src/index.css`：微调全局滚动条样式、选中色等。

---

## 🧪 验证计划 (Verification Plan)

### 本地测试
1.  **启动开发服务器**：运行 `npm run dev`，Agent 将在后台读取页面结构，确保无编译错误。
2.  **UI/UX 连贯性检查**：我们将使用 `generate_image` 生成当前界面的样稿供你预览，或者你可以通过端口代理在本地浏览器访问 `localhost:5173`。
3.  **自适应测试**：配置 Tailwind 的 breakpoints，确保在移动端（单列布局）和桌面端（多列/网格布局）均呈现高级感。
4.  **内容完整性**：对着解析出的 `personal.json`, `project.json`, `patents.json` 清单，核对是否有关键亮点遗漏。
