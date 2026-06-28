/* ============================================================
   custom.js
   博客自定义功能脚本 — 从 extend_footer.html 抽离
   抽离时间: 2026-06-28
   依赖: medium-zoom (通过 /vendor/medium-zoom/medium-zoom.min.js 加载)
   通过 <script defer> 加载，自动延迟到 HTML 解析完成
   ============================================================ */

(function () {
  'use strict';

  // ========== 1. 外部链接新标签页打开 ==========
  function handleExternalLinks() {
    const postContent = document.querySelector('.post-content');
    if (!postContent) return;

    const links = postContent.querySelectorAll('a');
    links.forEach(link => {
      if (link.href.startsWith('#') || link.href.startsWith('javascript:')) return;
      if (link.hostname && link.hostname !== window.location.hostname) {
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');
      }
    });
  }

  // ========== 2. 图片灯箱效果 (Medium-Zoom) ==========
  function initImageZoom() {
    if (typeof mediumZoom === 'undefined') {
      console.warn('medium-zoom library not loaded');
      return;
    }
    const postContent = document.querySelector('.post-content');
    if (!postContent) return;
    const images = postContent.querySelectorAll('img');
    if (images.length === 0) return;

    mediumZoom(images, {
      background: 'rgba(0, 0, 0, 0.9)',
      margin: 24,
      scrollOffset: 40,
      container: { top: 0, left: 0, right: 0, bottom: 0 }
    });
  }

  // ========== 3. 固定侧边栏目录 ==========
  function initSidebarToc() {
    const postContent = document.querySelector('.post-content');
    if (!postContent) return;

    const headings = postContent.querySelectorAll('h2, h3, h4');
    if (headings.length < 2) return;

    const sidebarToc = document.createElement('div');
    sidebarToc.className = 'sidebar-toc';
    sidebarToc.innerHTML = '<div class="sidebar-toc-title">目录</div><ul></ul>';
    const tocList = sidebarToc.querySelector('ul');

    headings.forEach((heading, index) => {
      if (!heading.id) heading.id = 'heading-' + index;
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = '#' + heading.id;
      a.textContent = heading.textContent;
      a.dataset.level = heading.tagName.toLowerCase();
      const level = parseInt(heading.tagName.charAt(1));
      if (level === 3) li.style.paddingLeft = '16px';
      else if (level === 4) li.style.paddingLeft = '32px';
      li.appendChild(a);
      tocList.appendChild(li);
    });

    document.body.appendChild(sidebarToc);

    const mobileToggle = document.createElement('button');
    mobileToggle.className = 'mobile-toc-toggle';
    mobileToggle.setAttribute('aria-label', '目录');
    mobileToggle.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>';
    document.body.appendChild(mobileToggle);

    const mobileToc = document.createElement('div');
    mobileToc.className = 'mobile-toc';
    mobileToc.innerHTML = `
      <div class="mobile-toc-header">
        <span class="mobile-toc-title">目录</span>
        <button class="mobile-toc-close" aria-label="关闭">&times;</button>
      </div>
      <ul>${tocList.innerHTML}</ul>
    `;
    document.body.appendChild(mobileToc);

    mobileToggle.addEventListener('click', () => mobileToc.classList.add('active'));
    mobileToc.querySelector('.mobile-toc-close').addEventListener('click', () => mobileToc.classList.remove('active'));
    mobileToc.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => mobileToc.classList.remove('active'));
    });

    function updateActiveHeading() {
      const scrollPos = window.scrollY + 100;
      let currentHeading = null;
      headings.forEach(heading => {
        if (scrollPos >= heading.offsetTop) currentHeading = heading;
      });

      sidebarToc.querySelectorAll('a').forEach(a => {
        a.classList.remove('active');
        if (currentHeading && a.getAttribute('href') === '#' + currentHeading.id) {
          a.classList.add('active');
          const activeItem = a.closest('li');
          if (activeItem) {
            const tocRect = sidebarToc.getBoundingClientRect();
            const itemRect = activeItem.getBoundingClientRect();
            if (itemRect.top < tocRect.top || itemRect.bottom > tocRect.bottom) {
              activeItem.scrollIntoView({ block: 'center', behavior: 'smooth' });
            }
          }
        }
      });

      mobileToc.querySelectorAll('a').forEach(a => {
        a.classList.remove('active');
        if (currentHeading && a.getAttribute('href') === '#' + currentHeading.id) {
          a.classList.add('active');
        }
      });
    }

    function throttle(func, limit) {
      let inThrottle;
      return function () {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
          func.apply(context, args);
          inThrottle = true;
          setTimeout(() => (inThrottle = false), limit);
        }
      };
    }

    window.addEventListener('scroll', throttle(updateActiveHeading, 100), { passive: true });
    updateActiveHeading();

    function smoothScrollTo(id) {
      const targetElement = document.getElementById(id);
      if (targetElement) {
        window.scrollTo({ top: targetElement.offsetTop - 20, behavior: 'smooth' });
      }
    }

    sidebarToc.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', function (e) {
        e.preventDefault();
        smoothScrollTo(this.getAttribute('href').substring(1));
      });
    });
    mobileToc.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', function (e) {
        e.preventDefault();
        smoothScrollTo(this.getAttribute('href').substring(1));
      });
    });
  }

  // ========== 4. 阅读进度条（仅文章页） ==========
  function initReadingProgress() {
    const article = document.querySelector('.post-single .post-content');
    if (!article) return;

    const bar = document.createElement('div');
    bar.className = 'reading-progress';
    document.body.appendChild(bar);

    function update() {
      const rect = article.getBoundingClientRect();
      const articleTop = rect.top + window.scrollY;
      const articleHeight = article.offsetHeight;
      const viewportHeight = window.innerHeight;
      const scrolled = window.scrollY - articleTop + viewportHeight * 0.3;
      const total = articleHeight - viewportHeight * 0.3;
      const percent = Math.max(0, Math.min(100, (scrolled / total) * 100));
      bar.style.width = percent + '%';
    }

    window.addEventListener('scroll', update, { passive: true });
    update();
  }

  // ========== 初始化 ==========
  function init() {
    handleExternalLinks();
    initImageZoom();
    initSidebarToc();
    initReadingProgress();
  }

  // <script defer> 保证 DOM 已就绪，但保留兼容性
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
