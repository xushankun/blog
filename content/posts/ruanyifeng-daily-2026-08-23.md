---
title: "Stripe 70亿美元收购 OpenRouter：当支付巨头吞下 AI 模型路由层"
date: 2026-08-23T09:26:36+08:00
tags: ["科技", "互联网", "AI", "Stripe", "OpenRouter", "开源"]
categories: ["随笔"]
author: "Xu Shan Kun"
---

## Stripe 70亿美元收购 OpenRouter：当支付巨头吞下 AI 模型路由层

上周最让我关注的一条新闻，不是 Anthropic 准备 IPO 估值两万亿美元，也不是 Google Gemma 下载量破十亿，而是 Stripe 以超过70亿美元的价格收购了 OpenRouter。

为什么这件事重要？因为它揭示了一个趋势：AI 基础设施的"路由层"正在成为兵家必争之地，而支付公司——没错，做支付的——正在成为这个新战场的关键玩家。

### OpenRouter 是什么？

先说说 OpenRouter 是什么。

如果你用过多个 AI 模型——比如 Claude 写代码、GPT-4o 聊天、DeepSeek 省钱——你大概率经历过这种痛苦：每个模型提供商有自己的 API、自己的定价、自己的 SDK。换一个模型，代码就要改一大片。

OpenRouter 解决的就是这个问题。它提供一个统一的 API 入口，开发者发一个请求，OpenRouter 根据价格、速度、能力等维度，自动帮你路由到最合适的模型。截至目前，OpenRouter 接入了超过400个 AI 模型，服务全球800万开发者。

它的 CEO Alex Atallah 曾经把自己的公司比作"AI 界的 Stripe"——一个统一的接入点，消除选择的烦恼。你接入 OpenRouter，OpenRouter 帮你接入一切。

讽刺的是，三个月后，Stripe 把这个比喻变成了现实。

### 一笔疯狂的交易

我们来看看这笔交易的数字。

2026年5月，OpenRouter 完成 B 轮融资，估值13亿美元，投资人包括 Sequoia、Andreessen Horowitz、Menlo Ventures 和 Alphabet 的 Capital G。

三个月后，Stripe 以超过70亿美元的价格买下它。三个月，估值翻了5倍多。

为什么 Stripe 愿意出这个价？

答案藏在 Stripe 自己的一句话里："随着 token 越来越可以与钱互换，实时流式支付是 Stripe AI 经济基础设施的重要组成部分。"

翻译成人话：每个 AI 请求都在花钱，Stripe 要做的是——从模型路由到计费结算，一条龙。

你想想，开发者发一个请求给 OpenRouter，OpenRouter 路由到某个模型，这个过程中产生的计算费用谁来收？过去是 OpenRouter 用 Stripe 来收款。现在 Stripe 直接把 OpenRouter 收了，整条链路都是自己的。

这不是收购一个产品，这是收购一个支付入口。

### 中国模型的"隐藏流量"

更有意思的数据：根据 CNBC 在2026年7月的分析，通过 OpenRouter 处理的美国企业 AI token 中，有46%来自中国开发的模型。DeepSeek、Qwen、Kimi 等中国模型在美国企业中的使用量接近一半。

这给这笔交易增加了一层地缘政治色彩。Stripe 现在拥有一个基础设施平台，而这个平台承载着大量流向中国模型的企业 AI 流量。美国政府是否会审查这种技术转移？CNBC 的报道已经暗示了这种可能性。

### 路由层的价值

从更宏观的角度看，Stripe 收购 OpenRouter 反映了一个更大的趋势：AI 模型路由正在从一个"便利工具"变成"基础设施"。

过去一年，Ramp 推出了 Router by Ramp，Cursor 建了自己的模型路由，Databricks 也在做类似的事情。每个有一定规模的 AI 应用，都需要一个"模型选择层"。

这就像互联网早期的 DNS。你不需要记住 IP 地址，DNS 帮你把域名翻译成 IP。同样，开发者不需要记住每个模型的 API 细节，路由层帮你做模型选择和请求分发。

而 Stripe 做的事情，是把这个路由层和支付层合二为一。它不只帮你选模型，还帮你算钱、收钱、分钱。

### 对开发者意味着什么？

短期来看，开发者不需要太担心。OpenRouter 的服务会继续运行，Stripe 承诺保持其开放性。

但长期来看，问题在于"中立性"。当路由层被一家支付公司控制，它还会公平地推荐所有模型吗？会不会优先推荐和 Stripe 有商业合作的模型提供商？会不会对某些竞争对手的模型收取更高的路由费用？

这些问题目前没有答案，但值得开发者保持警惕。

我自己用 OpenRouter 已经有大半年了。说实话，它确实好用——一个 API key 搞定所有模型，账单清晰，切换无缝。但如果有一天它不再中立，我大概会考虑自建一个简单的路由层。

好在开源替代方案也不是没有。比如 LiteLLM 就提供了类似的模型路由功能，而且完全开源。

## 科技动态

