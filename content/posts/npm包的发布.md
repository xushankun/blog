---
title: "npm包的发布"
date: 2018-09-12T13:20:00+08:00
author: "Xu Shan Kun"
draft: false
tags:
  - "node"
  - "npm"
categories:
  - "工具"
---
###	首先去官网注册npm帐号
[去npm官网注册帐号](https://www.npmjs.com/)

###	然后在本地新建项目文件夹，例如shankun
  	cd shankun
  	npm init  	//初始化一个package.json
<!--more-->
+	默认包名称 【一定得是npm库里不存在的，可以去[npm官网](https://www.npmjs.com)查询】
+	描述
+	版本号
+	入口文件(index.js)  默认
+	关键词
+	作者


回车	初始化OK 【文件夹shankun下多了一个文件package.json】

###	当前目录下新建index.js【初始化时指定的入口文件】
![release-npm-1](https://shankun-1257055090.cos.ap-chengdu.myqcloud.com/blog/npmImg/release-npm-1.png)

###	README.md  项目描述文件【非必选，不过作为一个专业的开发，你懂的】
![release-npm-2](https://shankun-1257055090.cos.ap-chengdu.myqcloud.com/blog/npmImg/release-npm-2.png)

###	准备发布
		cd shankun
		npm login
        
![release-npm-3](https://shankun-1257055090.cos.ap-chengdu.myqcloud.com/blog/npmImg/release-npm-3.png)
```
npm publish		// 发布成功如下图【每次发布版本号不能重复】
// + 包名@版本号
```
    
![release-npm-4](https://shankun-1257055090.cos.ap-chengdu.myqcloud.com/blog/npmImg/release-npm-4.png)

###	移除包
```
npm unpublish 	// 同发布
// - 包名@版本号
``` 
     
###	接下来 我们  就可以【npm install 包名称】去安装包了
**官网查询结果如下图：**
![release-npm-5](https://shankun-1257055090.cos.ap-chengdu.myqcloud.com/blog/npmImg/release-npm-5.png)

```
-g	全局
--save	本地安装写进package.json  的  dependencies
--save-dev	本地安装写进package.json 的 devDependencies
```