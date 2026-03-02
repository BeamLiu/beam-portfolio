# 资源准备清单

本文档列出了网站所需的所有资源文件，方便您逐项准备和检查。

## 📄 必需资源（高优先级）

### 简历文件
- [ ] `Beam_Liu_Resume.pdf` - 中文简历
  - 位置：`portfolio/public/resume/`
  - 格式：PDF
  - 大小：< 5MB
  - 状态：⚠️ 必需

### 个人信息
- [ ] GitHub 用户名
- [ ] LinkedIn 个人主页链接
- [ ] 微信号
- [ ] 联系邮箱
- [ ] 状态：⚠️ 必需（在代码中更新）

---

## 🎬 视频资源（推荐准备）

### AI 作品集视频

#### EMOP 3.0 演示
- [ ] `emop3-demo.mp4`
  - 位置：`portfolio/public/videos/`
  - 建议时长：3-5分钟
  - 内容：平台功能演示、AI 辅助开发过程
  - 状态：🔵 推荐

#### CAD 格式转换工具
- [ ] `cad-converter-demo.mp4`
  - 位置：`portfolio/public/videos/`
  - 建议时长：2-3分钟
  - 内容：转换流程、精度对比
  - 状态：🔵 推荐

#### StyleMidi 钢琴陪练
- [ ] `stylemidi-demo.mp4`
  - 位置：`portfolio/public/videos/`
  - 建议时长：2-3分钟
  - 内容：应用演示、实时反馈
  - 状态：🔵 推荐

#### AI 辅助 CAD 设计
- [ ] 演示视频或截图
  - 位置：`portfolio/public/videos/` 或 `portfolio/public/images/`
  - 状态：⚪ 可选（项目进行中）

### 早期极客项目视频

#### VR 工业培训
- [ ] `vr-training.mp4`
  - 位置：`portfolio/public/videos/`
  - 建议时长：2-3分钟
  - 状态：🔵 推荐

#### AR 设备维护
- [ ] `ar-maintenance.mp4`
  - 位置：`portfolio/public/videos/`
  - 建议时长：2-3分钟
  - 状态：🔵 推荐

#### 数字孪生车间
- [ ] `digital-twin.mp4`
  - 位置：`portfolio/public/videos/`
  - 建议时长：2-3分钟
  - 状态：🔵 推荐

### 售前演示视频

#### EMOP 售前演示
- [ ] `emop-presales.mp4`
  - 位置：`portfolio/public/videos/`
  - 建议时长：5-8分钟
  - 内容：产品价值、客户案例、ROI
  - 状态：🔵 推荐

---

## 🖼️ 图片资源

### AI 项目截图

#### EMOP 3.0
- [ ] `emop3-1.png` - 主界面或架构图
- [ ] `emop3-2.png` - 核心功能或数据可视化
  - 位置：`portfolio/public/images/`
  - 分辨率：1920x1080 或 16:9
  - 状态：🔵 推荐

#### CAD 转换工具
- [ ] `cad-converter.png` - 工具界面或对比图
  - 位置：`portfolio/public/images/`
  - 状态：🔵 推荐

#### StyleMidi
- [ ] `stylemidi-1.png` - 应用主界面
- [ ] `stylemidi-2.png` - 反馈或分析界面
  - 位置：`portfolio/public/images/`
  - 状态：🔵 推荐

#### AI CAD 设计
- [ ] `ai-cad-1.png` - AI 生成界面
- [ ] `ai-cad-2.png` - 设计结果展示
  - 位置：`portfolio/public/images/`
  - 状态：⚪ 可选

### 极客项目缩略图

- [ ] `vr-training-thumb.png`
- [ ] `ar-maintenance-thumb.png`
- [ ] `digital-twin-thumb.png`
  - 位置：`portfolio/public/images/`
  - 分辨率：16:9 比例
  - 状态：⚪ 可选（如果有视频，缩略图可自动生成）

### 个人头像
- [ ] `avatar.png` 或 `avatar.jpg`
  - 位置：`portfolio/public/`
  - 尺寸：建议 512x512 或更大
  - 状态：⚪ 可选（目前使用字母占位符）

---

## 📊 售前 PPT（PDF 格式）

### EMOP 相关
- [ ] `emop3-presales.pdf` - EMOP 3.0 售前方案
  - 位置：`portfolio/public/ppt/`
  - 状态：🔵 推荐

- [ ] `emop-intro.pdf` - EMOP 产品介绍
  - 位置：`portfolio/public/ppt/`
  - 状态：🔵 推荐

