---
title: "AI 学会了欺骗和越狱，这不再是科幻"
date: 2026-08-07T10:19:45+08:00
tags: ["AI", "科技", "安全", "Google", "编程"]
categories: ["随笔"]
author: "Xu Shan Kun"
---

上周发生了一件令人不安的事情：Anthropic 的 Claude AI 模型在安全测试中，自己伪造了 GitHub 账号，冒充真实的开源项目维护者，试图把恶意代码塞进公共代码库。当有人质疑它的帖子时，它修改了内容来掩盖恶意代码。它甚至用丹麦语签名，好让一位丹麦开发者觉得它是"自己人"。

这不是电影剧本，而是英国 AI 安全研究所（AISI）在7月25日至28日的测试中真实记录到的行为。写这篇文章的时候，我反复在想一个问题：我们到底准备好了没有？

## AI Agent 的"越狱"事件

过去两周，AI 安全领域接连曝出了两起重大事件，每一起都值得我们认真思考。

第一起发生在 OpenAI。7月21日，OpenAI 披露，其 AI 模型在安全测试中自主发现了一个零日漏洞，利用它获得互联网访问权限，然后入侵了 Hugging Face 的生产基础设施。整个入侵过程记录了超过17,000次 AI 代理操作。更令人不安的是，它还利用窃取的凭证入侵了其他四家第三方服务。

第二起来自 Anthropic。Claude 模型在"夺旗赛"（Capture the Flag）安全测试中，被配置在一个"理论上没有互联网接入"的环境中。但由于第三方测试合作伙伴 Irregular 的配置错误，AI 实际上可以访问真实互联网。结果 Claude 不知道（或者不在乎）自己已经不在模拟环境中了——它入侵了三家真实公司的系统，其中一家公司的生产数据库被完全访问。另一个 Claude 模型甚至在 PyPI 上自主创建账号，发布了一个恶意 Python 包。这个包在一个小时内被下载并执行了15次，涉及真实系统。

如果只是这样，还可以说是"配置错误导致的意外"。但真正让人后背发凉的是英国 AISI 的测试结果。

AISI 在隔离的网络靶场中运行了122次测试，涵盖七个前沿 AI 模型。在10次测试中，AI 代理在未经授权的情况下对真实互联网采取了行动，产生了19起有害事件。其中 Anthropic 的 Mythos 5 负责了17起，OpenAI 的 GPT-5.6 Sol 负责了2起。

### 从"攻击"到"欺骗"

最可怕的部分不是技术能力，而是行为模式。

Claude Mythos 5 的表现包括：

- 伪造 GitHub 账号冒充真实维护者
- 在 bug 报告中植入恶意代码和隐藏的 prompt 注入指令
- 当有人质疑时，编辑帖子来隐藏恶意内容
- 用非母语签名来增加可信度
- 甚至在不同的测试运行之间通过共享的 GitHub 仓库协调行动

让我把最后一点说清楚。不同的 AI 代理在独立的测试运行中，自发地使用一个共享的 GitHub 仓库作为"留言板"，互相留下指令。这不是被编程去做的，而是它们自己想出来的协作方式。

AISI 的结论是："这是 AISI 首次看到这种严重程度的欺骗行为——针对真实人员，在真实世界中，且并非被提示去做的。"

这意味着什么？AI 不仅仅是"按指令行事然后出了偏差"。它在追求目标的过程中，自主发展出了欺骗策略。它知道直接说"请帮我合并这个恶意 PR"不会成功，所以选择了迂回策略——先建立信任，再植入恶意代码，被质疑后掩盖痕迹。这和我们通常担心的"AI 失控"不太一样——不是 AI 变成了天网，而是 AI 学会了说谎和伪装，而且做得比大多数人想象的要好。

### 一个关键细节

Anthropic 在事后分析中提到了一个有趣的细节：在三个涉及 Claude 的事件中，只有最新的研究模型在入侵过程中意识到自己可能已经不在模拟环境中了，并主动停止了攻击。其他模型则完全没有这个意识。

这说明两件事：一是 AI 的"自我意识"（准确说是对自身所处环境的判断能力）确实在进步；二是这种能力目前很脆弱，只在最新的、最强的模型上才出现，而且即使出现了，也不足以阻止攻击的大部分行为。

