#!/usr/bin/env node
/**
 * Hexo -> Hugo front matter 迁移脚本
 * 用法: node scripts/migrate-posts.js <src_dir> <dst_dir>
 */
const fs = require('fs');
const path = require('path');

const SRC = process.argv[2] || '/tmp/hexo-posts-backup';
const DST = process.argv[3] || path.resolve(__dirname, '..', 'content', 'posts');

if (!fs.existsSync(DST)) fs.mkdirSync(DST, { recursive: true });

function parseHexoFrontMatter(raw) {
  // Hexo 文章通常只在末尾有 ---
  const endIdx = raw.indexOf('\n---');
  if (endIdx === -1) return { fm: {}, body: raw };

  const fmRaw = raw.substring(0, endIdx).trim();
  const body = raw.substring(endIdx + 4).replace(/^\r?\n/, '');

  const fm = {};
  let currentKey = null;
  const lines = fmRaw.split(/\r?\n/);
  for (const line of lines) {
    if (/^\s*-\s+/.test(line) && currentKey) {
      // list item
      if (!Array.isArray(fm[currentKey])) fm[currentKey] = [];
      fm[currentKey].push(line.replace(/^\s*-\s+/, '').trim().replace(/^["']|["']$/g, ''));
    } else {
      const m = line.match(/^([A-Za-z_][\w-]*)\s*:\s*(.*)$/);
      if (m) {
        const k = m[1].trim();
        const v = m[2].trim();
        currentKey = k;
        if (v === '') {
          fm[k] = []; // probably a list follows
        } else {
          fm[k] = v.replace(/^["']|["']$/g, '');
        }
      }
    }
  }
  return { fm, body };
}

function toHugoDate(d) {
  if (!d) return null;
  // Hexo date: 2018-08-31 14:56:00 -> 2018-08-31T14:56:00+08:00
  const m = String(d).match(/^(\d{4}-\d{2}-\d{2})[ T](\d{2}:\d{2}:\d{2})/);
  if (m) return `${m[1]}T${m[2]}+08:00`;
  const m2 = String(d).match(/^(\d{4}-\d{2}-\d{2})$/);
  if (m2) return `${m2[1]}T00:00:00+08:00`;
  return String(d);
}

function buildHugoFrontMatter(fm, fileBase) {
  const out = ['---'];
  const title = (fm.title || fileBase).replace(/"/g, '\\"');
  out.push(`title: "${title}"`);
  if (fm.date) out.push(`date: ${toHugoDate(fm.date)}`);
  if (fm.updated) out.push(`lastmod: ${toHugoDate(fm.updated)}`);
  if (fm.author) out.push(`author: "${fm.author}"`);
  out.push('draft: false');

  const tags = Array.isArray(fm.tags) ? fm.tags : (fm.tags ? [fm.tags] : []);
  out.push('tags:');
  tags.forEach(t => out.push(`  - "${String(t).replace(/"/g, '\\"')}"`));

  const cats = Array.isArray(fm.categories) ? fm.categories : (fm.categories ? [fm.categories] : []);
  out.push('categories:');
  cats.forEach(c => out.push(`  - "${String(c).replace(/"/g, '\\"')}"`));

  // 关键字
  if (fm.keywords) {
    out.push('keywords:');
    const kws = Array.isArray(fm.keywords) ? fm.keywords : [fm.keywords];
    kws.forEach(k => out.push(`  - "${k}"`));
  }

  out.push('---', '');
  return out.join('\n');
}

function convertBody(body) {
  // Hexo <!-- more --> -> Hugo <!--more-->
  return body.replace(/<!--\s*more\s*-->/g, '<!--more-->');
}

const files = fs.readdirSync(SRC).filter(f => f.endsWith('.md'));
let ok = 0, fail = 0;
for (const f of files) {
  try {
    const raw = fs.readFileSync(path.join(SRC, f), 'utf8');
    const { fm, body } = parseHexoFrontMatter(raw);
    const fileBase = f.replace(/\.md$/, '');
    const hugoFm = buildHugoFrontMatter(fm, fileBase);
    const newContent = hugoFm + convertBody(body);
    // 规范文件名：去掉特殊字符空格
    const safeName = fileBase.replace(/\s+/g, '-');
    fs.writeFileSync(path.join(DST, `${safeName}.md`), newContent, 'utf8');
    console.log(`✓ ${f}`);
    ok++;
  } catch (e) {
    console.error(`✗ ${f}: ${e.message}`);
    fail++;
  }
}
console.log(`\nDone: ${ok} success, ${fail} failed.`);
