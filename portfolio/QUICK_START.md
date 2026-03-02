# 快速启动指南

## 立即开始

```bash
cd portfolio
npm install
npm run dev
```

访问 http://localhost:5173 查看效果

## 必须完成的配置

### 1. 更新个人信息

编辑 `src/data/portfolio.ts`，修改以下内容：

```typescript
social: {
  github: "https://github.com/你的用户名",
  linkedin: "https://linkedin.com/in/你的用户名",
  wechat: "你的微信号",
  email: "你的邮箱@example.com"
}
```

### 2. 添加简历 PDF

将你的简历 PDF 文件放到：
```
public/resume/Beam_Liu_Resume.pdf
```

### 3. 添加多媒体资源（可选）

根据需要添加以下资源：

**视频文件** → `public/videos/`
- emop3-demo.mp4
- cad-converter-demo.mp4
- stylemidi-demo.mp4
- vr-training.mp4
- ar-maintenance.mp4
- digital-twin.mp4
- emop-presales.mp4

**图片文件** → `public/images/`
- emop3-1.png, emop3-2.png
- cad-converter.png
- stylemidi-1.png, stylemidi-2.png
- ai-cad-1.png, ai-cad-2.png
- vr-training-thumb.png
- ar-maintenance-thumb.png
- digital-twin-thumb.png

**PPT文件（PDF格式）** → `public/ppt/`
- emop3-presales.pdf
- emop-intro.pdf
- mindsphere-solution.pdf
- plm-transformation.pdf

## 功能测试清单

- [ ] 首屏显示正常，PDF 下载按钮可见
- [ ] 右上角语言切换按钮工作正常
- [ ] AI 作品集区域展示完整
- [ ] 早期极客项目显示正常
- [ ] 售前材料区域可访问
- [ ] 页脚社交链接正确
- [ ] 页脚 PDF 下载按钮工作
- [ ] 移动端响应式正常

## 构建和部署

```bash
# 构建生产版本
npm run build

# 预览构建结果
npm run preview
```

构建产物在 `dist/` 目录，可直接部署到静态托管服务。

## 常见问题

### Q: 视频/图片不显示？
A: 确保文件路径正确，文件名与 `portfolio.ts` 中的配置一致。

### Q: PDF 下载不工作？
A: 检查 `public/resume/` 目录下是否有对应的 PDF 文件。

### Q: 如何修改内容？
A: 所有内容都在 `src/data/portfolio.ts` 文件中，直接编辑即可。

### Q: 如何添加新的翻译？
A: 编辑 `src/i18n/translations.ts` 文件，在 `zh` 和 `en` 对象中添加对应的翻译。

## 技术支持

如有问题，请查看：
- 完整文档：`README.md`
- 实施总结：`IMPLEMENTATION_SUMMARY.md`
- 资源说明：`public/resume/README.md`
