1：create-react-app  test2   生成一个项目相当慢，应该还是npm速度的问题，五六分钟不止；
  直接start就能打开端口，不用自己配置一堆文件了；也不用写目录，也不用写依赖入口，
2：文件目录分析
   src里面indexjs是主入口文件
3：项目的需求分析
    流程：登录---无账号则注册--输入注册基本信息--选择头像并完善信息--登录成功进入主界面
    boss看到牛人列表，牛人看到boss列表，有，最近联系人和未读消息界面，有个人中心和退出界面

	1：注册，以及注册校验
	2：登录，以及登录校验
	3：选择头像，完善信息
	4：boss/牛人列表
	5：未读消息，最近联系人置顶
	5：个人中心--显示个人信息，退出按钮，确认退出
4：要用到的知识点
	1：react组件的复用，
	2：express搭建服务器，
	3：mongodb数据管理，增删改查
	4：利用react-redux管理状态
	5：利用axios实现跨域向后台传输数据；
	6：使用antd-mobile少写css代码
	7：使用git进行版本管理与发布；
5：已经有能力实现的功能
	1：利用react写基本的页面，
	2：express搭建服务器，，mongodb增删改查，antd-mobile组件引入
6：难点：redux状态分发，axios跨域，git版本管理；---这些是如何实现的？
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
	      git push origin master












