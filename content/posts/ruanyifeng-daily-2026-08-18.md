---
title: "AI 的价格崩塌：当推理成本趋近于零"
date: 2026-08-18T09:30:23+08:00
tags: ["科技", "互联网", "AI", "开源"]
categories: ["随笔"]
author: "Xu Shan Kun"
---

## AI 的价格崩塌：当推理成本趋近于零

上周，科技行业发生了一件看似平常、实则意义深远的事情：OpenAI 把 GPT-5.6 Luna 的输入价格砍了 80%，从每百万 token 1 美元降到 0.20 美元。同一天，Anthropic 发布了 Claude Opus 5，定价只有前代旗舰的一半。这不是孤立事件，而是一场正在发生的行业地震。

原因很简单：中国开源模型逼的。

### 一个笔记本电脑跑 270 亿参数模型的时代

8 月 14 日，阿里巴巴发布了 Qwen3.8-27B——一个 270 亿参数的多模态模型，使用 Apache 2.0 许可证开源。这不是什么"又一个开源模型"。它在 Hugging Face 上 72 小时内下载量突破 300 万次，Hugging Face 甚至专门做了一个倒计时页面来迎接这次发布。

这个模型的特别之处在于，它可以跑在一台 MacBook Pro 上。4 位量化后的体积只有约 17GB。英国软件工程师 Simon Willison 在 Reddit 上说了一句很精准的话："一个 17GB 的文件能在我家里的机器上做所有这些事情，这简直是个奇迹。"

阿里巴巴公布的基准测试显示，Qwen3.8-27B 在编程和 Agent 任务上的表现达到了 Anthropic 商用模型 Opus 4.6 的水平。更关键的是，它打败了 Meta 刚发布的 Muse Glimmer-30B——后者本来是 Meta 对中国开源模型崛起的回应。

与此同时，阿里巴巴还开源了旗舰模型 Qwen3.8-Max 的权重——一个 2.4 万亿参数的混合专家模型（MoE），每个 token 激活 950 亿参数。这是有史以来开源的最大模型之一。

这些数字意味着什么？意味着模型本身已经不再是壁垒。

### 价格战的传导链条

让我们看看过去两周发生了什么：

7 月底，Moonshot AI 的 Kimi K3 发布，2.8 万亿参数，导致美国芯片股大跌——市场担心中国模型的效率优势会削弱对高端 GPU 的需求。

8 月 13 日，DeepSeek V4 Pro 正式版发布，在 DeepSWE AI 编程 Agent 基准测试上从预览版的 12.8 分飙升到 62.7 分。同时宣布峰谷定价策略。

8 月 14 日，Qwen3.8-27B 和 Qwen3.8-2.4T-A95B 同时开源。

8 月 16 日，OpenAI 把 GPT-5.6 Luna 砍价 80%。

价格下跌的传导链条非常清晰：中国开源模型的性能追上闭源模型 → 开发者和企业开始切换（DoorDash、Airbnb 已经在用更便宜的模型） → 闭源厂商被迫降价 → 收入预期崩塌 → 但基础设施投资还在膨胀。

这就引出了一个根本性矛盾。

### Stripe 花 70 亿美元买了一个"路由器"

8 月 16 日，Bloomberg 报道 Stripe 以超过 70 亿美元的价格收购了 OpenRouter。三个月前，OpenRouter 的 B 轮估值才 13 亿美元。

OpenRouter 做的事情很简单：给开发者一个统一的 API 接口，可以访问 400 多个 AI 模型。它不自己做模型，只是做路由——帮你在 OpenAI、Anthropic、DeepSeek、Qwen 之间做选择。

为什么 Stripe 愿意付 50 倍年化收入的价格？因为 Stripe 看到了一个关键趋势：当模型本身趋于免费，谁控制了流量分配和计费层，谁就控制了 AI 经济的基础设施。

OpenRouter 的年化收入在三个月内从约 5000 万美元涨到 1.4 亿美元。更关键的数据是：美国企业通过 OpenRouter 使用的 token 中，有 46% 来自中国开源模型。路由层的价值，恰恰建立在模型碎片化的基础上。模型越多、价格越分化，路由就越有价值。

Stripe 此前已经收购了 Metronome（AI 计费平台），现在再加上 OpenRouter（模型路由），它已经构建了一个完整的垂直堆栈：计量 → 路由 → 计费 → 支付。

### Anthropic 的 2 万亿美元赌注

