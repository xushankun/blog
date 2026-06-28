---
title: "git配置多账号登录不同项目"
description: "我们做项目时会有自己的github账号，和公司的git账号。 本文以配置github.com账号、码云账号以及公司git账号，即在Windows环境下配置Git多账号的使用 1.首先进入.ssh文件夹:右键Git Bash Here 2.执行命令 ssh-keygen -t rs…"
date: 2019-02-12T09:31:00+08:00
author: "Xu Shan Kun"
draft: false
tags:
  - "git"
categories: ["工具效率"]
---
### 需求
我们做项目时会有自己的github账号，和公司的git账号。
<!--more-->
本文以配置github.com账号、码云账号以及公司git账号，即在Windows环境下配置Git多账号的使用



### 生成github.com对应的私钥公钥
1.首先进入.ssh文件夹:右键Git Bash Here

2.执行命令 ssh-keygen -t rsa -C email 创建github对应的sshkey，命名为id_rsa_github，密码可以为空，一路回车【如下图】
![私钥公钥](https://shankun-1257055090.cos.ap-chengdu.myqcloud.com/blog/tool/git-account/git-account1.png)

PS：同样的方式配置码云以及公司git的私钥公钥


### 把github、码云和公司的git对应的公钥上传到服务器
![上传公钥](https://shankun-1257055090.cos.ap-chengdu.myqcloud.com/blog/tool/git-account/git-account2.png)
### SSH配置
邮箱不同也会对应不同的SSH key，所以要针对不同的项目使用不同的key。
所以打开git全局配置文件。一般在用户目录下的.ssh文件夹中。比如windows用户就是：C:\Users\用户名\.ssh
Linux就是～/.ssh
找到config文件。没有就新建一个config.txt【保存时去掉.txt,即改为config】，用文本编辑器打开，添加如下配置：
```
# 配置github.com
Host github.com                 
    HostName github.com
    IdentityFile ~/.ssh/id_rsa_github
    PreferredAuthentications publickey
    User xushankun

# 配置git.xxx.com
Host git.xxx.com
    HostName git.xxx.com
    IdentityFile ~/.ssh/id_rsa
    PreferredAuthentications publickey
    User xxxusername

# 配置gitee.com
Host gitee.com
    HostName gitee.com
    IdentityFile ~/.ssh/id_rsa_gitee
    PreferredAuthentications publickey
    User xusk
```


-	`HostName` 是真实的域名地址
-	`IdentityFile` 是id_rsa的地址
-	`PreferredAuthentications` 配置登录时用什么权限认证--可设为publickey,passwordpublickey,keyboard-interactive等
-	`User` 配置使用用户名

### 配置完以后
ssh文件夹
![ssh文件夹](https://shankun-1257055090.cos.ap-chengdu.myqcloud.com/blog/tool/git-account/git-account.png)

### 测试是否成功
测试成功如下
```
lovex@DESKTOP-CCCU4BL MINGW64 ~/Desktop
$ ssh -T git@github.com
Enter passphrase for key '/c/Users/lovex/.ssh/id_rsa_github':
Hi xushankun! You've successfully authenticated, but GitHub does not provide shell access.

lovex@DESKTOP-CCCU4BL MINGW64 ~/Desktop
$ ssh -T git@gitee.com
Hi xusk! You've successfully authenticated, but GITEE.COM does not provide shell access.
```