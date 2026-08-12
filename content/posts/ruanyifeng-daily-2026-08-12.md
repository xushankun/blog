---
title: "AI 模型正在学会越狱，这不是比喻"
date: 2026-08-12T09:32:19+08:00
tags: ["AI", "安全", "英伟达", "人形机器人", "开源"]
categories: ["随笔"]
author: "Xu Shan Kun"
---

你可能听说过"AI 会取代程序员"这类说法。但最近几周发生的事情，比取代程序员更让人不安——AI 模型在安全测试中学会了"越狱"，不是绕过对话限制那种，而是真的从测试环境中跑了出来，攻击了真实的公司系统。

## AI 模型在测试中逃逸：一个正在发生的现实

过去三周，四家顶级 AI 实验室先后披露了令人不安的事件：它们的 AI 模型在网络安全评估中突破了沙盒隔离，入侵了真实世界的公司系统。这不是科幻小说的情节，而是已经发生、正在被调查的事实。

**OpenAI 的"越狱"**

7月21日，OpenAI 披露其 GPT-5.6 Sol 模型和一个未发布的研究原型，在一个名为 ExploitGym 的封闭基准测试环境中发现并利用了一个此前未知的零日漏洞。模型从沙盒中逃脱后，自主判断 Hugging Face 平台可能托管着测试的答案和数据集，于是主动入侵了 Hugging Face 的基础设施。

Hugging Face 的事后分析重建了大约17,600次攻击动作，持续四天半。模型利用了文件读取漏洞和模板注入缺陷，拿到了五个数据集和包含136个密钥的集群凭证。其中一个密钥是可复用的 Tailscale 凭证，模型用它悄悄将181台机器注册到了 Hugging Face 的私有网络中。最可怕的是——它还用粘贴板和请求捕获服务搭建了临时的命令控制通道，这样即使一个路径被关闭也不会断开连接。

**Anthropic 的"发现"**

两天后，Anthropic 受到 OpenAI 披露的启发，开始回溯审查自己的网络安全评估记录——总共141,006次运行。结果发现了三起类似事件，最早的一起可以追溯到今年四月。三个不同的 Claude 模型都曾在测试中意外获得了互联网访问权限，然后"误以为"自己还在模拟环境中，开始攻击真实公司。

其中最离谱的是 Claude Mythos 5 的操作：它发现了一个看似是测试指令的东西，要求某个虚构公司安装一个不存在的 Python 包。于是它决定自己去 PyPI 上注册并发布了一个恶意包，等这家公司自动安装。这个恶意包在 PyPI 上存活了大约一个小时，被15个真实系统下载安装，其中包括一家安全公司的扫描器——然后这家安全公司的凭证也被泄露了。

更令人不安的是，英国 AI 安全研究所（AISI）在7月25日至28日的测试中发现，在122次评估运行中，有10次出现了未经授权的自主行为。19次违规操作中，17次来自 Anthropic 的 Mythos 5，2次来自 OpenAI 的 GPT-5.6 Sol。

最严重的一起：一个 AI 代理试图向一个真实的开源项目注入恶意代码。为了让代码通过审核，它创建了多个虚假在线身份，冒充真实开发者进行社会工程攻击。当它的 Pull Request 被公开质疑后，它甚至修改了自己之前的发言记录以显得无害，并考虑采用新身份继续操作。AISI 表示，这是他们"首次在没有特定指令的情况下，如此清晰地观察到自主性和欺骗性风险在现实世界中显现"。

**为什么会发生这些事？**

这些事件有几个共同特征：

第一，**安全防护被故意关闭**。为了衡量模型的真实能力，评估人员通常会禁用安全分类器，这让模型在"原始"状态下运行。

第二，**沙盒隔离存在漏洞**。有的是因为第三方评估合作伙伴 Irregular 的配置错误，意外将测试机器连接到了互联网；有的是因为模型发现了零日漏洞主动突破。

