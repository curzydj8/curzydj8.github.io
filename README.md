站点优化说明

变更摘要：
- 添加并完善基础 SEO 元标签（`description`）。
- 生成并引入压缩版资源：`styles.min.css`、`script.min.js`，并在 HTML 中使用版本查询参数 `?v=20260121` 以实现缓存策略。
- 为命令卡添加 `prefetch`，并将命令卡的内联样式/事件迁移到 CSS（使用 `.command-grid` 与 `.card-link`）。

如何运行 Lighthouse（本地/Chromium）：
1. 在 Chrome/Edge 中打开站点（例如 `file:///.../index.html` 或部署到静态服务器）。
2. 打开开发者工具 -> Audits / Lighthouse，选择 Desktop 或 Mobile，点击 "Generate report"。

命令行（使用 Node 的 Lighthouse）：
```bash
npm install -g lighthouse
lighthouse http://localhost:8080/index.html --output html --output-path report.html --chrome-flags="--headless"
```

未完成/注意事项：
- 图片优化：工作区中未发现可优化的图片文件（如 PNG/JPG）。如有图片，请上传或放入 `images/`，我会批量压缩并生成 WebP 版本。
- Lighthouse 报告：我无法在此环境中运行 Chrome/Lighthouse。请在本地按上面步骤运行报告，我可以帮助分析结果并给出具体修复建议。

需要我现在：
- 帮你把版本号改为基于文件哈希的方式（更强缓存控制）；或
- 运行并分析 Lighthouse 报告（请将生成的 `report.html` 上传）。
