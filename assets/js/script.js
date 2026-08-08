/**
 * 导航栏链接配置数据（去掉开头的 '/'，改用相对路径）
 */
const navLinks = [
  { href: 'index.html', page: 'index', text: '首页' },
  { href: 'assets/forme.html', page: 'forme', text: '关于我' },
  { href: 'assets/projects.html', page: 'projects', text: '项目' },
  { href: 'assets/skills.html', page: 'skills', text: '技能' },
  { href: 'assets/contact.html', page: 'contact', text: '联系方式' }
];

/**
 * 动态加载导航栏组件
 */
function loadNavbar() {
  // 1. 获取当前路径，判断当前页面（用于高亮）
  const path = window.location.pathname;
  let currentPage = 'index';
  if (path.includes('forme.html')) currentPage = 'forme';
  else if (path.includes('projects.html')) currentPage = 'projects';
  else if (path.includes('skills.html')) currentPage = 'skills';
  else if (path.includes('contact.html')) currentPage = 'contact';

  // 2. 计算当前页面到项目根目录的相对路径前缀
  // 不猜测 URL 深度，而是读取本脚本 <script> 标签自身的 src：
  // src 去掉末尾的 assets/js/script.js 后，即为"当前页面 -> 项目根目录"的路径
  //   index.html      中 src="assets/js/script.js"        -> 前缀 './'
  //   assets/forme.html 中 src="../assets/js/script.js"   -> 前缀 '../'
  //   404.html        中 src="/assets/js/script.js"       -> 前缀 '/'
  // 这样同时兼容：file:// 本地预览、GitHub Pages 深层 404、子路径部署
  let pathPrefix = './';
  const scripts = document.getElementsByTagName('script');
  for (const s of scripts) {
    const src = (s.getAttribute('src') || '').trim();
    const m = src.match(/^(.*)assets\/js\/script\.js(?:\?.*)?$/);
    if (m) {
      pathPrefix = m[1] || './';
      break;
    }
  }

  // 3. 构建导航栏结构
  const header = document.createElement('header');
  header.id = 'header';

  // Logo（也要用相对路径）
  const logo = document.createElement('a');
  logo.id = 'logo';
  logo.href = pathPrefix + 'index.html';
  logo.textContent = 'cznzhou';

  const nav = document.createElement('nav');
  nav.id = 'nav';

  navLinks.forEach(item => {
    const a = document.createElement('a');
    // 拼接动态前缀 + 配置中的路径
    a.href = pathPrefix + item.href;
    a.setAttribute('data-page', item.page);
    a.textContent = item.text;
    if (item.page === currentPage) {
      a.classList.add('active');
    }
    nav.appendChild(a);
  });

  header.appendChild(logo);
  header.appendChild(nav);

  // 替换 header-container
  const container = document.getElementById('header-container');
  if (container) {
    container.replaceWith(header);
  } else {
    console.warn('未找到 id="header-container" 的元素，导航栏无法插入');
  }
}

// 通用复制函数：从元素的 data-clipboard-text 属性复制内容
function copyText(el) {
  const text = el.getAttribute('data-clipboard-text');
  if (!text) return;
  navigator.clipboard.writeText(text).then(() => {
        const toast = document.getElementById('toast');
    if (toast) {
      toast.textContent = '已复制 ' + text;
        toast.classList.add('show');
      setTimeout(() => toast.classList.remove('show'), 2000);
}
  }).catch(err => {
    console.error('复制失败:', err);
  });
}

// 页面加载时自动加载导航栏
document.addEventListener('DOMContentLoaded', loadNavbar);

// 自动更新 footer 年份
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

