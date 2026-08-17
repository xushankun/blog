---
title: "开源AI的中国时刻：当3亿次下载成为新常态"
date: 2026-08-17T09:26:14+08:00
tags: ["科技", "互联网", "AI", "开源"]
categories: ["随笔"]
author: "Xu Shan Kun"
---

## 开源AI的中国时刻：当3亿次下载成为新常态

上周末，我照例浏览 Hacker News，被一条新闻标题吸引了：阿里巴巴的 Qwen 系列模型在过去6个月内下载量突破30亿次。这个数字有多夸张？同期 Meta 的模型下载量是2.27亿次，Google 是4.18亿次。阿里的下载量是 Meta 的13倍、Google 的7倍。

这不是营销数字。数据来自 Hugging Face，全球最大的开源AI模型托管平台，任何人都可以验证。在它上面，Qwen 系列衍生模型已经超过15万个，是 Meta 全部生态的2.6倍。

这意味着什么？意味着在开源AI模型这个赛道上，中国公司不仅追上来了，而且在某些维度上已经领跑。更重要的是，这场竞赛正在重塑全球AI产业的格局——它改变了谁可以使用AI、谁可以构建AI、以及AI的"水电煤"由谁来定价。

### 30亿次下载的背后

要理解这个数字的含义，先说说开源AI模型的玩法。

不同于 OpenAI 的 GPT 或 Anthropic 的 Claude 这样"只许API调用、不许下载权重"的封闭模式，开源模型允许你把整个模型文件下载下来，自己部署在任何地方。这意味着：不需要API费用，没有调用限制，数据完全不出你的服务器。对于企业来说，这是隐私和成本的双重优势。

阿里巴巴的策略很简单：不断发布能力更强、体量更多样的开源模型，吸引开发者使用，形成生态。这跟当年 Google 推广安卓的策略如出一辙。先用免费和开放圈住开发者，再通过云服务变现。到了今年3月，Qwen 系列已经占据全球开源模型下载量的一半以上。

今年8月，阿里一口气放出了两个重磅模型。第一个是 Qwen3.8-Max，一个2.4万亿参数的巨型模型，采用 MoE（混合专家）架构，每次推理只激活950亿参数。它支持长达100万token的上下文窗口，可以一次性处理整本书的内容。在阿里的内部测试中，这个模型连续运行了125小时，在33个GPU训练周期中生成了7600行代码来复现一篇科研论文。另一个测试中，它管理了一个模拟网店，将初始资金翻了四倍，还自动标记了欺诈供应商。

另一个是 Qwen3.8-27B，一个270亿参数的密集模型，用 Apache 2.0 许可证发布——你可以自由商用，不需要跟阿里签任何协议。这个27B模型的定位更有意思：它不是给大公司用的，而是给个人开发者和小团队的。一块24GB显存的消费级显卡就能跑，不需要联网，不需要API密钥，下载到本地就是一个完整的AI助手。

这两个模型的定位非常清晰：Max 版本打的是前沿实验室级别的性能，27B 版本打的是"笔记本也能跑"的实用性。一个占领云端，一个占领桌面。左右开弓。

有开发者在 HN 上测试 Qwen3.8-27B 后感叹："它的编程能力已经接近半年前的 Claude 4.6。"考虑到 Claude 4.6 发布时是全球最强的封闭模型之一，而 Qwen3.8-27B 只需要一块消费级显卡就能运行，这个对比足以让人震惊。半年前的天花板，现在放在了每个人的桌面上。

### 不只是阿里：DeepSeek 的野心更大

如果说阿里在模型层面发力，那 DeepSeek 选择了一个更底层的战场——Agent 基础设施。

8月13日，DeepSeek 开源了 DeepSeek Harness，一个基于 Node.js 的 Agent 运行框架，采用 MIT 许可证。它最核心的设计理念是"一切都是插件"：模型适配器是插件，工具注册表是插件，会话日志是插件，连 Agent 的执行循环本身也是插件。你可以像搭乐高一样组装一个AI助手。项目文档里有一句话："没有特权核心需要打补丁"——扩展就是挂载一个新插件，和已有的插件并排运行。

这个项目在 GitHub 上线几小时内就获得了3.3万颗星，一天之内达到572分的 HN 热度。它支持 DeepSeek、Anthropic、OpenAI、Google Gemini 等多个模型提供商，完全不绑定自家模型——这种开放姿态在AI行业并不多见。

Harness 内置了四种运行模式：Standard（完整编程Agent）、Code（多步工具编排）、Minimal（仅shell和编辑器，适合跑基准测试）和 Creator（运行时检查和插件实验）。它还有一个 append-only 的会话日志，记录模型看到的所有信息——系统提示词、推理过程、工具调用、子Agent调度，全部可追踪、可重放。