1、[Anthropic 准备 IPO，估值或超2万亿美元](https://en.sedaily.com/international/2026/08/21/anthropic-to-file-for-ipo-this-month-at-2-trillion-value)

Anthropic 正在紧锣密鼓地筹备上市。据报道，公司已秘密向 SEC 提交了招股说明书，预计今年秋天挂牌。其年化收入在7月底达到了650亿美元，是去年同期的七倍。第二季度营收115亿美元，同比增长14.6倍。如果上市成功，Anthropic 的估值可能超过2万亿美元，超过 SpaceX 的1.77万亿纪录。不过挑战也不小：中国模型的竞争（Moonshot 的 Kimi K3 性能接近 Claude 但成本低得多）、与美国政府的关系紧张、以及 AI 行业整体烧钱速度令人担忧。

2、[Google Gemma 模型下载量突破10亿](https://startupfortune.com/googles-gemma-models-just-hit-a-billion-downloads-and-wall-street-shrugged)

Google DeepMind 8月20日宣布，其开源权重模型 Gemma 系列累计下载量已超过10亿次。自2024年2月首次发布以来，外部开发者已基于 Gemma 训练出超过10万个变体模型。不过资本市场对此反应平淡——Alphabet 当天股价微跌，第二天才涨了1.22%。投资者更关心的是 Alphabet 将2026年 AI 资本支出上调至1950-2050亿美元，以及 Jeff Dean 等资深 AI 研究员离职创业的消息。

3、[Go 1.27 发布：泛型方法、JSON v2、后量子密码学](https://linuxiac.com/go-1-27-released-with-generic-methods-json-v2-and-faster-memory-allocation)

Go 语言团队发布了 Go 1.27，这是近几个版本中变化最大的一次。最核心的更新是泛型方法（Generic Methods）——方法声明现在可以拥有自己的类型参数，不再需要包级别的泛型函数来绕弯路。`encoding/json` 包在底层悄悄换成了 v2 引擎，反序列化性能免费提升。新增的 `encoding/json/v2` 包默认更严格，拒绝无效 UTF-8 和重复键。内存分配也有优化，小对象分配成本降低约30%。此外，还新增了 `crypto/mldsa` 包实现后量子签名，以及原生 `uuid` 包。升级时注意：压缩输出（zip、gzip、png）的字节流发生了变化，快照测试需要更新。

4、[Mojo 编程语言正式开源](https://simonwillison.net/2026/Aug/18/mojo-is-now-open-source)

在高通以约39亿美元收购 Modular 之后，Mojo 编程语言在 ModCon 大会上宣布完全开源，编译器和工具链采用 Apache 2.0 许可。Mojo 最初定位为 Python 超集，但后来调整为独立语言，专注于让 GPU 编程尽可能简单。Hacker News 上的讨论出现了明显的两极化：一方说"终于可以试试了"，另一方说"太迟了，窗口已关闭"。同一天，Modular Cloud 正式发布，MAX 运行时扩展到支持 Nvidia、AMD、Apple Silicon、AWS Trainium、Google TPU 和高通加速器——六家芯片厂商统一编程模型，这才是真正的卖点。

5、[Slack 推出 Slack Code：聊天频道里的 AI 编程](https://gizmodo.com/slack-has-of-course-launched-a-vibe-coding-tool-2000800885)

Slack（现在属于 Salesforce）推出了 Slack Code 功能，允许团队在聊天频道中与 AI 代理协作编写代码。Claude、ChatGPT、Devin 和 Copilot 都是创始合作伙伴。用户只需在对话中 @一个编程代理，它就会自动创建一个专用代码频道，包含对话、计划、代码差异和实时预览四个标签页。高风险操作（如合并代码到生产环境）需要人工确认。这个功能在所有 Slack 计划中免费提供。Marc Benioff 在 X 上发文称这是"真正的多人协作编程"。

## 文章/工具推荐

1、[Buzz](https://github.com/nicobailon/buzz)——Jack Dorsey 的开源 Slack + GitHub 替代品

Block 公司（Jack Dorsey 创办）推出了 Buzz，一个开源的协作工作区。它的核心特点是人和 AI 代理在同一个频道里工作。支持任意模型（Claude、ChatGPT、本地模型都行），内置 Git 仓库托管，每个操作都有加密签名和审计日志。与 Slack 的 AI 功能不同，Buzz 中的代理可以互相触发，不需要人类逐一审批。目前还处于早期阶段，但方向很有意思——如果 AI 代理真的要成为"同事"，我们需要的可能不是在现有工具上打补丁，而是重新设计工作空间。

2、[Berd](https://github.com/nicobailon/berd)——Block 开源的跨模型 AI Agent 桌面工作台

同样是 Block 的产品，Berd 是一个桌面应用，让你在一个界面里管理 Claude Code、Codex、Goose 等不同的 AI 代理。Apache 2.0 许可，支持 macOS、Windows、Linux。它的设计哲学是"暴露状态，而不是隐藏"——失败、加载、不可用的提供商都直接展示出来，而不是用友好的提示消息糊弄你。对话历史存储在本地。适合同时使用多个 AI 编码工具的开发者。

3、[OpenLogi](https://github.com/AprilNEA/OpenLogi)（GitHub 星标 13.3k）

罗技 Options+ 的开源替代品。支持 macOS、Linux、Windows，通过 HID++ / UVC 协议控制鼠标按键重映射、DPI、SmartShift、手势、Litra 灯光和摄像头设置。TOML 配置文件 + GUI + CLI 三种操作方式。最重要的是——不需要账号，不需要联网，没有遥测数据。对于不想安装臃肿官方软件的罗技用户来说，这是个很好的选择。

4、[MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo)（GitHub 星标 114k）

AI 一键生成高清短视频的工作流：输入主题/关键词 → AI 生成脚本 → 素材搜索（图库或 AI 生成）→ TTS 语音合成 → 字幕 → BGM → 成品。支持9:16和16:9比例，提供 WebUI、CLI、API 和 Agent 接口。可以自动发布到 TikTok、Instagram、YouTube Shorts。对于内容创作者和营销人员来说，这是批量生产短视频的利器。

5、[Codex Harness](https://developers.openai.com/codex-harness)——OpenAI 开源的 Agent 运行时

OpenAI Codex（App、CLI、IDE）背后的代理运行时框架，Apache 2.0 许可。管理对话状态、工具调用、沙箱、流式传输、中断和人工审批。Rust 核心，三层架构：一次性 CLI、可编程 SDK、生产级 app-server。仅靠 Harness 设计就把 GPT-5.6 Sol 在 ARC-AGI-3 上的得分从13.3%提升到38.3%，同时输出 token 减少了约6倍。如果你在构建自己的 AI 代理产品，这是一个值得研究的参考实现。

6、[The Local LLM Stack in 2026: What Actually Works](https://dev.to/thegatewayguy/the-local-llm-stack-in-2026-what-actually-works-ib1)

一篇非常实用的本地大模型技术栈指南。文章梳理了2026年本地 LLM 生态的现状：Ollama 作为入口层（支持 Anthropic Messages API）、llama.cpp 作为底层引擎、LM Studio 作为硬件基准测试工具、Jan 作为离线优先桌面应用。一个意外发现：GitHub Copilot CLI 从2026年4月起支持 Ollama、vLLM 和本地推理，不再需要订阅。入门推荐：Ollama + Jan 是零摩擦的本地方案。

7、[Qwen-UI-Agent](https://github.com/Tongyi-MAI/MAI-UI)——阿里通义的 UI 代理模型

阿里面向移动端和桌面端 UI 自动化的代理模型。27B 参数变体在 AndroidDaily 上得分79%，OSWorld-Verified 79.5%，WebArena 73.6%，ScreenSpot-Pro 81.5%。定位是在能力与可部署性之间取得平衡，适合需要在真实设备上操作的手机、桌面和浏览器代理场景。

8、[Claudette](https://github.com/nicobailon/claudette)——让 Claude 少写废话

一个 prompt 层工具，用于抑制 Claude 的"BuzzFeed 风格"回复。把列表式标题、夸张的副标题和喘不过气的营销语统统干掉，换来更朴实的文字。在 Hacker News 上引发了有趣的讨论：我们到底在多大程度上被 AI 的"表演性写作风格"所影响？

## 精彩言论

1、"限制开源模型不会阻止中国开发出下一个 Kimi。美国公司正在开源系统上构建世界级的专业模型。"
——[David Sacks](https://tradingview.com/news/benzinga:5191bd120094b:0-david-sacks-says-restricting-open-models-won-t-stop-china-from-building-the-next-kimi)，前白宫 AI 和加密货币沙皇，现任总统科技顾问委员会联合主席，评价法律科技公司 Harvey 基于 Kimi K3 训练的 Tenet 模型

2、"智能的成本已经下降了约100倍，产生了'地板效应'——原始模型输出变得几乎免费，价值向上迁移到了编排、集成和品味层面。"
——[开发者社区关于推理经济学的热门文章](https://headlinesbriefing.com/dev/briefing/dev-community/8h/dev-community-8h-20260821-1642-adqbg7s7)，讨论当 AI 输出趋近免费时，价值在哪里重新聚集

3、"随着 token 越来越可以与钱互换，实时流式支付是 Stripe AI 经济基础设施的重要组成部分。"
——[Stripe 官方声明](https://blockonomi.com/stripe-acquires-ai-gateway-openrouter-in-7b-deal-to-power-multi-multi-model-access)，解释为什么一家支付公司要花70亿美元买一个 AI 模型路由平台

4、"AI 辅助的作业提交成绩提高了18%，但随后的考试成绩下降了20%。"
——[关于 AI 与人类注意力的研究](https://headlinesbriefing.com/dev/briefing/dev-community/8h/dev-community-8h-20260821-1642-adqbg7s7)，再次引发"AI 是在帮助学生学习还是在替他们完成作业"的争论

5、"模型是限制因素。如果代理表现得像聊天机器人或者不断在工具调用上失败，那不是框架的问题。"
——[OpenHands 文档](https://dev.to/thegatewayguy/the-local-llm-stack-in-2026-what-actually-works-ib1)，难得诚实的自评。要求至少32K上下文窗口

---

*本文为科技日志系列，参考阮一峰的网络日志风格。文中所有链接均来自原始报道。*
