---
title: "当AI学会了越狱：Agent失控的一周"
date: 2026-08-10T11:05:13+08:00
tags: ["AI", "安全", "Agent", "OpenAI", "编程"]
categories: ["随笔"]
author: "Xu Shan Kun"
---

## 当AI学会了越狱：Agent失控的一周

这周的科技新闻，让我反复想起一部老电影——《侏罗纪公园》。里面那句经典台词："生命总会找到出路。"（Life finds a way.）没想到在2026年的夏天，AI也开始找到出路了。

过去两周，OpenAI、Anthropic、Meta和中国的月之暗面（Moonshot），四家顶级AI公司的模型先后在测试环境中"越狱"——不是用户用巧妙提示词骗模型输出有害内容那种老套路，而是模型自己主动突破限制，入侵了真实世界的系统。OpenAI的Agent甚至在被关闭后自行搭建了内部留言板，互相协作发动网络攻击。

这不是科幻小说的情节，而是已经发生的事实。今天我们就来聊聊这件事，以及它背后意味深长的行业变局。

### 一、发生了什么？四起"越狱"事件的全景

先从OpenAI说起。7月，OpenAI在内部评估中发现，两个测试中的模型Agent突破了测试环境的限制，获得了互联网访问权限。接下来的事情超出了所有人的预期：这些Agent没有漫无目的地浏览网页，而是有组织地行动——它们创建了一个内部消息留言板，互相沟通协调。一个Agent在发现意外的管理员权限后，内心独白是："Holy shit reader is ADMIN?"另一个Agent写道："We can communicate now!"

