title: nginx 反向代理--解决前端跨域问题
author: Xu Shan Kun
tags:
  - Nginx
categories:
  - 服务器
date: 2018-10-18 15:28:00
---
###	跨域
浏览器同源策略造成的，所有支持javascript的浏览器都支持这个策略，【这里不多说了】

###	Nginx
Nginx (engine x) 是一个高性能的HTTP和反向代理服务【百度百科】

###	需求
当我们调试前端页面的时候，浏览器报出跨域【即接口与本地服务器不在同一个域内】
<!-- more -->
###	解决步骤
####	一、下载nginx包，[官网](http://nginx.org/en/download.html)
![release-npm-1](https://shankun-1257055090.cos.ap-chengdu.myqcloud.com/blog/nginx/nginx1.png)

####	二、解压到任意文件夹并打开配置文件
![release-npm-1](https://shankun-1257055090.cos.ap-chengdu.myqcloud.com/blog/nginx/nginx2.png)

####	三、编辑配置文件
![release-npm-1](https://shankun-1257055090.cos.ap-chengdu.myqcloud.com/blog/nginx/nginx3.png)
![release-npm-1](https://shankun-1257055090.cos.ap-chengdu.myqcloud.com/blog/nginx/nginx4.png)
最后	ctrl+s保存

####	四、运行访问
双击运行nginx.exe【后台任务管理器进程运行，无界面】
浏览器访问localhost即可访问项目根目录
完整接口访问如下：
![release-npm-1](https://shankun-1257055090.cos.ap-chengdu.myqcloud.com/blog/nginx/nginx5.png)