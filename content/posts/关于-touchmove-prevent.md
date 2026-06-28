---
title: "关于@touchmove.prevent"
description: "在出现弹窗时，禁止滑动弹窗后面的主体页面 移动端的屏幕滑动，实际上就是touchmove事件的默认行为 在冒泡过程中任何一层阻止这个默认行为，都可以阻止屏幕滑动 导致问题：如果在点击屏幕的时候手指滑动的话，是不会触发click事件的。"
date: 2019-01-25T13:44:00+08:00
author: "Xu Shan Kun"
draft: false
tags:
  - "touch"
categories: ["前端开发"]
---
### 1.需求
在出现弹窗时，禁止滑动弹窗后面的主体页面
<!--more-->
### 2.原理
移动端的屏幕滑动，实际上就是touchmove事件的默认行为  
在冒泡过程中任何一层阻止这个默认行为，都可以阻止屏幕滑动

### 3.带来新的问题
**导致问题**：如果在点击屏幕的时候手指滑动的话，是不会触发click事件的。或者被点击的元素是移动状态，则概率性出发click 事件。  

**分析原因**：在移动端上点击屏幕时，会依次触发touchstart,touchmove,touchend,click事件。  

**触发过程**：touchstart→touchmove→touchend或者touchstart→touchend→click。

### 4.解决办法
touchend 替代 click【暂时未找到更好的办法】

![avatar](https://shankun-1257055090.cos.ap-chengdu.myqcloud.com/blog/touchmove.prevent/clipboard.png)