1：首先解决git的问题，要实现版本回退，以及版本发布；
	建立远程仓库，带一个readme   应该先克隆，会方便一点
	本地：git init  
	      git add .   出现换行符的waring
	      git commit -m"新建第一次提交"
	      git status  提示未提交的文件，以及在master分支；
	      git remote add origin git@github.com:jinhuashijie/test2.git   无反应
	      git push origin master   -又出现推送相同分支冲突
	      重新提交也不行，gitgui也不行；
	      git remote add origin  https://github.com/jinhuashijie/test2.git
	      git push origin master    更换地址也不行；报相同的错误

	      git remote rm origin
	      git remote add origin git@github.com:jinhuashijie/test2.git
	      git push origin master   反应还是慢，又失败了，

	      git remote rm origin
	      git remote add origin  https://github.com/jinhuashijie/test2.git
	      git push origin master   反应还是慢，又失败了，

	      手动删除config里面remote；还是失败了，报同样的错误
	      git remote add origin git@github.com:jinhuashijie/test2.git
	      git push origin master
	      手动删除之后
	      git remote add origin  https://github.com/jinhuashijie/test2.git
	      git push origin master   反应还是慢，又失败了，
	      手动删除之后
	      git commit -m 
	      git remote add origin  https://github.com/jinhuashijie/test2.git
	      git push origin master   反应还是慢，又失败了，

	      删除.git之后从新
	      git init  
	      git add .   出现换行符的waring
	      git commit -m"新建第一次提交"
	      git status  提示未提交的文件，以及在master分支；
	      git remote add origin git@github.com:jinhuashijie/test2.git   无反应
	      git push origin master   -又出现推送相同分支冲突--还是不行；见鬼了
failed to push some refs to 未能推送某些参考
	update were rejected because the remote contains work that you do not have locally
	更新被拒绝，因为远程包含本地没有的工作。---很可能是远程md的问题
	this is usually cased by another repository pushing to the same ref  
	这通常是由另一个仓库推到相同的参考文献。---应该是文件重复的问题
	you may want to first integrate the remote changes before pushing  again
	在再次推送之前，您可能希望首先集成远程更改 还是应该是远程更改没有同步的问题
	git fetch origin   一没有同步到本地；
	git fetch origin master  还是没有同步到本地
	refusing to merge unrelated histories   拒绝合并不相关的历史  
	git pull origin master ----allow-unrelated-histories  没有这个命令
	git pull origin master --allow-unrelated-histories  这个是可以的  本地有文件了
单个文件推送成功了--全部文件也推送成功了
			git pull origin master
			git push origin master  还是不行；
			git push -f
			git fetch     git merge  都不行

			即便是修改了本地的readme文件的名字，还是有问题；同样报错
			一个文件都无法推送成功
			删除远程readme，一个文件还是无法推送成功
			从远程克隆下来推送单个文件是成功了的-------------

老是出的问题
	failed to push some refs to 未能推送某些参考
	update were rejected because the remote contains work that you do not have locally
	更新被拒绝，因为远程包含本地没有的工作。---很可能是远程md的问题
	this is usually cased by another repository pushing to the same ref  
	这通常是由另一个仓库推到相同的参考文献。---应该是文件重复的问题
	you may want to first integrate the remote changes before pushing  again
在再次推送之前，您可能希望首先集成远程更改 还是应该是远程更改没有同步的问题

最后的解决方案
	git fetch origin   一没有同步到本地；    
	git fetch origin master  还是没有同步到本地
	refusing to merge unrelated histories   拒绝合并不相关的历史  
	git pull origin master --allow-unrelated-histories  这个是可以的  本地有文件了
	强制合并
单个文件推送成功了--全部文件也推送成功了

git复习：--想要用的功能，在有多人的情况下
	分别clone，分别推送，分别合并，以及版本备份
	--到每一个主版本肯定是强制合并，要么本地强制覆盖到远程，要么远程强制覆盖到本地
	还有分支的强制合并；肯定是覆盖掉，也是可以丢弃，
    一个人可以不爱政府，但不能不爱国家，一个人可以不爱父母，但不能不爱家
	a:集中式版本控制系统；b:git是分布式版本控制系统
	c:git存储的是改动的整个文件，svn存的仅仅是改动的部分
	d1:各种提示翻译
		untracked  files  未被跟踪的文件
		1files changed  1 insertino  一次改变，一次新的增加
		红色文件是未被跟踪的；
		add 到暂存区
		commit到版本库
		modified  :没有暂存，就是没有被跟踪；或者没有add
		git status 如果是提示clean 表示全部被跟踪
	e:git的安装；git version 是可以看到版本号的-官网有zip文件--配置自动完成
	g:  git config --global user.name  jinhuashijie   配置用户的登录信息
		git config --global user.email@jin.com
	f：git的增删改查--有啥用呢？配置config
	d：使用40个16进制的sha-1 hash来唯一标识对象
		1：blob：表示文本文件，连接文件  
		2：tree    目录                 
		3：commit  一个历史提交         type---这个没啥意义
		4：tag     指向固定的历史提交   v0.0.0.1--
		tag--指向--commit--指向--tree--指向--其他tree--
	g:创建仓库：一个是init  ，一个是clone
		init：目录：文件
		clone需要远程裸仓库；
	h:工作区(working directory)-----暂存区(staging area)  ---history respository(历史记录)
	    git rm 文件名 同时删除文件与暂存区的文件；
	    git reset HEAD a   还原；
	    git rm --cached a 只从暂存区删除
	    git status  查看未提交，未跟踪，有绿色红色之分
        git add -a  添加所有工作区的文件

	1：理解git暂存区，--大部分的本地操作都跟暂存区域有关
		git add 之后新生成index文件；--最终看不懂
	2：git本地分支与合并
		1：创建分支  git branch
			git branch test  创建一个新的名为test的分支
			git checkout test 切换到新的分支--修改之后
			git checkout master 切换回主分支 
			切换分支会回到最新提交的状态；
		2：做标记    git tag

		3：切换分支  git checkout
		4：保存修改  git stash
		5：合并分支  git merge

	3：查看与对比历史记录

	4：撤销修改

	5：重写历史记录

	6：邀请他人协作；添加成员--设置权限；







