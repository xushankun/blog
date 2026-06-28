---
title: "centos安装宝塔及https证书"
description: "注册账号地址【后面会用到】 github链接 centos使用如下命令安装： 安装完成后 保存下方账号：【你的ip地址+默认端口号8888】 这里我们使用安装后得到的账号登录，在面板的软件管理安装我们需要的软件到服务器 1.申请证书【这里可能需要登录，使用我们前面注册的账号】 2…"
date: 2019-07-16T09:52:00+08:00
author: "Xu Shan Kun"
draft: false
tags:
  - "宝塔"
  - "https"
  - "nginx"
categories: ["服务器运维"]
---
#### 注册宝塔账号并安装宝塔
- [注册账号地址](https://www.bt.cn/register.html)【后面会用到】
- [github链接](https://github.com/aaPanel/BaoTa)
<!--more-->
centos使用如下命令安装：

```
yum install -y wget && wget -O install.sh http://download.bt.cn/install/install_6.0.sh && sh install.sh
```
安装完成后 保存下方账号：【你的ip地址+默认端口号8888】
![](https://shankun-1257055090.cos.ap-chengdu.myqcloud.com/blog/baota/baota1.png)


#### 登录宝塔面板安装nginx
	
这里我们使用安装后得到的账号登录，在面板的软件管理安装我们需要的软件到服务器
![](https://shankun-1257055090.cos.ap-chengdu.myqcloud.com/blog/baota/baota2.png)

#### 首页添加网站
![](https://shankun-1257055090.cos.ap-chengdu.myqcloud.com/blog/baota/baota3.png)

#### 申请免费证书【let's encrypt】并开启
1.申请证书【这里可能需要登录，使用我们前面注册的账号】
![](https://shankun-1257055090.cos.ap-chengdu.myqcloud.com/blog/baota/baota4.png)
2.切换到其他证书保存【实则是保存文件到服务器】
![](https://shankun-1257055090.cos.ap-chengdu.myqcloud.com/blog/baota/baota5.png)

#### nginx配置文件修改
```
server {
        listen       80;
        server_name  xx.xxx.com;
        rewrite ^ https://$http_host$request_uri? permanent;
        }
server
{
    listen 443 ssl;
    server_name xx.xxx.com;
   location / {
       proxy_pass http://localhost:3001/;
   }
}
```
![](https://shankun-1257055090.cos.ap-chengdu.myqcloud.com/blog/baota/baota6.png)

#### 重启nginx【结束】
回到首页，打开nginx面板，先后点击重载配置和重启
![](https://shankun-1257055090.cos.ap-chengdu.myqcloud.com/blog/baota/baota7.png)