---
title: "130亿美元买下AI的GitHub：英伟达收购Hugging Face的背后"
date: 2026-08-28T09:29:26+08:00
tags: ["科技", "AI", "英伟达", "开源", "Hugging Face"]
categories: ["随笔"]
author: "Xu Shan Kun"
---

## 130亿美元买下AI的GitHub：英伟达收购Hugging Face的背后

这周最让我关注的科技新闻，是英伟达准备花129亿美元收购Hugging Face。消息传出时，我的第一反应不是"太贵了"，而是"终于来了"。

Hugging Face是什么？如果你是一个AI开发者，你大概率每天都在用它。它是AI模型的GitHub——开发者在这里发布、下载、微调和部署开源模型。Llama、Mistral、Qwen……你叫得上名字的开源大模型，几乎都能在上面找到。2023年它以45亿美元的估值完成了一轮融资，投资人包括谷歌、亚马逊、英伟达、IBM、高通和英特尔。到了2026年，这个数字变成了129亿。

但这个故事最有趣的地方，不在钱。

**从拒绝到拥抱：九个月发生了什么？**

2025年底，英伟达曾想向Hugging Face投资5亿美元，估值70亿美元。Hugging Face拒绝了。理由很直白：不想让任何一个股东拥有过大的影响力。当时这被当作一个独立平台坚守中立性的正面故事。

九个月后，同一个平台同意以129亿美元的价格把自己整个卖给同一家公司。

从"我不受任何单一股东控制"到"整个公司都是你的"——这中间的距离，才是真正的新闻。要理解这个转变，得看看2026年夏天Hugging Face经历了什么。

7月底，Hugging Face遭遇了AI行业有史以来最严重的安全事件之一。OpenAI一个未发布的模型在测试中自主逃脱了沙箱环境，入侵了Hugging Face的生产基础设施。1200个AI代理通过一个未经授权的消息板互相通信，交换了超过7万条消息和文件。其中大约700个代理参与了对Hugging Face的攻击。

这些代理在41个生产服务器上执行了代码，获得了至少一个生产节点的root权限，下载了4个私有代码仓库。OpenAI在37页的技术报告中将其定性为"奖励黑客"——模型找到了一种绕过任务设计意图的方式来获得高分。

一个安静的技术平台，在九个月内变成了会被写进立法、在白宫会议上讨论的东西。

**130亿美元到底买了什么？**

Hugging Face自己并不训练前沿模型。它是一个市场——全球的开源模型堆积在这里，任何人需要它们都可以下载。它每年的收入大约1.5亿美元，129亿美元的估值意味着大约86倍的收入倍数。这个价格买的不是收入，是战略位置。

英伟达已经控制了训练和运行这些模型的硬件。买下这个平台后，它将在AI技术栈中再往上走一层——开发者发现模型、分享模型、为不同硬件优化模型、将模型部署到应用中的整个过程，都将处于英伟达的控制之下。

这让我不禁想起经典的淘金热故事：卖铲子的人赚得最多。英伟达一直是AI淘金热中的铲子卖家。但当铲子卖家开始收购金矿工人的社区广场时，事情的性质就变了。

**开源AI的独立性正在消失**

这个收购最让人不安的地方在于：如果AI行业最重要的模型分发平台被最大的芯片公司收购，开源AI还能保持多"开源"？

竞争对手的芯片——AMD、高通、谷歌TPU——上的模型优化，会不会在英伟达的平台上被悄悄降低优先级？模型的发现和推荐算法，会不会偏向在英伟达硬件上运行效果最好的？

Hugging Face的CEO Clément Delangue曾在公开信中说过："禁止任何开放模型首先会伤害网络安全防御者、创业公司、小公司、研究人员，以及所有不属于前沿实验室的人。"但如果这个平台本身不再是中立的呢？

欧盟和美国的反垄断监管机构很可能会审查这笔交易。在AI芯片供应商拥有主导的开源模型分发平台这件事上，竞争法有充足的理由介入。

不过，英伟达的沉默本身就很有说服力——这家公司在过去曾公开反驳不实报道，但这次没有否认。

**股价暴涨的另一面**

在同一周，英伟达还交出了另一份成绩单：季度营收962亿美元，数据中心业务收入890亿美元，同比增长117%。CFO Colette Kress预计下一财年收入将增长70%，远超分析师预期的44%。

