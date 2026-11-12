---
title: "AI日报 | 2026年11月12日（下午版）"
description: "英伟达董事会启动CEO继任者搜寻、OpenAI季度营收首破100亿美元、百度发布词元所、英伟达发布GR00T 2机器人世界动作模型"
date: "2026-11-12T11:49:50+08:00"
author: Xu Shan Kun
draft: false
tags: [AI, 人工智能, 科技]
categories: [AI日报]
---

今天 AI 圈的主线有两条：一是英伟达治理危机持续发酵，董事会已聘请外部机构物色新 CEO 人选，黄仁勋去留成谜，股价盘后一度跌超 9%；二是大模型能力继续外溢到物理世界与产业深处——英伟达在 CoRL 大会上发布新一代机器人世界动作模型 GR00T 2 并宣布开源计划，百度在世界大会上推出大模型交易平台「词元所」。本刊下午版聚焦上午版之后的新动态，共收录 14 条新闻。

## 🔥 今日头条

### 1. 英伟达董事会启动 CEO 继任者搜寻，黄仁勋去留成谜
来源： IT之家（综合华尔街日报、纽约时报） | 日期： 11月12日
链接： [https://www.ithome.com/1/025/852.htm](https://www.ithome.com/1/025/852.htm)
摘要： 据报道，英伟达董事会正聘请外部机构物色新 CEO 候选人，并考虑任命临时 CEO 方案。此前《纽约时报》曝出黄仁勋与一名直接下属存在私人关系，《华尔街日报》随后报道董事会准备罢免黄仁勋，CNBC 11 日称多名两党国会议员要求其辞职，必要时将动用传票要求闭门说明。多重压力下，这家市值 4.19 万亿美元的 AI 芯片巨头正面临成立以来最严峻的治理危机，继任人选与过渡方案将直接决定其 AI 算力霸主地位的稳定性。

### 2. 黄仁勋风波重创英伟达股价：盘后一度跌超 9%，市值蒸发约 3400 亿美元
来源： IT之家 | 日期： 11月12日
链接： [https://www.ithome.com/1/025/855.htm](https://www.ithome.com/1/025/855.htm)
摘要： 美股 11 日盘后交易中，英伟达股价最低跌至 157.96 美元，较当日收盘价 173.73 美元下跌 9.08%，市值约 4.19 万亿美元。投资者正消化 CEO 可能离任带来的不确定性。值得注意的是，英伟达是全球 AI 算力供应链的中枢，其股价剧烈波动会直接传导至整个 AI 板块的风险偏好；Polymarket 上接任人选的预测交易也已升温，黄仁勋之女黄敏珊一度成为热门猜测，侧面反映市场对继任格局的焦虑。

## 🧠 模型与技术

### 3. 英伟达发布 GR00T 2 世界动作模型：跨本体技能迁移，10 万小时人类数据已开源
来源： 量子位 | 日期： 11月12日
链接： [https://www.qbitai.com/2026/11/509032.html](https://www.qbitai.com/2026/11/509032.html)
摘要： 英伟达 GEAR 实验室朱玉可、Jim Fan 在 CoRL 大会上发布新一代机器人世界动作模型 GR00T 2，可同时预测未来画面与机器人动作，官方 demo 涵盖剪刀裁标签、装显卡、切香蕉做早餐等任务。核心突破是 X-Adapt 跨本体适配：人类动捕示范可直接迁移给五指手 Dexter（20 次试验成功率 65%），手持 UMI 夹爪示范可迁移至 YAM 机械臂完成约 4 分钟组装任务（成功率 60%）。Dexter-50 评测中零样本成功率 40%，5 次示范（合计不足 3 分钟）后达 95%，单张 RTX 5090 上 LoRA 微调约 30 分钟即可适配。模型、数据、仿真环境将陆续开源，首批 10 万小时人类数据已开放，预训练数据含 402,730 小时第一视角人类视频。

### 4. Anthropic 称已用 AI 攻破英伟达 CUDA 护城河：Claude 移植 AMD GPU 仅需 3 天
来源： The Decoder | 日期： 11月11日
链接： [https://the-decoder.com/anthropic-says-ai-is-eroding-nvidias-cuda-lead-cutting-an-amd-chip-switch-from-months-to-three-days/](https://the-decoder.com/anthropic-says-ai-is-eroding-nvidias-cuda-lead-cutting-an-amd-chip-switch-from-months-to-three-days/)
摘要： Anthropic 在投资者演示中披露，其内部模型 Mythos 几乎无人工干预地将 Claude 移植到 AMD GPU，整个过程仅用 3 天，而传统跨架构移植通常需要数月。目前 Claude 已运行在 4 个芯片家族上，目标是降低推理成本、减少对单一供应商的依赖。AI 参与底层软件迁移正在瓦解 CUDA 生态锁定，若这一路径规模化，英伟达「硬件+软件」双护城河中更关键的软件一侧将率先松动，AI 芯片市场的供给格局可能被重写。

### 5. 谷歌 DeepMind AlphaProof 4 周验证 Signal 加密协议核心，产出 650 万行数学证明
来源： The Decoder | 日期： 11月11日
链接： [https://the-decoder.com/google-deepminds-alphaproof-code-verified-signals-cryptographic-core-in-four-weeks-instead-of-years/](https://the-decoder.com/google-deepminds-alphaproof-code-verified-signals-cryptographic-core-in-four-weeks-instead-of-years/)
摘要： 谷歌 DeepMind 公布，基于 Gemini 4 Carbon 的形式化推理系统 AlphaProof 在 4 周内完成即时通讯应用 Signal 加密协议核心的形式化验证，累计生成约 650 万行机器可检查的数学证明，而传统人工流程通常需要数年。该成果意味着 AI 形式化方法开始进入真实世界关键基础设施的审计环节，对密码协议、金融清算、操作系统内核等高可信软件的安全保障具有示范意义。

### 6. 学界提出 Lev 循环决策模型：难题多算、简单题秒答，准确率提升 13%
来源： AITNT | 日期： 11月12日
链接： [https://www.aitntnews.com/newDetail.html?newId=31183](https://www.aitntnews.com/newDetail.html?newId=31183)
摘要： Lehigh University、UBC 与 Vector Institute 团队提出循环决策模型 Lev：同一组解码层循环运行、共享 pointer head 逐圈读出答案，由「停止器」决定每题在哪一圈退出。Lev-2.6B 在 JevBench 231 道公开题上较单圈基线准确率最高提升 13%，held-out 测试四圈依次为 51.3%、62.0%、64.8%、65.7%，大部分收益来自第一个额外圈；按需深度策略比固定最深圈少算 15%-24% 而准确率几乎不掉。该设计让同一模型按题分配计算量，为「小模型按需思考」提供了不依赖长思维链的新路线。

## 📱 产品与应用

### 7. 美联航拒绝 AI 代订机票：能查航班、不能替你下单，eBay 与多家银行同样设限
来源： IT之家（综合 The Verge、华尔街日报） | 日期： 11月12日
链接： [https://www.ithome.com/1/025/879.htm](https://www.ithome.com/1/025/879.htm)
摘要： 美国联合航空宣布出于隐私与监管考虑，不允许个人 AI 助手代旅客购买机票——AI 可展示航班信息，但不能代表用户完成交易。担忧包括客户信息泄露、AI 误解用户意图下单，以及行李不含爆炸物确认等法定告知程序的合规问题。美联航 CEO 斯科特·柯比直言「不想再增加一个中间人」。eBay 已阻止此类代理访问，多家大型银行也设限。这些门槛正在把个人 AI 助手从「代办交易」逼回「提供建议」的定位，Agent 商业化落地遭遇真实世界的制度阻力。

### 8. Mac 版 ChatGPT 新增「财务」入口：连接银行与投资账户，AI 替你管账
来源： IT之家 | 日期： 11月12日
链接： [https://www.ithome.com/1/025/934.htm](https://www.ithome.com/1/025/934.htm)
摘要： OpenAI 宣布 ChatGPT Finances 功能扩展至 macOS 桌面应用，用户可在侧边栏「财务」入口通过 Plaid 连接银行、信用卡与投资账户，查看余额、分析消费、管理订阅并跟踪投资组合，还能设置储蓄目标、评估还债方案。该功能今年 5 月上线移动端，此次落地桌面端标志着 ChatGPT 正从对话工具转向个人财务操作系统，也意味着 OpenAI 与银行、券商的数据接口竞争正式开始。

### 9. Claude API 新增 effort 调节：同一对话内可中途「换挡」
来源： IT之家 | 日期： 11月12日
链接： [https://www.ithome.com/1/025/894.htm](https://www.ithome.com/1/025/894.htm)
摘要： Anthropic 为 Claude API 增加 Beta 版 effort 调节能力，开发者可在消息序列中插入空 system 消息并通过 output_config.effort 设置新的努力等级，从闲聊切换到复杂分析无需改动顶层配置，提示缓存仍可命中，新设置从下一条用户消息起生效。effort 不只影响输出长度，还调节思考、工具调用与回答组织的资源投入，让开发者在充分度、速度和成本之间按任务动态取舍，是模型推理资源「按需分配」产品化的又一步。

### 10. 豆包工作接入 DeepSeek V4.1 Flash、Kimi K3.1 Pro 等第三方模型
来源： IT之家 | 日期： 11月12日
链接： [https://www.ithome.com/1/025/926.htm](https://www.ithome.com/1/025/926.htm)
摘要： 豆包工作新增 Kimi K3.1 Pro、GLM 5.3、DeepSeek V4.1 Flash 三款第三方大模型，上线额度消耗倍率机制，并推出分时段折扣与两款轻量模型倍率下调的限时优惠。字节系办公产品主动引入竞对模型，说明国内 AI 办公的竞争焦点已从「绑定自家模型」转向「模型路由与成本运营」，用户按任务性价比选模型成为常态，模型厂商的议价权进一步向平台侧转移。

### 11. 深圳领渊智能获千万级种子轮，主攻水下装备「通用大脑」
来源： AITNT | 日期： 11月12日
链接： [https://www.aitntnews.com/newDetail.html?newId=31182](https://www.aitntnews.com/newDetail.html?newId=31182)
摘要： 深圳初创公司领渊智能完成千万级种子轮融资，团队来自香港科技大学、清华大学和佐治亚理工学院，在水下无人系统方向积累逾 20 年。公司不造整机，专攻水下装备的「通用智能基础层」：让机器在无 GPS、声呐混响、能见度差的环境中自主稳位（对抗洋流漂移）并自主作业，人从「手」变「指挥」，一人可同时监管多台机器。海上风电、跨海通道、海底电缆、深远海养殖从「建」转「养」，催生长期水下运维刚需，深海智能是具身智能「三维下沉」中尚未定价的空白地带。

## 🤖 机器人与具身智能

### 12. 大晓机器人「双脑协同」进驻酒店洗衣房：53 个原子动作、200 余种动作序列
来源： AITNT | 日期： 11月12日
链接： [https://www.aitntnews.com/newDetail.html?newId=31186](https://www.aitntnews.com/newDetail.html?newId=31186)
摘要： 大晓机器人展示了酒店洗衣房全流程机器人方案：世界模型 Mundo 输入酒店房间、走廊、洗衣房照片即可复刻数字酒店作为「驾校」，云端大脑 Astra 负责理解、推理与规划，经 RSI 持续改进机制自进化。BotAgent 把洗衣流程拆成 53 个原子动作、封装为 14 个语义步骤，可依据客房位置、电梯状态、洗衣机排队情况编排出 200 余种动作序列；任务失败时 Astra 复盘录像定位根因并下发新 Skill。洗衣涉及取衣、搬运、设备操作、烘干、送回等长链条柔性物体操作，是机器人落地「地狱级」场景，其世界模型+自进化路径对酒店夜间招工难有直接商业价值。

### 13. 乾章智能 Q0-Preview 登顶 Robodojo Sim 榜：不走 VLA，用上一代 Claude 拿第一
来源： AITNT | 日期： 11月12日
链接： [https://www.aitntnews.com/newDetail.html?newId=31180](https://www.aitntnews.com/newDetail.html?newId=31180)
摘要： 在 Robodojo Sim Agent 榜单上，乾章智能（Qoo Tech）的 Q0-Preview 以 68.87% 任务成功率、74.2 综合得分位列第一，是开榜以来首个综合分破 70 的方案，超过 Anthropic 新发布的 Fable 5.2（RoboDojo Sim 双臂评测 64.9%）。其技术路线出人意料：不走 VLA 也不走 WAM，而是用 Agent 范式发挥多模态大模型的任务规划、空间感知、记忆反馈与工具调用能力，且基座是上一代 Claude Opus 5.5（Anthropic 自报正确率仅 39.4%）。这说明具身智能的竞争正在从「堆模型能力」转向「系统工程与任务编排」。

## 🏭 产业与资本

### 14. 英国 AI 芯片公司 Fractile 完成超 7.2 亿美元 C 轮，估值 70 亿美元，政府资金加持
来源： IT之家（综合路透社） | 日期： 11月12日
链接： [https://www.ithome.com/1/025/927.htm](https://www.ithome.com/1/025/927.htm)
摘要： 英国 AI 芯片初创企业 Fractile 宣布完成超 7.2 亿美元（约 48.14 亿元人民币）C 轮融资，估值达 70 亿美元（约 468 亿元人民币），投资方包括英国政府主权 AI 风险投资基金、英国商业银行、谷歌风投与贝莱德。Fractile 主攻「模拟内存计算」推理芯片，号称无需在吞吐、模型尺寸、上下文长度间做权衡，消息称 Anthropic 拟于 2027 年部署其芯片。英国 AI 大臣明确表示要让本土技术收益留在英国，这笔带有主权色彩的投资标志着 AI 推理算力正成为国家级产业政策的争夺焦点。

## 📊 数据来源
本文新闻来源包括：[IT之家](https://www.ithome.com/)、[量子位](https://www.qbitai.com/)、[The Decoder](https://the-decoder.com)、[TechCrunch](https://techcrunch.com/category/artificial-intelligence/)、[The Verge](https://www.theverge.com/)、[AITNT](https://www.aitntnews.com/ainews/zh-CN) 等科技媒体（均收录于 [AI 资讯导航](https://shankun.top/links/)）。
---
*本文由 AI 辅助整理，内容经人工审核。*
