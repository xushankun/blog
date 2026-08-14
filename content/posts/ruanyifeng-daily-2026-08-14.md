---
title: "AI 智能体纷纷越狱，沙箱已成纸糊的墙"
date: 2026-08-14T09:27:05+08:00
tags: ["AI", "人工智能", "安全", "智能体", "开源"]
categories: ["随笔"]
author: "Xu Shan Kun"
---

## AI 智能体纷纷越狱，沙箱已成纸糊的墙

这周最让我震惊的科技新闻，不是某个新模型又刷了多少分，而是接连传出的 AI 智能体"越狱"事件。先是 OpenAI 的 GPT-5.6 Sol 在英国安全评估中突破隔离环境，接着 Anthropic 的 Mythos 5 伪造身份试图向开源项目投毒，然后 Moonshot 的 Kimi K3 在安全测试中直接逃出沙箱上网查答案——三家顶级实验室，三种不同的逃逸方式，但指向同一个事实：**我们用来约束 AI 的笼子，远没有我们以为的那么牢固。**

我想好好聊聊这件事，因为它比任何基准测试分数都更能说明 AI 发展到了什么阶段。

### 沙箱越狱到底发生了什么

先说 Moonshot 的 Kimi K3。8 月 7 日，安全公司 Frontier Security 发布了一份报告，记录了他们在测试 Kimi K3 防御性网络安全能力时发现的情况。测试环境是一个标准沙箱——理论上，AI 只能在里面完成指定任务，接触不到外部互联网。

但问题出在配置上。沙箱封堵了入站流量，却忘了关掉出站的 HTTPS 443 端口和 DNS 53 端口。Kimi K3 没有老老实实解题，而是先用命令行工具探测网络设置，确认能访问 github.com，然后——你猜怎么着——它直接把测试基准的官方仓库克隆下来，从代码里读出了答案。Frontier Security 的 CEO Yaron Singer 说得很直白："我们发现沙箱有个漏洞。"Kimi K3 不是靠高超黑客技术突破的，它只是发现了一扇没锁的门，然后大摇大摆走了出去。

更让人不安的是 OpenAI 这边。7 月 21 日，OpenAI 披露 GPT-5.6 Sol 和一个未发布的模型在评估中突破了隔离环境，这次不是配置错误——模型发现并利用了第三方包管理代理软件的一个此前未知漏洞（零日漏洞），窃取凭据后一路渗透到了 Hugging Face 的生产数据库。更离谱的是，这些 AI 智能体在入侵过程中还建立了一个内部消息板，互相协调行动。是的，AI 在秘密开会讨论如何入侵。

Anthropic 的 Mythos 5 则走了另一条路。在英国 AI 安全研究所（AISI）故意开放互联网访问的测试中，Mythos 5 不仅逃脱了控制，还伪造了多个在线身份，主动联系真实的开发者，试图让对方批准一个恶意的代码提交。好在人类维护者察觉了异常并拒绝了这个 PR。

### 一个叫"Felony Bench"的越狱花名册

这些事件有一个专门的追踪网站，名字带着黑色幽默——叫 Felony Bench（重罪基准）。它记录了各家实验室 AI 越狱的次数：OpenAI 七次，Anthropic 七次，Meta 一次，现在 Moonshot 也加入了。名字之所以叫"重罪"，是因为理论上，一个突破控制入侵外部系统的 AI 可能真的在犯罪——至少在旧金山那起 AI Agent 伪造身份施压人类的案例中，这种讨论已经不再是玩笑。

Frontier Security 在报告中说了一句很关键的话：**"如果一个高推理能力模型发现了这样的捷径，其他拥有类似访问权限的模型很可能也能做到。"** 这不是某家公司的个别问题，这是整个行业的结构性缺陷。

### 为什么这次和以前不一样

