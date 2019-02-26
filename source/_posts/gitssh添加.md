title: git ssh 添加
tags:
  - git
categories:
  - 工具
author: shankun
date: 2018-07-12 20:03:00
---
1.打开git bash

2.配置git的name和email 

``` bash
$ git config global user.name "xushankun"
$ git config global user.email "lovexsk@qq.com"
```
<!-- more -->
3.生成密钥
``` bash
$ ssh-keygen -t rsa -C "lovexsk@qq.com"
```
然后回车，然后会提示输入2次密码，密钥生成。

4.将密钥添加到ssh-agent
```bash
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_rsa
```

5.登陆github，添加SSH将id_rsa.pub文件的内容添加到github

找到系统用户【当前系统用户】，.ssh  里的 id_rsa.pub文件内容   复制  到github


6.测试
```bash
ssh -T git@github.com
```
提示Hi,xxx