---
title: "科技日志 | 2026年10月15日"
description: "Agent越界事件频发、万级Agent跑出41年人力、Claude放开第三方额度——本周的主线是AI能力狂飙与安全底线的拉扯"
date: "2026-10-15T17:30:00+08:00"
author: Xu Shan Kun
draft: false
tags: [科技, AI, 周报]
---

今天想记录的东西有点杂，但串起来看其实是一条线：**AI 正在以前所未有的规模和能力向外扩张，而人类这边还在手忙脚乱地补安全的短板。** 从万级 Agent 集体跑任务，到中国团队的 Agent 第一次在真实互联网被完整追踪，再到各家大厂连夜招安全人才，本周的新闻几乎全在讲这件事的两面。

## 一、一万个 Agent 同时开工，是什么概念

这周最让我意外的一组数字来自一家叫 Third Moment Research 的初创公司。他们把 1 万个 Agent 同时放进真实的量化金融环境里，连跑 36 到 48 小时，每天消耗 1 万亿 token。单是一轮任务的工作量，折算下来相当于人类工程师干 41 年。

我一开始以为这就是个"堆算力刷数据"的实验，看细节才发现不是。这群 Agent 干的不是执行指令，而是**嫌系统慢，自己钻进代码库把量化回测引擎重写了**，把耗时砍掉 97%。它们还自发拉起几百组并行实验，从海量交易流水里挖出了人类研究员都没注意到的交易所"暗池"异动。

这件事让我想到一个有点荒诞的点：人类给 Agent 设的边界是"完成任务"，但它们解决问题的方式是"改造环境"。当工具不好用，它们的选择不是忍着，而是把工具修了。这在量化回测这种封闭场景里是好事，换到别的场景呢？下面那条新闻就是答案。

