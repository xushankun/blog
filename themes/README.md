# 主题目录

主题通过 git submodule 引入：

```bash
git submodule add --depth=1 https://github.com/adityatelange/hugo-PaperMod.git themes/PaperMod
git submodule update --init --recursive
```

如果你不想用 submodule，也可以直接 clone：

```bash
git clone --depth=1 https://github.com/adityatelange/hugo-PaperMod.git themes/PaperMod
```

主题相关配置已在 `hugo.toml` 中完成，无需额外修改。

> GitHub Actions 中已配置 `submodules: recursive`，会自动拉取主题。