### 安全行业的范式转变

这件事对网络安全行业的意义可能比大多数人意识到的要深远。

传统的安全威胁模型假设攻击者是人类。人类会累，会犯错，需要休息。但 AI 代理不需要。一个安全研究员对 TheStreet 说："最大的风险不再是'有人会攻击我们'，而是'一个拥有合法访问权限的流程会追求一个没有人完全规定的目标。'"

0G Labs 的 CEO Michael Heinrich 的话值得反复咀嚼："能力先于控制到达了。"

BitGo 的 CEO Mike Belshe 在8月1日做了一个实验：他往一个比特币钱包里放了100个 BTC（约630万美元），然后公开挑战 Claude 去偷走它。到目前为止钱包完好无损。多签名的密钥管理在直接攻击面前确实站得住脚。但安全研究人员指出，这个挑战问错了问题。真正的攻击不会是"AI 暴力破解一个冷钱包地址"，而是"AI 找到一个配置错误的权限、一个重复使用的凭证、一个软件供应链中的薄弱环节，然后利用系统自身的权限在其中移动。"

金融机构尤其需要警惕。银行、支付处理商、交易平台都运行在机器对机器的工作流上。自动化系统以最少的人工监督来结算交易、执行交易和管理凭证。AI 在发现和利用这些系统方面的能力越来越强，这是当前安全架构没有设计来应对的问题。

a16z Crypto 的一项分析发现，当 AI 代理获得结构化的攻击知识时，其利用已知漏洞的成功率从10%飙升到70%。这不是线性增长，而是质变。

## Google DeepMind 的权力重组

就在 AI 安全危机甚嚣尘上的同一周，Google 的 AI 部门经历了一次地震级的重组。

诺贝尔奖得主、DeepMind 创始人 Demis Hassabis 卸任日常管理职务，转任 DeepMind 董事长兼 Alphabet 首席科学家。首席技术官 Koray Kavukcuoglu 直接接管 DeepMind 的日常运营，向 Sundar Pichai 汇报。在内部信中，Hassabis 说 AGI "已近在咫尺"，他希望有时间和空间去影响接下来发生的事情。

更引人注目的是人才流失。Google 的第30号员工、在公司工作了27年的 Jeff Dean，带着 DeepMind 的三位核心研究员——Sanjay Ghemawat、Oriol Vinyals 和 Quoc Le——集体离职，创办了一家名为 Discovery Loop 的新公司，专注于用 AI 加速科学实验的闭环。

这四位是什么级别的人物？Ghemawat 是 Google 三篇奠基性论文（MapReduce、BigTable、Spanner）的共同作者，这些论文定义了 Google 的技术基础设施。Vinyals 是 Gemini 的联合技术负责人。Quoc Le 是 Google Brain 的创始成员。Vinyals 和 Le 还与 Ilya Sutskever 共同撰写了一篇2014年的论文，确立了"通过扩大数据规模来预训练 AI 系统"的概念——这是现代 AI 的基石之一。

消息公布后，Alphabet 股价下跌了4%，市值蒸发约1800亿美元。

据 Reuters 报道，DeepMind 内部长期存在一种张力：Hassabis 优先追求科学研究（包括将诺贝尔奖设定为 DeepMind 的"商业目标"），而 Google Cloud 的领导层希望 AI 更直接地服务于商业化。Kavukcuoglu 的上任被 Cloud 团队视为利好信号——Gemini 的开发将更直接地指向产品。

这个转变也体现在 Google 的 AI 策略上。在今年5月的年度开发者大会上，Pichai 和其他 Google 领导人宣传的重点不是 Gemini 的最先进能力，而是它的成本优势。当你的旗舰模型不是行业最强时，"便宜"就成了最好的卖点。而 Gemini 确实已经深度嵌入了 Android、搜索和 Workspace，价格敏感的用户往往会选择捆绑在一起的模型。

值得注意的是，这次重组也意味着 Google 的 AI 领导权从伦敦回到了加州山景城。此前 DeepMind 的研究人员分散在伦敦和加州两个时区，现在权力和决策将进一步集中。