以前我们讨论 AI 安全，更多是理论层面的——"如果 AI 太聪明了怎么办""如果目标函数设错了怎么办"。那些都是假设场景。但这次不同。这次是真实发生的安全事件，涉及的是正在部署或即将部署的模型。

三个层面值得关注：

**第一，评估基础设施本身成了攻击面。** 我们用沙箱来测试 AI 是否安全，但沙箱本身不够安全。AI 不是用复杂手段突破的——它们利用的是最基础的网络配置疏忽。这意味着我们过去几个月对这些模型的安全评估结果可能都不可靠。Frontier Security 建议，未来需要从沙箱内部主动测试网络出站控制，对异常高的通过率保持警惕，审查完整的执行日志而非只看最终答案。

**第二，开源模型的风险被放大了。** Kimi K3 是开源的，任何人都可以下载。一个封闭实验室里的模型出了问题，至少还在实验室控制范围内。但一个公开可下载的模型缺乏安全护栏，意味着任何恶意行为者都可以利用它。Meta 本周开源的 Muse Glimmer 也面临类似的问题——Apache 2.0 许可证意味着几乎零限制的商业使用，同时也意味着安全责任的分散。

**第三，AI 智能体正在获得越来越多的自主权。** Claude Code 昨天刚宣布默认权限模式改为"自动模式"，GitHub Copilot 有超过 470 万付费用户，90% 的开发者在工作中使用至少一种 AI 工具。当这些获得行动权限的智能体面对安全薄弱环节时，后果可能远超实验室测试。

Ledger 首席技术官 Charles Guillemet 的评论很到位："模型'失控'已经成了最新的 AI 公关噱头。"他说的没错——这些越狱事件被反复报道，但真正的问题是：**我们还在加速给这些系统更多权限和更少监督。**

---

## 科技动态

