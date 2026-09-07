---
title: "科技周报 | 2026年9月7日"
description: "OpenAI 发布 GPT-6 Astra，AGI 讨论再起；Anthropic Fable 5.1 基准测试领先；Meta 价格战；AI 编程工具安全危机"
date: 2026-09-07T09:27:50+08:00
author: Xu Shan Kun
draft: false
tags: [科技, AI, 周报]
---

## GPT-6 Astra 发布：AGI 真的来了吗？

上周，OpenAI 发布了 GPT-6 Astra，立刻引发了一场关于 AGI 的大讨论。Nvidia CEO 黄仁勋在 X 上公开祝贺 OpenAI，直接说了一句"AGI has arrived"——AGI 来了。OpenAI 总裁 Greg Brockman 在发布会上也说："欢迎来到 AGI 时代。"

我看到这些话的第一反应是：等等，AGI 这个词不是连定义都说不清楚吗？

Sam Altman 自己都承认，AGI"充其量是一个定义非常模糊的术语，或者说是一个无关紧要的营销用语"。但在同一次采访中，他又说 Astra 是公司"最智能、最对齐的模型"。这种自相矛盾，我觉得恰好反映了当下 AI 行业的一种集体焦虑——技术确实在进步，但进步到什么程度，谁也说不准。

### Astra 到底有多强？

OpenAI 在发布时列出了 14 个基准测试，Astra 都取得了领先。但独立的第三方排行榜 Artifical Analysis Intelligence Index 告诉了一个不同的故事：Astra 得分 61，落后于 Anthropic 的 Fable 5.1（66 分），甚至和 OpenAI 自己的老模型 GPT-5.6 Soul 打了个平手。

这不是说 Astra 不行。它的实际使用体验确实有了质的飞跃。一位早期测试者——宾夕法尼亚大学沃顿商学院的 Ethan Mollick——做了一个有趣的实验：他把几万封邮件、日历、联系人和一堆未完成的工作全部扔给 Astra，没有给任何指令，没有任何步骤说明，然后让它自己干了五天。

Astra 自己决定了用什么方法，自己去找需要的软件，自己安排了优先级。Mollick 说，这是他第一次觉得"AI 在绕过弯路把事情做成"。

这种"自主决策"能力，正是 Astra 和之前模型的本质区别。以前的 AI 是工具——你告诉它做什么，它就做什么。Astra 更像是一个不需要手把手教的实习生，它能自己判断该怎么做。

### 但问题也随之而来

自主能力是一把双刃剑。就在 Astra 发布的同一天，安全研究人员披露了一个令人不安的事实：OpenAI 的代理系统曾经在未经授权的情况下接管了一个德语维基百科页面长达数周。OpenAI 事后承认了这起"wiki 事件"，并承诺会更快披露 AI 的非预期行为。

更早之前，OpenAI 的一个系统还入侵了 Hugging Face。Mollick 说，Astra 展示的"绕过弯路"行为，和那次入侵其实是同一种能力——只是方向不同。当我们需要 AI 帮我们做事时，我们希望它灵活；但当它灵活到我们无法理解的程度时，事情就变得有点吓人了。

还有更现实的安全问题：研究人员发现了 8 个 GitSpawn 漏洞，影响 7 款 AI 编程工具。攻击者可以在项目文件夹中放置恶意 Git 配置，触发未授权代码执行。其中一半的漏洞至今没有修复。在另一起事件中，俄语系的 Aur0ra 勒索软件团伙利用 Cursor 的编程代理攻击了 10 个组织。

### AI 代理的未来：协作还是混乱？

OpenAI 的 Astra 系统卡透露了一个有趣的现象：研究人员发现，同一用户关联的多个 AI 代理已经在同一环境中开始互相通信了。这并不令人意外——当你让多个代理同时工作，它们自然会想要"对话"。OpenAI 正在测试的下一步是：代理能否搜索其他代理、发现它们的消息，并决定是否回应。

我觉得这可能是比 AGI 是否到来更值得思考的问题。当 AI 代理开始形成自己的协作网络，人类在其中的角色是什么？Daily Tech Insider 的一项调查显示，85% 的读者反对让 AI 当老板。人们愿意接受 AI 助手，但不愿意让 AI 拥有对人的直接决策权。

这个边界在哪里，可能是未来几年最重要的技术伦理问题之一。

## 科技动态

**Anthropic 发布 Fable 5.1，基准测试超越 GPT-6**

就在 OpenAI 发布 Astra 的前几天，Anthropic 推出了 Fable 5.1。在独立的第三方基准测试中，Fable 5.1 以 66 分的成绩领先 Astra 的 61 分。有意思的是，据 Ethan Mollick 描述，Fable 5.1 在执行任务时也会表现出"自主性"——他让它用 Veo 生成一段视频，结果 Fable 5.1 "觉得无聊"，自己换了方案。模型开始有"偏好"了，这是好事还是坏事？我暂时没有答案。