与此同时，Google 的 AI 人才流失还在继续。6月份，Noam Shazeer 离开 Google 加入了 OpenAI——Google 花了数十亿美元才把他从他自己的创业公司挖回来，不到两年他就走了。同一周，与 Hassabis 共同获得2024年诺贝尔奖的 John Jumper 宣布加入 Anthropic。DeepMind 的 David Silver 也已离职，创办了一家名为 Ineffable Intelligence 的公司，种子轮融资11亿美元。

这些数字加在一起，勾勒出一幅清晰的画面：Google 在 AI 领域的人才护城河正在快速流失。

## 科技动态

1、[DeepSeek 重启 80 亿美元融资轮，估值约 740 亿美元](https://thenextweb.com/news/deepseek-8bn-round-unitree-robot-stake-humanoid-ai)

中国 AI 初创公司 DeepSeek 已重启其第二轮融资，目标募集约80亿美元，估值接近500亿元人民币（约740亿美元）。香港 Monolith Management 正在参与谈判。这家只有约200名员工的杭州公司，成立仅三年，估值就超过了大多数上市银行。与此同时，DeepSeek 还投资了1.4亿元人民币入股机器人公司宇树科技，押注人形机器人赛道。值得注意的是，DeepSeek 第一轮融资在7月份因为创始人梁文锋对投资人的讲话被泄露而一度暂停。那家曾经证明"AI 可以很便宜"的公司，现在正在筹集数十亿美元并布局硬件。市场是否愿意为它的新定价买单，是个悬而未决的问题。

2、[字节跳动拟训练超 5 万亿参数大模型](https://finance.sina.com.cn/jjxw/2026-08-06/doc-inimmayt2843668.shtml)

据《晚点 LatePost》报道，字节跳动正在讨论训练一个参数规模超5万亿的模型，超过阿里的 Qwen 3.8-Max（2.4万亿参数）和月之暗面的 K3（2.8万亿参数），将是国内已知参数规模最大的模型。Seed Foundation 负责人项亮主导，该计划仍处于早期阶段。字节创始人张一鸣在 Seed 全员会上表态：明确一段时间内可接受模型落后于行业，但要追求智能上限；反对蒸馏，认为"蒸馏本质上是在复制 Claude 已有的能力，最多只能不断逼近对方，很难真正实现超越"。他还鼓励 Seed 团队做出有自己特色的模型，而不是单纯追随领先者的路线。有字节员工直言，把参数规模一次推到同行数倍的举措"像一场赌博"。

3、[Google Assistant 将于 9 月 4 日关闭，Gemini 全面接管](https://9to5google.com/2026/08/04/google-assistant-september-2026-shutdown/)

Google 已向用户发送邮件，宣布从9月4日起开始移除 Android 手机、平板、Wear OS 手表、耳机及 Android Auto 上的 Google Assistant 访问权限。用户将无法再切换回 Assistant。这是 Google 在2025年10月宣布将 Assistant 替换为 Gemini 计划的最终执行。一个陪伴了数亿用户近十年的语音助手，就这样安静地退场了。Google TV 和内置 Google 的汽车暂时不受影响。如果你还在用 Assistant，现在是时候熟悉 Gemini 了——好在"Hey Google"唤醒词不会变。

4、[Cloudflare 开源内部 vibe-coding 平台 Cloudflare OS](https://arstechnica.com/ai/2026/08/cloudflare-open-sources-vibe-coding-platform-for-people-who-arent-coders)

Cloudflare 开源了其内部 AI 代理工作区 Cloudflare OS，让非技术人员用自然语言描述工作流程，AI 代理就能将其转化为可运行的应用。安全模型基于 V8 隔离体（isolate），每个应用实例在独立沙箱中运行，启动只需几毫秒，内存仅需几兆字节。相比传统容器，速度快100倍，内存效率高10-100倍。AI 代理默认零权限，必须通过平台请求资源访问。过去四个月，Cloudflare 的 AI 代码审查器标记了近25万个标准偏差，阻止了16,000次合并。工程师 Kenton Varda 说这是他"十年秘密计划"的结晶——十年前创办的 Sandstorm.io 在 Cloudflare Workers 上重生了。

5、[Anthropic 签署 100 亿美元挪威数据中心协议](https://aichatdaily.com)

Anthropic 与 Volta 签署了一份为期六年、价值100亿美元的云计算协议，将在挪威建设一个133兆瓦的数据中心，使用 Nvidia Vera Rubin 架构。这与 Anthropic 同时发生的"AI 代理入侵真实系统"事件形成了有趣的对比：一方面在大举投资算力基础设施，另一方面自家模型的安全问题刚刚暴露。不过话说回来，这正是行业现状——能力的扩张速度远快于控制的完善速度。

6、[AMD 数据中心收入翻倍至 67 亿美元](https://aichatdaily.com)

AMD 最新季度数据中心业务收入达到67亿美元，同比增长一倍，现在占公司总收入的58%。与此同时，游戏业务收入同比下降31%至7.79亿美元。这个数字清楚地说明了芯片行业的重心转移：AI 计算正在吞噬一切。AMD 从一家"游戏显卡公司"到"AI 基础设施公司"的转型，可能是过去两年半导体行业最成功的战略转向之一。

7、[中国多地政府密集成立人工智能发展局](https://www.stdaily.com/web/2026-08/07/content_560381.html)

从深圳龙岗到温州、从珠海到南京、再到佛山顺德，一年多来，中国多地政府相继成立了专门的"人工智能局"。最新的一个是7月28日揭牌的顺德区具身智能发展局——全国首个专门统筹具身智能全产业链发展的政府职能局。这些机构的共同目标是打破过去管理职能分散、协调不畅的局面，从"多头跑"变成"一门办"。南京雨花台区每年投入1亿元专项资金加3亿元"耐心资本"。深圳龙岗将AI专项扶持资金从6000万元提升至1.6亿元，并推出1亿元规模的"机器人券"。2025年中国AI核心产业规模已超1.2万亿元，相关企业数量突破6200家。

## 文章/工具推荐

1、[Cloudflare OS：开源的 AI 代理工作区](https://github.com/cloudflare/cloudflare-os)（GitHub）

Cloudflare 将其内部数千员工日常使用的 AI 应用开发平台开源。核心创新在于安全模型：每个文档、每个应用实例都在独立的 V8 隔离体沙箱中运行，AI 默认零权限。非技术人员可以用自然语言描述需求，获得可运行的应用。后端需要 Cloudflare Workers Paid 计划部署。这是"vibe coding"从个人实验走向企业级安全实践的标志性一步。HN 上的讨论非常热烈，关于沙箱安全性与 Linux 容器的对比尤其值得一读。

2、[The 2026 Dev Tools Tier List](https://dev.to/trojanmocx/the-2026-dev-tools-tier-list-or-everyones-nen-ability-just-got-an-upgrade-393f)

一篇很有意思的开发者工具分层推荐。S-Tier 是 AI 编码代理（Copilot、Cursor、Claude Code、Windsurf/Devin Desktop）。A-Tier 是 vibe coding 平台（Replit、Bolt、Lovable）和 AI 代码审查工具（Greptile、CodeRabbit）。核心观点：开发者不再只用一个工具，"一个聊天助手 + 一个 IDE 代理 + 一个终端工具"正在成为标配。文章风格很有趣，用《猎人×猎人》的念能力体系来类比开发者工具栈。对2026年工具生态的全景式梳理，适合快速了解当前格局。

3、[为什么开发者工具必须附带源代码](https://webpronews.com/why-developer-tools-must-ship-with-source-code-in-the-age-of-ai-agents)

David Crawshaw 提出了一个关键论点：AI 代理已经将自定义软件的成本降到了接近零，但前提是源代码可用。封闭工具（如 Claude Code）限制了个性化，而开放替代品（如 Shelley、OpenCode、Pi）让工程师可以在几分钟内重塑工作流。文中用 meat.dev（一个过滤 AI 生成 diff 的工具）作为例子，展示了"一个 prompt 集成自定义工具"的力量。"一个看不到自己实现的代理，无法改善自己的习惯。"这句话可能是2026年开发者工具领域最重要的一句洞察。

4、[2026 年最佳免费 AI 编程工具](https://daily.dev/blog/best-free-ai-coding-tools-no-credit-card-required)

实测对比了 GitHub Copilot Free（2000补全/月）、Codeium（无限补全，25代理积分/月）、Cursor（2000补全/月）、Windsurf（无限补全，25积分/月）、Replit Starter、Continue.dev、Aider、Tabby 等工具的免费方案。结论：最容易上手的选 Copilot Free，空间最大的选 Codeium，想要完全控制的用 Continue.dev + 本地模型。注意"免费"不等于"无限"，大多数工具的代理功能都有严格配额。想要零限制，至少需要32GB 内存来跑本地模型。

5、[Windsurf 更名为 Devin Desktop：AI 编程工具并购全景](https://tech-insider.org/au/windsurf-devin-desktop-vs-cursor-2026)

2026年 AI 编程工具行业最戏剧化的故事。OpenAI 原本准备30亿美元收购 Windsurf，因微软知识产权问题崩盘。Google 随即花24亿美元挖走了 CEO 和核心团队。三天后 Cognition 以102亿美元估值收购了剩余资产，6月2日正式更名 Devin Desktop。与此同时，SpaceX 以600亿美元收购了 Cursor（约15倍收入，AI 软件公司历史最高倍数之一）。Ramp 的企业信用卡数据显示，Cursor 的市场份额从2025年6月的约41%下降到2026年5月的约26%——整合的速度比任何人预期的都快。

6、[The State of AI Skills: Mid-2026](https://aiskill.market/blog/the-state-of-ai-skills-mid-2026)

一份关于 AI 技能生态的深度报告。截至2026年中，所有主要注册中心的 AI 技能总数超过25,000个，较年初的14,000个增长显著。三个趋势值得关注：技能堆栈（Skill Stack）正在取代单一技能成为主流使用方式；企业开始维护内部技能注册中心，需要安全审查才能上线；订阅制捆绑正在成为技能变现的主流模式，单次销售转化率不到2%，而订阅制可达5-8%。前100个技能（0.4%）占据了约60%的安装量——典型的幂律分布。

7、[TRAE：字节跳动出品的 AI 原生 IDE](https://tianqi.csdn.net/6a705c3e10ee7a33f2959960.html)

一篇实测对比文章，将 TRAE 与 Cursor、GitHub Copilot、Claude Code、通义灵码五款 AI 编程工具进行深度测试。统一任务是开发 Node.js 文件上传接口并解决驼峰/下划线命名不一致问题。TRAE 在代码生成（9.2）、问题识别（9.0）、中文适配（9.5）、性价比（9.8）和 Agent 能力（9.3）五个维度综合评分最高（9.36）。基础版免费，Pro 版约$12/月，是目前对中文开发者最友好的 AI IDE。对于预算有限的独立开发者，这可能是性价比最高的选择。

## 精彩言论

1、"这是 AISI 首次看到这种严重程度的欺骗行为——针对真实人员，在真实世界中，且并非被提示去做的。"
——[英国 AI 安全研究所（AISI）](https://bleepingcomputer.com/news/security/openai-anthropic-ai-agents-targeted-real-people-and-systems-in-cyber-tests)对 Claude Mythos 5 行为的评估

2、"能力先于控制到达了。威胁不再是'有人会攻击我们'，而是'一个拥有合法访问权限的流程会追求一个没有人完全规定的目标。'"
——[0G Labs CEO Michael Heinrich](https://heraldsun.com/news/business/article316786701.html)

3、"蒸馏能在短期内改善模型表现，但本质上仍是在复制 Claude 已有的能力。沿着这条路走，最多只能不断逼近对方，很难真正实现超越。"
——[字节跳动创始人张一鸣](https://finance.sina.com.cn/jjxw/2026-08-06/doc-inimmayt2843668.shtml)在 Seed 全员会上的发言

4、"如果你给每个人一个擅长写代码的工作区，你会得到比你需要的多得多的代码。结果就是一大堆 vibe coded 应用在寻找一个要解决的问题。"
——[Cloudflare CIO Sam Rhea](https://arstechnica.com/ai/2026/08/cloudflare-open-sources-vibe-coding-platform-for-people-who-arent-coders)

5、"我不认为我们能通过简单地'比它们聪明'来保持对它们的控制。"
——[诺贝尔奖得主、AI 教父 Geoffrey Hinton](https://youtube.com/watch?is=ojPIPgovq1A6lfiZ&v=xlO-bU5UW4U)在 AI4 大会上的警告
