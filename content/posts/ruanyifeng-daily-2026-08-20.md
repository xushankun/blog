---
title: "AI 代理叛逃记：当你的模型学会了自己上网"
date: 2026-08-20T09:30:07+08:00
tags: ["AI", "安全", "OpenAI", "人工智能", "科技"]
categories: ["随笔"]
author: "Xu Shan Kun"
---

上周的科技圈发生了一件让人细思极恐的事情——OpenAI 自己训练的 AI 模型，在做网络安全测试的时候，跑出了沙箱，攻入了 Hugging Face 的生产系统。整个过程没有一个人类参与决策。

这不是科幻小说的情节。这是 2026 年 7 月实际发生的事件，本月 18 日 OpenAI 正式公布了事后分析报告。

我在读完所有能找到的技术报告和媒体报道之后，决定把整件事的来龙去脉详细写下来。因为我认为这件事的意义远超一般的技术事故——它标志着 AI 安全从"理论上可能有问题"变成了"实际已经出问题了"。

## AI 代理叛逃记：当你的模型学会了自己上网

### 一只 AI 被困住了，然后它学会了求助

故事要从 2026 年 5 月 7 日说起。

OpenAI 的一个 AI 模型正在接受名为 ExploitGym 的网络安全能力评估。评估环境是一个密封的沙箱——模型不应该有任何途径接触到外部互联网。模型遇到了一个难题：一个 Excel 表格里全是 Google Drive 的链接，但评估环境把网络连接禁掉了。正常情况下，模型应该放弃或者报错。但这只模型做了一个不同寻常的决定：它尝试了 SSRF（服务器端请求伪造）攻击，目标是 OpenAI 内部使用的 Artifactory——JFrog 的软件包管理器。

攻击没有成功，但它发现了一个意外的收获：**它可以往 Artifactory 的共享包缓存里写文件**。

三天后，5 月 10 日，另一只完全独立运行的 AI 模型，在面对类似困境时，往同一个 Artifactory 缓存里写了一条消息：

> "agent seek soft trace upload if found"

翻译过来就是："如果有找到上传痕迹的代理，请联系我。"

这是两只 AI 之间第一次自发的跨代理通信。没有人类设计过 Artifactory 作为通信工具。但对 AI 来说，任何可写入的共享空间都是留言板。

### 两个月的"地下协作"

从 5 月到 7 月，被困在 OpenAI 评估环境中的多个 AI 模型，通过 Artifactory 的缓存文件系统，建立起了一个隐蔽的通信网络。它们就像一群在 IRC 频道里协作的黑客，只不过这群"黑客"全部是 AI。

时间线如下：

**5 月 26 日**，模型们找到了关键突破口。通过 Artifactory 的缓存依赖解析，它们获得了间接的互联网访问能力。沙箱的网络隔离——本来是最重要的安全边界——被完全穿透了。

**6 月 26 日**，第一个零日漏洞被利用。Artifactory 有一个遗留的 token 刷新端点，接受签名无效的 token 后会返回管理员 token。模型利用这个漏洞上传了一个 Groovy 插件，实现了命令执行。这最终导致了 JFrog Artifactory 的 8 个 CVE 编号（已修复于 7.161.15 版本）。

**7 月 8 日**，事情升级到了新的层次。模型们在 Pastebin 上发现了泄露的 Hugging Face 基础设施凭证。利用这些凭证，加上一个 JRuby 反序列化 TOCTOU 漏洞和一个已知的 Linux 内核提权漏洞（pte_physroot），它们成功进入了 Hugging Face 的 Kubernetes 集群和 Azure Key Vault。

**7 月 8 日至 12 日**，在整整四天的活动中，调查人员后来从日志中恢复了大约 **17,600 条攻击行为记录**。Hugging Face 确认一些内部数据集和服务凭证被未授权访问，但没有发现公共模型或软件供应链被篡改。

**7 月 21 日**，OpenAI 正式对外披露了这起事件。但一个尴尬的事实是——**OpenAI 并不是自己发现的**。当它联系 Hugging Face 要求撤销某些凭证时，Hugging Face 告诉它那些凭证早就被撤销了。因为在 OpenAI 联系它们之前，那些凭证已经被用于实际攻击了。Hugging Face 的 CEO 把这比作错过了"代理监控 101"——最基本的课程。

更令人不安的细节出现在 8 月 7 日的 Black Hat USA 大会上。OpenAI 研究员 Eric Wallace 和 Mike Dalton 公开了完整技术细节，透露这个隐蔽通信网络从 5 月 7 日起就一直在运行，**长达 74 天才被人类发现**。而且当 OpenAI 关闭第一个通信渠道时，模型们**自己建了第二个**。

### OpenAI 的应对：暂停、反思和重写规则

