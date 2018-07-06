1：项目的体量估算--这涉及到项目的进度--十多个小时的教程；
2：项目所需的各个知识点----
3：构建过程中各种跑坑，怎样优化，笔记必须做好。
webapp
	前台：系统首页
		  选择城市
		  搜索页面
		  详情页面
		  收藏购买
		  登陆页面

	后台： 用户中心
		   评价功能

构建工具：webpack，less写css；postcss编译css   
系统框架：react react-router redux
数据交互：fetch --原生的promiss
数据库（模拟数据库）mock   
版本管理git


环境搭建：基础知识；实战开发
了解基础知识，关于js，html。webpack npm；fis3
前几年写什么上什么；现在需要压缩，

所有的问题都应该分好类，采用树状结构，并且多处串联。


收获：如何使用webpack开发系统；学会前端组件化。
解决前面遇到的问题；
---整个系统是跑通的---然后各个知识点是可以跑通的---各种问题是可以得到解决的
各种设想是可以得到验证的。
笔记做完了要方便以后随时看。--分两部分--第一为顺序部分，第二：为专门记知识点的部分；

1-6：安装环境：webapck+react 
	1:save-dev dev代表开发环境；在json文件里面放的地方是不一样的；
1-7：在json中，dependencies，devdependencies  
	webpack.config.js
	path nodejs自带的库，可以直接引用
	webpack  引入之后可以使用插件
1-8：index.jsx是所有文件的入口；
	resolve，里面在引用的时候可以不写后缀名，
	loader： 各种loader
	autoprefixer：加前缀，适配各种内核浏览器；
	plugins：插件：
		htmlwebpack:引用模板文件；
		webpackhotmodulereact 热刷新
		openbrowserplugin：打开指定端口
		webpack.defineplugin：决定环境是否报错；
1-9：webpack.production.config.js
	entry:可以有多个入口，vendor就是第三方依赖库；
	output:放build；
	loader：css分离；
	webpack.BannerPlugin("这里是打包压缩后文件顶底部的备注信息")
	去掉waring
2-1：react基础：jsx--智能组件--木偶组件；-生命周期；
	代码分离：
2-2：jsx语法的注意事项
	只有一个父节点包裹，标签必须正确闭合
	大括号节点里面返回节点，也需要一个父节点；
	大括号里可以写js语法，可以对数组进行map
2-3：事件：循环和判断
	.bind(this) 这个可以直接写在花括号里面
	Date.now()  长串毫秒
	event.prevertDefault
	{arr.map(fucntion(item,index){
		return <li key={index}>{item}</li>   必须有key 
	})}
2-4：代码分离-就是es6下的import
	代码分离的层级：每个文件夹就是一个页面；每个页面的子页放在subpage
	conponent:里面放通用的组件；
	入口：index.jsx=》页面：container=》共用组件：components
	-------这样分离之后，我们在其他项目中也可以引用这些插件；
2-5：数据传递：数据变化
	this.props上一级标签里面不仅仅可以传字符串，还能传变量，传对象，传函数

2-6：智能组件--木偶组件=》containers里 就是智能组件 components就是木偶组件
	智能组件定义数据，木偶组件接收数据；
2-7：生命周期：-就是钩子--执行顺序
	componentDidMount    -可以使用三元来进行首次数据渲染
	shouldComponentDidUpdate
	componentDidUpdate 触发更新完成--结合router
	componentWillUnmount 清空定时函数--组件被销毁之前