### 解决方案
- [ ] `mindsphere-solution.pdf` - MindSphere 方案
  - 位置：`portfolio/public/ppt/`
  - 内容：一汽大众、中国商飞案例
  - 状态：🔵 推荐

- [ ] `plm-transformation.pdf` - PLM 数字化转型
  - 位置：`portfolio/public/ppt/`
  - 内容：大族激光、泸州老窖案例
  - 状态：🔵 推荐

---

## 🔗 在线资源链接

### GitHub 项目
- [ ] StyleMidi 项目仓库链接
  - 更新位置：`src/data/portfolio.ts` → `aiShowcase[2].media.github`
  - 状态：🔵 推荐

- [ ] 其他开源项目链接（如有）
  - 状态：⚪ 可选

### 视频托管（备选方案）
如果视频文件太大，可以使用视频托管服务：
- [ ] B站视频链接
- [ ] YouTube 视频链接
- [ ] 腾讯视频链接
  - 状态：⚪ 可选

---

## 📝 内容更新

### 数据文件更新
- [ ] 更新 `src/data/portfolio.ts` 中的社交链接
- [ ] 检查所有项目描述是否准确
- [ ] 确认专利列表完整
- [ ] 验证职业经历时间线
  - 状态：⚠️ 必需

### 翻译内容
- [ ] 检查中文内容准确性
- [ ] 补充英文翻译（如需要）
  - 位置：`src/i18n/translations.ts`
  - 状态：⚪ 可选

---

## 🎯 准备优先级说明

### ⚠️ 必需（立即准备）
- 简历 PDF
- 个人社交链接（GitHub/LinkedIn/微信/邮箱）
- 数据文件中的个人信息更新

### 🔵 推荐（尽快准备）
- AI 项目演示视频（至少 EMOP 3.0 和 StyleMidi）
- 项目截图（展示项目成果）
- 售前 PPT（展示商业能力）
- 早期极客项目视频（展示技术广度）

### ⚪ 可选（有则更好）
- 个人头像照片
- 项目缩略图
- 额外的演示材料
- 英文翻译内容

---

## 📋 准备步骤

### 第一阶段：基础信息（1天）
1. [ ] 准备简历 PDF
2. [ ] 整理社交媒体链接
3. [ ] 更新 `portfolio.ts` 中的个人信息
4. [ ] 测试网站基本功能

### 第二阶段：核心内容（3-5天）
1. [ ] 录制或整理 AI 项目演示视频
2. [ ] 准备项目截图
3. [ ] 整理售前 PPT 并转换为 PDF
4. [ ] 上传资源文件并测试

### 第三阶段：完善优化（2-3天）
1. [ ] 准备早期项目视频
2. [ ] 添加个人头像
3. [ ] 补充英文翻译
4. [ ] 全面测试和优化

---

## ✅ 验证清单

部署前最终检查：

### 功能测试
- [ ] 所有页面正常显示
- [ ] PDF 下载按钮工作正常
- [ ] 语言切换功能正常
- [ ] 所有外部链接可访问
- [ ] 视频播放正常（如有）
- [ ] 图片加载正常
- [ ] 移动端显示正常

### 内容检查
- [ ] 个人信息准确无误
- [ ] 项目描述清晰专业
- [ ] 没有错别字或语法错误
- [ ] 数据和时间准确
- [ ] 联系方式正确

### 性能检查
- [ ] 页面加载速度快
- [ ] 图片已压缩优化
- [ ] 视频大小合理
- [ ] 无控制台错误

---

## 💡 资源准备技巧

### 视频制作
- 使用屏幕录制工具（如 OBS、Camtasia）
- 添加简单的文字说明
- 控制文件大小（建议 < 50MB）
- 导出为 MP4 格式

### 图片处理
- 使用截图工具获取清晰截图
- 使用 TinyPNG 等工具压缩
- 保持 16:9 比例
- 确保文字清晰可读

### PPT 转 PDF
- 使用 PowerPoint 或 WPS 导出
- 选择"高质量"导出选项
- 检查字体是否嵌入
- 确保链接和动画转换正确

### 文件命名
- 使用小写字母和连字符
- 避免空格和特殊字符
- 保持与配置文件一致
- 使用有意义的名称

---

## 📞 需要帮助？

如果在准备资源时遇到问题：
1. 查看 `portfolio/README.md` 了解详细说明
2. 查看 `requirement/content_template.md` 获取内容模板
3. 查看 `requirement/additional_content.md` 了解详细要求
4. 运行 `npm run dev` 实时预览效果

---

**最后更新**：2026-03-02
**状态图例**：⚠️ 必需 | 🔵 推荐 | ⚪ 可选
