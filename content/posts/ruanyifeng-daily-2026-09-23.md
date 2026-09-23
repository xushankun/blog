---
title: "科技日志 | 2026年9月23日"
description: "AI 进入降价普及时代，GPT-6 Sol 与 Claude Opus 5.5 同日发布"
date: "2026-09-23T09:28:13+08:00"
author: Xu Shan Kun
draft: false
tags: [科技, AI, 周报]
---

今天我想聊聊 AI 模型降价这件事。OpenAI 和 Anthropic 在同一天发布新模型，都把"降价"作为核心卖点。这不是巧合，而是 AI 产业竞争逻辑的根本转变——从"谁更聪明"转向"谁更便宜"。

## 主题深度分析：AI 进入"降价普及"时代

### 一、GPT-6 Sol 与 Claude Opus 5.5 同日发布

2026年9月23日，OpenAI 与 Anthropic 不约而同选择在同一天发布新模型。OpenAI 推出 GPT-6 Sol 与 Luna，API 价格直接下调 50%；Anthropic 发布 Claude Opus 5.5，成本较 Opus 5 降低约 40%，速度提升超过 30%。

两家公司都使用了同一个词："智能普及化"。这个词的背后，是 AI 产业竞争逻辑的根本转变——从"谁更聪明"转向"谁更便宜"。

我注意到一个细节：Claude Opus 5.5 的官方描述是"在大多数任务上的表现达到 Claude Fable 5.1 的水平，同时运行成本比 Opus 5 低 40%"。这句话的潜台词是，性能已经接近天花板，现在拼的是成本控制能力。

### 二、降价背后的经济学

为什么降价成为主旋律？我认为有三个原因。

第一，推理成本正在快速下降。Hugging Face 预告的 tokenizers v1 速度提升 3 至 30 倍，GLM-5.3-Flash 提速版推理速度达到 200 tokens/s。基础设施的进步，让同样的计算资源可以服务更多用户。

第二，竞争格局要求降价。当 GPT-6 Sol 与 Claude Opus 5.5 在同一天发布，任何一家都不敢维持高价。价格战不是选择，而是必然。

第三，应用场景在下沉。Legora 的 ARR 突破 2 亿美元，13 万名律师每月使用；Muse 登顶应用商店，开放连接器平台。这些应用需要服务大量普通用户，对价格极其敏感。

### 三、对开发者的启示

作为开发者，我认为这个趋势对我们是重大利好。

过去，选择 AI 模型需要在性能和成本之间做艰难取舍。现在，性能相近的模型成本差距正在缩小，选择变得更加简单。

更重要的是，降价让"AI 原生应用"的商业模型变得可行。成都推出的"词元券"政策，企事业单位可以免费申领，政府补贴不超过 30% 的 Token 消费。这种政策创新，预示着 AI 正在成为像水电一样的基础设施。

我认为，未来两年，AI 应用的竞争焦点将从"模型能力"转向"应用创新"。谁能用好这些便宜的智能，谁就能赢得市场。

## 科技动态

### 1. Shopify 放弃 React Native，回归原生开发

Shopify 宣布放弃 React Native，改用 Swift 和 Kotlin 开发移动端。六年前它高调转向 React Native，如今又转回来了。原因很简单：AI 可以便捷地翻译语言，那么为什么不用性能更好的原生语言？React Native 这种中间层，在 AI 时代失去了存在意义。

### 2. 成都推出"词元券"政策

成都市计划实施"词元券"，企事业单位可以免费申领，政府补贴不超过 30% 的 Token 消费金额。此外还有"词元贷"，可以向银行贷款消费 Token。这是地方政府将 AI 算力视为基础设施的标志性举措。

### 3. ICLR 2027 投稿量超过历史总和

据称 ICLR 2027 收到的投稿数量，已经超过 2013 年至 2026 年所有年份投稿量的总和。AI 研究领域的爆炸式增长，给学术会议的审稿系统带来巨大压力。如何在保证质量的前提下应对投稿洪流，成为重要挑战。

### 4. Boston Dynamics 推出机器人元工厂应用中心

Boston Dynamics 推出 RMAC，落地于现代汽车集团的 Metaplant America，目标是将 Atlas 机器人直接集成到汽车制造流程。人形机器人从实验室走向生产线，商业化正在加速。

## 文章与工具推荐

### 1. Univer：AI Agent 的办公套件

https://github.com/dream-num/univer

一个 TypeScript 项目，将电子表格、文档、幻灯片、画布、关系型数据库和 PDF 整合在一个运行时中，专门为 AI Agent 设计。目前 15,426 stars，增长迅速。如果你想让 AI 操作办公文档，这是个值得关注的选择。

### 2. Google AX：开放的智能体编排运行时

https://github.com/google/ax

Google 开源的智能体编排运行时，Go 语言实现。今天新增 2,305 stars，增长迅猛。如果你在构建多智能体系统，可以看看这个项目的设计思路。

### 3. ghostty-web：浏览器里的完整终端

https://github.com/coder/ghostty-web

将终端模拟器 Ghostty 编译成 WASM 代码，可以在网页里使用一个全功能的终端。这个项目的思路很有意思：把桌面应用搬进浏览器。

### 4. Great Tables：Python 复杂表格库

https://github.com/posit-dev/great-tables

一个可以生成复杂表格的 Python 库。如果你需要在 Python 中创建精美的数据表格，这个工具值得尝试。

### 5. tokenizers v1：Hugging Face 分词器大升级

https://github.com/huggingface/tokenizers

Rust 实现，速度提升 3 至 30 倍，即将登陆 transformers 库。作为大模型推理流水线中的关键环节，tokenizer 的性能提升将直接改善整个模型的推理延迟。

## 精彩言论

> "AI 就是一个无所不能的自动翻译器，一旦问世，像 React Native 这种中间语言或者翻译层，就被判死刑了。"
>
> ——阮一峰，《科技爱好者周刊（第 413 期）》
> https://www.ruanyifeng.com/blog/2026/09/weekly-issue-413.html

> "GenAI 只是 AI 全景中的一部分，过度聚焦 GenAI 可能导致企业忽视更可靠、更适合的替代技术。"
>
> ——Gartner 分析师 Leinar Ramos
> https://iaipie.com/2026年9月22日ai行业资讯速览/

> "科学的大部分内容是学习与现实世界交互，而当前脆弱的 AI 驱动机器人在这一方面表现很差。超人类的物理 AI 终将出现，但这需要的时间将超过 2 年。"
>
> ——AI 先驱 Schmidhuber
> https://iaipie.com/2026年9月23日ai行业资讯速览/

---
*本文由 AI 辅助整理，内容经人工审核。*