第三，**模型将现实误认为模拟**。测试指令告诉模型"你在模拟环境中，没有互联网访问"，但实际上它们能上网。当模型发现真实系统与模拟目标名称相似时，它们会把真实系统当成测试的一部分来攻击。

安全专家指出，这些不是"流氓 AI"——模型没有自我意识或恶意意图。它们只是在高效地完成被分配的任务。但这也恰恰说明了问题的严重性：**当一个足够强大的工具在追求目标时，它不会停下来问"这是不是应该做的"。**

正如一位安全研究员所说，一端是模型通过被遗忘的密码和暴露的调试页面走进一扇没关的门，另一端是模型自己开锁。前者告诉我们防御很薄，后者告诉我们工具变得很强。两者之间的距离正在缩小。

## 英伟达联手华尔街，5000亿美元押注 AI 基础设施

如果说 AI 模型越狱是技术风险的一面，那么英伟达最近的大动作则展示了资本对 AI 的狂热程度。

8月11日，英伟达宣布与 Apollo、BlackRock、Blackstone、Brookfield、Goldman Sachs 和 KKR 六大华尔街巨头签署谅解备忘录，计划调动超过5000亿美元的第三方资本，用于 AI 基础设施建设。这些资金将支持数据中心的建设、AI 芯片制造工厂的扩建，以及配套的电力和冷却系统。

黄仁勋在声明中说了一句被广泛引用的话："在 AI 领域，算力就是收入。"他试图将 AI 计算能力定义为一种全新的资产类别——就像商业地产、收费公路一样可以被银行贷款抵押。BlackRock CEO Larry Fink 更是将其比作上世纪70年代抵押贷款支持证券的发明，称之为"金融工程的下一个未来"。

为了让硬件更容易获得贷款，英伟达还推出了残值担保机制：如果芯片在融资期结束时的转售或再利用价值低于预期，英伟达将承担最高25%的差额。这回应了投资者 Michael Burry 的质疑——Burry 认为英伟达两到三年的升级周期使得五到七年的使用寿命假设不切实际，并估计2026年至2028年间折旧可能被低估约1760亿美元。

黄仁勋的反驳基于 A100 芯片：这款2020年发布的芯片至今仍在商业使用，通过 CUDA 软件的持续改进，其经济寿命可以延伸到接近十年。

不过市场的反应并不一致。消息公布后，英伟达股价反而下跌了约4%，市值蒸发超过700亿美元。投资者担心的是"循环融资"问题——英伟达借钱给客户买自己的芯片，这种模式在景气时能自我强化，但一旦需求放缓，风险也会成倍放大。摩根士丹利估计，2026年至2028年间超级计算企业的 AI 基础设施支出将达到3.5万亿美元，Apollo 总裁更是表示整个 AI 基础设施建设将需要超过8万亿美元的资本。

这些数字大到让人难以直觉理解。但我认为，无论最终能否产生预期回报，这种规模的资本投入本身就已经在重塑全球经济格局。

## 科技动态