在价格崩塌的大背景下，Anthropic 选择此时 IPO 就更加意味深长了。

路透社获得的独家消息显示，Anthropic 向投资者展示的核心数据是：2028 年收入将达到 1900-2000 亿美元。这个数字的前提是，收入从 2025 年底的约 90 亿美元，到 2026 年 5 月的年化 470 亿美元，再到 2028 年的 2000 亿美元——连续翻倍再翻倍。

Q2 2026 收入预计超过 115 亿美元，同比增长 14 倍，公司预计首次实现季度盈利（约 5.59 亿美元）。投行用的是 2028 年前瞻收入的倍数来定价——Palantir 交易在 2026 年预期收入的 53 倍，SpaceX 和 Cloudflare 在 41.6 倍。按这个逻辑，Anthropic 的 2 万亿美元估值大约是 2028 年收入的 10 倍——一个投行"说得出口"的数字。

问题是：在 AI 推理价格以 80% 的速度下跌的环境中，这个增长假设能成立吗？

Dario Amodei 似乎意识到了这个矛盾。他在 X 上发了一篇长文，承认 AI 公司"还没有兑现承诺"，认为公众对 AI 的敌意不在于行业营销问题，而在于一个更深层的信任危机。他呼吁用实际成果——比如真正治愈癌症——来重建信任，而不是靠话术。

这是一次罕见的坦诚。在 IPO 前夜说出"我们还没做到"，要么是极度自信（因为财务数据足够好），要么是极度焦虑（因为外部环境在恶化）。

### 真正的赢家是谁？

回到那个根本性的问题：当推理成本趋近于零时，AI 行业的价值在哪里？

答案正在变得清晰：不在模型本身，而在路由、分发和应用层。

Stripe 收购 OpenRouter 证明了这一点。模型是商品，路由是基础设施。Hugging Face 上 Qwen 系列的衍生模型已经达到 15.1 万个——是 Meta Llama 生态的 2.6 倍。当开源生态足够大，闭源模型的定价权就会被持续侵蚀。

Nvidia 的处境也很有意思。它在 SpaceX 持有价值 210 亿美元的股票，同时组织了一个 5000 亿美元的财团来为客户融资。Jensen Huang 正在用金融手段绑定整个 AI 生态——你不只是在买我的芯片，你还在用我的钱买芯片。当模型价格暴跌，算力需求反而可能增加（杰文斯悖论），但前提是有人愿意为这些算力买单。

对我们普通开发者来说，这是一个前所未有的好时代。Qwen3.8-27B 可以在消费级硬件上运行，DeepSeek V4 Pro 的缓存未命中价格虽然涨了（峰时从 3 元涨到 9 元/百万 token），但绝对价格仍然远低于美国闭源模型。选择比任何时候都多。

AI 的价格崩塌不是灾难，而是成熟。就像当年云计算从"天价"变成"水电煤"一样，AI 推理正在走同样的路。真正有价值的，是在此基础上构建的东西。

## 科技动态

1、Nvidia 持有 SpaceX 价值 210 亿美元股票

