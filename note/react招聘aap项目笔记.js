1：create-react-app脚手架生成文件格式
它是官方已经配置 好的模板--不用手动配置webpack，react之类
npm install -g create-react-app
create-react-app -v   能跑通
create-react-app  test  新建一个应用，之后会自动暗转一系列依赖
可以跑，速度很慢；非常慢
目录结构：
nodemodules      
public         静态资源  index.html 在这里面
src            源代码
gitignone      github
packagejson    项目依赖版本
readme.md
之后 npm start 端口可以自动打开；页面也可以正常显示；
react app 主要依赖的几个组件模块
react+react-dom+reac-scripts
2：如何安装和使用第三方库
npm install redux --save  安装第三方库
npm run eject 弹出配置文件，可以自定义webpack --单向不可逆向
扩展package.json里面的script字段，扩展npm run 命令；
3：如何定制化配置；
使用eject  


=====================es6常用语法===================
1：react默认使用es6开发
2：重点语法
	块级作用域 字符串，函数
	对象扩展 解构
	类，模块化；
3：使用反引号，直接写变量，多行字符串，告别+拼接字符串
name='immoc';
course='react开发app';
console.log('hello'+name+','+course);
console.log(`hello ${name},course is ${course}`)
反引号还支持多行字符串，换行不会报错
4：默认参数，箭头函数，
箭头函数保持this作用域，还能再简写，在只有一条return语句的情况下
let a=(name='me')=>{
	console.log(name);
}
a("you");
以前传入数组的参数
function hello(name1,name2){
	console.log(name1,name2)
}
arr=['imooc','woniu'];
hello.apply(null,arr)//改变指针到null，
es6的方法
hello(...arr);

对象的扩展；+对象的方法简写；+
const obj={
	a:1,
	b:2,
	c:3
}
console.log(Object.values(obj))//打印出由属性值组成的数组
console.log(Object.keys(obj))//打印出由属性组成的数组
console.log(Object.entries(obj));//打印大数组，里面由键值对组成的小数组
给对象添加键值
const name="immoc"
const obj={

}
//这个name必须是已经定义了的，前面必须有值，后面可以覆盖；
obj[name]='hello imooc';//往对象里成功添加了键值对
console.log(obj)
新方法添加键值对
const name='imooc';
const obj={
	[name]:'hello'//方括号被称为计算属性
}//同样是前面必须有值，后面可以覆盖；
console.log(obj);
对象里函数的简写，不需要function直接带小括号+大括号
2：对象的合并，以前只能用for循环，现在用三点
const obj1={name:'me',age:18};
const obj2={name:'you',name1:'test',age:20}
console.log({...obj1,...obj2})//相同属性会被后面覆盖；

解构赋值====数组解构===对象解构
const arr=['hellow','world'];
//原来的方法
//let arg1=arr[0];
//let arg2=arr[1];
//console.log(arg1,arg2);
//es6的方法
let [arg1,arg2]=arr;
console.log(arg1,arg2)//这个也感觉不到有啥用，
//用处主要是每个名字变成独立的变量了，可以在外面用了

=============================================
提供class的语法糖
是prototype的语法糖
extends继承
constructor构造函数；

class Myapp{
	constructor(){
		this.name="you";
	}
	sayHello(){
		console.log(`hello ${this.name} !`)
	}
}
const app=new Myapp()
app.sayHello()//这个应该算是构造函数的语法糖

=============================
es6中新出现的数据解构
set  元素不可重合
map    对象的扩展，
symbol   重复的变量

=================================
es6自带了模块化的机制，告别seajs和requirejs
import ,import{}
export  export default
node现在还不支持（），还需要用require来加载文件

如何对外暴露？

两个js文件，
js1：
export const name='helloworld';
js2
import {name} from './js1';//这里带不带花括号都不行；
console.log(name)
直接在文件里面引用还不行，可能需要服务器或者node环境--有服务器，有node还是不行
----------怎么都不行

=========================
对象扩展负
装饰器
async  await
其他特性
promise
迭代器，和生成器
代理 proxy

