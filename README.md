# shankun.top — Hugo Blog

> 由 Hexo 3.x 迁移至 [Hugo](https://gohugo.io/) 的个人博客源码，部署在 [shankun.top](https://shankun.top)。

---

## 🌳 项目结构

```
blog/
├── archetypes/         # 新文章模板
│   └── default.md
├── content/            # 所有内容
│   ├── posts/          # 博客文章（24 篇已从 Hexo 迁移）
│   ├── about/          # 关于页面
│   ├── archives.md     # 归档页
│   └── search.md       # 搜索页
├── layouts/            # 自定义模板
│   ├── 404.html        # 自定义 404 页面（CSS 3D 动画）
│   └── partials/
│       └── comments.html   # giscus 评论组件
├── static/             # 静态资源
│   ├── CNAME           # GitHub Pages 自定义域名
│   └── baidu_verify_*.html
├── themes/             # 主题（PaperMod，git submodule）
├── scripts/
│   └── migrate-posts.js  # Hexo → Hugo 迁移脚本
├── .github/workflows/
│   └── deploy.yml      # GitHub Actions 自动部署
├── hugo.toml           # Hugo 主配置
└── README.md
```

---

## 🚀 部署流程

```
blog (源码, master)
    │  push to master
    ▼
GitHub Actions
    │  1. peaceiris/actions-hugo (Hugo 0.147.7 extended)
    │  2. actions/cache (resources/)
    │  3. hugo --gc --minify
    │  4. actions/deploy-pages
    ▼
GitHub Pages (同仓库 Pages from Actions)
    │
    ▼
shankun.top
```

> ✅ 已从「跨仓库 + PAT」简化为「同仓库 Pages from Actions」，**无需任何 token**，不会过期。

---

## 🛠️ 本地开发

### 1. 安装 Hugo (Extended 版)

```bash
# Windows
choco install hugo-extended

# macOS
brew install hugo

# Linux
sudo snap install hugo
```

要求版本 ≥ 0.146.0（PaperMod 主题要求）。

```bash
hugo version
# hugo v0.147.x+extended ...
```

### 2. 克隆 & 拉取主题

```bash
git clone --recurse-submodules git@github.com:xushankun/blog.git
# 已克隆过的项目：
git submodule update --init --recursive
```

### 3. 启动本地预览

```bash
hugo server -D
# 访问 http://localhost:1313
```

### 4. 新建一篇文章

```bash
hugo new posts/my-new-article.md
```

archetype 模板已配好 PaperMod 常用字段（封面、TOC、评论开关等）。写完后：

```bash
git add content/posts/my-new-article.md
git commit -m "post: 文章标题"
git push origin master
# 等 1-2 分钟，shankun.top 上线
```

正文中加入 `<!--more-->` 控制摘要截断位置。

---

## 🔐 首次仓库配置（一次性）

由于使用了**同仓库 Pages from Actions**，没有 token 配置环节，只需要在 GitHub 后台启用一下：

1. 进入 `xushankun/blog` → **Settings** → **Pages**
2. **Source** 选 `GitHub Actions`
3. 在 **Custom domain** 填 `shankun.top`，勾选 `Enforce HTTPS`

> 因为 user-page 仓 `xushankun.github.io` 也绑定了 `shankun.top`，需要先在那边解绑域名（Settings → Pages → 清空 Custom domain），再到 blog 这边绑定，否则 GitHub 不允许同时绑两个仓库。

---

## 💬 启用 giscus 评论

`layouts/partials/comments.html` 已写好，只差填两个 ID：

1. 在 `xushankun/blog` 仓库启用 **Discussions**：Settings → Features → Discussions ✅
2. 在 Discussions 中创建一个 category，建议名字叫 `Comments`，type 选 `Announcement`
3. 安装 [giscus app](https://github.com/apps/giscus) 到该仓库
4. 打开 https://giscus.app ，按表单选择仓库、category、mapping(pathname)
5. 把页面给出的 `data-repo-id` 和 `data-category-id` 填入 `hugo.toml`：

```toml
[params.giscus]
  repoId = "R_kgDOxxxxxx"          # 填这里
  categoryId = "DIC_kwDOxxxxxx"    # 填这里
```

下次 push 自动生效。主题切换（PaperMod 浅/深色）会实时同步给 giscus iframe。

---

## 🔄 从 Hexo 迁移说明

### 备份分支

原 Hexo 项目代码完整保留在 **`hexo-backup`** 分支：

```bash
git checkout hexo-backup
```

### 文章迁移脚本

`scripts/migrate-posts.js` 用于把 Hexo 文章批量转为 Hugo 格式：

```bash
node scripts/migrate-posts.js <hexo_posts_dir> <hugo_posts_dir>
```

自动处理：
- 添加 Hugo 要求的前导 `---`
- Hexo 日期 → RFC3339（带时区 `+08:00`）
- `<!-- more -->` → `<!--more-->`
- 规范化文件名（去除空格）
- 保留 tags / categories / author

### 主要差异

| 项目          | Hexo                    | Hugo                                |
| ------------- | ----------------------- | ----------------------------------- |
| 配置文件      | `_config.yml`           | `hugo.toml`                         |
| 文章目录      | `source/_posts/`        | `content/posts/`                    |
| 静态资源      | `source/`               | `static/`                           |
| 自定义模板    | `themes/<theme>/layout` | `layouts/`                          |
| Front matter  | 末尾 `---`              | 前后都需 `---`                      |
| 构建命令      | `hexo g`                | `hugo`                              |
| 部署命令      | `hexo d`                | GitHub Actions（push 即可）         |
| 摘要标记      | `<!-- more -->`         | `<!--more-->`                       |

### 性能对比

| 指标 | Hexo 3.9 | Hugo 0.147 |
|------|----------|-----------|
| 构建 24 篇文章 | 5-10s | < 100ms |
| 本地环境要求 | Node 12 + npm + hexo-cli | 仅 hugo 二进制 |
| 部署 | 本地构建 + git push | git push（构建在 CI） |

---

## 🎨 主题与功能

当前使用 [PaperMod](https://github.com/adityatelange/hugo-PaperMod)：

- 浅色 / 深色 / 跟随系统 三种主题（已开启 toggle）
- 内置搜索（基于 fuse.js）
- 归档 / 标签 / 分类页面
- 阅读时间、字数统计、面包屑
- 代码块一键复制
- TOC 目录
- giscus 评论（已集成，待启用）
- 自定义 404（CSS 3D 滚动数字）

更换主题：改 `hugo.toml` 的 `theme` 字段，把对应主题放到 `themes/`。

---

## 🆘 回滚到 Hexo

```bash
# 1. 切到备份分支
git checkout hexo-backup

# 2. 强制覆盖 master
git branch -f master hexo-backup
git push -f origin master

# 3. 本地恢复 Hexo 环境
npm install
hexo g -d
```

---

## 📝 License

MIT
