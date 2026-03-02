# Beam Liu - AI+制造业 个人作品集

极简、专业、高级感的个人独立站，展示 AI 与数字化制造领域的专业能力。

## 特性

- ✨ 极简现代企业级设计风格
- 📱 完美适配桌面端和移动端
- 🌐 中英文双语切换
- 🤖 AI 结对编程作品集展示
- 🎬 早期极客项目（VR/AR/数字孪生）
- 📊 售前材料展示
- 📄 PDF 简历下载
- 🔗 社交媒体链接（GitHub/LinkedIn/微信）
- ⚡ 基于 Vite + React + TypeScript 构建
- 🎨 使用 Tailwind CSS 实现精致排版
- 🚀 优化的性能和加载速度

## 技术栈

- **构建工具**: Vite
- **框架**: React 18 + TypeScript
- **样式**: Tailwind CSS
- **字体**: Inter (无衬线) + JetBrains Mono (等宽)
- **国际化**: 自定义 Context 实现中英文切换

## 开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览生产构建
npm run preview
```

## 项目结构

```
portfolio/
├── src/
│   ├── components/              # React 组件
│   │   ├── HeroSection.tsx          # 首屏概述（含PDF下载）
│   │   ├── CoreValues.tsx           # 核心竞争力
│   │   ├── CareerTrajectory.tsx     # 职业轨迹
│   │   ├── AIShowcase.tsx           # AI作品集 ⭐ 新增
│   │   ├── GeekProjects.tsx         # 早期极客项目 ⭐ 新增
│   │   ├── ProjectShowcase.tsx      # 标杆项目
│   │   ├── PresalesMaterials.tsx    # 售前材料 ⭐ 新增
│   │   ├── PatentsAndCerts.tsx      # 专利与认证
│   │   ├── TechAndInsights.tsx      # 技术栈与认知
│   │   ├── Footer.tsx               # 页脚（含社交链接）
│   │   └── LanguageToggle.tsx       # 语言切换 ⭐ 新增
│   ├── contexts/
│   │   └── LanguageContext.tsx      # 语言上下文 ⭐ 新增
│   ├── i18n/
│   │   └── translations.ts          # 翻译文件 ⭐ 新增
│   ├── data/
│   │   └── portfolio.ts         # 数据配置
│   ├── App.tsx                  # 主应用
│   ├── main.tsx                 # 入口文件
│   └── index.css                # 全局样式
├── public/
│   ├── resume/                  # 简历PDF文件
│   ├── videos/                  # 演示视频
│   ├── images/                  # 项目截图
│   └── ppt/                     # 售前PPT（PDF格式）
├── index.html
└── package.json
```

## 内容更新

所有内容数据都集中在 `src/data/portfolio.ts` 文件中，包括：

- 个人信息和核心指标
- 社交媒体链接（GitHub/LinkedIn/微信/邮箱）⭐ 新增
- 简历 PDF 路径 ⭐ 新增
- 核心竞争力描述
- 职业经历
- **AI 结对编程作品集** ⭐ 新增
  - EMOP 3.0 平台重构
  - CAD 格式转换工具
  - StyleMidi 钢琴陪练
  - AI 辅助 CAD 设计
- **早期极客项目** ⭐ 新增
  - VR 工业培训
  - AR 设备维护
  - 数字孪生车间
- **售前材料** ⭐ 新增
  - EMOP 平台方案
  - MindSphere 解决方案
  - PLM 数字化转型方案
- 标杆项目案例
- 专利列表
- 技术栈
- 阅读和兴趣爱好

修改此文件即可更新网站内容。

## 多媒体资源

请将以下资源文件放置在 `public/` 目录对应位置：

### 简历文件
- `public/resume/Beam_Liu_Resume.pdf` - 中文简历

### 视频文件
- `public/videos/emop3-demo.mp4` - EMOP 3.0 演示
- `public/videos/cad-converter-demo.mp4` - CAD 转换工具
- `public/videos/stylemidi-demo.mp4` - StyleMidi 演示
- `public/videos/vr-training.mp4` - VR 培训系统
- `public/videos/ar-maintenance.mp4` - AR 维护指导
- `public/videos/digital-twin.mp4` - 数字孪生
- `public/videos/emop-presales.mp4` - EMOP 售前视频

### 图片文件
- AI 项目截图（emop3-*.png, cad-converter.png, stylemidi-*.png, ai-cad-*.png）
- 极客项目缩略图（*-thumb.png）

### PPT 文件（PDF 格式）
- `public/ppt/emop3-presales.pdf`
- `public/ppt/emop-intro.pdf`
- `public/ppt/mindsphere-solution.pdf`
- `public/ppt/plm-transformation.pdf`

详细说明请查看 `public/resume/README.md`

## 语言切换

网站支持中英文双语：
- 点击右上角的语言切换按钮
- 默认显示中文
- 切换后整个网站内容会相应更新

## 设计理念

遵循"现代企业级极简风"设计语言：

- **色彩**: 纯白背景 + 极浅灰区块 + 商务蓝强调色
- **排版**: 单列超宽幅结构，充足留白，清晰层级
- **交互**: 克制的悬停效果，无过度动画
- **字体**: Inter 无衬线字体 + JetBrains Mono 等宽字体

## 部署

构建后的文件在 `dist/` 目录，可以部署到任何静态网站托管服务：

- Vercel（推荐，已配置 vercel.json）
- Netlify
- GitHub Pages
- 阿里云 OSS
- 腾讯云 COS

## License

© 2026 Beam Liu. All rights reserved.
