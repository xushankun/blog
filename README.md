# shankun.top — Hugo Blog

> 由 Hexo 3.x 迁移至 [Hugo](https://gohugo.io/) 的个人博客源码，部署在 [shankun.top](https://shankun.top)。

---

## 🌳 项目结构

```
hexoBlog/
├── archetypes/         # 新文章模板
│   └── default.md
├── content/            # 所有内容
│   ├── posts/          # 博客文章（24 篇已从 Hexo 迁移）
│   ├── about/          # 关于页面
│   ├── archives.md     # 归档页
│   └── search.md       # 搜索页
├── layouts/            # 自定义模板（含 404.html）
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
hexoBlog (源码, master)
    │
    │  push to master
    ▼
GitHub Actions
    │  1. Install Hugo
    │  2. hugo --gc --minify
    │  3. peaceiris/actions-gh-pages
    ▼
xushankun/xushankun.github.io (master 分支, 含 CNAME)
    │
    ▼
GitHub Pages → shankun.top
```

---

## 🛠️ 本地开发

### 1. 安装 Hugo (Extended 版)

```bash
# Windows (Chocolatey)
choco install hugo-extended

# macOS
brew install hugo

# Linux
sudo snap install hugo
```

验证版本：

```bash
hugo version
# hugo v0.139.x+extended ...
```

### 2. 拉取主题

```bash
# 首次克隆项目时
git submodule update --init --recursive

# 如果还没添加 submodule，手动添加：
git submodule add --depth=1 https://github.com/adityatelange/hugo-PaperMod.git themes/PaperMod
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

或手动在 `content/posts/` 下创建 `.md` 文件，front matter 模板：

```yaml
---
title: "文章标题"
date: 2026-06-10T10:00:00+08:00
author: "Xu Shan Kun"
draft: false
tags:
  - "javascript"
categories:
  - "前端"
---
```

正文开头加入 `<!--more-->` 即可控制摘要截断位置。

### 5. 构建静态文件

```bash
hugo --gc --minify
# 输出在 ./public 目录
```

---

## 🔐 自动部署配置（一次性）

GitHub Actions 已配置好（`.github/workflows/deploy.yml`），但跨仓库部署需要一个 **Personal Access Token (PAT)**。

### 创建 PAT

1. 打开 https://github.com/settings/tokens
2. 选择 **Generate new token (classic)**
3. 勾选权限：`repo`（全部）+ `workflow`
4. 生成后复制 token

### 配置 Secret

1. 进入 `xushankun/hexoBlog` 仓库 → **Settings** → **Secrets and variables** → **Actions**
2. 点击 **New repository secret**
3. Name: `PAGES_DEPLOY_TOKEN`
4. Secret: 粘贴上面生成的 PAT
5. 保存

之后每次 push 到 master，会自动构建并部署到 `xushankun/xushankun.github.io` 的 master 分支。

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

它会自动：
- 添加 Hugo 要求的前导 `---`
- 把 Hexo 日期格式转为 RFC3339（带时区 `+08:00`）
- 把 `<!-- more -->` 改为 `<!--more-->`
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
| 部署命令      | `hexo d`                | GitHub Actions 自动执行             |
| 摘要标记      | `<!-- more -->`         | `<!--more-->`                       |

### 性能对比

- Hexo 3.9 构建 24 篇文章 ≈ 5-10s
- Hugo 构建相同内容 < 100ms（性能提升 50-100 倍）

---

## 🎨 主题

当前使用 [PaperMod](https://github.com/adityatelange/hugo-PaperMod)，特性：

- 浅色 / 深色 / 跟随系统 三种主题
- 内置搜索（基于 fuse.js）
- 归档 / 标签 / 分类页面
- 阅读时间、字数统计
- 代码块一键复制
- TOC 目录
- 多语言支持

更换主题只需修改 `hugo.toml` 中的 `theme` 字段，并把对应主题放到 `themes/` 下。

---

## 🆘 回滚到 Hexo

如果出现严重问题，可以快速回滚：

```bash
# 1. 切换到备份分支
git checkout hexo-backup

# 2. 强制覆盖 master
git branch -f master hexo-backup
git push -f origin master

# 3. 在本地恢复 Hexo 环境
npm install
hexo g -d
```

---

## 📝 License

MIT
