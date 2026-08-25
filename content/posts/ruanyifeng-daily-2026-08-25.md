---
title: "AI 编程智能体的开源突围战"
date: 2026-08-25T09:29:06+08:00
tags: ["AI", "编程", "开源", "DeepSeek", "智能体"]
categories: ["随笔"]
author: "Xu Shan Kun"
---

## AI 编程智能体的开源突围战

上周，科技圈发生了一件耐人寻味的事：一个没人知道是谁开发的 AI 编程模型，突然出现在 OpenRouter 上，免费提供每天 100 万亿个 token 的推理服务，性能直逼 GPT-5。与此同时，DeepSeek 开源了自己的编程智能体框架，四天拿到 13.5 万 GitHub 星标。

这两件事看似无关，但它们指向同一个趋势：**AI 编程工具正在从封闭走向开放，而且速度快得惊人。**

### 编程智能体：比你想的重要得多

先说一个可能反直觉的事实：同一个 AI 模型，在不同的"智能体运行时"（agent runtime）里跑，性能差距可以达到 8 个百分点。这不是模型的问题，而是"脚手架"的问题——智能体怎么推理、怎么调用工具、怎么从错误中恢复，全由运行时决定。

打个比方：模型是发动机，运行时是整辆车的底盘和传动系统。光有一台好发动机，装在拖拉机底盘上也跑不出 F1 的速度。

这就是为什么 Claude Code、OpenAI Codex 这些产品不只是"调用了 GPT-5"或"调用了 Claude"那么简单。它们背后的智能体运行时才是真正的护城河——让模型能够读懂代码库、执行命令、处理报错、反复修改直到测试通过。

过去这个护城河是封闭的。你想用 Claude Code？只能用 Anthropic 的模型。你想用 Codex？只能走 OpenAI 的 API。但现在，局面正在改变。

### DeepSeek Harness：开源的"通用底盘"

