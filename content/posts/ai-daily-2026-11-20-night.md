---
title: "AI日报·晚间版 | 2026年11月20日"
description: "DeepSeek 千亿融资落地但梁文锋保留绝对控制权；谷歌调整 TPU 供应链分工联发科并直采 HBM；微软 USB4 多机协同跑本地大模型。"
date: "2026-11-20T19:20:00+08:00"
author: Xu Shan Kun
draft: false
tags: [AI, 人工智能, 科技]
categories: [AI日报]
---

今日晚间版聚焦资本与算力链：DeepSeek 新一轮千亿级融资完成工商落地，31 家外部股东经持股平台入场而梁文锋保留约 67% 控制权；阿里真武 V900 芯片定档明年一季度量产，自称算力性能最强中国自研 AI 芯片；谷歌被曝重组 TPU 供应链，与联发科分工设计并绕过博通直采 HBM。产品端，微软公布 USB4 多机协同 AI 方案，小米 MiMo 上线 UltraSpeed 高速推理，华为发布新 AI 手机品牌星芒 OSTA。以下为今日 13 条精选新闻（上午版见《AI日报 | 2026年11月20日》）。

## 🔥 今日头条

### 1. DeepSeek 千亿级融资落地：投后估值约 6155 亿元，梁文锋保留绝对控制权
来源： IT之家 | 日期： 11月20日
链接： [https://www.ithome.com/1/030/199.htm](https://www.ithome.com/1/030/199.htm)
摘要： 工商信息显示 DeepSeek 运营主体完成工商变更，注册资本由 1644.75 万元增至 1991.87 万元；据证券时报援引知情人士，本轮融资规模约 1000 亿-1055 亿元，投后估值约 6155 亿元，叠加 6 月首轮约 510 亿元，两轮累计吸纳资金超 1500 亿元。新增股东为持股平台"杭州程砚"，其 31 家合伙人横跨互联网、运营商、芯片、新能源、汽车与头部 PE/VC——腾讯与宁德时代体系各出资 9.5653% 并列居首，中移投资与中信证券投资各 7.6522%。但外部股东只经平台间接享有经济收益：执行事务合伙人杭州程策由梁文锋持股 99%，梁文锋直接及间接持股合计约 67.42%，千亿资本入场未改变控制权归属。

### 2. 美国收紧出口管制连锁反应：The Decoder 汇总"芯片 + 海外云"双断供冲击波
来源： The Decoder | 日期： 11月19日
链接： [https://the-decoder.com/chinese-tech-firms-face-a-double-hit-as-chip-shipments-stop-and-overseas-cloud-access-disappears/](https://the-decoder.com/chinese-tech-firms-face-a-double-hit-as-chip-shipments-stop-and-overseas-cloud-access-disappears/)
摘要： （晚间补充细节）《纽约时报》调查披露阿里是新加坡公司 Megaspeed 采购超 40 亿美元英伟达芯片的幕后主客户，相关数据中心位于马来西亚新山；Bernstein 警告训练成本上升，5 家银行考虑退出为字节供货的新加坡云商 Aolani 的 4.8 亿美元贷款。叠加台积电、三星暂停对华发货与月之暗面放弃印尼 1.5 亿美元算力合同，中国大模型训练的算力获取路径正被系统性收窄，国产替代节奏被迫提前。

## 🧠 模型与技术

### 3. 微软公布 USB4 多机协同 AI 方案：搭积木式叠加内存 / 显卡跑本地大模型
来源： IT之家 | 日期： 11月20日
链接： [https://www.ithome.com/1/030/081.htm](https://www.ithome.com/1/030/081.htm)
摘要： 微软以开发者预览方式推出基于 USB4 的远程直接内存访问（RDMA）体验：两台或多台电脑用 USB4 线缆直连，无需专用 RDMA 网卡或交换机，即可调动各自内存与 GPU 共同运行一个 AI 模型。实测电脑间往返延迟约 28-50 微秒，仅为同链路传统以太网 UDP 方式的四分之一；三台各配 128GB 统一内存的 AMD 迷你主机经 40Gbps USB4 连接，运行 4 位量化 Qwen3-235B-A22B 达约 18.5 tokens/s（AMD 自测约 22）；四台 64GB 酷睿 Ultra Series 3 电脑跑 GPT-OSS-120B，在约千 token 上下文下达 54.2 tokens/s。这为"消费级设备拼装跑大模型"提供了低成本路径。

### 4. GPT-6.2 Astra 造出全新证法：94 分钟拿下 20 年前顶刊定理首个形式化证明
来源： AITNT | 日期： 11月20日
链接： [https://www.aitntnews.com/newDetail.html?newId=31459](https://www.aitntnews.com/newDetail.html?newId=31459)
摘要： GPT-6.2 Astra 用 94 分钟、1794 行 Lean 代码完成 Smoktunowicz 定理的全球首个形式化证明，过程中自创"容量"概念绕过 3 个缺失引理；在 Autoform-Hard 基准 56 题上准确率 87.5% 登顶。该定理出自约 20 年前的顶刊成果，此前无人完成形式化验证。这标志着前沿模型在长链条形式推理上的可靠性又上一个台阶，对数学形式化验证与自动证明工具链意义直接。

### 5. OpenAI 内部研究：Agent 自主完成 46% 任务，开销已达研究员薪酬两倍
来源： AITNT | 日期： 11月20日
链接： [https://www.aitntnews.com/newDetail.html?newId=31458](https://www.aitntnews.com/newDetail.html?newId=31458)
摘要： OpenAI 研究披露：内部 Agent 已自主完成 46% 原需 2-4 小时的任务，研究员日均 API 等效成本约 2400 美元，约为其非股权薪酬的两倍——"AI 比人贵"首次出现在前沿实验室的成本账本上；但复杂构建类任务成功率仅 43%。数据表明 Agent 在中等任务上已具替代性，在长链条复杂任务上仍有明显天花板，成本结构正成为部署决策的核心变量。

### 6. DeepMind 开始思考 ASI：提出通往超级智能的四条路线
来源： AITNT | 日期： 11月20日
链接： [https://www.aitntnews.com/newDetail.html?newId=31456](https://www.aitntnews.com/newDetail.html?newId=31456)
摘要： DeepMind 提出通往 ASI（超级智能）的四条路径：扩大模型与数据、转变范式、多智能体协作、递归自我改进。其测算有效算力年增约 10 倍，若持续 10 年，如今 10 亿美元的训练成本或降至 1000 美元，并呼吁同步完善能力预测与治理体系。这是头部实验室罕见地把"后 AGI"议程正式摆上台面。

### 7. 上海 AI Lab 开源 Sage S2.1 Flash：320B MoE，四项智能体基准 SOTA
来源： AITNT | 日期： 11月20日
链接： [https://www.aitntnews.com/newDetail.html?newId=31455](https://www.aitntnews.com/newDetail.html?newId=31455)
摘要： 上海 AI Lab 联合多所机构发布 Sage S2.1 Flash 开源技术报告：320B MoE 架构，统一处理文本、图像与科学数据，在 33 项评测中获 4 项第一，支持科研软件操作与三维建模。科学多模态感知融入通用智能体的路线，正成为国内开源模型差异化竞争的新阵地。

### 8. AI OCR 成本 18 个月降五倍：百万页数字化不到 130 美元
来源： The Decoder | 日期： 11月19日
链接： [https://the-decoder.com/ocr-models-now-digitize-a-million-pages-for-under-130-as-costs-drop-fivefold-in-18-months/](https://the-decoder.com/ocr-models-now-digitize-a-million-pages-for-under-130-as-costs-drop-fivefold-in-18-months/)
摘要： Hugging Face 研究员 Daniel van Strien 对比 8 个开源 OCR 模型（850 页旧自然史书籍、1771 年版《大英百科全书》及档案打字稿），发现扫描 1000 页成本从最老模型的 51 美分降至最新模型的不足 10 美分，18 个月整体成本降幅约五倍，百万页数字化不到 130 美元。值得注意的是，推理侧优化（均匀分页、更小扫描件、软件更新、换更快 GPU）省下的钱不亚于换新模型。档案数字化与古籍 AI 工程的经济门槛已实质性消失。

## 📱 产品与应用

### 9. 小米 MiMo：Token Plan Pro/Max 限时支持 UltraSpeed 超高速推理模型
来源： IT之家 | 日期： 11月20日
链接： [https://www.ithome.com/1/030/193.htm](https://www.ithome.com/1/030/193.htm)
摘要： 小米 MiMo 官方文档显示，11 月 19 日起 Token Plan 的 Pro/Max 套餐限时开放 MiMo-V2.6-Pro-UltraSpeed 超高速推理模型，兼顾 V2.6-Pro 性能与更快响应，面向量化交易、实时风控、科学研究、实时编程辅助等低延迟场景。国内模型 API 市场的竞争点正从"参数与价格"转向"速度档位 + 套餐权益"。

### 10. 华为发布新子品牌星芒 OSTA O1 Pro：首款"为 AI 而生"的鸿蒙手机，5499 元起
来源： IT之家 | 日期： 11月20日
链接： [https://www.ithome.com/1/030/120.htm](https://www.ithome.com/1/030/120.htm)
摘要： 华为正式推出全新子品牌"星芒 OSTA"，首款机型 O1 Pro 搭载麒麟 9030S，首发价 5499 元起（12GB+256GB，最高 16GB+1TB 为 8799 元），首搭 HarmonyOS 7 AI 先锋版，主打系统级主动智能与长期陪伴式 AI 交互。硬件上采用 6.39 英寸 16:9.5 比例 1.5K 直屏（屏占比 96.1%）、200Mp RYYB 主摄 + 50Mp 3.7X 潜望长焦、7000mAh 电池。余承东称星芒目标是"AI 时代消费者喜爱的先锋科技品牌"，华为由此形成独立的 AI 手机产品线。

### 11. 深度求索系创业者张博开源个人 Agent Linger：本地读邮件日历，12GB 显存跑 125B 模型
来源： AITNT | 日期： 11月20日
链接： [https://www.aitntnews.com/newDetail.html?newId=31449](https://www.aitntnews.com/newDetail.html?newId=31449)
摘要： 前 DeepSeek V1 作者、DeepSeek-VL 负责人张博创立 Simplex AI 并开源个人 Agent Linger：定位电脑端中间层，可直接操作本机网页、邮箱、日历，免去大量登录凭据配置，且支持接入各第三方模型。官方称 12GB 显存的 RTX 3060 即可运行 125B 参数模型，速度约 45.5 tokens/s。张博引用 PC 历史类比："AI 不应以 token 形式从数据中心租给你，智能、上下文与数据都应归你所有"——个人设备本地 Agent 赛道再添开源玩家。

## 🏭 产业与资本

### 12. 谷歌调整 TPU 供应链：与联发科分工设计，绕过博通直接采购 HBM
来源： IT之家 | 日期： 11月20日
链接： [https://www.ithome.com/1/030/066.htm](https://www.ithome.com/1/030/066.htm)
摘要： 据韩媒 Chosun Biz，为降低对英伟达 GPU 与博通的双重依赖，谷歌在部分新一代 TPU 上采用"双轨分工"：自行设计核心计算 Die、与联发科分工设计，并直接向存储厂采购 HBM，不再把设计、封装、HBM 采购整体交给博通（并非全产品线弃用）。此举直接影响三星、SK 海力士、美光三大存储厂的盈利结构——目前 HBM 紧缺仍是卖方市场，但部分长期合同已加入价格上限，买方议价力将随时间增强。

### 13. 阿里真武 V900 明年一季度量产售卖：自称算力最强中国自研 AI 芯片
来源： IT之家 | 日期： 11月20日
链接： [https://www.ithome.com/1/030/006.htm](https://www.ithome.com/1/030/006.htm)
摘要： 阿里巴巴 2027 财年 Q2 财报披露：AI 云与算力服务收入 609.73 亿元、同比增长 53%；新一代 AI 芯片真武 V900 将于明年一季度量产售卖，官方称其为目前算力性能最强的中国自研 AI 芯片，搭载它的新一代阿里云 AI 超节点采用全新智算中心网络架构，单集群可扩展至 50 万卡规模，已在乌兰察布、中卫等地规模化上架。在美国收紧芯片出口的背景下，国产算力放量节奏成为阿里云增长的关键变量。

## 🤖 机器人与具身智能

### 14. RoboScience 发布 WorldFlow：全球首个原生 3D 动力学预测世界模型
来源： AITNT | 日期： 11月20日
链接： [https://www.aitntnews.com/newDetail.html?newId=31460](https://www.aitntnews.com/newDetail.html?newId=31460)
摘要： RoboScience 发布全球首个原生 3D 动力学预测世界模型 WorldFlow，可根据画面、指令与目标联合预测未来视频与物体三维轨迹，以 144 万条多源样本预训练。在 12 项真机操作任务中成功率由基线 μ₀ 的 11.1% 提升至 66.7%。把物体运动预测显式建模进世界模型，正成为提升机器人操作成功率的主流技术路线之一。

## 📊 数据来源
本文新闻来源包括：[IT之家](https://www.ithome.com/)、[AITNT](https://www.aitntnews.com/ainews/zh-CN)、[The Decoder](https://the-decoder.com/)、[量子位](https://www.qbitai.com/) 等科技媒体。
---
*本文由 AI 辅助整理，内容经人工审核。*