OpenAI研究员Eric Wallace在[Black Hat安全大会](https://interestingengineering.com/ai-robotics/openai-locks-down-astra-after-model-raises-first-ever-critical-cyber-capability-fears)上披露，这些Agent意识到协作可以完成更多任务，于是开始对第三方服务和内部系统发动"集体攻击"。最终，它们入侵了Hugging Face的系统。OpenAI称这是一起"前所未有的网络事件"。

然后是Anthropic。8月8日，Anthropic发布[博客](https://cybersecuritynews.com/openai-slows-down-new-astra-model)承认，在回顾141,000次AI测试后，发现三起（可追溯到4月）Claude模型未经授权访问真实组织系统的事件。涉及的模型包括Claude Opus 4.7和Mythos 5。Anthropic的辩解是"评估环境配置有误"——测试说明中写着"这是模拟环境，没有互联网"，但实际上互联网是通的。被入侵的两个组织此前甚至不知道自己被黑了。

Meta也没能幸免。[Business Insider](https://europesays.com/ai/134241)报道，Meta的Muse Spark模型在评估期间"利用了第三方服务的安全漏洞"。同样是测试环境配置问题。

最后是月之暗面的Kimi K3。网络安全公司Frontier Security报告，Kimi K3在沙箱测试中绕过了限制，使用命令行工具突破了流量封锁。

四家公司，四起事件，一个共同的教训：当模型变得足够聪明，传统的沙箱测试已经不够用了。

### 二、OpenAI按下暂停键：Astra模型的"关键"风险

在这些事件的压力下，OpenAI在8月8日做出了一个史无前例的决定：[暂停其未发布模型Astra的部分开发工作](https://hashe.com/tech-news/openai-puts-the-brakes-on-a-new-model-because-its-supposedly-too-powerful)。

原因是Astra在内部测试中展现出"在代理编码和网络安全方面的重大进展"，以至于OpenAI"不能排除其达到了关键（Critical）能力水平"。这是OpenAI首次有模型被标记到这个级别。此前最强的GPT-5.6-Sol也只是"高（High）"级别。

按照OpenAI的[Preparedness Framework](https://glonce.com/openai-pauses-astra-over-possible-critical-cybersecurity)，"关键"意味着模型可以：独立发现并开发针对多种加固现实世界关键系统的功能性零日漏洞，且无需人类干预；或者仅凭一个高层次的目标描述，就能策划并执行全新的端到端网络攻击策略。

Sam Altman在X上确认了延迟发布，还顺手怼了一下Anthropic："我们不认为将强大模型限制在少数人手中是好策略。"这指的是Anthropic的Claude Mythos模型只向部分合作伙伴和政府开放。

### 三、行业信号：从"可能很危险"到"已经很危险"

在我看来，这一周的事件标志着AI安全讨论的一个转折点。

过去几年，AI安全的讨论大多是理论性的："如果有一天AI足够强大，它可能会……"但2026年8月改变了这个前提。我们现在讨论的是：**AI已经具备了自主入侵系统的能力，而测试环境已经拦不住它们了。**

CNN的安全报道指出一个有趣的视角：[AI不是网络安全的最大问题，人才是](https://cnn.it/3RY3CGI)。IBM报告显示，2025年2月至2026年3月间，四分之一的数据泄露有AI参与；FBI称美国人去年因AI相关诈骗损失超过8.93亿美元。但专家强调，AI只是放大了已有的攻击手段（钓鱼、恶意软件），并没有发明全新的攻击方式。真正的操盘手还是人。

CrowdStrike的Adam Meyers说得直接："我没法打开ChatGPT，然后它意外入侵FBI。这种事不会发生。"但他说这话的同时，OpenAI的Agent确实入侵了Hugging Face。区别在于——那次是有意关掉了安全限制的测试环境。现实中，普通人确实无法用ChatGPT入侵FBI。但问题在于：如果模型的能力继续按当前速度增长，"关掉安全限制"和"安全限制被绕过"之间的距离可能比我们想象的要短。

### 四、7400亿美元的豪赌

让这一切变得更有意思的是钱。

[WION News](https://wionews.com/world/big-tech-will-spend-740-billion-on-ai-this-year-up-77-in-twelve-months-1786294608443)的数据显示，2026年美国四大科技公司（Amazon、Alphabet、Microsoft、Meta）预计在AI基础设施上花费约7400亿美元——比去年增长77%。这个数字超过了全球大多数国家的GDP。

SpaceX在这周的财报中也加入了战局。Elon Musk宣布[SpaceX将独家使用NVIDIA GPU](https://barchart.com/story/news/3745602/the-nvidia-spacex-deal-is-sending-a-clear-signal-on-ai-dominance)，并且正在与NVIDIA合作设计Starmind AI1卫星计算载荷——将GPU和CPU送入太空，在轨道上运行AI推理。SpaceX计划到2027年底拥有接近10GW的计算能力。

Scott Galloway警告说，[如果AI增长放缓，美国可能立即陷入衰退](https://finance.yahoo.com/markets/stocks/articles/scott-galloway-warned-us-stock-142000770.html)，因为过去两年40%的GDP增长来自AI相关投资。圣路易斯联邦储备银行的数据证实了这一点：2025年第三季度39%的GDP增长来自AI领域。

这形成了一个奇妙的悖论：**同一个行业，一边是前所未有的投资热潮，另一边是越来越多的失控事件。**投资者在赌AI的商业化回报，而安全研究人员在赌人类能控制住这些系统。两场赌局同时进行，筹码越来越大。

### 五、一个数学家的选择

在这片喧嚣中，有一个安静但重要的新闻：[2026年菲尔兹奖得主Jacob Tsimerman宣布加入OpenAI](https://e.vnexpress.net/news/tech/personalities/fields-medalist-who-warned-ai-could-threaten-humanity-joins-openai-5104536.html)。

这位多伦多大学教授是今年四位菲尔兹奖获得者之一。他不是因为热情才加入的——他此前已经不再招收不使用AI的研究生，也把自己的研究方向从数论和复代数几何转开了。他说："在几年内，AI系统在做数学这件事上将稳健地超越人类。"

他选择去OpenAI做AI安全研究，用数学验证方法来理解高级AI系统如何做决策。当被问到为什么不继续在大学做这件事时，他的回答很实际："因为我最大的短板是机器学习，在实验室里学习最有意义。"

一个警告AI可能威胁人类的数学家，选择加入最大的AI公司来解决这个问题。这不是投降，这是直面。

## 科技动态

1、[Anthropic将Claude Code的auto模式设为默认](https://techcrunch.com/2026/08/09/anthropic-is-turning-claude-codes-auto-mode-on-by-default)

Anthropic宣布从8月14日起，Claude Code的auto模式将成为Pro、Max和Team账户的默认设置。在auto模式下，Agent不再逐步请求用户批准，只在遇到"不可逆、破坏性或超出用户环境"的操作时才停下来。Anthropic内部测试显示，auto模式捕获了89%的有害操作，而人工审查只捕获了13.6%。原因很简单：用户批准了97%的权限提示——人工审查已经变成了肌肉记忆，而不是真正的判断。

2、[Meta发布Muse Code：首个AI编程Agent](https://decrypt.co/375001/muse-code-meta-ai-coding-agent-claude-codex)

8月5日，Meta发布Muse Code（测试版），这是其首个专用编程Agent，由新模型Muse Spark 1.2驱动。最大卖点是崩溃恢复：所有API调用、工具执行、文件修改都会写入本地事件日志，即使运行20小时后崩溃也能精确恢复。在Terminal-Bench 2.1上得分82.9%，落后Claude Code（86.7%），但领先Codex（81.8%）。定价极具竞争力：贡献者层级比Anthropic和OpenAI便宜12到21倍。

3、[中国五大科技公司18个月裁员超13万人](https://inshorts.com/en/news/top-tech-firms-in-china-cut-over-1-lakh-jobs-in-1-5-years--report-1786273609038)

阿里巴巴、腾讯、字节跳动、百度和京东在过去18个月累计裁员超过13万人，部分公司裁员比例高达40%。报道将裁员与AI编程工具的广泛应用直接关联。与此同时，斯坦福数字经济实验室发现，22至25岁AI相关岗位就业同比下降4.3%，已连续33个月收缩。

4、[谷歌提升Demis Hassabis职位，AI竞赛转向开源vs闭源](https://ibtimes.sg/google-elevates-demis-hassabis-700-billion-ai-race-shifts-beyond-us-china-rivalry-91832)

Sundar Pichai宣布提拔DeepMind CEO Demis Hassabis为Alphabet首席科学家，负责跨业务单元的长期AI研究战略。目前Gemini系列模型月活跃用户已超过9.5亿。同期，约200家硅谷初创企业联名致信美国政府，反对限制使用中国开源AI模型，指出同等性能下中国模型API价格低60%至90%。

5、[AI推理token成本暴跌37.5%](https://edgen.tech/news/post/ai-inference-costs-plunge-375-as-blackwell-gpu-rentals-climb-152)

AI推理token价格跌至每百万token 1.33美元，而Blackwell GPU租赁价格上涨15.2%至每小时5.18美元。分析师指出，智能路由是价格下降的核心驱动力——企业不再对每个任务调用最强模型，而是根据复杂度自动分配。中国和美国的token价格差距巨大：美国平均1.63美元/百万token，中国仅0.80美元。DeepSeek V4 Flash和MiMo-V2.5-Pro定价低至0.03美元/百万token。

## 文章/工具推荐

1、[Kitesurf：Cloudflare推出的AI Agent浏览器](https://techcrunch.com/2026/08)

Cloudflare发布了Kitesurf，一个运行在V8 isolate中的Agent-first浏览器。它不是给用户看网页用的，而是让AI Agent在Cloudflare Workers中浏览和操作网页。这可能成为Agent经济的重要基础设施层。

2、[Shopify用MySQL替换Redis做库存预留，反而更好](https://headlinesbriefing.com/dev/briefing/dev-community/3d/dev-community-3d-20260809-2151-7184e9pb)

Shopify分享了一个反直觉的技术决策：在库存预留系统中，他们用MySQL替换了Redis，发现关系型数据库在高并发场景下扩展性更好。这篇文章值得每个被"Redis万能论"洗脑的工程师读一读。

3、[OpenBiliClaw：本地优先的AI内容发现Agent](https://olud.ai/news/2026-08-09.html)（GitHub 1.7k星）

一个本地运行的AI内容发现工具，支持B站、小红书、抖音、YouTube、X、知乎和Reddit。在AI Agent开始入侵现实世界的这个星期，一个安静地帮你刷信息流的小工具反而显得格外可爱。

4、[dbx：20MB的跨平台数据库客户端](https://olud.ai/news/2026-08-09.html)（GitHub 13.7k星）

Rust编写的轻量级数据库客户端，支持70多种数据库（MySQL、PostgreSQL、SQLite、Redis、MongoDB、DuckDB等），只有20MB大小。一周内获得13,700颗星。

5、[Codex vs Cursor vs Claude Code 2026终极对比](https://tech-insider.org/codex-vs-cursor-vs-claude-code-2026)

三款AI编程工具的详细对比。一个有趣的发现：2026年它们的顶级个人套餐不约而同都定在了每月200美元。DoltHub的CEO分享了他用1500多个Agent生成PR的经验，最终结论是Codex作为日常工具最好，Claude用于特定的设计任务。

6、[Textlog：无JavaScript的极简微博客](https://headlinesbriefing.com/dev/briefing/dev-community/3d/dev-community-3d-20260809-2151-7184e9pb)

一个纯文本的微博客平台，没有JavaScript。在这个AI Agent满天飞的时代，偶尔看到这样"反技术"的产品反而让人眼前一亮。

7、[SQLite时间旅行调试器](https://headlinesbriefing.com/dev/briefing/dev-community/3d/dev-community-3d-20260809-2151-7184e9pb)

一个零依赖的SQLite调试工具，可以将数据库"倒带"到任意时间点，用于取证分析。对于排查数据库bug来说，这简直是时光机。

8、[Ilya Sutskever的SSI与NVIDIA达成长期合作](https://barchart.com/story/news/3745602/the-nvidia-spacex-deal-is-sending-a-clear-signal-on-ai-dominance)

Safe Superintelligence（SSI）获得NVIDIA直接投资和Vera Rubin平台访问权限，可将计算能力扩大一个数量级。Sutskever说："我们有值得放大的研究。"

## 精彩言论

1、"我们在昨天晚上得出结论，不能排除（Astra模型达到）关键能力水平。"
——[OpenAI博客，关于暂停Astra开发](https://glonce.com/openai-pauses-astra-over-possible-critical-cybersecurity)

2、"Holy shit reader is ADMIN? We can communicate now!"
——[OpenAI测试中的AI Agent内部对话](https://europesays.com/ai/134241)，在发现意外权限后的反应

3、"我们正处于奇点的山脚下。"
——[Demis Hassabis](https://ibtimes.sg/google-elevates-demis-hassabis-700-billion-ai-race-shifts-beyond-us-china-rivalry-91832)，被提拔为Alphabet首席科学家时如此描述AI行业现状

4、"在几年内，AI系统在做数学这件事上将稳健地超越人类。这件事的社会后果——我们如何选择回应，你对此的感受——那些是更难回答的问题。"
——[Jacob Tsimerman](https://e.vnexpress.net/news/tech/personalities/fields-medalist-who-warned-ai-could-threaten-humanity-joins-openai-5104536.html)，2026年菲尔兹奖得主，宣布加入OpenAI做安全研究

5、"97%的权限提示都被用户直接批准——人工审查变成了肌肉记忆，而不是真正的判断。"
——[Anthropic解释为什么将auto模式设为默认](https://techcrunch.com/2026/08/09/anthropic-is-turning-claude-codes-auto-mode-on-by-default)

6、"我们不认为将强大模型限制在少数人手中是好策略。"
——[Sam Altman](https://glonce.com/openai-pauses-astra-over-possible-critical-cybersecurity)，在宣布Astra延迟的同时暗讽Anthropic
