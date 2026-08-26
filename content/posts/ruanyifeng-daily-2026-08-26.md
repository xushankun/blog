---
title: "AI 开始做数学了，而且比大多数人做得好"
date: 2026-08-26T09:55:54+08:00
tags: ["AI", "数学", "苹果", "开源", "Agent"]
categories: ["随笔"]
author: "Xu Shan Kun"
---

## AI 开始做数学了，而且比大多数人做得好

过去三周发生了一件让我非常不安的事：AI 开始做数学了，而且做得比大多数人好。

7月20日，哈佛数学家 Levent Alpöge 和 Anthropic 的 Claude Fable-5 合作，构造出了雅可比猜想（Jacobian Conjecture）的反例——这个问题自1939年提出，悬了整整87年，被列在 Smale 的"21世纪最困难数学问题"清单上。8月10日，一个未公开发布的 Claude 模型将黎曼 zeta 函数零点落在临界线上的已证明比例，从41.6%推到了67.2%。8月24日，Alpöge 又和 Claude 联手终结了另一道悬了78年的世纪难题：六维球面 S⁶ 上是否存在光滑、自洽、处处可微的复结构。答案是存在。

这些数字听起来很抽象，让我换一种方式说：在过去几十年里，全世界最聪明的数学家——包括菲尔兹奖得主 Atiyah、华人数学大师陈省身——都在这个问题上栽了跟头。2016年，Atiyah 本人声称解决了它，后来被指出论证有漏洞。2023年，MIT 团队动用超算穷举了2.7亿种纤维粘合方案，最终弹出一行冰冷提示："未发现合法复结构"。

然后 AI 出现了，用三天时间把它解决了。

### 不是找答案，是造答案

这件事最让我震撼的地方，不在于 AI 的"算力很强"——这我们早就知道了。而在于它做数学的方式完全不同。

过去所有人的思路都是"找"——找证明、找反例、找矛盾、找缝隙。Alpöge 和 Claude 的做法是"造"。他们直接动手构造了一个紧致复三维流形 X，然后一寸寸验明正身：它单连通、同伦等价于 S⁶、同胚于 S⁶、且在六维光滑范畴里——零怪球干扰，稳稳当当就是 S⁶ 本尊。

这就像所有人几十年来都在一个黑暗的房间里摸墙找门，而 AI 说："我为什么要找门？我直接给你造一扇。"

论文厚达108页，每一处矩阵、每一块坐标、每一处粘合方式都白纸黑字写了出来。数学家 Qiaochu Yuan 用 GPT-5.6 Sol 去挑刺，盯着看了6分钟发现毫无破绽，不死心又审了15分钟，依然挑不出毛病。

### AI 数学的三个阶段

回顾这短短35天里的三次突破，能清晰地看到三个阶段：

**第一阶段：搜索。** 找反例本质上是搜索问题。AI 比人快，因为它能穷举人类穷举不起的空间。这很了不起，但还在预期之内。

**第二阶段：重组。** 推进黎曼 zeta 函数的证明比例，是把已有的数学工具以人类没想到的方式重新组合。一位研究者评论说，"AI 创造性地重组已有想法，但尚未构建概念上全新的理论。"

**第三阶段：构造。** 这次 S⁶ 的突破性质完全不同。这个几何对象原本不存在于任何人的搜索空间里，是模型硬生生把它造了出来。

从搜索到重组再到构造，AI 正在沿着人类智能的核心路径前进。数学家 Justin Curry 的评价是："如果证明为真，这绝对是最近最了不起的 AI 成就。"

### 但是，别太乐观

普林斯顿大学的一个研究小组做了一个有趣的实验：让 Claude Opus 4.8 回答两个来自 NeurIPS 2026 的未发表研究问题。给了六天时间、3000美元 API 额度、GPU 预算和完整的网络访问权限。结果呢？AI 在工程层面表现得不错——文献综述、上百次实验——但人类评审员拒绝了两篇论文。