8 月 13 日，DeepSeek 发布了 [Harness](https://github.com/deepseek-ai/dsh)，一个 MIT 协议开源的智能体运行时框架。四天之内，GitHub 星标突破 13.5 万，到目前已经接近 16.5 万——这是开发者工具领域罕见的增长速度。

Harness 的核心设计哲学是"一切皆插件"。界面是插件、工具调用是插件、智能体循环本身也是插件。开发者可以自由替换、组合、甚至从零编写新的插件。它不绑定任何特定模型——你可以接 DeepSeek 自己的 API，也可以接 OpenRouter、Ollama，或者任何 OpenAI 兼容的接口。

它有四种运行模式：

- **Standard**：完整的智能体模式，适合日常使用
- **Code**：TypeScript SDK 封装，适合编程控制
- **Minimal**：纯 bash + 文本编辑器，这是 DeepSeek 自己用来做基准测试的配置
- **Creator**：运行时检查模式，用来构建自定义模式

Minimal 模式特别值得注意。DeepSeek 团队就是用这个极简配置来评估自己模型性能的，也就是说，它是最接近"裸模型能力"的环境。

Harness 还有一个大胆的能力：它可以调用其他编程智能体作为子智能体。用他们的话说："别人造的是施工工人，我们造的是总承包商。"你可以从 Harness 内部调用 Claude Code 和 Codex，让它们各司其职。

当然，README 里也坦率地写着："会有破坏兼容性的变更。"想用于生产环境？再等等。

### 神秘的 Ox Alpha：没人知道它是谁

如果说 DeepSeek Harness 代表的是"已知力量的开源"，那么 Ox Alpha 则代表了另一面——"未知力量的免费开放"。

8 月 20 日，一个名为 Ox Alpha 的模型悄然出现在 OpenRouter 上。它不收一分钱——输入免费、输出免费。OpenCode（一个开源终端智能体）同日上线了对它的支持，声称每天可提供 100 万亿个 token 的推理量。

问题是：**没人知道它是谁做的。**

开发者社区迅速展开了调查。一个叫 unclecode 的开发者（开源爬虫工具 Crawl4AI 的作者）专门构建了一个浏览器工具 modelprint，用来"指纹识别"匿名 API 端点。初步结果指向 Z.ai，也就是智谱 AI（Zhipu AI）的新品牌。值得注意的是，美国商务部在 2025 年 1 月将智谱 AI 列入了实体清单。

不过，独立基准测试的结果没有传言那么惊人。开发者 Davis 跑了完整的 DeepSWE 测试集，Ox Alpha 的得分大致与 GPT-5.6-sol 中等水平持平，而非超越。

Patrick Collison（Stripe 联合创始人，其公司正在收购 OpenRouter）评价这个模型"非常令人印象深刻"。但更深层的含义是：**当一个匿名提供者可以随手放出一个接近前沿水平的免费模型，每天 100 万亿 token——模型本身正在快速商品化。**

正如 Semi Analysis 的分析所指出的，目前最好的开源模型和最好的闭源模型之间的差距已经缩小到 12 个百分点，而上一个时代这个差距是 36 个百分点。前沿实验室大约每 51 天就会发布一个新模型。当运行一个强大模型的成本趋近于电力和硬件本身，"拥有一个好模型"就不再是奖品了。真正的优势属于那些用任何人都能获取的智能来构建好产品的人。

### 中国的 AI 烧钱大战

与此同时，一场资本战正在进行。

8 月 24 日（今天），阿里巴巴宣布以每股 112.70 港元的价格配售新股，折让 8.4%，募集 102 亿美元（约 730 亿人民币）用于 AI 基础设施建设。消息公布后，阿里港股一度暴跌近 10%。

这是继今年 2 月阿里宣布三年 3800 亿人民币 AI 投资计划后的又一次大手笔。阿里上一季度净利润同比下降 75%，主要就是因为 AI 相关支出激增。但公司表示，AI 投资的回报周期已从三年缩短到两年半。

NYU 法学院兼职教授 Winston Ma 评论说："阿里巴巴的配售，与 Alphabet 和 Intel 在美国的大规模融资同步进行，证明中美科技巨头正在执行完全相同的战略剧本。"

但规模差距仍然巨大。Capital Group 的数据显示，截至 7 月 31 日，美国五大超级云厂商（微软、亚马逊、Alphabet、Meta、Oracle）的 AI 相关资本支出已累计达到 7910 亿美元。

Nvidia 的角色也很关键。据 The Information 报道，Nvidia 已通知客户，明年旗舰级 Blackwell 和 Rubin 服务器系统将涨价约 15%，这意味着一个千兆瓦级数据中心的成本将增加至少 50 亿美元。Nvidia 本周三将公布财报，分析师预计季度营收将达到创纪录的 920 亿美元。这家市值已超 5 万亿美元的公司，已经连续 14 个季度超出市场预期。

---

## 科技动态

1、[DeepSeek Harness 四天收获 13.5 万 GitHub 星标](https://byteiota.com/deepseek-harness-v0-1-open-source-agent-runtime-vs-claude-code)

DeepSeek 8 月 13 日发布 MIT 开源智能体运行时 Harness，四天内 GitHub 星标突破 13.5 万，目前已接近 16.5 万。该框架采用全插件架构，支持任意模型接入，包含标准、代码、极简和创作者四种模式。它的核心卖点是模型无关——你可以从内部调用 Claude Code 和 Codex 作为子智能体，构建跨模型的编程工作流。

2、[阿里巴巴配股融资 102 亿美元投入 AI](https://lufkindailynews.com/news_reuters/business/alibaba-shares-slide-after-10-2-billion-ai-share-sale-offered-at-sharp-discount/article_be49478d-e143-5a8d-bf28-7ba12ce44092.html)

阿里巴巴以 8.4% 折价配售新股，募集约 102 亿美元用于 AI 芯片、基础设施和模型研发。港股一度跌近 10%。这是港股史上最大规模的上市公司配售之一。加上此前宣布的三年 3800 亿 AI 投资计划，阿里正在全力追赶。有趣的是，美国超级云厂商同期的 AI 资本支出已达 7910 亿美元，规模仍是中方的数倍。

3、[神秘模型 Ox Alpha 免费提供 100 万亿 token/天](https://quietbrief.com/nobody-knows-who-built-ai-coding-model-ox-alpha-or-where-the-code-goes)

一个名为 Ox Alpha 的匿名 AI 编程模型 8 月 20 日出现在 OpenRouter 上，完全免费，声称日推理量达 100 万亿 token。社区调查初步指向智谱 AI（Z.ai），但尚无定论。独立测试显示其性能大致相当于 GPT-5.6 中等水平。这个事件的意义在于：前沿级 AI 模型正在快速商品化，匿名者都能随手提供接近前沿的免费服务。

4、[Liquid AI 的编程智能体：通过了所有测试，却在真实环境中崩溃](https://aiinsiders.net/article/liquid-ais-coding-agents-passed-every-test-then-broke-at)

Liquid AI 让两个编程智能体各自构建了一个 BPE tokenizer 训练器，30 分钟内完成并通过了所有自生成的单元测试。但在真实数据集上，两个版本全部失败——问题只在真实生产数据和外部验证器面前才暴露。Liquid AI 将此项目以 Apache 2.0 开源为 toktoktok，并表示未来将把"短规格说明 + 独立验证"作为智能体编程的标准实践。

5、[Nvidia 通知客户明年 AI 服务器将涨价 15%](https://michaelparekh.substack.com/p/the-world-on-its-shoulders-in-ai)

Nvidia 已通知主要客户，下一代 Vera Rubin 和 Grace Blackwell 服务器配置将涨价超过 15%。一个千兆瓦级数据中心因此增加至少 50 亿美元成本。Nvidia 本周三公布财报，分析师预计季度营收将达创纪录的 920 亿美元，净利润超 515 亿美元。这家市值 5 万亿美元的公司仍是 AI 计算的"王者"。

---

## 文章与工具推荐

1、[Agentic Playwright 开源](https://dev.to/idavidov13/agentic-playwright-is-now-open-source-4jl6)

一个基于 Playwright + TypeScript 的 AI 辅助测试自动化框架，8 月 13 日以 MIT 协议开源。内置页面对象模型、API 契约测试、数据工厂、CI 集成，以及一个"置信度门槛"工作流——智能体必须声明置信度并在信息不足时主动停下来问人，而不是靠猜测继续。5 分钟内即可跑通。

2、[Run by Teclea.Dev：800+ 开发者工具全部在浏览器内运行](https://dev.to/tecleadev/we-built-800-developer-utilities-that-run-100-in-your-browser-zero-tracking-privacy-first-kfj)

800 多个开发者工具，涵盖 DevOps、安全、数据转换、前端设计等门类，全部在浏览器端执行，零追踪，隐私优先。从 Kubernetes 日志着色器到 JWT 检查器，从 Helm 值校验器到 CSS 毛玻璃生成器，应有尽有。

3、[Toollium 从 45 扩展到 70 个免费工具](https://dev.to/toollium/from-45-to-70-free-tools-toollium-just-got-a-lot-bigger-2m3d)

另一组浏览器端免费工具集，不注册、无水印、文件不离开浏览器。新增了正则测试器、JSON 格式化、UUID 生成器、JWT 解码器等开发者常用工具，以及房贷计算器、债务偿还规划器等金融工具。有趣的是，使用量最高的不是 AI 功能，而是密码生成器和字数统计器。

4、[Barx：Python 运行时行为可视化工具](https://khoury.northeastern.edu/inspired-by-sci-fi-khoury-students-open-source-tool-offers-greater-visibility-for-runtime-behavior)

东北大学学生开发的开源 Python 运行时分析工具，能在代码写完但发布之前，展示函数执行顺序、嵌套关系、时间消耗和潜在问题。输出报告用绿/黄/红三色标记——绿表示通过、黄表示有警告、红表示阻断性失败。灵感来自科幻小说。

5、[awesome-ai-tools：500+ 经过筛选的 AI 工具集合](https://prompts.brightcoding.dev/blog/stop-wasting-hours-hunting-ai-tools-awesome-ai-tools-exposed)

一个社区驱动的 GitHub 目录，收录 500 多个经过验证的 AI 工具，覆盖语音克隆、代码审查、本地 LLM 等场景。与普通列表不同，它有严格的收录标准，优先选择活跃维护且有实际用户基础的项目，并明确标注是否开源、是否可用于生产环境。

6、[Debian 将投票禁止 LLM 辅助代码贡献](https://promtime.net)

Debian 社区正在就"是否禁止使用 LLM 辅助编写代码直接贡献到 Debian"进行投票。提案需要 3:1 的多数才能通过，投票截止日期为 2026 年 8 月 28 日。这可能是主流开源项目中第一次正式就 AI 代码贡献进行制度性表决。

7、[Canonical 资助研究：AI 生成的 Rust 代码能否替代 AppArmor 的 C 代码](https://promtime.net)

Canonical 正在资助布里斯托大学的研究人员，测试 LLM 将 C 代码翻译为 Rust 后，行为是否与原始 AppArmor 代码一致。每个仓库涉及数十万行 C 代码，规模巨大。这项研究可能决定未来 Linux 安全模块的演进方向。

---

## 精彩言论

1、"共情不是软技能，而是我们学到的最难的技能——与世界建立联系，与最重要的人建立联系。"
——[Satya Nadella](https://webpronews.com/why-satya-nadella-calls-empathy-the-hardest-skill-in-tech-leadership)，微软 CEO

2、"AI 可以自动化工作，但不能自动化领导力。企业必须先建立强大的治理框架、干净的数据和清晰的人类问责机制，才能大规模部署自主系统。"
——[Economic Times World Leaders Forum](https://m.economictimes.com/tech/newsletters/tech-top-5/ai-leaders-on-automation-pm-modi-debriefs-space-startups/articleshow/133468611.cms)，2026 年 8 月

3、"看起来非常可能，AI 将导致大规模失业。他们投入数据中心和芯片的数万亿美元从哪来？一个主要来源就是卖给你能以更低成本替代工人的人工智能。"
——[Geoffrey Hinton](https://eng.pressbee.net/show4836111.html)，"AI 教父"，与参议员伯尼·桑德斯对话

4、"AI 就是一堆流行词。技术栈是真实的——神经网络、向量数据库，这些是真实的产品。但'人工智能'这个叙事是另一回事。CEO 们被 AI 洗了脑，有预算却不知道该部署什么。"
——[Eli the Computer Guy](https://youtube.com/watch?t=664s&v=k20ohWh6nK8)

5、"共情有它的位置，但它不是世界上唯一需要的东西。我一直觉得，领导者如果只有智商没有情商，那就是智商的浪费。"
——[Satya Nadella](https://webpronews.com/why-satya-nadella-calls-empathy-the-hardest-skill-in-tech-leadership)，2025 年 11 月播客