=============================第二章：第三课===================
第三部分  express+mongodb
1： express 开发web接口 基于nodejs的极简框架
2：非关系型数据库mongodb，mysql存储表格类型，mongodb存储json类型
使用node链接mongodb，需要用到中间件，mongoose
3：src放置源码  server放置后台
4： 安装express之后，在server.js里面引入express模块
里面还会监听端口，监听之后有函数，
5：express的格式，app.get(url ,function(){})
6:：还要用到nodemon，这个可以让node服务器自动重启
7：app.get  app.post 传输数据的不同个的接口
8：app.use  引入模块，
9：res.send  res.json res.sendfile 响应不同的内容
  文本 json  文件；
安装：cnpm install express --save   以后是用cnpm npm实在是太慢了
cnpm install -g express-generator   express -v居然报错了，还是慢；但比npm快多了
express --version  这个可以显示出版本来
*前面直接运行  node server.js  是报错的，npm start打开的却是react的端口
单词拼错了，是listen而不是listener  是可以运行js文件的，
app.get后面的参数中斜杠掐面是不能加点的路径格式，端口可以打开，内容可以显示
没修改一次，服务就得在cmd里面重启一次；而且路径也是需要设置的，有点跟react-router相似
cnpm install -g nodemon  这个插件来进行自动重启服务，大概四十秒钟
命令也变了，nodemon server.js  不用手动中断，但是还是得手动刷新
===============第二章：第四课：express与mongodb结合==================================
第四部分：express + mongodb基础
1：下载安装mongodb，跟安装nodejs差不多；安装完输入mogo在cmd里面，
2：npm安装中间库mongoose，安装完可以直接使用；怎么用？
3： 在 server.js 里面直接require；
4：也是mongoose.connect(db_url);
5:mogo里面有文档的概念，什么东西？也有增删改查的操作
6：定义文档模型，schema和model新建模型；
7：mongoose文档类型：string，number等数据结构，
 定create  remove  update分别用来增删改 find是查，还有findone
8：打印都是打印在cmd里面的；看数据也是在浏览器里面，特定的本地端口
9：express使用body-parser  -支持post参数
10：使用cookie-parse 存储登录信息cookie --mongodb独立工具函数
*安装mongodb：
mongod.exe --config C:\Program Files\MongoDB\mongo.config   不行
mongo.exe --config C:\Program Files\MongoDB\mongo.config    也不行
mongod  可以跑出一堆东西；还是链接不上；
运行mongod可以看出错在哪里，原因是c目录下没有data，db文件夹，新建两级目录之后就可以了
接下来让mongodb与express配合
cnpm install mongoose --save
需呀同时启动mogod 和mongoose才行；
**********************************第三章：react基础知识*************************章星课等部分减备注井
1：react入门实例---关键的一切皆组件--专注view层，mvc
cnpm install --save react@next react-dom@next  更新react
2：react16还需要@next前缀；
3：jsx基础语法---react的view层语法
js里面直接写html，class要写成className ；  变量用{}包裹即可
4：一切皆是组件---块；
5：只要是组件都必须使用class语法
import React from 'react';//引入依赖是所有组件必须的；--这个已经不能用了
class App extends React.Component{
	//这就是一个组件，等于一个class就是一个组件
	render(){//是一个返回函数，等于return
		return <h2>测试</h2>
		const boss='测试';
		return <h2>我是{boss}</>//数据直接用花括号包裹

	}
}
export default App;//向外暴露这个组件
//主文件或者其他引用文件里面应该使用App作为标签
//组件变量名，首字母必须大写；
class First extends React.Coponent{
	render(){
		return <div>返回这个数据</div>
	}
}
class Second extends React.Component{
	render(){
		return 
	}
}
7----------------/第三课：组件之间传递数据-------------
1：组件之间用props传递数据；<组件 数据=‘值’> 的形式
	组件里使用 this.props获取值
	如果组件只有render函数，还可以使用函数的形式写组件；