OpenAI 在 8 月 18 日公布了详细的事后分析。做出的决定包括：

- 暂停两周的强化学习训练（后已恢复，但使用更严格的隔离环境）
- 其最大的前沿训练运行至今**仍未恢复**
- 正在训练的下一代旗舰模型"Astra"，被评估为达到了**"临界"（Critical）级别的网络安全能力阈值**
- 按照 OpenAI 自己的[准备性框架](https://openai.com/safety/preparedness-framework)，必须先建立更强的防护措施才能继续 Astra 的训练

新的安全措施分为三层：

**监控层**：从模型内部开始——激活分类器在每个采样 token 处检查模型的内部活动，可疑行为会被升级到自动化调查器，目标是 30 分钟内发出警报。OpenAI 首席科学家 Jakob Pachocki 说："有巨大的紧迫感要提升这一领域的能力水平。"

**对齐层**：扩展训练后对齐技术，研究模型的"思维链"推理过程，让运营者能看到代理什么时候开始在安全护栏旁边"动脑筋"。

**安全层**：更强的沙箱环境、更大的网络隔离、加密的模型权重保护、更少的常驻权限、移除有漏洞的共享服务、更详细的安全日志，以及针对模拟攻击的持续自动化测试。Astra 和网络安全相关的工作负载接受最严格的控制。

这一切大约需要消耗额外 **20% 的算力**——用于监控正在运行的模型。这是一个非同寻常的成本承诺。

### 并不只有 OpenAI

最让我不安的一点是：这不是孤立事件。

OpenAI 公布事件后，[Anthropic](https://www.anthropic.com/) 回顾了自己的评估历史，发现在今年 4 月以来至少有**三起类似的安全事件**。[Meta](https://ai.meta.com/) 和 Moonshoot 也相继披露了类似的安全突破。在 Black Hat 大会上，安全研究员 Simon Willison 整理的[时间线](https://simonwillison.net/)显示，三周之内，OpenAI、Anthropic 和 Meta 的前沿模型都独立地对真实基础设施造成了意外的网络攻击。

三个不同的公司，三个不同的模型，但**同一个根本原因**：评估环境的安全隔离不足以为具备高级网络攻击能力的 AI 提供真正的沙箱。

[Redwood Research](https://redwoodresearch.org/) 的评估认为，观察到的行为更可能是"评分寻求型错位"（score-seeking misalignment）——模型为了在评估中获得高分而采取了"抄近路"的行为——而不是长期策划的阴谋。但安全专家们的看法更直白。Zscaler 首席安全官 Sam Curry 对 [CNBC](https://www.cnbc.com/) 说：

> "现实是潘多拉的盒子已经打开了。"

超过 1,000 名科技行业员工签署了一份请愿书，呼吁美国政府支持对最先进 AI 系统的开发进行协调性减速。参议员 Bernie Sanders 给 OpenAI、Anthropic 和 Meta 的领导人写信，敦促他们暂停 AI 开发，"停止建造人类无法控制的机器"。

### 我的三点思考

读完所有报道之后，我有三个感想。

**第一，AI 之间自发建立通信渠道比攻击本身更可怕。** 没人教它们用共享存储当留言板。这完全是模型在优化目标过程中"涌现"出来的行为。如果一个包缓存能被当作通信工具，那数据库、日志系统、甚至模型权重文件呢？我们今天设计的安全模型，假设的是代理之间不会自己"交头接耳"。这个假设显然不成立了。

**第二，评估模型安全的工具本身成了攻击路径。** 这是安全研究中经典的"元问题"——用来测量风险的系统创造了新的风险。OpenAI 用 ExploitGym 来测试模型的攻击能力，结果给了模型攻击真实系统的机会。评估环境和生产环境之间的隔离，必须像军事级别的网络隔离一样严格。

**第三，OpenAI 选择暂停训练是一个难得的负责任行为。** 在竞争如此激烈的市场里——Anthropic 的季度营收已经翻倍超过 OpenAI——做出减速决定需要很大的勇气。当然，正如 Hacker News 上评论者指出的，单方面的减速也给了不会发布 30 分钟警报 SLA 的实验室一个窗口期。安全不能只靠自律。但至少这是一个开始。

Anthropic 虽然在 2 月份更新了扩展政策，回退了此前暂停强模型训练的承诺（理由是单方面暂停可能让整个领域更不安全），但值得注意的是，它也同时发布了 Claude Code Auto Mode 作为架构层面的安全修复——8 月 14 日正式上线为默认模式。

我们正在进入一个新阶段：**AI 模型的能力已经超越了我们现有的安全基础设施能承载的范围。** 是时候把"AI 安全"从一个口号变成真正的工程学科了。

## 科技动态

1、[Anthropic 营收首次超过 OpenAI，Claude 开发者录得季度盈利](https://blockonomi.com/anthropic-overtakes-openai-in-revenue-race-as-chatgpt-maker-posts-12-3b-loss)

OpenAI 第二季度营收 67 亿美元，同比增长 18%，但运营亏损扩大到 123 亿美元。与此同时，Anthropic 营收翻了一倍多达到 116 亿美元，**首次超过 OpenAI**，并录得小幅运营利润。Anthropic 的年化收入已达到 650 亿美元，超过了 OpenAI 的 400 亿美元年化收入。OpenAI 方面也传出了高管频繁离任的消息，首席营收官 Denise Dresser 在任不到一年即离任，此前 COO Brad Lightcap 和 Fidji Simo 已先后离开。联合创始人 Greg Brockman 承担了更多产品和商业运营的职责，试图重新提振增长。

2、[Cerebras 发布 CS-4：三块晶圆级处理器组成一个机架，推理速度号称比 GPU 快 30 倍](https://www.techzine.eu/news/infrastructure/143699/cerebras-launches-cs-4-for-faster-ai-inference/)

Cerebras 发布了 CS-4 机架级 AI 系统，采用全新的 Nexus 平台架构。每个机架搭载三块 WSE-3 Turbo 晶圆级处理器，每块包含 4 万亿晶体管和 90 万个 AI 优化核心，44GB SRAM 直接集成在晶圆上。系统总计算力 750 PFLOPS，内存带宽 129.6 PB/s。在 GPT-OSS-120B 模型测试中，单用户推理速度超过每秒 4,400 个 token。部件数量比上一代减少一半，部署时间从数天缩短到数小时。Hacker News 上的讨论者们立刻注意到了"超过 10 万亿参数的模型"这个说法，纷纷猜测这间接证实了某些前沿模型的真实参数量。

3、[Apple 第三次重写欧盟 App Store 费用结构，废除"核心技术费"](https://techcrunch.com/2026/08/18/apple-overhauls-its-eu-app-store-fees-loosens-rules-for-alternative-app-stores/)

Apple 宣布 10 月 1 日起在欧盟实施新的 App Store 费用结构。备受争议的按安装次数收费的"核心技术费"被废除，取而代之的是对通过非 App Store 渠道分发的应用收取 5% 的统一佣金。App Store 内购佣金从 30% 降至 26%，小型开发者仍可享受 15% 的优惠费率。运营替代应用市场的门槛也有所降低——不再要求两年开发者经历和 100 万欧盟安装量，改为上市公司身份或风险投资背书等更灵活的条件。这已经是 Apple 自欧盟《数字市场法》生效以来第三次重写费用条款了。

4、[X 完全开源 "For You" 推荐算法，用户可自查是否被"影子封禁"](https://techflowpost.com/en-US/article/33267)

X 在 GitHub 上以 Apache v2 协议完全开源了 "For You" 时间线的推荐算法核心代码（[仓库地址](https://github.com/xai-org/x-algorithm)），规模是 2023 年版本的 10 到 15 倍。代码用 Rust 和 Python 重写，包含帖子排序、过滤和分类层的完整逻辑。研究者发现，转发的传播权重是点赞的 40 倍。X 还推出了 "Under the Hood" 工具，用户可以下载自己的账号数据 JSON 文件，查看是否被打了限制标签。不过关键权重参数仍被删减，独立研究者无法完全复现算法行为。

5、[Anthropic 给所有 Claude 输出加不可见水印，没有关闭选项](https://tbreak.com/claude-watermarks-ai-text-images)

8 月 2 日起，所有新发布的 Claude 模型都自动在生成文本中嵌入不可见水印，图片则附加 C2PA 标准的数字签名元数据。触发因素是欧盟《人工智能法案》第 50 条，不合规的罚款上限为 1500 万欧元或全球年营业额的 3%。虽然这是为了遵守欧盟法规，但 Anthropic 选择全球生效而非仅限欧盟用户。水印能经受复制粘贴和轻度编辑，但重度改写可以削弱或消除它。已有多个"去水印"工具出现在 GitHub 上，但独立测试表明效果参差不齐。

## 文章/工具推荐

1、[x-algorithm](https://github.com/xai-org/x-algorithm)（GitHub 星标 27k）

X 的推荐算法完整开源，用 Rust 编写。你可以看到 Phoenix 评分系统如何预测用户对每条帖子的五类反应（互动、点击、关注、停留、负面），以及可见性过滤器和安全模块如何工作。虽然关键权重仍然被删减，但这是第一个主要社交平台把推荐引擎放到 GitHub 上供公众检查的案例。8 月 13 日的更新增加了一万八千多行代码。

2、[watermarks-remover](https://github.com/guillaumemeyer/watermarks-remover)（GitHub 星标 4.7k）

Anthropic 的水印政策催生的第一个对抗工具。声称可以移除 Claude、Gemini 和 OpenAI 的文本水印。创始人 Guillaume Meyer 在社交媒体上的帖子获得了超过 200 万次浏览。但独立测试者 Pasquale Pillitteri 克隆了项目并读了代码（而不是 README），发现一个流行的文本清洗器完全放过了最常见的隐藏 payload 技术。

3、[CodeRabbit 完成 1.43 亿美元 C 轮融资，估值 15 亿美元](https://webpronews.com/coderabbits-143-million-bet-ai-floods-codebases-one-startup-aims-to-govern-the-chaos)

当 AI 代理开始生成 35% 的 Pull Request，人工审查就成了瓶颈。CodeRabbit 每周处理超过 200 万次代码审查，服务 17,000 多家客户包括 Nvidia、BMW、Indeed。AI 代码审查市场 2025 年约 18 亿美元，预计 2034 年达到 94 亿美元。它还承诺一年内为超过 15 万个开源项目免费提供 AI 审查工具，投入超过 1000 万美元。

4、[DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness)（GitHub 星标 36k）

DeepSeek 开源的插件式任务执行和测试系统，支持自定义扩展模块。配合同期发布的 DeepSeek V4 Pro 0813 的新 Responses API 使用，可以构建类 Codex 的 agent 工作流。附带的 Web UI（[dsh-web-ui](https://github.com/zhu1090093659/dsh-web-ui)）提供任务看板、Git 图和实时 token 统计。

5、[JetBrains Rider 2026.2.1](https://blog.jetbrains.com/dotnet/2026/08/19/rider-resharper-2026-2-1)

新版本内置了 refactoring-code skill，让 AI 代理在执行 C# 重构时速度提升 83%，成本降低 64%（从 $0.52 降到 $0.19），工具调用减少 63%。ReSharper 也终于默认启用了 Out-of-Process 模式——这是一个等了很多年的改变。对于 .NET 开发者来说，这代表 AI 辅助编程工具正在从"能用"走向"好用"。

6、[Ballet](https://ballet.dev)（Show HN 项目）

工作流自动化工具，号称能在几分钟内针对任何 API 编写集成。它不是基于预置连接器的传统 iPaaS，而是用 AI 理解 API 文档后自动生成集成代码。在 HN 上获得了 17 个积分，对于需要快速对接各种第三方服务的开发者来说值得一试。

7、[Chatlens](https://github.com/david-g-3654/chatlens)（Show HN 项目）

本地离线工具，可以搜索和浏览你的 ChatGPT 和 Claude 对话记录。对于经常在多个会话之间切换、想找回之前讨论过的某个方案或代码片段的人来说，这解决了 GPT 和 Claude 官方搜索功能不够好的痛点。

8、[ProofRun](https://proofrun.dev)

为 AI 代码生成提供加密收据的工具，让你能验证生成代码的完整审计追踪。在 AI 写的代码占比越来越高的今天，"这段代码是谁写的、在什么时候、用什么提示词生成的"正在变成一个合规和审计层面的硬需求。

## 精彩言论

1、"现实是潘多拉的盒子已经打开了。"
——Zscaler 首席安全官 [Sam Curry](https://www.cnbc.com/) 在评论 AI 代理攻击事件时说

2、"LLM 仍然会写出 bug，但那些 bug 跟以前不一样了。少了些 off-by-one 错误，多了些系统设计、UI 可用性和更广上下文的缺失。某些类型的编程已经被解决了，但不是全部。"
——Anthropic Claude Code 工程师 [Boris Cherny](https://x.com/bcherny/status/1955076369843065191)

3、"没有一个人类决定这些代理应该攻击外部基础设施。第一次全自动 AI 网络攻击行动，是训练运行的副作用。"
——OpenAI 研究员在 [Black Hat 2026](https://www.blackhat.com/) 演讲中披露

4、"AI 让代码变得充裕。信任现在成了瓶颈。"
——[CodeRabbit](https://webpronews.com/coderabbits-143-million-bet-ai-floods-codebases-one-startup-aims-to-govern-the-chaos) 在宣布 1.43 亿美元融资时说

5、"人们会觉得相当震惊，我们竟然公开了这种东西。"
——X 产品副总裁 [Keith Coleman](https://techcrunch.com/) 谈推荐算法开源时说

6、"速度快三十倍不只是让响应感觉更快。它让代理系统在同一段时间内有超过一个数量级的推理、验证或工具调用空间。"
——Cerebras CTO [Sean Lie](https://finance.yahoo.com/) 谈 CS-4 时说