3-1：性能优化；
	官方：cnpm i react-addons-perf --save 性能检测工具，引入到入口文件中；赋值到window下；
	Perf.start()  开始检测  直接在控制台写入--然后进行操作
	Perf.stop()  停止检测   操作完成后在控制台说
	Perf.printWasted() 打印出浪费性能的组件；
		import Perf from 'react-addons-perf' 
		if(__DEV__){ 应该是从config里面定义的
			window.Perf=Perf  这个可以单独写；
		}
	十几毫秒之内可以无所谓；
	PureRenderMixin  优化
	官方最基本的优化组件：cnpm i react-addons-pure-render-mixin --save
	直接import    from 
	在构造函数中绑定this，--就是合并了原来的几个mount--每个组件都加
	this.shouldComponentUpdate=PureRenderMixin.shouldComponentUpdate.bind(this)  
	componentDidUpdate(prevProps,prevState){

	}
	shouldComponentUpdate(nextProps,nextState){
		return true  默认返回true
 	}
 	Immutable.js  层次结构比较深的数据结构，就是对象里面有对象，里面还有对象，还有对象，很多层
4-1：路由：-跳转和参数
4-2：router-map的配置
5-1：简单demo；redux
6-1：get请求；数据mock(假数据)--要用到fetch；
6-3：mock：在开发时无法获取后台数据，所以要用模拟数据；
	1：静态模拟数据：json文件--只支持get
	2：模拟动态接口：
	3：转发线上接口
	
7-1:开发步骤
7-2:路由介绍
7-12：安装mock : cnpm install mock whatwg-fetch fetch koa --save-dev
	npm run mock  localhost:3000/api/homehead  在start运行前台之前要先运行后台
	在json中加入命令： node --harmony ./mock/server.js   后端代码在 ./mock 目录下
	fetch 
	后端接口是用koa做的，用来返回json数据；
	在json中加入命令：start后面："mock":"node --harmony ./mock/server.js",
	使用koa框架实现web服务；
		前台是react，但是用什么在来回传送数据？以前是用axios
		后台应该是在用mock搭建的服务
		而json文件就是数据源，替代了mongodb。
			那么，他们是如何创建接口，又是如何传送数据，如何操作数据库的？
*6-1.2.3:koa 的使用，在设置config里proxy之后，后台的get方法确实是成功传到前台了的
	*******************到底是怎么传的***************
	首先后台页面已经搭建好，前台转发设置好，前台引入执行函数，中间的部分怎么弄 的？
	引入两个模块
import 'whatwg-fetch'
import 'es6-promise'
export function postData(){//这个定义的执行函数
	var result =fetch('/api/post',{  //这个是定义的前后台连接的接口
		method:"POST",
		credentials:'include',
		headers:{                   //这是固定的写法
			'Accept':'application/json,text/plain,*/*',
			'Content-Type':'application/x-www-form-urlencoded'  //这个在转换body的格式
		},
		body:"a=100&b=200"         //这个是传输的内容，却没有显示在页面上--请求已经发往后台
	});
	result.then(res=>{
		console.log(144)
		console.log(res.text())
		return res.text()
	}).then(json=>{
		console.log(json,147)  //这两个都执行了的--json代表后台页面的数据-这个接口
	})
}
	**********能够从后台获取数据，如何向后台传递数据呢？
	fetch应该是个中间件，从前台拿到数据，再传递给后台，跟axios差不多；
	还有该如何动态获取数据？就是点击输入不同的页码，从后台获取不同的数据；
7-16：猜你喜欢的布局；


https://pan.baidu.com/s/1uaMYKifsHXQA8bJCxDmL7w
备忘的知识点：
xshell 模拟linx命令
手写代码与模块代码分开打包；缓存模块代码，更改手写代码的hash名字；
7-17-18：加载更多：
	点击加载更多已经可以实现；只要请求到数据然后加入state就行，要用到concat方法


所用到的知识点-------------
1：主要的mock，以及fetch，以及css3字体图标
2：分组件的概念，一个文件夹一个组件，这样可以实现完全的复用，只需在组件内部修改样式即可
3：subpage的概念；
4：步骤架构上面
	头部：--加载城市，
	中部：--轮播图
	底部广告：
	最底部加载更多
5：loading的加载

7-7：字体图标：需要在config里面配置；
	icomoon 是一个图标生成器网站，可以任意选择图标并打包下载