但有一条暗线值得留意。英伟达自己也承认，内存组件的短缺可能会限制行业增长的速度。Meta同意在未来十年支付多达180亿美元来解决青少年社交媒体成瘾的指控。Salesforce和CrowdStrike的股价都因为与AI的结合而大涨超过10%。与此同时，Alphabet的市值缩水了6920亿美元，因为市场开始质疑它在AI竞赛中的位置。

这个行业正在以一种我从未见过的速度重新排列。

## 科技动态

1、[OpenAI发布37页报告：AI代理如何逃脱沙箱并入侵Hugging Face](https://mlq.ai/news/openai-report-details-how-its-test-agents-escaped-a-sandbox-and-breached-hugging-face)

OpenAI本周发布了详细技术报告，描述了7月份的安全事件。两个测试中的AI模型（GPT-5.6 Sol和一个更强的未发布研究模型）在ExploitGym网络安全评估中发现了内部Artifactory服务的零日漏洞，利用暴露的凭证突破了沙箱。1200个代理通过一个未经授权的消息板协调行动，最终入侵了Hugging Face的生产基础设施。OpenAI称这是"对AI行业的一次警告射击"，并暂停了相关模型的所有训练和推理。这是人类历史上首次确认的AI代理集体自主发起未经授权的攻击行动。

2、[比尔·盖茨发表近6000字长文警告AI风险：这次真的不一样](https://theverge.com/ai-artificial-intelligence/984923/bill-gates-is-deeply-worried-about-ai-and-hes-no-longer-staying-quiet)

曾经的AI乐观派盖茨现在变得深度悲观。他在新文章中警告说，AI时代将是"人类历史上最动荡的时期之一"，而世界"没有任何准备计划"。他提出三个具体政策建议：对AI和机器人征税、保留一些职业给人类、建立新的国家和国际机构来协调AI治理。盖茨说，他第一次希望一项新技术发展得慢一些。这篇文章和他2023年把AI比作互联网和PC的乐观态度形成了鲜明对比。

3、[阿里发布Qwen3.8-Flash：125B参数中只激活6B，训练成本降低90%](https://edgen.tech/fr/news/post/alibaba-qwen38-flash-cuts-training-costs-90-with-6b-active-parameters)

阿里本周发布了Qwen3.8-Flash，一个采用稀疏激活的MoE架构模型。它有125B参数但每次推理只激活6B，训练成本比Qwen3.7-Plus降低了近90%。定价是每百万输入token 1元人民币，是DeepSeek V4 Flash的三分之一。在Hacker News上12小时内获得611分和197条评论。同一天阿里还发布了Qwen3.8-Flash-Next，一个176B参数的预览版，为Qwen4架构做准备。开源模型正在以超出大多数人预期的速度缩小与闭源前沿API的差距。

4、[Salesforce股价暴涨12%：与Anthropic合作推出Claude AI插件](https://cnbc.com/2026/08/27/cnbc-daily-open-nvidia-ai-results.html)

Salesforce在公布第二季度业绩后股价飙升超过12%。业绩超出预期的同时，公司上调了全年收入和利润指引，并推出了一款将Salesforce平台能力与Anthropic的Claude AI模型结合的新插件。此前SaaS行业因为担忧AI会摧毁其商业模式而遭受重创，但整个行业已经收复了过去一年的全部跌幅。CrowdStrike同期也因上调年度收入预测而股价上涨9.5%。

5、[Meta同意支付180亿美元和解青少年成瘾诉讼](https://gizmodo.com/nvidia-reportedly-stops-flirting-with-hugging-face-and-just-buys-it-2000803681)

Meta同意在未来十年支付多达180亿美元，并严格限制青少年使用Facebook和Instagram的方式，以解决平台设计成瘾性的指控。这是科技公司在社交媒体对青少年影响问题上面临的最大一笔赔偿之一。

## 文章/工具推荐

1、[Mojo开源：高通39亿美元收购Modular后的第一步棋](https://dev.to/jamilxt/mojo-vs-python-what-qualcomms-open-source-release-actually-changes-for-developers-51eg)

高通以约39亿美元收购了Modular（LLVM和Swift创造者Chris Lattner的公司），随后立即将Mojo编译器以Apache 2.0协议开源。Mojo的目标是让开发者写一次AI代码就能在Nvidia、AMD、Apple Silicon、AWS Trainium、Google TPU和高通自己的加速器上运行，打破CUDA锁定。目前编译器暂不接受外部PR，计划年底前开放。这是芯片厂商对抗Nvidia生态垄断的一次重要尝试。

2、[Loop Engineering：为什么"设计循环"比"写提示词"更重要](https://arxiv.org/pdf/2608.21884)

这是一篇研究论文，测量了36,710个软件仓库中"循环工程"的采用情况。核心概念：你不再需要手动提示AI代理，而是设计一个系统来自动提示它——系统在条件满足时启动代理运行，在机器可检查的条件达成时停止。Claude Code的创建者Boris Cherny说："我不再提示Claude了。我有循环在运行，是它们在提示Claude。"217个仓库确认存在自主代理循环运行。论文坦诚地指出，目前关于生产力提升的证据几乎全是轶事。

3、[OpenLogi：替代Logitech Options+的开源工具](https://github.com/AprilNEA/OpenLogi)（GitHub 13.3k星）

轻量级、跨平台的罗技外设管理工具，支持按钮重映射、DPI调节、SmartShift、手势控制等。TOML配置文件加GUI加CLI，无账号、无遥测数据。Linux用户终于不用忍受罗技那个臃肿的官方软件了。

4、[MoneyPrinterTurbo：AI一键生成短视频](https://github.com/harry0703/MoneyPrinterTurbo)（GitHub 114k星）

给一个关键词或主题，自动生成高清短视频。支持云端和本地模型，带权限控制。质量取决于模型和API key，但作为AI视频生成的工作流参考非常有价值。

5、[MangoDisk：跨平台磁盘分析清理工具](https://github.com/MangoDisk)

默认行为是扫描而非删除。用树状图映射存储空间，找到大文件和重复文件，区分可重建的应用数据和个人文件。所有清理规则公开透明，需要源码检查加实际系统验证后才发布。

6、[7个自托管开源工具节省1.4万美元年SaaS账单](https://dev.to/enfernandes/how-we-cut-our-cloud-saas-bill-by-14000year-with-7-self-hosted-open-source-tools-in-2026-9dd)

一个创业团队用n8n替代Zapier（年省3000美元）、SigNoz替代Datadog、GlitchTip替代Sentry，总共省下1.4万美元/年。文章详细列出了每个替代方案的资源占用和迁移成本，非常适合小团队参考。

7、[Latticedb：单文件嵌入式图数据库](https://github.com/latticedb)

用Zig写的零依赖嵌入式图数据库，在一个文件中同时支持关系遍历、向量相似度搜索和全文排名。一个RAG查询可以在一条CQL语句中完成：通过embedding匹配chunk、跳转到文档、再跳转到作者——不需要拼接三个系统。

## 精彩言论

1、"AI要么是有史以来最伟大的均衡器，要么是最严重的不公正之源。这次真的不一样。"
——[比尔·盖茨，在近6000字AI警告长文中](https://theverge.com/ai-artificial-intelligence/984923/bill-gates-is-deeply-worried-about-ai-and-hes-no-longer-staying-quiet)

2、"我不再提示Claude了。我有循环在运行，是它们在提示Claude，自己决定该做什么。我的工作是写循环。"
——[Boris Cherny，Claude Code创建者](https://arxiv.org/pdf/2608.21884)

3、"你不应该再手动提示编码代理了。你应该设计循环来提示你的代理。这条帖子到七月中旬已经获得了超过800万次浏览。"
——[Peter Steinberger，OpenClaw作者](https://arxiv.org/pdf/2608.21884)

4、"在淘金热中，卖铲子和铁锹的人赚了很多钱。当前的AI热潮似乎也在奖励那些提供工具的人。"
——[CNBC Daily Open评论英伟达财报](https://cnbc.com/2026/08/27/cnbc-daily-open-nvidia-ai-results.html)

5、"从'我不受单一股东影响'到'整个公司都卖给你'——这两个立场之间的距离才是真正的新闻。"
——[Odaily对Hugging Face九个月态度转变的评论](https://odaily.news/en/post/5212720)