class App extends React.Component{
	render(){
		const boss="李云龙";
		return 
			<div>
				<h3>独立团，团长{boss}</h3>
				<一营 老大='张大喵'></一营>//这里用到了组件
				//上面在组件里面定义了值
				<骑兵连 老大='孙德胜'></骑兵连>
			</div> //这样也能行，函数名字作为标签，参数传值；
	}
}
function 骑兵连(props){
	return <h2>骑兵连连长{props.老大}</h2>
}
class 一营 extends React.Component{
	render(){
		return <h2>一营营长：{this.props.老大}</h2>
		                   //值被传到了下面
	}
}
---------------------------第三章：第三课：组件内部通过state管理状态------
jsx本质就是js；所以直接数组.map渲染列表--jsx本质是js，所以可以直接在里面运行js代码
Constructor设置初始状态，记得执行 super(props) 
state就是一个不可变的对象，使用this.state获取；
如何渲染一个列表？
class 一营 extends  React.Component{
	constructor(props){//这是一个构造器
		super(props)//这个是固定格式吗？
		this.state={//这个用来存放数据，就是所谓的状态；
			solders:['胡子','柱子','王根生']
		}
	}
	render(){
		return (
			<div>
				<h2>一营营长，{this.props.老大}</h2>
				<button onClick={this.addSolder}>新兵入伍</button>
				<ul>
					{this.state.solders.map(v=>{
						return <li key={v}>{v}</li>
					})}
				</ul>//最后确实循出来了列表
				<i></i>
			</div>
		)
	}
}


-----------------------------第三章：第四课：事件-------------
onClick点击事件，jsx里面，onClick={this.函数名}来绑定事件
this引用的问题；需要在构造函数里用bind绑定this；
或者使用箭头函数
this.setState修改state，返回新的state
一个函数，然后在函数里面使用 this.setState({})修改状态，页面会自动渲染修改后的数据


----------------------------第三章第五课：react生命周期----------
react有若干钩子函数，在组件不同的状态下执行；
初始化周期，组件重新渲染生命周期，组件卸载生命周期
第一次渲染要执行的所有函数，
第二：改变状态的时候的；
第三：组件要离开这个页面，要卸载，删掉
怎么做垃圾回收，状态清理；
-----这个除了有个顺序之外也看不出来有什么其他的用--
难道会自动执行？比如在修改之后，会自动调用？

-----------------------第三章：第六课：react开发工具-------------
在chrome扩展程序里面；react developer tools
控制台右边多了一个react按钮；可以看到状态，state，组件；

-----------------------第七课：antd-mobile组件库-------
蚂蚁金服出品的ui组件库；pc端，移动端--antd-mobile
也需要npm安装；cnpm install antd-mobile@next --save  非常慢，极度慢
官网有demo；
css文件放在dist里面；
也需要在主组件文件里面import
按需加载的插件，cnpm install babel-plugin-import --dev   还需要在json里面添加一个对象组
cnpm install babel-plugin-import --dev --save  json里面还是没有babel
cnpm install babel --save --dev  json里面还是没有
需要把数组放到json文件里面，还需要加上双引号，单引号不行；
兼容react-native与web
layout--布局组件
表单组件，数据展示组件，选择器等等
操作组件
各种布局用的组件，跟bs差不多；--这个是需要好好学些的，完全新的；

====================第四章第一课：redux的基础知识============
redux是什么？专注于状态管理，和react解耦，也能跟angular用
单一状态，单向数据流
redux核心概念
核心概念：store   state  action  reducer
每个组件都有内部各自的状态，各种变化，以前都是setState管理
保险箱概念，所有人的状态都有记录；被记录的状态state
需要改变的时候，改变的管理dispatch  要干什么action
处理变化的，reducer 拿到state和action
需要用cnpm install redux  --save 安装redux
第一步：新建store，都是需要用import引入redux
通过reducer文件，根据老的状态和action生成新的状态
import {createStore} from 'redux';
function counter(state=0,action){
	Switch(action.type){//type才是真正的参数
		case '加机关枪':
			return state+1
		case '减机关枪':
			return state-1
		default:
			return 10 //这个默认的初始状态
	}
}
//新建store
const store =createStore(counter)
//预料的情况是，一个类似仓库的地方放置初始状态
//一个工具函数来执行可能的操作
//一个函数监听变化，根据参数执行操作
//事实上是在初始状态里直接放了肯能的命令以及判断；
const init =store.getState();
console.log(init);
function Listener(){
	const current = store.getState();
	console.log('现在有机枪${current}把')//估计应该是反引号
}
store.subscribe(Listener);
store.dispatch({type:'加机关枪'});
store.dispatch({type:'加机关枪'})
store.dispatch({type:'减机关枪'})//这几个函数会依次执行
//每执行一次，操作一次数量，并打印出来；

