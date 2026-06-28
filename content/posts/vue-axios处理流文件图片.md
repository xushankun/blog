---
title: "vue+axios处理流文件图片"
date: 2019-07-22T12:27:00+08:00
author: "Xu Shan Kun"
draft: false
tags:
  - "axios"
categories: ["前端开发"]
---
#### 说明
vue axios 后端接口返回一个流文件图片，前端base64解析直接展示
<!--more-->

#### 代码
```
getImg(filePath) {
  this.$http.get('/img', {
    responseType: 'arraybuffer'
  }).then(response => {
    return 'data:image/png;base64,' + btoa(
      new Uint8Array(response.data)
        .reduce((data, byte) => data + String.fromCharCode(byte), ''))
  }).then(data => {
    // console.log(data)
  })
}
```

#### 使用如下
![](https://shankun-1257055090.cos.ap-chengdu.myqcloud.com/blog/streamStream/axiosStream.png)