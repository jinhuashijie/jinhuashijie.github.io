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









