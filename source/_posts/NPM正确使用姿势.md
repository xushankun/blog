title: NPM正确使用姿势
author: shankun
tags:
  - node
  - npm
categories:
  - 工具
  - ''
date: 2018-03-07 12:10:00
---
###	npm、cnpm 安装
-	Node.js：[https://nodejs.org/zh-cn/](https://nodejs.org/zh-cn/)
-	淘宝NPM：[https://npm.taobao.org/](https://npm.taobao.org/)
-	包括更改默认的C盘为其它盘【所有npm全局包的根目录】，以及npm，cnpm环境变量的配置
-	安装教程：[https://www.cnblogs.com/yominhi/p/7039795.html](https://www.cnblogs.com/yominhi/p/7039795.html)
<!-- more -->


###	npm安装模块
```	bash
npm install xxx		// 安装模块到当前node_modules【不写入package.json文件】
```
```	bash
npm install -g xxx	// 全局安装模块
```
``` bash
npm install xxx --save   // 写入的package.json的”dependencies”中
```
``` bash
npm install xxx --save-dev   // 写入的package.json的”devDependencies”中
```


###	npm删除模块
```bash
npm uninstall xxx 	// 删除模块xxx
```
```bash
npm uninstall xxx -g // 删除全局模块xxx
```
* 提示：删除模块应当安装当初安装的方式将 `install` 改为 `uninstall` 才能正确删除

###	other命令
* npm init -y  【 -y 表示跳过设置，直接初始化默认值】   
* 例如npm install express 就会默认安装express的最新版本，也可以通过在后面加版本号的方式安装指定版本，如npm install express@3.0.6
* npm init  会引导你创建一个package.json文件，包括名称、版本、作者这些信息等
* npm remove <name>移除
* npm update <name>更新
* npm ls 列出当前安装的了所有包
* npm root 查看当前包的安装路径
* npm root -g  查看全局的包的安装路径
* npm help  帮助，如果要单独查看install命令的帮助，可以使用的npm help install