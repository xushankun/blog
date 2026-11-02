#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
同步 HowToLiveBetter 子模块内容到博客 life 模块。

用法:
    python3 scripts/sync-life.py [--clean]

转换内容:
  - vendor/HowToLiveBetter/book/*.md  -> content/life/<NN>-<slug>.md
  - vendor/HowToLiveBetter/docs/*.md  -> content/life/docs/<slug>.md
  - 生成 content/life/_index.md（章节目录入口页）

同步机制:
  git submodule update --remote vendor/HowToLiveBetter
  python3 scripts/sync-life.py
"""
import re
import sys
import subprocess
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parent.parent
SRC = REPO_ROOT / "vendor" / "HowToLiveBetter"
BOOK = SRC / "book"
DOCS = SRC / "docs"
DEST_LIFE = REPO_ROOT / "content" / "life"
DEST_DOCS = DEST_LIFE / "docs"

REPO_URL = "https://github.com/eternity4719/HowToLiveBetter"
LICENSE_NOTICE = (
    "\n\n---\n\n"
    "> **内容转载**：本文来自 [高性价比人生指南](%s) "
    "（[eternity4719/HowToLiveBetter](%s)），"
    "以 CC BY 4.0 许可发布，版权归原作者所有。"
    "政策和医学内容可能过时，实际办事/就医请以当地部门、医生说法为准。" % (REPO_URL, REPO_URL)
)

# 章节 -> 主题分组
CHAPTER_GROUPS = {
    "01": "健康", "02": "健康", "03": "精力与时间", "04": "精力与时间",
    "05": "金钱", "06": "金钱", "07": "金钱", "08": "法律与人身自由",
    "09": "法律与人身自由", "10": "家庭", "11": "法律与人身自由",
    "12": "金钱", "13": "紧急情况", "14": "法律与人身自由",
    "15": "金钱", "16": "健康", "17": "家庭", "18": "家庭",
    "19": "工作与职业", "20": "家庭", "21": "法律与人身自由",
    "22": "精力与时间", "23": "工作与职业", "24": "健康",
    "25": "家庭", "26": "法律与人身自由", "27": "家庭",
    "28": "健康", "29": "健康", "30": "家庭", "31": "工作与职业",
    "32": "工作与职业", "33": "健康", "34": "健康",
}

GROUP_ORDER = [
    "健康", "金钱", "工作与职业", "家庭",
    "法律与人身自由", "紧急情况", "精力与时间",
]


def extract_title(content: str, fallback: str) -> str:
    m = re.search(r"^# (.+)$", content, re.M)
    return m.group(1).strip() if m else fallback


def clean_links(content: str) -> str:
    """修复相对链接指向博客内正确路由。"""
    content = re.sub(r"\]\(\.\./README\.md\)", "](/life/)", content)
    content = re.sub(r"\]\(\.\./README\.md#([^)]+)\)", "](/life/)", content)
    content = re.sub(r"\]\(README\.md\)", "](/life/)", content)
    content = re.sub(r"\]\(README\.md#([^)]+)\)", "](/life/)", content)
    # book/NN-xxx.md -> /life/NN-xxx/
    content = re.sub(
        r"\]\(book/(\d{2}-[^)]+?)\.md\)",
        lambda m: "](/life/%s/)" % m.group(1),
        content,
    )
    content = re.sub(
        r"\]\(book/(\d{2}-[^)]+?)\.md#([^)]+)\)",
        lambda m: "](/life/%s/)" % m.group(1),
        content,
    )
    # docs/xxx.md -> /life/docs/xxx/
    content = re.sub(
        r"\]\(docs/([^)]+?)\.md\)",
        lambda m: "](/life/docs/%s/)" % m.group(1),
        content,
    )
    content = re.sub(
        r"\]\(docs/([^)]+?)\.md#([^)]+)\)",
        lambda m: "](/life/docs/%s/)" % m.group(1),
        content,
    )
    # ../docs/xxx.md
    content = re.sub(
        r"\]\(\.\./docs/([^)]+?)\.md\)",
        lambda m: "](/life/docs/%s/)" % m.group(1),
        content,
    )
    return content


def make_frontmatter(title: str, weight: int, tags: list, description: str = "") -> str:
    desc = description.replace('"', "'")[:200]
    return (
        "---\n"
        f'title: "{title}"\n'
        f"weight: {weight}\n"
        f'description: "{desc}"\n'
        f"tags: [{', '.join(tags)}]\n"
        'categories: ["生活指南"]\n'
        "ShowReadingTime: true\n"
        "ShowWordCount: false\n"
        "ShowToc: true\n"
        "TocOpen: true\n"
        "---\n\n"
    )


def short_desc(content: str) -> str:
    """从正文中取第一段非标题文字作为摘要。"""
    for line in content.splitlines():
        line = line.strip()
        if not line or line.startswith("#") or line.startswith("[") or line.startswith("!"):
            continue
        if line.startswith("<!--"):
            continue
        return line
    return ""


def sync_book():
    chapters = sorted(BOOK.glob("*.md"))
    print(f"book chapters: {len(chapters)}")
    generated = []
    for i, f in enumerate(chapters, 1):
        content = f.read_text(encoding="utf-8")
        title = extract_title(content, f.stem)
        slug = f.stem
        nn = f.stem.split("-")[0]
        tags = ["生活指南", "人生指南", CHAPTER_GROUPS.get(nn, "其他")]
        desc = short_desc(content)

        # 章内回链按钮
        content = re.sub(
            r"\[← 回总目录\]\([^)]+\)",
            "[← 回总目录](/life/)",
            content,
        )
        content = clean_links(content)
        # 去掉首行 H1（frontmatter 已有 title，PaperMod 会重复渲染）
        content = re.sub(r"^# .+\n", "", content, count=1, flags=re.M)

        fm = make_frontmatter(title, i, tags, desc)
        out = DEST_LIFE / f"{slug}.md"
        out.write_text(fm + content + LICENSE_NOTICE, encoding="utf-8")
        generated.append((slug, title, nn, desc))
        print(f"  + {out.name}  [{title}]")
    return generated


def sync_docs():
    docs = sorted(DOCS.glob("*.md"))
    print(f"docs articles: {len(docs)}")
    generated = []
    for i, f in enumerate(docs, 1):
        content = f.read_text(encoding="utf-8")
        title = extract_title(content, f.stem)
        slug = f.stem
        tags = ["生活指南", "专题"]
        desc = short_desc(content)
        content = clean_links(content)
        # 去掉首行 H1
        content = re.sub(r"^# .+\n", "", content, count=1, flags=re.M)
        fm = make_frontmatter(title, i, tags, desc)
        out = DEST_DOCS / f"{slug}.md"
        out.write_text(fm + content + LICENSE_NOTICE, encoding="utf-8")
        generated.append((slug, title, desc))
        print(f"  + docs/{out.name}  [{title}]")
    return generated


def make_index(chapters, docs):
    by_group = {}
    for slug, title, nn, desc in chapters:
        g = CHAPTER_GROUPS.get(nn, "其他")
        by_group.setdefault(g, []).append((slug, title, desc))

    lines = []
    lines.append("---")
    lines.append('title: "高性价比人生指南"')
    lines.append('url: "/life/"')
    lines.append("ShowReadingTime: false")
    lines.append("ShowToc: false")
    lines.append("---\n")
    lines.append(
        "整理自开源项目 [高性价比人生指南"
        "](https://github.com/eternity4719/HowToLiveBetter)"
        "（作者 eternity4719，CC BY 4.0 许可）。"
        "本书回答的是**具体问题**：什么值得做、什么不值得做，"
        "每条写明成本、收益和证据等级，来源只引期刊论文与官方文件。"
    )
    lines.append("")
    lines.append("> **免责声明**：内容转载自上游开源项目，"
                 "政策和医学内容可能过时；真去办事、看病、打官司时，"
                 "以当地部门、医生和律师的说法为准。发现内容有误请到"
                 f"[上游仓库提 issue]({REPO_URL}/issues)。")
    lines.append("")

    # 快速跳转
    lines.append("**主题分组**：")
    for g in GROUP_ORDER:
        if g in by_group:
            n = len(by_group[g])
            anchor = g.replace(" ", "")
            lines.append(f"- [{g}](#{anchor})（{n} 章）")
    if "其他" in by_group:
        lines.append(f"- [其他](#其他)（{len(by_group['其他'])} 章）")
    lines.append("")

    for g in GROUP_ORDER + ["其他"]:
        if g not in by_group:
            continue
        lines.append(f"## {g}")
        lines.append("")
        for slug, title, desc in by_group[g]:
            short = desc[:80] + "…" if len(desc) > 80 else desc
            lines.append(f"### [{title}](/life/{slug}/)")
            if short:
                lines.append(short)
            lines.append("")
        lines.append("")

    lines.append("## 专题长文")
    lines.append("")
    for slug, title, desc in docs:
        short = desc[:80] + "…" if len(desc) > 80 else desc
        lines.append(f"### [{title}](/life/docs/{slug}/)")
        if short:
            lines.append(short)
        lines.append("")

    lines.append("---\n")
    lines.append(f"> 内容来源：[{REPO_URL}]({REPO_URL}) · "
                 "[在线检索版](https://eternity4719.github.io/HowToLiveBetter/) · "
                 "[PDF/EPUB 下载](https://github.com/eternity4719/HowToLiveBetter/releases)")
    lines.append("")

    (DEST_LIFE / "_index.md").write_text("\n".join(lines), encoding="utf-8")
    print(f"  + _index.md  [{len(chapters)} chapters, {len(docs)} docs]")


def main():
    if not BOOK.exists():
        print("ERROR: submodule not initialized. Run:\n"
              "  git submodule update --init vendor/HowToLiveBetter", file=sys.stderr)
        sys.exit(1)

    if "--clean" in sys.argv:
        import shutil
        if DEST_LIFE.exists():
            shutil.rmtree(DEST_LIFE)
            print("cleaned content/life/")

    DEST_LIFE.mkdir(exist_ok=True)
    DEST_DOCS.mkdir(exist_ok=True)

    chapters = sync_book()
    docs = sync_docs()
    make_index(chapters, docs)
    print(f"\nDone. {len(chapters)} chapters + {len(docs)} docs -> content/life/")


if __name__ == "__main__":
    main()
