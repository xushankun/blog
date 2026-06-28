---
title: "github中fork的使用"
date: 2018-12-13T10:01:00+08:00
author: "Xu Shan Kun"
draft: false
tags:
  - "git"
  - "Github"
categories: ["工具效率"]
---
在Github上如果看到有很不错的项目和作品，一般我们可以进行三种操作：那就是**watch**，**star**和**fork**
<!--more-->
-	watch就是关注repo的动态
-	star则类似社交网站的点赞，收藏，like等
-	fork就是讲别人的项目拷贝一份给自己，new一个新的分支（Branch）出来，你push的改进和补充则又由原作者选择是否接受。【更改别人项目的bug 或者 优化别人的项目的常用操作】

如下图所示：

![github-fork1](https://shankun-1257055090.cos.ap-chengdu.myqcloud.com/blog/github-fork/github-fork1.png)

###	第一步：fork后 直接是以下界面【github的操作】
![github-fork2](https://shankun-1257055090.cos.ap-chengdu.myqcloud.com/blog/github-fork/github-fork2.png)

###	第二步：直接 clone 代码到本地进行修改并提交【git操作】
这里正常修改代码提交【就不多废话了】详见：	**[git基本使用命令](https://shankun.top/git%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8%E5%91%BD%E4%BB%A4.html)**
###	第三步：pull request
####	New pull request
![github-fork3](https://shankun-1257055090.cos.ap-chengdu.myqcloud.com/blog/github-fork/github-fork3.png)

####	点击Create pull request   【新建关于提交代码的  issues 进行讨论】
![github-fork4](https://shankun-1257055090.cos.ap-chengdu.myqcloud.com/blog/github-fork/github-fork4.png)

####	添加描述并确认创建
![github-fork5](https://shankun-1257055090.cos.ap-chengdu.myqcloud.com/blog/github-fork/github-fork5.png)

###	第四步：结果等待确认是否通过
如果出现merge pull request按钮，表示可以和上游仓库同步。之后点下方的merge pull request进行合并，并确认。
![github-fork6](https://shankun-1257055090.cos.ap-chengdu.myqcloud.com/blog/github-fork/github-fork6.png)

![github-fork7](https://shankun-1257055090.cos.ap-chengdu.myqcloud.com/blog/github-fork/github-fork7.png)


###	删除自己的一个 repository【仓库】
这里包含自己建的仓库与fork【复制别人的项目到自己】的仓库
####	找到项目settings选项
![github-fork8](https://shankun-1257055090.cos.ap-chengdu.myqcloud.com/blog/github-fork/github-fork8.png)
####	右下角  delete this repository
![github-fork9](https://shankun-1257055090.cos.ap-chengdu.myqcloud.com/blog/github-fork/github-fork9.png)
####	输入仓库名称，点击同意
![github-fork10](https://shankun-1257055090.cos.ap-chengdu.myqcloud.com/blog/github-fork/github-fork10.png)
####	输入github密码  进行最后确认删除