SEC 文件显示，Nvidia 持有 SpaceX 约 1.23 亿股，截至 6 月底价值近 210 亿美元。SpaceX 自 6 月 IPO 以来股价大幅下跌，目前这些股票价值约 170 亿美元。这凸显了 Nvidia CEO 黄仁勋利用公司 5.5 万亿美元市值的金融力量，在 AI 行业构建复杂的循环财务关系的策略。Nvidia 过去两年已向 AI 公司承诺超过 1000 亿美元投资，包括 CoreWeave、Thinking Machines 等。这周 Nvidia 还披露了组建超过 5000 亿美元投资者联盟（包括 Apollo、Blackstone、BlackRock、高盛、KKR）来为其客户融资的计划，由 Nvidia 部分担保贷款。
来源：[Ars Technica](https://arstechnica.com/information-technology/2026/08/nvidia-discloses-21b-stake-in-spacex)

2、Anthropic 预计 2028 年收入达 1900-2000 亿美元，IPO 估值或接近 2 万亿

据路透社独家报道，正在筹备 IPO 的 Anthropic 向投资者展示了一项内部预测：2028 年收入将达到 1900-2000 亿美元。公司 Q2 2026 收入预计超过 115 亿美元，同比增长约 14 倍，并预计首次实现季度盈利约 5.59 亿美元。投行采用前瞻收入倍数法——参照 Palantir（53 倍）、SpaceX（41.6 倍）的估值水平，推算出接近 2 万亿美元的 IPO 估值。Anthropic 已于 6 月秘密提交 IPO 申请，最早可能在 2026 年 10 月上市。值得注意的是，Anthropic 的年化收入已超过 OpenAI（后者约 250 亿美元）。
来源：[Reuters via The Next Web](https://thenextweb.com/news/anthropic-ipo-190-200bn-2028-revenue-forecast)

3、macOS Screen Sharing 漏洞升至 9.8 分，已被实际利用

CISA 将 macOS Screen Sharing 漏洞（CVE-2026-65400）的严重性从 7.1 上调至 9.8（满分 10）。荷兰调查人员报告，攻击者通过暴露在互联网上的 Mac 获取 root 权限，部署门罗币挖矿软件。安全公司 Huntress 发现，该漏洞源于 Screen Sharing 使用的安全远程密码（SRP）协议缺陷——Mac 会认为外部用户已登录成功，甚至不需要验证密码。重置或删除 Screen Sharing 密码也无法阻止攻击。受影响的端口是 5900。Apple 已在 macOS Tahoe 26.6.1、Sequoia 15.7.9 和 Sonoma 14.8.9 中修复此漏洞。所有使用 Screen Sharing 的用户应立即更新。
来源：[BitcoinEthereumNews](https://bitcoinethereumnews.com/finance/cisa-rerates-macos-screen-sharing-flaw-to-9-8-after-monero-mining-attacks)

4、Higgsfield 融资 4 亿美元，AI 视频赛道估值新高

AI 视频生成初创公司 Higgsfield 以 54 亿美元估值完成 4 亿美元融资，投资方包括高盛、英特尔、DST Global 和 Liberty Global。公司由 Snap 前高管 Alex Mashrabov 创立，成立仅两年，年化收入从一年前的约 2000 万美元飙升至 7 亿美元。这表明 AI 视频生成正在从实验性技术快速转向企业级应用，也成为继文本和图像之后 AI 商业化的又一战场。
来源：[TechStartups](https://techstartups.com/2026/08/17/top-tech-news-today-august-17-2026-ge-microsoft-nvidia-open-stripe-unitree-more)

5、DeepSeek 宣布峰谷定价策略

DeepSeek 于 8 月 17 日起实施峰谷定价。峰时 DeepSeek V4-Pro 缓存未命中输入价格从每百万 token 3 元涨至 9 元，输出价格从 6 元涨至 27 元。与此同时，DeepSeek V4 Pro 正式版在 DeepSWE 编程 Agent 基准测试上取得 62.7 分（预览版仅 12.8 分），性能大幅提升。这反映出即使是低成本中国模型厂商，在需求高峰期也需要通过价格杠杆来平衡算力分配。
来源：[NewsGlobeNow](https://newsglobenow.com/new416436.html)

## 文章/工具推荐

1、[Stripe 70 亿美元收购 OpenRouter：AI 基础设施的关键一步](https://dev.to/amrree/stripe-just-bought-openrouter-for-7b-and-that-is-the-most-important-ai-story-of-the-week-4kc9)
这篇深度分析解释了 Stripe 为什么愿意付 50 倍年化收入的价格买一个"AI 路由器"。核心论点是：当模型趋于免费，控制路由和计费层就控制了整个 AI 经济。文章还梳理了 Stripe 已有的 Metronome（计费）+ OpenRouter（路由）+ Tempo（链上结算）的完整布局。

2、[Qwen3.8-27B 本地体验报告](https://heise.de/en/news/Trying-out-local-AI-This-is-what-Qwen3-8-27B-can-do-11415348.html)（Heise）
德国老牌科技媒体 Heise 的实测文章，详细记录了在消费级硬件上运行 Qwen3.8-27B 的体验。4 位量化版约 16GB，8 位版约 29.5GB。文章指出在编程和 Agent 任务上，该模型确实接近闭源旗舰水平，但对特定任务的表现还需要独立验证。

3、[Mojo 1.0 发布：AI 系统语言锁定稳定 API](https://techtimes.com/articles/324051/20260812/mojo-hits-10-ai-systems-language-locks-stable-api-ending-three-years-churn.htm)
Mojo 终于在发布三年后达到 1.0 稳定版。这门基于 MLIR 编译器基础设施的语言，承诺同一份内核代码可以编译到 NVIDIA Tensor Core、AMD 矩阵加速器、高通 Hexagon DSP 和 Apple Neural Engine，无需手动移植。对于 AI 工程师和 HPC 开发者来说，1.0 的稳定性承诺是一个里程碑。

4、[GitHub Secure Open Source Fund 第四期：50 个项目的安全经验](https://github.blog/open-source/maintainers/what-50-open-source-projects-taught-us-about-security-in-the-ai-era)
GitHub 投入超过 50 万美元，为 50 个开源项目配对安全专家、工具和资金。核心发现：AI 正在改变开源开发的速度和安全挑战——维护者需要审查不熟悉的贡献、管理新的攻击面。其中一个参与项目 OpenClaw（GitHub 增长最快的开源项目）在项目期间制定了事件响应计划并强化了安全流程。

5、[Dario Amodei 的坦诚诊断：AI 反弹源于数十年的信任崩塌](https://webpronews.com/dario-amodeis-stark-diagnosis-ais-backlash-stems-from-decades-of-eroded-trust)
Anthropic CEO 在 X 上发长文，罕见地承认 AI 公司还没有兑现承诺。他认为公众对 AI 的敌意不是行业营销能解决的，而是更深层的制度信任危机。他呼吁用"真正治愈癌症"来重建信任，同时为差异化监管辩护——减缓前沿实验室、帮助竞争者。

6、[OpenAI ChatGPT 新功能记录你的击键并以明文存储](https://thenextweb.com/news/openais-new-chatgpt-feature-logs-your-keystrokes-and-stores-them-in-plain-text)
OpenAI 在 macOS 上推出了"Computer History"功能，记录点击、击键、键盘快捷键和应用切换，构建可搜索的记忆。问题是：记忆文件以未加密的明文存储，且该功能在欧洲经济区、瑞士和英国不可用。这再次引发了 AI 产品便利性与隐私之间的争论。

7、[x-algorithm：X 平台推荐算法的开源实现](https://alextech.ai/en/news/github-digest-august-13-2026)（GitHub 27k 星）
xAI 开源了 X（原 Twitter）"For You"信息流背后的推荐逻辑，使用 Rust 编写。这是社交媒体平台推荐算法为数不多的公开实现之一，对于理解内容分发机制和研究算法偏见有重要价值。

8、[Anthropic 官方 Skills 仓库达到 168K 星标](https://medium.com/@lssmj2014/the-168k-platform-moment-anthropics-official-skills-sit-between-its-two-biggest-champions-1bfad47241ba)
GitHub trending 8 月 12 日数据显示，Anthropic 的官方 Skills 仓库在 168K 星标的位置——介于 Matt Pocock 的 173K 和 Karpathy 的 155K+ 之间。这意味着机构级项目首次达到了个人品牌级的星标速度，标志着 Agent Skills 生态从个人实验走向平台化。

## 精彩言论

1、"一个 17GB 的文件能在我家里的机器上做所有这些事情，这简直是个奇迹。"
——Simon Willison（英国软件工程师），[Reddit](https://www.reddit.com/r/LocalLLaMA/comments/qwen3827b/)，评论 Qwen3.8-27B 本地运行体验

2、"AI 公司最准确的批评是，它们还没有兑现承诺。只有真正的突破才能赢得公众信任。"
——Dario Amodei（Anthropic CEO），[X 帖子](https://webpronews.com/dario-amodeis-stark-diagnosis-ais-backlash-stems-from-decades-of-eroded-trust)，IPO 前夕罕见坦诚

3、"Stripe 收购了 AI 生态系统在没人愿意自己建造等价基础设施时产生的那个版本的自己。"
——Dev.to 分析文章，[Stripe 70 亿收购 OpenRouter 分析](https://dev.to/amrree/stripe-just-bought-openrouter-for-7b-and-that-is-the-most-important-ai-story-of-the-week-4kc9)

4、"能提供最强开源权重模型的公司，将在这场竞赛中领先。"
——Neil Shah（Counterpoint Research 联合创始人），评论阿里 Qwen 开源策略，[MoneyCheck](https://moneycheck.com/alibaba-baba-stock-rises-as-qwen-ai-model-surpasses-meta-in-open-source-race)

5、"四年大学可能已经超出了这个世界现在需要的程度。"
——Sam Altman（OpenAI CEO），在一次科技实习生峰会上表示两年大学对他来说是"恰好合适的时间"
