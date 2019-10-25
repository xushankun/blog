title: git基本使用命令
author: Xu Shan Kun
tags:
  - git
categories:
  - 工具
  - ''
date: 2018-03-09 10:02:00
---
##	git四个阶段的撤销更改
###	基本概念
####	三个步骤
*	工作区→暂存区→本地仓库→远程仓库
```node
git add .
git commit -m "content"
git push
```
<!-- more -->

1. `git add.` 把所有文件放入`暂存区`
2. `git commit`把所有文件从`暂存区`提交进`本地仓库`；
3. `git push`把所有文件从`本地仓库`推送进`远程仓库`。

####	四个区
git相比于svn等传统的版本管理工具，多了一个`暂存区（state）`的概念

* 工作区（Working Area）
* 暂存区（State）
* 本地仓库（Local Repository）
* 远程仓库 （Remote Repository）

####	五种状态
进入每一个区都会有一种状态，加上初始状态，刚好5个状态，分别如下：
*	未修改（Origin）
*	已修改（Modified）
*	已暂存（Stated）
*	已提交（Commited）
*	已推送（Pushed）

###	检查修改
####	已修改，未暂存
当我们修改了某个文件，但是还没有`git add .`之前，我们用`git diff`命令来检查哪些文件内容被修改了【还未进入`暂存区`】
####	已暂存，未提交
现在我们把 修改 放入`暂存区`看看。先执行 `git add .`，再执行 `git diff`，会发现没有任何结果。【说明：`git diff`只检查`工作区`和`暂存区`之间的差。如果我们想看到`暂存区`和`本地仓库`间的差异，使用`git diff cached`】

####	已提交，未推送
现在我们把修改从`暂存区`提交到`本地仓库`，先执行`git commit`,再执行`git diff --cached`，没有差异。执行`git diff master origin/master`，我们可以看到差异。`master`是你的`本地仓库`，而`origin/master`是你的`远程仓库`,`master`是分支的意思，因为我们都在主分支上工作，而`origin`就代表远程。

####	撤销修改
如果我们只在编辑器里修改了文件，但还没有执行`git add .`,这时我们的文件还在`工作区`，并没有进入`暂存区`。我们可以用：
```node
 git checkout 或 git reset --hard 来进行撤销操作，
```
修改后`git add .`前进一步，`git checkout`后退一步撤销刚才的修改。

####	已暂存，本地已提交
你已经执行了`git add .`,但还没执行`git commit -m 'comment'`，这时候意识到错误，想要撤销可以执行
```node
  git reset
  git checkout
```
或
```node
	git reset --hard
```


####	已提交，未推送
执行了`git add .`，又执行了`git commit` ,这时候你的代码进入了`本地仓库`，
```node
git reset --hard origin/master
```
已推送的
```node
git reset --hard HEAD^	//先恢复本地仓库
git push -f		//强制push到远程仓库
```

---
##	fatal: Authentication failed for又不弹出用户名和密码
###	重置
切换执行命令
```node
git config --system --unset credential.helper
```
然后就可以重新提交用户名和密码进行提交了

---
##	添加本地项目到git【本地已配置用户名及密码】
命令行中执行以下：
```node
git init   ----------初始化git仓库
git remote add origin 你的项目地址 //注:项目地址形式为:http://git.oschina.net/xxx/xxx.git或者 git@git.oschina.net:xxx/xxx.git     用来连接远程码云
```

开始第一次上传你的项目
```node
git add .      --将项目中的所有文件上传
git commit -m '对上传文件的注释'
git push origin master    --正式上传至码云中，若上传有问题，可以试试   git push origin master -f 表示舍弃线上的文件，强制推送
```

推送成功后git pull时【需要进行一次远程分支和本地分支的关联】
![git-branch-1.png](https://shankun-1257055090.cos.ap-chengdu.myqcloud.com/blog/gitImg/git-branch1.png)
```
git branch -a

git branch --set-upstream-to=remotes/origin/master master
```
![git-branch-2.png](https://shankun-1257055090.cos.ap-chengdu.myqcloud.com/blog/gitImg/git-branch2.png)

---
##	git回滚到任意版本
###	先显示提交的log
```node
$ git log -3
commit 4dc08bb8996a6ee02f
Author: Mark <xxx@xx.com>
Date:   Wed Sep 7 08:08:53 2016 +0800

    xxxxx

commit 9cac9ba76574da2167
Author: xxx<xx@qq.com>
Date:   Tue Sep 6 22:18:59 2016 +0800

    improved the requst

commit e377f60e28c8b84158
Author: xxx<xxx@qq.com>
Date:   Tue Sep 6 14:42:44 2016 +0800

    changed the password from empty to max123
```
###	回滚到指定版本
```node
git reset --hard e377f60e28c8b84158
```
###	强制提交
```node
git push -f origin master
```