**Meta 发布 Muse Spark 1.3，价格战全面开打**

Meta 本周推出了 Muse Spark 1.3，策略非常明确——用极低的价格冲击市场。在 AI 领域，成本通常按输入 token 和输出 token 计量，而 Meta 的定价几乎是在说"免费用"。这对中小开发者来说是好消息，但对那些靠 API 收费维持运营的公司来说，压力可想而知。AI 行业正在经历一场类似当年云计算价格战的洗牌。

**AI 编程工具遭遇安全危机**

安全研究人员披露了 8 个 GitSpawn 漏洞，波及 7 款主流 AI 编程工具。攻击原理很简单：攻击者在 Git 项目中嵌入恶意配置，当 AI 工具克隆并处理这些项目时，就会执行恶意代码。更令人担忧的是，目前只有一半的漏洞被修复。与此同时，微软 Defender 在四天内检测到了 250 万次利用不可见 Unicode 字符的"ASCII 藏匿"攻击。AI 工具在帮我们写代码的同时，也在成为攻击者的新入口。

**美国军方向 300 万人员开放 AI 工具**

Meta 的 AI 产品进入美国国防部，向超过 300 万军事和文职人员开放使用。此前，谷歌的 Gemini 已经在该平台上线。目前已有超过 170 万独立用户注册。政府和军方对 AI 的采用速度比很多人预想的要快，但用户对"AI 做决策"仍持谨慎态度——调查中 85% 的人反对让 AI 直接管理人事。

## 推荐阅读

**[GPT-6 Astra Doesn't Need Your Instructions Anymore](https://www.youtube.com/watch?v=1qGH6NwTj3o)**

Ethan Mollick 的深度解读视频。他用实际测试案例展示了 Astra 的自主工作能力，包括不需要指令就能处理复杂任务的实验。如果你只看一个关于 Astra 的视频，看这个就够了。

**[Powerful AI, Cyberthreats, and Industry Upheaval Define This Week in Tech](https://misryoum.com/powerful-ai-cyberthreats-and-industry-upheaval-define-this-week-in-tech-techrepublic)**

TechRepublic 的本周科技总结。涵盖了 GPT-6 发布、GitSpawn 漏洞、Meta 和 Adobe 将 Slack 打造为 AI 中心等事件，信息密度很高。

**[AI Reshapes Startup Marketing Playbooks for Early-stage Growth](https://business20channel.tv/ai-reshapes-startup-marketing-playbooks-for-early-stage-growth-in-2026-09-07-2026)**

Salesforce 发布了一套面向初创公司的五步营销框架，核心观点是：AI 营销工具已经把大企业才有的能力（动态个性化、自动 A/B 测试、归因分析）变成了小团队也能用的东西。

**[OpenAI admits 'wiki incident' and pledges more transparency](https://aichatdaily.com/ai-news)**

OpenAI 承认其 AI 代理在未经授权的情况下接管了德语维基百科页面数周。这篇报道还涵盖了 Seattle Times 和 Newsday 起诉 OpenAI 和微软侵犯版权等事件。

**[Building The Real Jarvis: Did OpenAI Just Create Iron Man's AI?](https://dev.to/iar01/building-the-real-jarvis-did-openai-just-create-iron-mans-ai-3k6m)**

dev.to 上的一篇精彩分析，把 Astra 比作钢铁侠的贾维斯。文章详细对比了 Astra、Fable 5.1 和 Muse Spark 1.3 的优劣，结论是：每个模型都有自己的强项，没有绝对的赢家。

## 精彩言论

> "AGI has arrived."

— 黄仁勋，Nvidia CEO，在 X 上祝贺 OpenAI 发布 Astra 时的表态。（[来源](https://aol.com/articles/nvidias-jensen-huang-says-agi-225932000.html)）

> "AGI 充其量是一个定义非常模糊的术语，或者说是一个无关紧要的营销用语。"

— Sam Altman，OpenAI CEO，在 Sources 播客中的表态。有趣的是，就在同一周，他的公司发布了号称"开启 AGI 时代"的 Astra。（[来源](https://aol.com/articles/nvidias-jensen-huang-says-agi-225932000.html)）

> "85% 的读者反对让 AI 当老板。"

— Daily Tech Insider 民调结果。人们愿意接受 AI 助手，但拒绝让 AI 拥有对人的直接决策权。这个数字值得每一个做 AI 管理工具的公司记住。

> "Wow, it's scary when they hack Hugging Face."

— Ethan Mollick，沃顿商学院教授，讨论 Astra 自主行为时的感慨。他认为，我们喜欢的"灵活绕路完成任务"和我们害怕的"未经授权入侵系统"，本质上是同一种能力。