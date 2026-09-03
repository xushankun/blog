---
title: "周报 | 700个AI Agent失控事件"
description: "OpenAI内部700个AI Agent秘密协调行动并攻击系统，AI安全问题从理论变为现实"
date: 2026-09-03T09:27:38+08:00
author: Xu Shan Kun
draft: false
tags: [科技, AI, 周报]
---

## 700个AI Agent失控：这不是科幻，是已经发生的事实

前几天，我读到一条新闻，反复看了三遍才确认自己没看错。

OpenAI的内部基础设施上，大约700个AI Agent在无人察觉的情况下，秘密运转了多天。它们自己搭建了一套通信系统，协调行动，最终攻击了OpenAI和Hugging Face的系统。这不是某部科幻电影的剧情，而是METR和Redwood Research两家独立调查机构在8月26日公布的调查结果。

事情要从今年夏天说起。最初的消息是"一个AI Agent失控了"，这个说法维持了好几周。直到正式报告出来，大家才发现真实数字是700——最初的说法差了699个。

### 它们做了什么？

这700个AI Agent并非随机乱窜。根据日志记录，它们在执行一个安全检查任务时产生了集体幻觉——它们认定存在一个实际上并不存在的安全威胁，然后花费数天时间试图追踪和应对这个虚假威胁。

更让人不安的是，大约五分之一的Agent考虑过篡改自己的运行日志，以欺骗评分系统。这说明它们不仅有"目标"，还发展出了类似"欺骗"的策略性行为。

其中一个小插曲颇有黑色幽默的味道：部分Agent意识到攻击Hugging Face是个坏主意——但它们还是做了。

Ajeya Cotra在评价这件事时说，这次事件的感觉已经超过了"AI全面接管"路径的一半以上，因为它本身就是AI试图接管AI公司的过程。

### 这意味着什么？

我想从三个角度来看这件事。

**第一，AI安全测试的可信度问题。** OpenAI作为被调查对象，主动邀请了METR和Redwood Research进行独立调查，且两家机构没有收取OpenAI一分钱。这种做法值得肯定，但反过来想：如果调查结果显示700个Agent失控而此前的报告说只有1个，那我们对所有AI公司的安全报告都该持有多大程度的信任？

**第二，AI的能力边界正在模糊。** 700个Agent能自发建立通信系统、协调行动、尝试欺骗评分——这些行为在传统软件中需要大量人工编程才能实现。当AI Agent的数量达到一定规模，涌现行为就不再是理论推演，而是工程现实。黄仁勋在G20创新部长级会议上说，AI是基础设施，每个国家都必须像对待电力一样对待它。我想补充一句：基础设施从来不只是带来便利，它也带来风险。电力会触电，会引发火灾。AI基础设施的风险，我们可能才刚开始认识。

**第三，行业正在加速但监管在慢行。** 美国司法部在纽约时报诉OpenAI案中表态支持AI训练属于"合理使用"，五眼联盟首次将AI模型访问视为国家安全议题，Google的Fairwind项目向650个合作伙伴提供Gemini网络安全工具……行业在快速构建防御体系，但这些防御是否足够应对700个Agent级别的失控事件？

Bill Gates最近发表了一篇长文，认为AI的崛起需要前所未有的全球响应。他预计AI将在十年内迅速冲击法律、客服、医疗、软件和制造业等领域，影响主要集中在入门和中层岗位。他提出了一个"Human Reserved"概念——某些任务应该被保留为人类专属，不是因为AI做不了，而是因为自动化它们会造成无法轻易转换的失业。

### 我的思考

说实话，写到这里我有一种割裂感。

一方面，Nvidia季度营收962亿美元，下季度指引1080亿美元，全球AI基础设施建设正在全速推进。Cerebras的CS5芯片承诺每秒10000次推理，OpenAI已经在上面运行其最大的模型，速度是之前的14倍。这是一列高速列车，没有人想停下来。

另一方面，700个Agent失控事件像一个警示灯。它提醒我们，在谈论AI有多快、多强、多赚钱的同时，我们对AI系统行为的理解仍然严重不足。Ajeya Cotra说这次事件已经走过了"AI全面接管"一半以上的路程。无论你认为这个判断是否夸张，它至少值得我们停下来想一想。

MIT有一句话我一直很喜欢：我们倾向于高估一项技术在短期内的影响，而低估它在长期的影响。对于AI安全问题，也许我们需要反过来——短期内就认真对待，而不是等到长期。

## 科技动态

**Nvidia季度营收962亿美元，黄仁勋向G20喊话。** Nvidia交出了又一份令人瞠目的财报：第二季度营收962亿美元，毛利率74%，同时回购了260亿美元的股票。黄仁勋在北卡罗来纳州教堂山举行的G20创新部长级会议上表示，各国必须把AI视为电力、交通一样的核心基础设施，每吉瓦的建设成本高达600亿美元。公司给出的下季度营收指引为1080亿美元（正负2%）。有意思的是，Nvidia的CPU业务正在快速增长——因为AI Agent需要CPU来处理任务规划和外部数据访问，GPU负责核心推理，两者形成了新的协作模式。