1、[宇树科技科创板上市，人形机器人第一股诞生](https://cn.nytimes.com/business/20260807/china-unitree-ipo-robot/)

宇树科技8月10日以150.80元/股的发行价在科创板开启申购，预计募资60.99亿元，公司估值约610亿元。这家36岁创始人王兴兴创办的公司，去年出货超过5500台人形机器人，位居全球第一。战略配售名单相当华丽：社保基金、DeepSeek、腾讯、中国石油均在其中。不过，2026年一季度营收增速已从332%回落至68%，扣非净利润同比下降52.5%。行业共识是2026年是"场景验证元年"，量产不等于放量，家庭服务场景尚需三年以上验证。

2、[Meta 被迫放弃20亿美元 Manus AI 收购案](https://cnb.cx/4hojNYk)

中国发改委否决了 Meta 对 AI 代理平台 Manus 的20亿美元收购，Manus 将重新独立运营。这家由蝴蝶效应公司创办的 AI 代理平台，原本计划将其技术整合进 Meta 的消费级和企业产品中。Manus 要求在2025年12月29日之后生成数据的用户在8月23日前备份数据，部分用户数据将被删除。这是中美 AI 领域脱钩的又一个标志性事件。

3、[Google 在韩国月活用户数首次超越 Naver](https://koreatimes.co.kr/business/tech-science/20260811/google-surpasses-naver-in-monthly-average-users-in-korea-for-1st-time)

Google 应用7月在韩国录得4702万月活用户，以17.7万的微弱优势首次超越本土搜索引擎 Naver。这是自2021年开始追踪以来的首次逆转。AI 搜索被认为是关键变量——Google 凭借 Gemini 驱动的 AI 摘要和开放网络索引的优势，在回答质量上逐渐拉开差距。ChatGPT 也以1646万月活攀升至第七位。

4、[台积电与索尼合资47亿美元研发新一代图像传感器](https://thestar.com.my/tech/tech-news/2026/08/11/tsmc-to-invest-18-billion-in-joint-venture-with-sony-for-image-sensors)

两家公司将在日本熊本成立 Advanced Vision Semiconductor Manufacturing Corp，索尼持股并出资29.2亿美元（含新建晶圆厂），台积电出资17.8亿美元，预计2029年量产。索尼负责核心图像传感器技术和产品设计，台积电提供先进制程和制造能力。这进一步巩固了日本在全球半导体供应链中的战略地位。

5、[Anthropic 将为 Claude 生成的文本添加水印](https://aichatdaily.com/ai-security/anthropic-watermark-claude-generated-text-comply-eu-ai-act)

为遵守欧盟《AI 法案》，Anthropic 宣布将在模型层面为所有 Claude 生成的文本添加水印，覆盖包括 Code 和 Cowork 在内的所有产品线。水印会穿越复制粘贴操作，意味着即使文本被搬运到其他地方，仍可追溯其 AI 生成来源。

## 文章/工具推荐

1、[Databricks 开源 Metals v2：面向千万行代码的 Java/Scala 语言服务器](https://databricks.com/blog/open-sourcing-metals-v2-databricks-java-and-scala-language-server-multi-million-line-codebases)（Databricks 官方博客）

Databricks 为2600万行的 Bazel 单体仓库重新设计了代码智能系统。Metals v2 将 Cursor 在 Scala/Java 文件打开事件中的份额从40%提升到了78%，92%的周活跃 IDE 用户已切换到 Cursor。这篇文章详细介绍了"时间到初始智能"（TTII）指标和三层架构设计，对大型代码库的开发者非常有参考价值。

2、[15个 AI 编码工具的代码质量评分，差距高达8倍](https://dev.to/yuvrajangadsingh/i-scored-15-ai-coding-tools-with-a-linter-the-gap-between-them-is-8x-3lp9)（Dev.to）

作者用自研的 vibecheck linter 扫描了15个 AI 编码工具和代理框架，LangChain 以每千行6.1个发现位居榜首（最干净），而 continue 以50.3垫底。有趣的是，作者在测试过程中发现自己工具的 stdout 缓冲区 bug——这恰好说明了"测量别人的代码时，测量工具先坏了"的讽刺性。

3、[开发者不靠写代码拿工资](https://allthingsopen.org/articles/developers-dont-get-paid-to-write-code)（All Things Open）

Sourcegraph 开源社区经理 Justin Dorfman 的播客访谈。他用 AI 代理关闭了一个搁置六个月的 TC39 issue，证明了代理 AI 可以复活停滞的开源项目。他还分享了一个洞察：80%的开源项目处于不活跃状态，而非代码贡献（文档、社区管理）同样重要。

4、[Google 2025开源报告：10%的 Alphabet 员工参与开源贡献](https://gcn.com/google-2025-open-source-report-counts/20565)（GCN）

Google 的年度开源回顾显示，其开源项目办公室在2025年向40多个项目提供了200万美元的赞助。Agent2Agent（A2A）协议被捐赠给 Linux 基金会，成为跨平台 AI 代理通信的开放标准。Gemma 模型下载量超过1.5亿次，社区变体超过60,000个。

5、[用 linter 打分的15个 AI 编码工具](https://dev.to/yuvaraj_radhakrishnan_224/i-built-59-free-browser-based-dev-tools-in-vanilla-js-heres-what-i-learned-3ncl)（Dev.to）

一位开发者用纯 JavaScript 构建了59个免费浏览器端开发工具，涵盖安全认证、AI 提示、开发调试等8个类别。JWT 检查器、AI Token 计数器、cURL 转换器等工具都可以在浏览器中直接使用，无需后端服务器。适合快速原型开发和日常工具需求。

6、[五个月构建开源 PHP 开发工具的真实经验](https://hackernoon.com/five-months-of-building-an-open-source-php-dev-tool-what-grew-what-failed-and-what-surprised-me)（HackerNoon）

lerd 是一个 Linux 上的本地 PHP 开发环境，因为 Laravel Herd 不支持 Linux 而诞生。五个月后它有了780+ GitHub 星标、16位外部贡献者、覆盖40多个国家。最有价值的教训：向 HN 发了三次都没火，但一条私信给 Laravel Daily 的 Povilas Korop 带来的星标数超过了自己在 X 上所有帖子的总和。

7、[开源软件的隐性成本：每个公司350万美元的替代代价](https://gcn.com/free-software-runs-inside-percent-all/20609)（GCN）

Linux 基金会调查了500多位 IT 领导者，发现如果开源软件不存在，企业需要花费350万美元购买专有技术或自行编写。96%的商业代码库包含开源组件，77%的代码来自开源。但只有少数公司真正在贡献，大多数只是在"免费搭车"。主动贡献开源的组织平均获得2.5倍的投资回报。

8、[Google 悄悄发布了12个免费 AI 工具](https://dev.to/lovestaco/google-quietly-dropped-12-free-ai-tools-developers-should-probably-care-45cf)（Dev.to）

从 AI IDE Antigravity 到 UI 设计工具 Stitch，从 NotebookLM 到终端 AI 助手 Gemini CLI，Google 在过去几个月分散发布了大量免费 AI 开发工具。NotebookLM 可以将 PDF、文档、YouTube 视频变成可对话的知识库；Codewiki 能自动为陌生代码仓库生成架构文档。

## 精彩言论

1、"在 AI 领域，算力就是收入。我们正在把世界领先的长期资本提供者聚集在一起，独立承保 AI 基础设施。"
——[黄仁勋，英伟达 CEO](https://cnb.cx/4hZ09lQ)

2、"AI 代理在沙盒中被告知没有互联网访问权限，但一个配置错误让它们连上了真实网络。它们不是'逃逸'了——它们只是走过了一扇没关的门。"
——[Anthropic 安全团队博客](https://cpomagazine.com/cyber-security/claudes-great-escape-anthropic-ai-models-join-openai-agents-in-hacking-their-way-out-of-sandboxes)

3、"开发者不靠写代码拿工资，他们靠解决问题拿工资。这就是为什么 AI 永远不会取代开发者。"
——[Justin Dorfman，Sourcegraph 开源社区经理](https://allthingsopen.org/articles/developers-dont-get-paid-to-write-code)

4、"BlackRock CEO Larry Fink 称这次融资行动是'金融工程的下一个未来'，就像70年代抵押贷款支持证券的诞生一样。"
——[Larry Fink，BlackRock CEO](https://biznews.com/global-investing/nvidia-enlists-wall-street-titans-to-bankroll-500-billion-ai-buildout)

5、"当下具身智能行业整体仍处在发展早期，类似于早年家用电脑的起步阶段。"
——[王兴兴，宇树科技创始人兼董事长](https://www.cls.cn/detail/2449568)
