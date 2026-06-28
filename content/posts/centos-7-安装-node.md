---
title: "centos 7 安装 node"
date: 2018-09-03T14:42:00+08:00
author: "Xu Shan Kun"
draft: false
tags:
  - "node"
categories: ["服务器运维"]
---
###	友情链接【偷懒一波，哈哈】

[centos7.x安装node](https://blog.csdn.net/jonatha_n/article/details/75271050)
<!--more-->
###	安装步骤

---
1.选择安装目录	
```node
cd /usr/local/src
```

2.官网选择最新版本Linux Binaries 64-bit 【二进制的版本】，右键复制链接地址
命令行执行下载
```node
wget https://nodejs.org/dist/v8.11.4/node-v8.11.4-linux-x64.tar.xz
```

3.解压安装包
```node
xz -d node-v8.11.4-linux-x64.tar.xz		// 先转成xz
tar -xvf node-v8.11.4-linux-x64.tar		// 再完成解压
```

4.重命名为node
```node
mv node-v8.11.4-linux-x64 node
```

5.配置环境变量
```node
vim /etc/profile
```

6.在文件最后面添加
```
#set for nodejs
export NODE_HOME=/usr/local/src/node
export PATH=$NODE_HOME/bin:$PATH
```
7.保存退出（:wq）执行命令是更改生效
```
source /etc/profile
```

8.查看版本
```node
node -v		// v8.11.4
npm -v		// 5.6.0
```

---
###	最后安利一个终端神器
MobaXterm
同时左侧sftp，右侧命令行操作
可在线拖拽式上传文件，还可用本地编辑器打开文件，真的神器