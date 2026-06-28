/**
 * 加载导航栏组件
 * 从 assets/nav.html 获取导航栏 HTML，并根据当前页面自动高亮 active 项
 */
function loadNavbar() {
  fetch('assets/nav.html')
    .then(response => response.text())
    .then(html => {
      // 创建临时容器解析 HTML
      const temp = document.createElement('div');
      temp.innerHTML = html;
      const header = temp.querySelector('#header');
      if (!header) return;

      // 确定当前页面（从路径中提取文件名，不含扩展名）
      const path = window.location.pathname;
      let currentPage = 'index';
      if (path.includes('forme.html')) {
        currentPage = 'forme';
      } else if (path.includes('projects.html')) {
        currentPage = 'projects';
      } else if (path.includes('skills.html')) {
        currentPage = 'skills';
      } else if (path.includes('contact.html')) {
        currentPage = 'contact';
      }

      // 为当前页面对应的链接设置 active 类
      const links = header.querySelectorAll('#nav a');
      links.forEach(link => {
        const page = link.getAttribute('data-page');
        if (page === currentPage) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });

      // 查找容器并插入导航栏
      const container = document.getElementById('header-container');
      if (container) {
        container.replaceWith(header);
      }
    })
    .catch(err => console.error('导航栏加载失败:', err));
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

// 原有复制邮箱功能（兼容旧写法）
function copyEmail() {
  const el = document.querySelector('.email-copy');
  if (el) copyText(el);
}

// 页面加载时自动加载导航栏
document.addEventListener('DOMContentLoaded', loadNavbar);