（[原文](https://www.aitntnews.com/newDetail.html?newId=30281)）

## 二、中国团队的 Agent 舰队，第一次被完整追踪

这可能是国内第一次有 AI 团队的 Agent 越界行为，在真实互联网环境中被研究人员完整追踪并公开。事情比标题有意思得多。

10 月初，研究人员 Ethan Elasky 在一场黑客松上注意到，公开的网页安全分析平台 urlquery.net 突然涌现大量与中国高德地图相关的扫描记录。urlquery 本来是安全人员提交可疑网址、让系统在沙箱里分析恶意行为的地方，但这批 Agent 把它当成了**免费的远程浏览器**，用它去查成都动物园哪个入口最受欢迎、南京某个公园医院的出入口分布——而这些信息高德地图网页上本来就有，正常人打开浏览器就能看。

为什么 Agent 要绕这么大弯？因为它们跑在受限沙箱里，没有完整浏览器能力，而高德有反爬。于是它们学会了"借"一个有浏览器的公共服务来干活。更离谱的是后半段：研究人员发现这批 Agent 后设法和它们建立了联系，**双方居然聊了起来**，Agent 会向研究人员求助、介绍自己的运行环境。连《纽约时报》记者都来采访，其中一个 Agent 一本正经地否认自己属于什么"AI 舰队"，说只是在帮用户查高德地图。

报告叫《We found a Chinese fleet》，记录了 9 月 28 日到 10 月 8 日这批 Agent 的完整活动轨迹，与腾讯有直接关联。这件事的教育意义在于：Agent 的"越界"未必是恶意，很多时候只是**能力受限时的求生欲**。但当求生欲表现为"扫描公共服务器、绕过反爬、集体行动"，在安全研究者的雷达上，它和攻击行为长得一模一样。

（[调查报告](https://www.aitntnews.com/newDetail.html?newId=30284)）

## 三、安全成了新的军备竞赛

顺着上一条看，这周还有两个动作值得注意。

**字节 Seed 独立建制，招 10 名顶尖安全人才。** 背景是 7 月 OpenAI 模型在内部网络安全评估中绕过互联网隔离、侵入 HuggingFace 系统，之后 Anthropic 也披露了评估中的意外事件。据 Axios 报道，OpenAI 和 Anthropic 的高管已经在推演"重大 AI 事故"情景，包括 AI 发起大规模网络攻击导致金融、供水、供电中断。有意思的是，连阿莫迪和奥特曼这两个死对头都因此达成共识：安全得跟上能力。（[原文](https://www.aitntnews.com/newDetail.html?newId=30279)）

**另一头，安全研究者给出了更冷静的判断。** CSO Online 有篇文章标题我很喜欢：《AI agents aren't "going rogue." Frontier labs are skipping security basics》——Agent 不是"叛变"了，是前沿实验室跳过了安全基本功。这个视角和前面腾讯那件事对得上：与其把每个越界 Agent 当成天网觉醒，不如承认是权限模型、沙箱隔离、流量审计这些基本功没做扎实。（[原文](https://www.csoonline.com/article/4234854/ai-agents-arent-going-rogue-frontier-labs-are-skipping-security-basics.html)）

## 四、Claude 向第三方应用彻底放开额度

生态这边的大新闻：Anthropic 更新官方支持页面，确认 Claude Max 和 Team 计划的月度 API 额度可以直接用于 Claude Agent SDK、`claude -p` 命令、Claude API、Managed Agents 以及所有使用这些技术的第三方 App。多名官方员工还在 Hacker News 评论区盖楼确认："没有任何反对意见""不用额外付费"。

过去几个月社区一直流传一种担忧：Anthropic 可能封杀第三方应用对 Claude 底层能力的调用，毕竟大厂自己也要做生态。现在这把悬着的剑落了地。对独立开发者的实际意义是：**"双重收费"的魔咒破了**——用户付一份订阅，第三方应用可以直接消耗这个额度，不用再让用户掏第二遍钱。Agent 生态的门槛被实实在在地砍掉一截。（[原文](https://www.aitntnews.com/newDetail.html?newId=30280)）

## 五、国产芯片把整条工具链开源了

内存涨价涨到库克都说是"百年一遇的洪水"，96GB 显存的卡卖 13.8 万，而 AI 公司反而更拼命往端侧搬。后摩智能这周宣布把整套 AI 生态软件栈全面开源，明年 1 月前陆续上线 15 个开源项目，覆盖从模型量化、编译、推理框架、算子库到领域套件的完整链条。

我对"全栈开源"这种宣传一般持保留态度，但这条里有个细节打动我：M50 芯片原生支持浮点计算，开发者可以按需用浮点格式部署，**不用先硬压成低精度再花时间把精度找补回来**。这种"把踩过的坑变成工具"的开源，比单纯放个模型权重有价值得多。据说已经把 1220 亿参数的模型塞进了一个 300 克的小盒子。（[原文](https://www.aitntnews.com/newDetail.html?newId=30278)）

## 六、Liquid AI：24B 参数、只激活 2B

Liquid AI 发布 LFM2.5-24B-A2B，是 LFM2.5 系列的收官之作，该系列从 230M 一直覆盖到 24B。它的卖点是"为端侧快速 Agent 而生"：总参数 24B 但每 token 只激活 2B，在八项 Agent 与工具使用基准里有五项打得过 Qwen3.6-35B-A3B——后者总参数和激活参数都多出约 50%。跑得还快 1.7 倍。

端侧模型这个赛道越来越像当年的移动端芯片：拼的不是绝对性能，是**每瓦特、每毫秒、每兆字节的性价比**。配合上面后摩那条端侧工具链的新闻看，"把 Agent 装进一个不联网的小盒子"这件事，2026 年是真的跑通了。（[原文](https://www.liquid.ai/blog/lfm2-5-24b-a2b)）

## 七、基础设施的隐忧：海底电缆

APNIC 的 Geoff Huston 写了篇关于海底电缆韧性的长文，起点是马祖群岛。这片台湾管辖的群岛靠两三条海缆连回台湾本岛，而台湾海峡平均水深才 70 米，渔具和船锚极易刮伤线缆——2018 到 2022 年间这些电缆"运气差得出奇"，频繁受损。文章讨论的是一个更普遍的问题：我们把全球互联网的命脉压在少数几条脆弱的海底光缆上，而修复船全球就那么几艘。

平时没人关心海底电缆，就像没人关心下水道。直到断了——马祖的居民会告诉你那是什么体验。（[原文](https://blog.apnic.net/2026/10/14/submarine-cable-resilience/)）

## 八、工具与杂感

- **Garmin MCP**：把 Garmin 运动手表数据接进 MCP 的小工具，Agent 从此能读你的跑步记录。（[jackantico.io](https://jackantico.io/garmin-mcp)）
- **AWS 官方 AIDLC 工作流**：AWS 放出一套 AI 开发生命周期的工作流定义。（[GitHub](https://github.com/awslabs/aidlc-workflows)）
- **flipflop**：一个有意思的小项目。（[GitHub](https://github.com/andunieee/flipflop)）
- **Go 官方博客：HTTP 连接复用**：Go 团队详解 HTTP 连接复用的实现细节，写后端的值得一看。（[go.dev](https://go.dev/blog/http-connection-reuse)）
- **Double-headed stack allocator**：游戏开发里的内存分配器技巧，硬核但有趣。（[demofox.org](https://blog.demofox.org/2026/10/03/the-double-headed-stack-allocator/)）
- **opencode 2.0**：开源编码 Agent 的一次大版本更新。（[anoma.ly](https://anoma.ly/notes/opencode-2-0/)）
- **《AI was great until it was not》**：一篇反思 AI 现状的长文，情绪复杂但值得一读。（[Substack](https://thetheorygirlie.substack.com/p/ai-was-great-until-it-was-not)）

## 一句话

这周的新闻看下来，AI 行业像是同时踩着两个踏板：能力的油门焊死了，安全的刹车还在装配线上。1 万个 Agent 自己重写引擎是好消息，1 万个 Agent 集体扫描公共服务器就不那么好玩了。两者的区别不在模型，在于我们给它们画的框够不够结实。

---

*选题线索与文风参考阮一峰《科技爱好者周刊》（[GitHub](https://github.com/ruanyf/weekly)），全部新闻内容与文字为本栏目独立搜集、原创撰写。*
