title: jenkins搭建部署node项目
author: Xu Shan Kun
tags:
  - jenkins
  - 部署
  - 运维
  - 自动化
categories:
  - 服务器
date: 2019-03-26 17:19:00
---
### 目标
-	centos搭建jenkins
-	实现github提交代码后自动部署项目

### git安装
1. 下载git命令:wget https://www.kernel.org/pub/software/scm/git/git-2.8.3.tar.gz          //选择一个目录后执行，我的是/usr/local/git
2. 解压git的tar包命令: tar -xzvf git-2.8.3.tar.gz  ，进入解压后的文件夹:cd git-2.8.3
3. 安装git安装编译所需要的依赖命令:yum install curl-devel expat-devel gettext-devel openssl-devel zlib-devel gcc perl-ExtUtils-MakeMaker
4. 安装编译源码所需依赖的时候，yum自动帮你安装了git，这时候你需要先卸载这个旧版的git，命令：yum remove git
5. 编译git源码命令:make prefix=/usr/local/git all
6. 安装git至/usr/local/git路径命令：make prefix=/usr/local/git install
7. 配置git环境变量:vim /etc/profile  #编辑profile文件---->最下边添加git的路径即可：export PATH=$PATH:/usr/local/git/bin
8. 让profile文件修改生效命令:source /etc/profile
9. 检验git是否安装成功命令:git --version 安装成功图如下:
![](https://shankun-1257055090.cos.ap-chengdu.myqcloud.com/blog/jenkins/jenkins1.png)

### tomcat安装
1. [官网](http://tomcat.apache.org/ )
![](https://shankun-1257055090.cos.ap-chengdu.myqcloud.com/blog/jenkins/jenkins2.png)
2. 上传服务器
  - 使用FTPCute、WinSCP等工具，可以把安装包上传到服务器
  - 路径是/opt。
3. 安装tomcat
用Xshell等Linux远程连接工具访问服务器【这里更推荐使用MobaXtrem，拖拽式上传文件】。
进入/opt目录，指令是cd /opt。
解压安装包，指令是tar -xzvf apache-tomcat-7.0.67.tar.gz。
重命名解压后的文件夹，指令是mv apache-tomcat-7.0.67 tomcat。
进入内部文件夹，指令是cd /opt/tomcat/bin。
尝试启动tomcat，【启动命令】sh startup.sh，如果报错Cannot find ./catalina.sh.The file is absent or does not have execute permission.This file is needed to run this program，则表示权限不足。
开启权限，指令是chmod 777 *.sh，然后再次启动tomcat，如果这时候没有报错，那就表示正在启动了。
输入tailf /opt/tomcat/logs/catalina.out，可以查看到tomcat的运行信息，如果看到INFO: Server startup in 1925 ms，则表示tomcat已经启动成功了，按ctrl+c退出该日志。
【停止命令】sh shutdown.sh 停止tomcat的运行，继续进行后续操作。

4. 修改tomcat默认端口【亦可不修改】
tomcat默认的端口是8080，也就是说我们在浏览器访问的时候，需要在域名或IP后面加上:8080，  			这样不太方便，但是这个可以修改。
打开tomcat配置文件，指令是vi /opt/tomcat/conf/server.xml。
打开之后按i或者a进入编辑模式。
找到8080，改为80。
然后按Esc键，然后按:wq，保存并退出（那个:是需要同时按着shift键才能出来的）。
启动tomcat【进入bin目录  sh startup.sh】。
开放防火墙80端口。
开放：firewall-cmd --zone=public --add-port=80/tcp --permanent
重载：firewall-cmd --reload


5. tomcat配置
编码有问题，在Tomcat–>conf–>server.xml文件中修改即可：
![](https://shankun-1257055090.cos.ap-chengdu.myqcloud.com/blog/jenkins/jenkins3.png)
6. 访问
在浏览器输入该服务器的域名或者IP，可以看到默认页面。【我这里是使用的默认端口8080】
![](https://shankun-1257055090.cos.ap-chengdu.myqcloud.com/blog/jenkins/jenkins4.png)

### jenkins部署
jenkins的war包下载地址：https://jenkins.io/doc/book/installing/	找到WAR file
#### 解压安装
将jenkins.war包放到Tomcat中webapps并解压，启动Tomcat，成功启动之后访问ip和端口和jenkins如下：
![](https://shankun-1257055090.cos.ap-chengdu.myqcloud.com/blog/jenkins/jenkins5.png)
查看密码命令:vim +图片上显示的红色地址，进入下一个界面让我们安装插件，可以选择左边的，是推荐插件，右边是自己选择(这个没什么必要)安装过程有点慢，只需要等待即可。安装完后自己看提示输入管理员信息。重启tomcat，在网页上输入jenkins地址，登录后的界面如下:
![](https://shankun-1257055090.cos.ap-chengdu.myqcloud.com/blog/jenkins/jenkins6.png)
#### 插件安装
- 插件安装【工作台-系统管理-插件管理】
![](https://shankun-1257055090.cos.ap-chengdu.myqcloud.com/blog/jenkins/jenkins7.png)
在可选插件中安装Deploy to container Plugin(这个是支持将代码部署到tomcat容器的)，选择后直接安装就可以，在安装界面下方勾选安装后重启，如下图：
![](https://shankun-1257055090.cos.ap-chengdu.myqcloud.com/blog/jenkins/jenkins8.png)
- 同样的方式安装：GitHub plugin   和   NodeJS Plugin

#### 全局配置
- 全局工具配置【工作台-系统管理-全局工具配置】
- git配置
![](https://shankun-1257055090.cos.ap-chengdu.myqcloud.com/blog/jenkins/jenkins9.png)
这里注意下git位置，这是可执行文件的地址，不是我们前面安装git的地址，是git/bin下的可执行文件 git的目录，如果不知道可以执行命令:#whereis git,找到路径带bin的git地址就是上面要填的。
- node配置
   ![](https://shankun-1257055090.cos.ap-chengdu.myqcloud.com/blog/jenkins/jenkins10.png)
   
- 系统设置【工作台-系统管理-系统设置】

 在系统管理里面的系统设置中新增一个环境变量，防止新建任务中的git地址填写报208或108错误，【键：GIT_SSL_NO_VERIFY】如下图:
![](https://shankun-1257055090.cos.ap-chengdu.myqcloud.com/blog/jenkins/jenkins11.png)

- 添加凭据【工作台-凭据】 ，即全局git  key的配置

第一步：服务器cmd    ssh -keygen  生成公钥与私钥
点击  工作台-凭据-系统-全局凭据【私钥添加】
![](https://shankun-1257055090.cos.ap-chengdu.myqcloud.com/blog/jenkins/jenkins12.png)
github公钥添加【github-setting里添加，怎么添加去百度吧，一大堆】
#### 新建任务
【任务配置】选择一个自由放个的软件项目-确定
![](https://shankun-1257055090.cos.ap-chengdu.myqcloud.com/blog/jenkins/jenkins13.png)

#### 源码管理
![](https://shankun-1257055090.cos.ap-chengdu.myqcloud.com/blog/jenkins/jenkins14.png)
![](https://shankun-1257055090.cos.ap-chengdu.myqcloud.com/blog/jenkins/jenkins15.png)
#### 立即构建
【进入项目xxx】可以通过控制台查看构建日志
![](https://shankun-1257055090.cos.ap-chengdu.myqcloud.com/blog/jenkins/jenkins16.png)
#### 自动构建
jenkins 配置github 实现提交代码自动触发jenkins job【webhook触发】
1. [方法](https://blog.csdn.net/DevOps008/article/details/81773736)