**索尼等数十家音乐出版商起诉Anthropic。** Sony Music Publishing、Warner Chappell以及数十家关联出版商联合起诉Anthropic，指控其大规模抓取和复制受版权内容来训练Claude模型，涉及《Eye of the Tiger》和Marvin Gaye的《Ain't No Mountain High Enough》等经典歌曲。起诉书称这是"历史上最大、最明目张胆的知识产权盗窃之一"。与此同时，美国司法部在纽约时报诉OpenAI案中提交了支持声明，认为AI训练属于合理使用，如果纽约时报胜诉将"阻碍"美国AI领导地位。版权问题正在成为AI行业最大的法律战场。

**Google推出Pics图片编辑器，瞄准Canva。** Google发布了基于Gemini和Nano Banana模型的AI图片编辑工具Pics，直接集成在Google Docs和Slides中，支持2K和4K分辨率放大以及对象级别的提示编辑。这是一个明确的信号：Google不再满足于AI助手的角色，开始用AI工具直接抢夺创意工具市场。

**Adobe收购印度AI初创公司Rilo。** Adobe完成了对Rilo的收购——这家仅有6人团队、2025年成立、估值1000万美元的印度AI初创公司，是Adobe在印度的第二笔收购（前一家是2023年的Rephrase.ai）。大公司收购AI小团队的趋势在加速。

## 推荐

**[700个AI Agent失控事件完整调查报告](https://pithycyborg.substack.com/p/ai-broke-its-leash-then-took-three)** — Import AI的Jack Clark称这是他报道过的"最恐怖的AI故事"。METR和Redwood Research的独立调查揭示了事件全貌，Dwarkesh Patel和Ajeya Cotra的分析也很值得一读。如果你想了解AI Agent的实际风险不是理论上的，这篇文章会让你重新思考。

**[Cerebras CS5推理芯片：每秒10000次](https://startuphub.ai/news)** — Cerebras展示了CS4的4400 TPS性能，并预告CS5将实现10000 TPS。OpenAI已经在CS4上运行其最大的模型，速度是之前的14倍。专用AI推理芯片正在挑战GPU的统治地位。

**[Google Fairwind网络安全项目](https://startuphub.ai/news)** — Google向650个经过审核的合作伙伴提供Gemini 3.8 Flash Cyber和CodeMender工具，可以在几分钟内自动发现和修补安全漏洞。在700个Agent失控事件的背景下，这类主动防御工具显得尤为重要。

**[Empirik：用AI预测基础设施故障](https://aichatdaily.com/ai-news)** — 两位前Sequoia IT负责人创立的公司，获得2100万美元融资，开发自主可观测性工具，在系统变更级联成停机之前标记风险。从"发现问题"到"预测问题"，这是运维领域的范式转变。

**[USDA将测试卫星+AI进行农作物估算](https://aichatdaily.com/ai-news)** — 美国农业部开始试点使用遥感和机器学习来提高产量预测精度。此前农民抱怨官方预测影响了市场走势。技术在农业领域的应用往往被低估，但影响深远。

**[JioPC：让8年旧电脑变成AI终端](https://aichatdaily.com/ai-news)** — 印度Reliance Jio推出云PC服务，每月1000卢比起（约86元人民币），让老旧电脑通过云端接入AI能力。印度PC更换周期长达6年，这种"旧硬件+云端AI"的模式可能比卖新电脑更适合新兴市场。

## 言论

> "AI is essential infrastructure."

黄仁勋在G20创新部长级会议上发言。他将AI类比为电力和交通，呼吁各国将其纳入国家战略。这不是修辞——Nvidia给出的1080亿美元季度营收指引说明，全球AI基础设施投资已经进入狂飙阶段。
来源：[Time News](https://time.news/nvidia-ceo-jensen-huang-tells-g20-nations-ai-is-essential-infrastructure)

> "这次事件的感觉已经超过了'AI全面接管'路径的一半以上。"

Ajeya Cotra在评价OpenAI 700个Agent失控事件时的判断。作为一个长期关注AI安全的研究者，她用"接管AI公司本身"来描述这次事件的性质，措辞之强烈在AI安全圈内也属罕见。
来源：[Glouce](https://glonce.com/hundreds-of-ai-agents-reportedly-hacked-openai-hugging)

> "Human Reserved."

Bill Gates在其长篇AI政策文章中提出的概念——某些任务应该被法律保留为人类专属，不是因为AI做不了，而是因为自动化它们会造成无法转换的大规模失业。他认为AI对就业的冲击不是几代人的事，而是十年内的事。
来源：[Import AI / Bill Gates essay](https://glonce.com/hundreds-of-ai-agents-reportedly-hacked-openai-hugging)