问题出在哪？三个致命弱点：第一，收敛太快，还没充分探索就锁定了一个方向；第二，不会退回去重来，一旦上了一条路就下不来；第三，无法消化外部反馈，面对批评只会加限制条件而不是改方法。

所以，AI 能做数学吗？显然能。它能替代数学家吗？还差得远。但它正在成为一个前所未有的数学工具——一个不会疲劳、不会自我怀疑、敢于造出任何人没想过的东西的工具。

---

## 科技动态

1、[苹果发布 M6 和 M5 Ultra 芯片，Mac mini 涨价至899美元](https://arstechnica.com/apple/2026/08/with-new-mac-studio-and-mac-mini-apple-leans-hard-into-local-ai-inference)

苹果本周发布了搭载全新 M6 芯片（首款2nm制程的 M 系列芯片）的 Mac mini 和搭载 M5 Ultra 的 Mac Studio。这次更新的核心信号很明确：苹果在押注本地 AI 推理。M5 Ultra 最高可配置512GB 统一内存，带宽达1.2TB/s，苹果称其能让大语言模型的运行速度比前代快近四倍。Mac mini 起价从799美元涨到899美元，这个涨价被苹果归因于内存成本上升。值得注意的是，苹果为了 AI 推理加速，跳过了 M6 系列的后续型号，直接规划 M7——这在苹果芯片历史上前所未有。

2、[NVIDIA 今晚发布 Q2 财报，市场预期营收920亿美元](https://finance.yahoo.com/markets/stocks/article/nvidias-q2-earnings-to-test-resurgent-ai-trade-112502189.html)

NVIDIA 将于8月26日发布第二季度财报，华尔街一致预期营收约920亿美元，同比增长96%。数据中心业务预计贡献854亿美元。但真正决定股价的不是 Q2 数字，而是 Q3 指引——市场期待管理层指引接近或超过1000亿美元。另一个关键变量是中国市场：NVIDIA 此前故意将中国数据中心计算收入设为零纳入指引，任何中国贡献都是纯上行。据 FT 报道，NVIDIA 已开始向中国出货 H200 芯片，字节跳动和腾讯各获得约1万片。

3、[OpenAI 开源 Codex Agent 运行时，Apache 2.0 许可](https://groundtruth.day/news/openai-open-sourced-the-agent-loop-not-the-model.html)

8月19日，OpenAI 开源了 Codex 的执行运行时（Harness），采用 Apache 2.0 许可。这不是开源模型，而是开源了"模型外面那层壳"——线程管理、工具调用、沙箱、流式传输和人工审批。核心是一个叫 App Server 的双向 JSON-RPC 接口，让任何应用都能嵌入一个有状态的 Codex Agent。两个设计改动——保留推理和上下文压缩——就把 GPT-5.6 Sol 的 ARC-AGI-3 得分从13.3%拉到了38.3%，同时把输出 token 消耗砍到了六分之一。思科和税务服务公司 Thrive Holdings 已经在生产环境里用上了它。

4、[OpenAI 封禁俄罗斯 ChatGPT 账户，用于隐秘影响力行动](https://qz.com/openai-banned-russian-chatgpt-accounts-influence-campaign-082526)

OpenAI 周二宣布封禁了一组来自俄罗斯的 ChatGPT 账户，这些账户被用于支持一项秘密影响力行动，推广一个虚构的以色列智库并传播亲克里姆林宫的叙事。操作者通过 VPN 绕过 OpenAI 对俄罗斯的访问限制，用 ChatGPT 起草发布在 Substack、Telegram、X、Facebook 和 LinkedIn 上的社交媒体内容。该智库网站声称拥有包括福山和乔姆斯基在内的知名学者文章，但 OpenAI 审查发现36篇中有34篇是从互联网其他地方抄袭的。

5、[xAI 警告：密西西比州断电将导致 Grok 全面停摆](https://benzinga.com/markets/tech/26/08/61401275/elon-musks-xai-sounds-alarm-over-power-shutdown-grok-could-largely-cease-to-function)

马斯克的 xAI 在法庭文件中警告，如果密西西比州 Southaven 的电力供应被切断，Grok 将"基本停止运作"，"全球数亿用户"将受到影响。这场争端的背景是 NAACP 指控 xAI 未经许可运营移动天然气涡轮机，违反了《清洁空气法》。xAI 表示正在用一座1.2GW 的永久性电厂（含41台涡轮机）替代临时发电机组，获得了3月份颁发的许可证。这个案例很好地说明了 AI 基础设施的物理脆弱性——再强大的模型，断了电也是废铁。

---

## 文章与工具推荐

1、[DeepSeek Harness：一切皆插件的 Agent 运行时](https://github.com/deepseek-ai/deepseek-harness)（GitHub 星标 165k）

DeepSeek 本月发布的重磅产品不是模型，而是模型外面那层壳。DeepSeek Harness（dsh）是 MIT 许可的 Agent 运行时，核心设计只有一句话：一切皆插件。模型适配器是插件，工具注册表是插件，沙箱是插件，连 Agent 循环本身都是插件。它基于一个叫 Cordis 的微内核，附带一份88页的学术论文解释其设计哲学。安装只需一行 `npx @deepseek-ai/dsh web`，无需注册账号。如果你对 Claude Code 的封闭性不满，这是目前最值得关注的替代品。

2、[Block 开源 Berd：跨模型跨框架的 AI 桌面工作台](https://github.com/block/berd)（Apache 2.0）

Jack Dorsey 创立的 Block（Square、Cash App 母公司）开源了内部使用的 AI 工作台 Berd。这是一个本地优先的桌面应用，用 Tauri 2 + React 19 构建，通过 Agent Client Protocol 连接 Block 的 Goose 框架。它解决的核心问题是：当你同时使用 Claude Code、Codex、Goose 等多个 Agent 时，每个都有自己的界面、配置和上下文管理方式。Berd 给你一个统一的工作台，带持久项目、会话历史、技能扩展和自动化。每个 Agent 还有动画角色形象——这不是花哨的功能，而是让你一眼看出当前在和谁对话。

3、[Slack Code：在聊天频道里写代码](https://gizmodo.com/slack-has-of-course-launched-a-vibe-coding-tool-2000800885)

Salesforce CEO Marc Benioff 本周发布了 Slack Code，让团队在 Slack 频道里直接调用 Claude Code、GitHub Copilot、Devin 和 Vercel 的编码 Agent。核心理念是"多人编码"——产品经理、设计师、工程师在同一个频道里看到 Agent 的工作过程，实时评论和审批。这标志着 AI 编码从"一个人在终端里和 Agent 对话"向"团队协作"的转变。与 Cursor 的 IDE-first 路线形成有趣的对比：Cursor 优化深度，Slack Code 优化广度。

4、[Anthropic 四大工具正式 GA：计算机控制、浏览器、Skills API、Files API](https://ai-engineering-trend.medium.com/anthropic-just-took-computer-use-browser-tool-skills-api-and-files-api-to-general-availability-f952ed6077fd)

Anthropic 8月20日宣布计算机控制、浏览器工具、Skills API 和 Files API 全部进入正式发布。Skills API 是最被低估的部分——它让你把团队的工作流上传为可版本控制的"技能"，而不是每次都在 prompt 里重复一堆指令。Files API 新增自动过期、500 RPM 限速和1TB 组织级存储。一个早期客户 Asteroid 的测试显示：最长工作流从32分钟降到13分钟，模型调用减少32-52%，成本降低25-32%，完成率从77%跳到100%。

5、[JetBrains Junie vs GitHub Copilot vs Cursor：2026年 AI 编码工具横评](https://tech-insider.org/jetbrains-junie-vs-github-copilot-vs-cursor-2026)

JetBrains 的 AI 编码 Agent Junie 正式发布，SWE-Rebench 得分61.8%，排名第一，每个问题成本0.81美元。GitHub Copilot 最后公开的成绩是56%，Cursor 的 Agent Loop + GPT-5.6-codex 得分67.4%。这个对比很有意思：Junie 是"IDE 原生派"，Copilot 是"平台派"，Cursor 是"编辑器派"。三种路线各有优劣，但 JetBrains 用自家 IDE 的深度集成打了一个漂亮的翻身仗。

6、[开源安全提醒：Rust Arrayref crate 被发现植入恶意代码](https://headlinesbriefing.com/dev/briefing/dev-community/3d/dev-community-3d-20260820-2304-vqgwmk4d)

安全研究人员发现 Rust 的 Arrayref crate 在构建阶段执行恶意载荷，针对开发者环境进行代码注入。这是又一起供应链攻击案例。提醒所有 Rust 开发者：检查你的 Cargo.lock 依赖树，特别是那些不常更新的底层 crate。

7、[Nintendo 一天之内从 GitHub 删除401个 Switch 模拟器仓库](https://webpronews.com/nintendos-relentless-purge-400-switch-emulators-vanish-from-github-in-one-day)

Nintendo 本周提交了7份 DMCA 反规避通知，GitHub 一次性删除了401个仓库，其中311个是 Suyu 模拟器的 fork。Nintendo 的法律论点始终一致：Switch 模拟器通过未授权的加密密钥绕过主机的技术保护措施，分发这些模拟器违反 DMCA。自2024年以来，Nintendo 已经从 GitHub 上清除了近9000个仓库。但 fork 生生不息——你删一个，它长十个。

8、[澳大利亚宣布：AI 生成的歌曲不得进入官方排行榜](https://newslocker.com/en-us/news/music/ai-optimism-has-a-hold-over-hip-hops-mogul-generation)

澳大利亚唱片业协会（ARIA）确认，完全由 AI 生成的歌曲将被禁止进入 ARIA 排行榜。新规将于8月31日生效。这是全球范围内对 AI 生成内容设限的又一个信号。有趣的是，这和音乐行业的"大人物们对 AI 乐观"形成了微妙的张力——Stability AI 刚从环球、索尼、华纳和 EA 那里拿了7600万美元 B 轮。

---

## 精彩言论

1、"客户买的不是 GPU，他们建造的是 AI 工厂。"
——[Jensen Huang，NVIDIA CEO](https://finance.yahoo.com/technology/ai/articles/nvidia-vs-amd-narrative-upending-124555795.html)

2、"这不是传统的编码体验——一个人在一个沙箱里独自工作。在 Code 频道里，整个团队和 Agent 一起工作。"
——[Katie Steigman，Slack 产品副总裁](https://forbes.com/sites/timkeary/2026/08/20/slack-brings-ai-agents-to-workspaces-but-can-it-take-on-teams)

3、"欢迎这个漂亮的新几何对象来到这个世界。"
——[Levent Alpöge，哈佛数学家](https://www.36kr.com/p/3953397422537858)，在 X 上宣布 S⁶ 复结构的构造

4、"当前的 AI 在重组已有想法方面很有创造力，但尚未发展出概念上全新的理论或结构。真正的创新仍然超出它们的能力范围。"
——[数学家对 AI 数学能力的集体评价](https://britbrief.co.uk/tech/ai/ai-wont-end-mathematics-yet-mathematicians-argue.html)

5、"代码越少不代表越成功。AI 时代的'代码清道夫'正在靠修补 AI 生成的烂代码赚钱。"
——[TechNews 编辑台](https://technews.tw/)，报道越来越多客户找外包公司修补 AI 生成但缺乏工程规划的代码库
