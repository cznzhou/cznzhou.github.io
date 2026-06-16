# cznzhou.github.io

> 🌐 个人主页 · 开发者名片 · GitHub Pages 静态站点

这是我的个人主页源代码仓库，托管在 [GitHub Pages](https://pages.github.com) 上，展示了我的简介、经历与技术爱好。

---

## ✨ 特性

- 🧭 **导航栏组件**：通过 JavaScript 动态加载统一导航栏 (`assets/nav.html`)，多页面共享同一导航，当前页面自动高亮
- 🎨 **渐变 Logo**：`cznzhou` 标识使用渐变色（粉 → 红 → 蓝）并带有发光文字阴影，hover 时缩放并增强光效
- 🃏 **双卡片系统**：
  - `.card` — 毛玻璃风格卡片（用于首页、联系方式等）
  - `.article-card` — 文章排版卡片（用于关于我页面等）
- 📱 **响应式适配**：完美适配移动端与桌面端，导航栏在小屏下自动换行
- 📋 **通用复制功能**：点击带 `data-clipboard-text` 属性的元素即可复制任意文本，附 Toast 提示
- 💨 **动效柔和**：卡片悬浮上移、导航链接 hover 放大、渐变 Logo 过渡
- 🧩 **纯原生 HTML + CSS + JavaScript**，零外部依赖（除 Google Fonts）

## 🖥️ 预览

访问 [https://cznzhou.github.io](https://cznzhou.github.io) 查看实际效果。

## 📁 项目结构

```
cznzhou.github.io/
├── index.html                # 主页面（首页）
├── README.md                 # 项目说明文档
├── LICENSE                   # 许可证
├── assets/
│   ├── nav.html              # 统一导航栏组件
│   ├── forme.html            # 关于我页面
│   ├── projects.html         # 项目页面
│   ├── skills.html           # 技能页面
│   ├── contact.html          # 联系方式页面
│   ├── css/
│   │   └── style.css         # 样式表（毛玻璃、双卡片、响应式等）
│   ├── js/
│   │   └── script.js         # JavaScript（导航加载、通用复制Toast）
│   └── images/
│       └── avatar.jpg        # 个人头像
```

## 🛠️ 本地开发

1. 克隆本仓库：
   ```bash
   git clone https://github.com/cznzhou/cznzhou.github.io.git
   ```
2. 直接在浏览器打开 `index.html` 即可预览（导航栏需要本地 HTTP 服务，可用 `npx serve` 或 VS Code Live Server 等）。

## 📬 联系我

- GitHub: [@cznzhou](https://github.com/cznzhou)
- 邮箱: cznzhou520@gmail.com