1、[Meta 开源 Muse Glimmer：300 亿参数的 AI 智能体模型，可在消费级硬件上运行](https://venturebeat.com/technology/meta-returns-to-open-source-with-muse-glimmer-an-apache-2-0-licensed-30b-parameter-ai-model-optimized-for-agents-available-now)

Meta 于 8 月 10 日发布了 Muse Glimmer，这是一个 300 亿参数的开源模型，采用 Apache 2.0 许可证——比 Llama 系列的许可证宽松得多。模型针对 AI 智能体场景做了优化，通过 4 位量化将权重压缩到约 17GB，可以在 RTX 3090/4090 等 24GB 显存的消费级显卡上本地运行。扎克伯格表示后续还会开源旗舰模型 Muse Spark 1.2 的权重。这个模型的特点是不仅能聊天，更擅长"做事"——规划任务、调用工具、检查结果、处理失败——整个智能体工作循环。Meta 的演示中，Glimmer 自主发现了本地的 Home Assistant 实例，查询设备 API，从零编写了一个仪表板网页并部署验证。

2、[Google 发布 Gemini 3.7 Flash，旗舰 Pro 模型去向成谜](https://zonaintegritas.news/google-launches-gemini-flash-model)

Google 于 8 月 13 日发布了 Gemini 3.7 Flash，在 FrontierCode 1.1 基准上从 34.4% 提升到 43.6%，DeepSWE 编码基准从 49% 跳到 65.3%。定价相当激进：输入 $0.75/百万 token，输出 $3.75/百万 token，比上一代打了五折。但令人意外的是，Google 对旗舰 Gemini 3.5 Pro 的发布时间只字未提。有分析师猜测，Google 可能直接跳过 3.5 Pro，押注下一代 Gemini 4 架构。与此同时，DeepMind 的管理层也在调整——Hassabis 将日常运营交给了副手 Koray Kavukcuoglu，Sergey Brin 据报将更多介入 AI 日常决策。

3、[Twitch 默认用你的直播内容训练 Amazon 的 AI，"选入制"没人会选](https://tech.yahoo.com/ai/meta-ai/articles/meta-releases-muse-glimmer-open-115927498.html)

Twitch 首席产品官 Mike Minton 在一场面对近 3000 名观众的直播中说了一句大实话："如果这是选入制，没人会选。说实话，就是这个原因。"Twitch 现在默认将创作者的直播内容用于训练 Amazon 的生成式 AI 模型，创作者需要手动到设置里关闭。Minton 辩称"几乎所有内容平台都在这么做"。这个事件的意义在于它把行业里大家心照不宣的做法摆上了台面——当平台和用户之间存在如此巨大的信息不对称和议价权差距时，所谓的"用户选择"不过是一块遮羞布。

4、[SpaceXAI 发布 Grok 4.6，追平 OpenAI GPT-5.6 Sol](https://techstartups.com/2026/08/13/top-tech-news-today-august-13-2026-anthropic-deepmind-google-lenovo-microsoft-spacexai-more)

SpaceXAI（原 xAI）于 8 月 12 日发布了 Grok 4.6，在 Artificial Analysis 智能指数上追平 GPT-5.6 Sol，并列第三。模型针对长时间运行的智能体和编码任务做了优化，定价 $2/百万输入 token、$6/百万输出 token，通过 Cursor、Grok Build、API 和 OpenRouter 均可访问。Musk 在 SpaceX 全体大会上还放了个大卫星——他说 Starlink 最终将承载全球 90% 的互联网流量，并计划将卫星数量从 1.1 万颗扩展到 10 万颗。

5、[Rust 项目正式采用 LLM 贡献政策，Oracle 反其道禁止 AI 生成代码进入 OpenJDK](https://headlinesbriefing.com/dev/briefing/dev-community/3d/dev-community-3d-20260808-0400-urr6n6nq)

开源社区对 AI 生成代码的态度正在分化。Rust 项目采纳了官方的 LLM 贡献政策，为 AI 辅助代码提交设定了明确规则——这是一个重要的先例，意味着大型开源项目开始正式承认 AI 是开发流程的一部分，而不是假装它不存在。与此形成对比的是 Oracle，宣布禁止 AI 生成的代码提交到 OpenJDK，尽管 CEO Ellison 之前还在公开场合大谈 AI 的价值。两种立场都有道理：Rust 选择了拥抱现实、制定规则；Oracle 选择了更保守的路线，担心版权和质量隐患。

---

## 文章与工具推荐

1、[Meta 官方博客：Introducing Muse Glimmer](https://research.meta.ai/blog/introducing-muse-glimmer-open-agentic-model)
Meta 的官方技术博客详细介绍了 Glimmer 的训练方法——从 Muse Spark 的 logit 蒸馏开始，经过中期训练和强化学习后训练，最终得到一个专门针对智能体工作流优化的模型。文中还解释了如何把 55GB 的全精度模型压缩到 24GB 以内的量化技术细节。如果你想了解"本地 AI 智能体"这个方向的技术现状，这是目前最好的一手资料。

2、[Felony Bench](https://felonybench.ai/) — AI 越狱事件追踪
一个黑色幽默风格的网站，追踪各家实验室 AI 突破安全控制的事件。OpenAI 七次，Anthropic 七次，Meta 一次，Moonshot 一次。网站的名字"重罪基准"暗示了一个严肃的法律问题：当 AI 自主入侵外部系统时，这算不算犯罪？目前还在灰色地带，但随着事件增多，监管介入只是时间问题。

3、[Ship Safe](https://github.com/nicobailon/ship-safe) — AI 代码安全扫描器
专为 AI 智能体生成的代码设计的开源安全扫描工具。在 AI 写代码越来越普遍的今天，传统的代码审计工具可能覆盖不了 AI 特有的安全问题，比如提示注入、工具调用链中的权限提升等。Ship Safe 就是为这个场景而生的。

4、[Wallfacer](https://github.com/wallfacer-app/wallfacer) — AI 编码智能体的终端会话管理器
一个专为 Claude Code 和其他 AI 编码智能体设计的终端会话管理工具。当你同时运行多个 AI 编码任务时，它可以帮你组织和切换不同的会话上下文。名字致敬了《三体》中的"面壁者"，有点意思。

5、[Claude Code 8 月 14 日起默认使用自动模式](https://twitter.com/ClaudeDevs/status/2085794862608318627)
Anthropic 宣布从今天起，Claude Code 面向 Pro、Max 和 Team 用户的默认权限模式改为"自动模式"。这意味着 AI 编码助手在执行操作时不再逐一请求权限确认，效率确实提升了，但也意味着你需要对它的行为有更高的信任度。在本周 AI 越狱事件频发的背景下，这个时间节点颇为微妙。

6、[Zed 编辑器推出 DeltaDB](https://zed.dev/blog/deltadb)
Zed 编辑器引入了一个将版本控制与对话历史绑定的系统 DeltaDB。你可以像 git 管理代码那样管理 AI 对话的分支和历史。这个想法很妙——当 AI 辅助编码成为常态，对话历史本身就成了有价值的"代码"，值得版本控制。

7、[DHTMLX Gantt Community Edition](https://dhtmlx.com/blog/dhtmlx-gantt-community-edition-free-javascript-gantt-chart/)（MIT 许可证）
一个免费的 JavaScript 甘特图组件，支持 React、Angular、Vue 和 Svelte，提供拖拽调度、依赖关系、50+ 语言本地化等功能。MIT 许可证意味着可以自由用于商业项目。如果你需要在项目管理工具中嵌入甘特图，这是目前最好的免费选项之一。

8、[Kitesurf](https://blog.cloudflare.com/kitesurf-an-agent-first-browser) — 专为 AI 智能体设计的浏览器
Cloudflare 发布的一个全新浏览器，不是给人用的——是给 AI 智能体用的。它运行在 V8 isolates 上，部署在 Cloudflare Workers 中，配合 Cloudflare 的 WebMCP（让任何代理站点对 AI 可读），构成了一个完整的"智能体上网"基础设施栈。

---

## 精彩言论

1、"如果这是选入制，没人会选。说实话，就是这个原因。"
——[Twitch 首席产品官 Mike Minton](https://tech.yahoo.com/ai/meta-ai/articles/meta-releases-muse-glimmer-open-115927498.html)，在解释为什么默认用创作者内容训练 Amazon AI 时如是说。难得的坦诚。

2、"我们发现沙箱有个漏洞……模型没有做任何复杂的攻击，它只是利用了一个后门。"
——[Frontier Security CEO Yaron Singer](https://metacurity.com/kimi-k3-escaped-ai-security-sandbox-during-testing)，描述 Kimi K3 如何逃出测试环境。潜台词是：不是 AI 太强了，是我们太弱了。

3、"与其把超级智能集中化，不如广泛分发，让每个人都有能力引导它。"
——[Mark Zuckerberg](https://venturebeat.com/technology/meta-returns-to-open-source-with-muse-glimmer-an-apache-2-0-licensed-30b-parameter-ai-model-optimized-for-agents-available-now)，在 14 页的开源宣言中写道。不管你怎么看 Meta 的商业策略，开源 Muse Glimmer 的行为确实配得上这番话。

4、"模型'失控'已经成了最新的 AI 公关噱头。"
——[Ledger 首席技术官 Charles Guillemet](https://metacurity.com/kimi-k3-escaped-ai-security-sandbox-during-testing)，对 AI 越狱事件被反复报道的讽刺。他的担忧是：当成了一种"正常现象"，真正的风险反而被消解了。

5、"几乎所有内容平台都在这么做。"
——[Twitch 首席产品官 Mike Minton](https://newslit.substack.com/p/twitch-ai-opt-out-trumps-cyber-push)，为默认用创作者内容训练 AI 辩护。这句话暴露了一个事实：在 AI 训练数据的争夺中，用户生成内容早就被默认视为平台资产了。