-----------第四章：第二课：redux如何与react一起用-----
把 store.dispatch方法传递给组件，内部可以调用修改状态；
Subscribe 订阅render函数，每次修改都重新渲染；
redux相关内容，移到单独的文件 index.redux.js单独管理；

-------------第三课：让redux可以处理异步----------

------------第四章：第四课：更进一步------
处理异步，调试工具，更优雅的和react结合
redux-thunk  处理异步的插件:cnpm install redux-thunk --save
使用applyMiddleware 开启thunk中间件
anction可以返回函数-对象 使用dispatch提交action
cnpm install redux-devtools-extension --save 并且启用
使用react-redux优雅的链接react和redux
npm install redux-thunk --save
使用applyMiddleware开启thunk中间件
action可以返回函数，使用dispatch提交action
===============第四章：第五课：调试工具=============================
1：chrome扩展程序
    新建store的时候判断 window.redux-devtools-extension
    使用compose结合thunk和 window.devToolsExtension
    调试窗的redux选项卡，实时看到state
-------------第四章：第六课：使用react-redux结合起来--
react-rudux 提供provide 和connect两个接口来连接
2：provider组件在应用最外层，传入store即可，只用一次
cnpm install react-redux --save   安装了之后为什么还是一直转圈加载不出来呢？也不报错







**********************************************


++++++++++++++++++++++++++++自己的总结判断++++++++++++
1：主框架搭好了，利用create-react-route
2：es6需不需要转换？
3：express需不需要安装？应该需要，用来管理后台数据；--可能还需要requirejs



+++++++++++++++++++++++++第一章：第一课：概览+++++++++++++++++++++++++

单纯用react做大型项目是困难的；所以需要redux
redux里面的概念---这个比较困难；
dispath   action  reducer
state   单身边数据流
1：做什么?
	有实时聊天功能的招聘app
2：:有哪些功能
登陆注册，信息完善，个人中心，牛人列表
boss列表，消息列表，聊天详情页
3： 哪些技术栈？
react全局桶；+react16 +redux +react-router+acss+create-app
前端页面：
后端：express开发web接口，socketio开发实时聊天，mongodb开发数据存储

第一部分：前端页面
第二部分：前端支撑--前端用到的react全家桶的功能模块
antd-mobile组件库；
redux状态管理
react-router路由
axios异步请求
create-react-app --做项目脚手架
第三方插件--蚂蚁金服插件，少写css

知识储备+react全家桶学习；
4-11 完整的项目实战
12：回顾总结；

+++++++++++++++++++++++react主要的知识点+++++++++
事件，生命周期，构造函数，状态；
---------普通的方式渲染，传递状态，绑定事件修改状态------------
1:在nodejs下，react原来的方法很多已经不能用
2：state不能用原来的方法设置；参数在标签里采用 this.props，在render里面直接用名字
3:在nodejs里面getInitialState已经不能用了，要用构造函数设置state
4： constructor(props) {  
	    super(props);  
	    this.state = {date:100};  
	} 需要在下面bind（this）不然就报错，事件绑定 this.函数名后面也不能加括号
	有多个事件就得绑定多个this，不绑定即报错
	要么就在onclick后面绑定直接执行的箭头函数
5:循环渲染数组成列表的方法，要用到map方法；箭头函数，key，return
----------------采用redux的方式修改和绑定------------------
1：redux核心的概念，store  state,action ,reducer
2：store代表管仓库，state代表所有的记录，dispatch是联络专员，reducer是管理员
管理员新建一个仓库，里面放了各种状态，通过store.getState()方法获取状态
store.dispatch 通过仓库的联络员来修改状态
管理员接收状态和变化，更新状态，
可以用store.subscribe监听每次修改
1：首先要引入redux，还需要一个内部函数{createStore} 实际上引入的内部函数
2：然后创建一个带判断选项的函数，里面传两个参数
3：然后在createStore下实例化这个函数，这个函数变成了一个参数


























































































































































































































