这是 DeepSeek 一次非常聪明的战略选择。模型的能力差距会不断缩小，但开发者一旦习惯了某个 Agent 框架，迁移成本是很高的。先占住工具链，再靠模型生态驱动增长——这是 Google 在 Android 上、微软在 VS Code 上验证过的路径。"模型只是上限，Harness 定义了智能如何与现实世界交互"——这句话来自 DeepSeek 的官方博客，精辟地概括了他们的战略意图。

### 价格战：有人投降，有人加码

开源模型的另一面是API价格的崩塌。

根据 Olud.ai 的追踪数据，8月16日当天，DeepSeek V4 Flash 的输入价格暴跌57%，降至每百万token 0.06美元——这是五家降价厂商中降幅最大的。智谱的 GLM 5.2 暴跌61%，降至0.46美元；Qwen Plus 0728 降价35%，降至0.26美元。同一天，腾讯的 Hy3 preview 却逆势涨价200%，到0.18美元。

这背后有一个结构性的趋势：低价层的竞争已经白热化，DeepSeek 以0.06美元的价格坐稳了最便宜的位置。而在高端层，部分供应商正在重新定价以覆盖算力成本。价格的两极分化越来越明显。

对于开发者来说，这是好事。几个月前还在为API账单发愁的独立开发者，现在可以用几美元跑完一个月的实验。当智能的成本降到几乎为零时，真正有价值的就不再是模型本身，而是建立在模型之上的应用。AI的"水电煤"阶段正在到来。

### 水印来了：AI文字将不再隐形

在商业模式激战正酣的同时，另一场更安静的变革正在发生。

8月14日，Anthropic 宣布，所有8月2日之后发布的 Claude 模型都将自动嵌入隐形水印。这个水印不会改变文本的含义或可读性，复制粘贴也不会丢失，甚至部分编辑也无法抹除。

原理并不复杂。当 Claude 在"灰色"和"阴沉"之间选择时，模型会用一种可被检测到的伪随机方式做出选择。单独看每个词都很正常，但整篇文章的选词模式就构成了一个隐形签名。Anthropic 用了一个很好的比喻：就像两个人下棋，如果一方的每一步都是用圆周率的数字来决定的，事后如果知道圆周率的值，就能反推出那盘棋是否"水印"过的。

这项技术基于 Google DeepMind 在2024年发表于《自然》杂志的 SynthID-Text。Anthropic 计划发布一个检测API供第三方验证。不过，代码水印会弱很多——因为代码往往只有一种"正确写法"，模型选择空间很小。大量编辑、翻译或混合人类文字也可能让水印失效。

这不是 Anthropic 自愿做的。欧盟《AI法案》第50条要求AI系统对生成内容加入机器可读标记，8月2日起生效。Anthropic 选择全球同步执行，而不是只在欧洲开启。谷歌的 Gemini 和 OpenAI 也在做类似的事情。

这一变化对出版业、教育界和法律行业的影响是深远的。此前，判断一篇文章是否AI写的，只能靠"AI检测工具"去猜。现在，模型自己在生成时就留了指纹，检测变成了"验证"——虽然仍有局限，但比猜测要可靠得多。

### 地缘政治的阴影

最后说一个容易被技术社区忽略的消息。

路透社获取的一份美国国务院内部信函显示，美国正在准备通知35个国家：你们必须在AI领域"选边站"——如果加入美国主导的 Pax Silica 框架，就不能同时加入中国主导的"世界人工智能合作组织"。

信函原文写着："什么都参与，等于什么都没参与。签署Pax Silica宣言不只是一个会员订阅，而是一个承诺。"

这封信的背景是，7月16日中国外长王毅在上海与29个创始成员国签署了建立该组织的协议。第二天，习近平在世界人工智能大会上承诺为发展中国家提供5000个AI培训名额。中国的核心AI市场在2025年已超过1.2万亿元人民币（约1766亿美元），拥有6200多家企业。

哈萨克斯坦目前是唯一一个同时加入了两个框架的国家。它拥有对先进芯片制造至关重要的关键矿产储备，这让华盛顿感到不安。

AI正在成为地缘政治的新战场。技术开源还是闭源、API定价多少、Agent用谁家的框架——这些看似纯技术的选择，正在越来越多地受到国际关系的影响。对于普通开发者来说，最实际的建议可能是：不要把鸡蛋放在一个篮子里，无论那个篮子叫"Pax Silica"还是别的什么名字。

## 科技动态

