# cznzhou.github.io

> 🌐 个人主页 · 开发者名片 · GitHub Pages 静态站点

这是我的个人主页源代码仓库，托管在 [GitHub Pages](https://pages.github.com) 上，展示了我的简介、经历与技术爱好。

---

## ✨ 特性

- 🧭 **模块化导航栏**：由 `script.js` 动态生成并高亮当前页；路径前缀从脚本自身位置推导，兼容 `file://` 本地预览、深层 404 与子路径部署；禁用 JS 时自动降级为静态导航（`<noscript>` 兜底）
- 🎨 **渐变 Logo**：`cznzhou` 标识使用渐变色（粉 → 红 → 蓝）并带有发光文字阴影，hover 时缩放并增强光效
- 🃏 **双卡片系统**：
  - `.card` — 毛玻璃风格卡片（首页、联系方式等）
  - `.article-card` — 文章排版卡片（关于我、项目、技能等）
- 📱 **响应式适配**：适配移动端与桌面端，导航栏小屏自动换行；使用 `dvh` 视口单位，避免移动端地址栏伸缩导致布局跳动
- 📋 **通用复制功能**：点击带 `data-clipboard-text` 属性的元素一键复制（Clipboard API 优先，非安全上下文自动回退 `execCommand`），失败时 Toast 明确提示
- 🚧 **自定义 404 页面**：深层路径下资源使用绝对路径加载，导航与样式不失效
- ♿ **无障碍**：跳过导航链接（skip-link）、当前页标注 `aria-current`、尊重系统"减少动效"（`prefers-reduced-motion`）、语义化按钮
- 💨 **动效柔和**：卡片悬浮上移、导航链接 hover 放大、渐变 Logo 过渡
- 🧩 **纯原生 HTML + CSS + JavaScript**，零外部依赖，无构建步骤

## 🖥️ 预览

访问 [https://cznzhou.github.io](https://cznzhou.github.io) 查看实际效果。

## 📁 项目结构

```
cznzhou.github.io/
├── index.html                # 主页面（首页）
├── 404.html                  # 自定义 404 页面（GitHub Pages 任意路径下生效）
├── README.md                 # 项目说明文档
├── LICENSE                   # 许可证
├── .nojekyll                 # 跳过 Jekyll 构建，纯静态直出
└── assets/
    ├── forme.html            # 关于我页面
    ├── projects.html         # 项目页面
    ├── skills.html           # 技能页面
    ├── contact.html          # 联系方式页面
    ├── css/
    │   └── style.css         # 样式表（双卡片、响应式、无障碍）
    ├── js/
    │   └── script.js         # 导航加载、通用复制与 Toast、footer 年份
    ├── favicon/              # favicon 与 Apple Touch Icon 图标集
    └── images/
        └── avatar.jpg        # 个人头像
```

## 🛠️ 本地开发

1. 克隆本仓库：
   ```bash
   git clone https://github.com/cznzhou/cznzhou.github.io.git
   ```
2. 直接双击打开 `index.html` 即可预览（导航栏、复制功能均可用）；推荐使用本地 HTTP 服务（`npx serve` 或 VS Code Live Server）以获得最佳体验。

> 💡 仓库根目录的 `.nojekyll` 让 GitHub Pages 跳过 Jekyll 构建，下划线开头的文件也不会被忽略。

## 📬 联系我

- GitHub: [@cznzhou](https://github.com/cznzhou)
- 邮箱: cznzhou520@gmail.com
