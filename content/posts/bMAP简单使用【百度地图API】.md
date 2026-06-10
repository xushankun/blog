---
title: "bMAP简单使用【百度地图API】"
date: 2018-05-04T16:28:00+08:00
author: "Xu Shan Kun"
draft: false
tags:
  - "百度API"
categories:
  - "前端"
---
#### 第一步
申请百度地图api  key 【需要实名认证】

``` javascript
    <script type="text/javascript" src="http://api.map.baidu.com/api?v=3.0&ak=您的密钥"></script>
```
<!--more-->


#### 第二步
下面的变量 **site** 获取到当前坐标的 **省 市 区 街道 街道号**

``` javascript
<script type="text/javascript">
    var geoc = new BMap.Geocoder();
    geoc.getLocation(new BMap.Point(120.3066572944592,31.56715494761835), function(rs){
        var addComp = rs.addressComponents;
        var site = addComp.province + addComp.city + addComp.district + addComp.street + addComp.streetNumber;
        console.log(site);
    });
</script>
```