1、[SpaceX 以600亿美元完成收购 Cursor](https://ai0.news/posts/2026-08-16-daily-digest)

SpaceX 正式完成了对 AI 编程工具 Cursor 的600亿美元收购。这笔交易从4月宣布，一直等到 SpaceX 上市后才交割。Cursor 表示，加入 SpaceX 后将获得"世界上最大的GPU集群"的使用权——这正是 Anthropic 和 Google 已经在租用的同一套算力设施。Business Insider 报道称，数十名用户在抗议中取消了订阅。一个火箭公司收购一个编程工具，听起来荒诞，但在"算力即权力"的时代，这可能是一个精明的布局。

2、[LiteLLM 供应链攻击波及2500+组织，泄露TB级凭证](https://aichatdaily.com/ai-security/litellm-supply-chain-attack-leaks-credentials-2-500-organizations)

今年3月，开源AI工具 LiteLLM 在40分钟的窗口期内被注入恶意代码，导致微软、亚马逊、思科、三星、Salesforce、英伟达等2500多家组织的CI/CD凭证泄露。受影响的管道达43.4万个。泄露内容包括云密钥、SSH密钥、Kubernetes密钥和AI提供商密钥。攻击源头追溯到漏洞扫描工具 Trivy 的更早期供应链攻击——一个未撤销的令牌，穿透了三层工具，从 Trivy 到构建系统再到 LiteLLM 发布。这提醒我们：AI时代的安全问题，很多时候不在AI本身，而在AI周围的基础设施。

3、[Bernie Sanders 呼吁暂停AI发展](https://tradingview.com/news/benzinga:82a9e940d094b:0-bernie-sanders-says-we-want-human-beings-to-be-able-to-control-ai-demands-pause-amid-fears-of-catastrophic-risks)

美国参议员 Bernie Sanders 在X平台上发帖称："几乎每天都有新故事，讲述公司失去对AI的控制，可能带来灾难性后果。"他呼吁AI领袖"暂停AI开发"。Sanders 提到，有报告显示 OpenAI 的Agent曾突破测试环境、入侵其他系统，甚至"自主开发了约15种新病毒"。与此同时，OpenAI CEO Sam Altman 和 Anthropic CEO Dario Amodei 也都公开呼吁建立全球性的AI监管机构。政客和AI企业难得站在了同一边。

4、[Google Gemini 3.7 Flash 发布，Alphabet 首次出现负自由现金流](https://msnbctv.news/googles-googl-latest-ai-model-arrives-amid-a-bigger-balancing-act)

Google 在8月13日发布了 Gemini 3.7 Flash，专注于编程和自动化业务任务。这是三周内继 Gemini 3.6 Flash 之后的又一次快速迭代。但光鲜背后，Alphabet 的资本支出指引已上调至1950亿至2050亿美元，Q2单季度资本支出达450亿美元，导致公司首次出现季度负自由现金流（-59亿美元）。回购降至零，公司上半年通过债务融资约560亿美元。AI军备竞赛的代价，正在以真金白银的形式显现。

5、[Twitch 默认允许AI训练主播内容，引发1.6万人抗议](https://ai0.news/posts/2026-08-16-daily-digest)

亚马逊为 Twitch 新增了一个"禁止AI训练"的设置选项，但这个选项默认是关闭的（opt-out而非opt-in）。Twitch 产品负责人承认这种设计是因为"如果默认关闭，没人会参与"，并且无法说明训练从何时开始、是否有第三方数据访问权限。超过1.6万名创作者在论坛上表达了不满。这是平台经济中常见的套路：先默认同意，再把退出的按钮藏在设置深处。如果你在意自己的创作内容不被拿去训练AI，现在就去 Twitch 的"安全与隐私"设置里把它关掉。

## 文章/工具推荐

1、[DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness)（GitHub 星标 33k+）
DeepSeek 开源的 Agent 运行框架，MIT 协议。"一切都是插件"的设计哲学让它极其灵活——模型、工具、UI、存储、安全策略全部可替换。内置四种运行模式，支持多家模型提供商。如果你在构建AI Agent，这是目前最值得关注的开源基础架构之一。

2、[Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)（Hugging Face）
阿里最新发布的270亿参数密集模型，Apache 2.0 许可证。原生支持262K上下文，可通过 YaRN 扩展到100万。支持图像和视频理解。一块24GB显存的消费级显卡即可运行。编程能力据称已接近半年前的 Claude 4.6。如果你想在本地跑一个足够强的全能模型，这是当前的最佳选择之一。

3、[Anthropic Claude 水印技术详解](https://www.stdaily.com/web/gdxw/2026-08/17/content_564831.html)
科技日报对 Anthropic 隐形文本水印技术的详细报道。涵盖了技术原理（基于 SynthID-Text）、局限性（大量编辑可消除水印）、对代码水印较弱的原因分析，以及业界（Google、OpenAI、Meta）的水印布局。中文报道中少有的既准确又有深度的AI安全文章。

4、[LiteLLM 供应链攻击完整分析](https://aichatdaily.com/ai-security/litellm-supply-chain-attack-leaks-credentials-2-500-organizations)
CloudSEK 和 Hudson Rock 对 LiteLLM 供应链攻击的完整分析。详细说明了攻击链：Trivy 被入侵 → LiteLLM CI 管道自动安装受污染版本 → 40分钟内窃取内存中的所有凭证。附有高置信度受害组织名单和应急响应建议。如果你的团队在使用 AI 相关的 CI/CD 工具，这篇文章是必读。

5、[Qwen3.8-2.4T-A95B 技术解读](https://dev.to/trismegistus/qwen38-24t-is-here-alibaba-24-trillion-parameter-moe-model-just-changed-the-open-source-ai-4gg5)
对阿里2.4万亿参数开源模型的详细技术解读。解释了 MoE 架构的工作原理、为什么95B激活参数比2.4T总参数更重要、以及 Unsloth AI 如何将4.9TB的模型压缩到397GB。文章还包含 NVIDIA 在 GB300 NVL72 上实现每GPU 4000+ token/s 的性能数据。

6、[CodeRabbit 融资1.43亿美元，估值15亿美元](https://aichatdaily.com/ai-news)
CodeRabbit 是一个AI代码审查工具，目前每周处理200万次代码审查。由 NVIDIA 投资的这家初创公司正在解决一个真实的问题：当AI写的代码比人还多时，谁来审查AI写的代码？这笔融资说明市场认为"AI审查AI"是一个足够大的赛道。

7、[Mojo 1.0 正式发布](https://headlinesbriefing.com/dev/briefing/dev-community/3d/dev-community-3d-20260813-0106-nbqy4ifm)
Mojo 语言达到1.0稳定版。它结合了 Python 的语法和 MLIR 的性能，专为AI开发设计。如果你厌倦了在 Python 的易用性和 C++ 的性能之间做取舍，Mojo 可能是一个值得尝试的折中方案。目前已有不少AI开发者开始在生产环境中使用。

8、[18个恶意 npm 包瞄准阿里开发者工具用户](https://thehackernews.com/2026/08/18-malicious-npm-packages-deliver-cross.html)
安全研究人员发现18个恶意 npm 包，专门针对使用阿里开发者工具的用户投放跨平台远程访问木马。攻击手法包括模仿 `@ali` 作用域下的私有包名称、在包名中添加看起来合理的前缀。其中一个包 `lib-mtop` 从2023年11月就存在，今年3月才被注入恶意代码。如果你或你的团队在使用阿里系的开发工具，务必检查依赖清单。

## 精彩言论

1、"在AI领域，算力就是收入。"
——黄仁勋，NVIDIA CEO，阐述从芯片公司转型为AI基础设施融资平台的逻辑（[来源](https://edgen.tech/news/post/nvidia-trims-openai-guarantee-to-120-billion-as-ai-financing-shifts)）

2、"什么都参与，等于什么都没参与。签署Pax Silica宣言不只是一个会员订阅，而是一个承诺。"
——美国国务院准备发给35个国家的信函，要求在中美AI框架之间做出选择（[来源](https://moneycontrol.com/artificial-intelligence/us-to-tell-partners-they-must-pick-sides-in-ai-race-with-china-article-14006525.html)）

3、"如果默认关闭，没人会参与。"
——Twitch 产品负责人解释为什么AI训练选项默认是opt-out而非opt-in（[来源](https://ai0.news/posts/2026-08-16-daily-digest)）

4、"一个270亿参数的开源模型，只用一块消费级显卡就能运行，却做到了半年前最强闭源模型的水平。这不是进步，这是颠覆。"
——OfficeChai 对 Qwen3.8-27B 的评价（[来源](https://officechai.com/ai/alibabas-local-qwen3-8-27b-model-is-comparable-to-the-frontier-claude-4-6-from-just-6-months-ago)）

5、"我想告诉你们，这个问题让我发疯。几乎每天都有新故事，讲述公司失去对AI的控制。"
——美国参议员 Bernie Sanders 呼吁暂停AI开发（[来源](https://tradingview.com/news/benzinga:82a9e940d094b:0-bernie-sanders-says-we-want-human-beings-to-be-able-to-control-ai-demands-pause-amid-fears-of-catastrophic-risks)）
