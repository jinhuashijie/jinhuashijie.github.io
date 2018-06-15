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
	1：react组件的复用，--以及修改json文件，eject自定义json文件
	2：express搭建服务器，
	3：mongodb数据管理，增删改查--socket.io 分发请求
	4：利用react-redux管理状态---用router管理路由---
	5：利用axios实现跨域向后台传输数据；
	6：使用antd-mobile少写css代码
	7：使用git进行版本管理与发布；
	对每一版代码进行分别备份，以及版本管理；
5：已经有能力实现的功能
	1：利用react写基本的页面，
	2：express搭建服务器，，mongodb增删改查，antd-mobile组件引入
6：难点：redux状态分发，axios跨域，git版本管理；---这些是如何实现的？

7：单个的知识点解决
	1：复杂应用必须用redux ----专门针对redux
	关键字：dispatch   action   reducer  state  单向数据流
	2：页面规划：前端
		登录页面   完善信息页面   牛人列表  boss列表  消息列表页面   聊天详情页面  个人中心页面
		前端技术支持：
		antd-mobile样式组件库   redux状态管理   react-router4路由
		axios异步请求    create-react-app自动构建模板(脚手架工具)  第三方组件
		后端支持：所需要的技术模块
		react
		express   socket.io
		mongodb
		1：eject 安装之后，直接 npm run 
		2：es6常用语法
			let const 三点 字符串拼接直接拼用反引号加$符号， 已经没问题了，主要是箭头函数，解构，模块化，还有作用域的问题
			1：箭头函数
				function hello(name){
					console.log("hello",name)
				}
				hello("you")//可以直接输出
				const m=(hello)=>{//一个参数的情况下可以不带括号
					//return console.log(hello)
					return hello//上面打印的是文字不带引号，下面也能打印，但是是带引号的
				}
				m("me")//这样确实可以打印出来，
				const n=hello =>hello//在只有一个返回值的情况下，不带return也是可以的
				n("me")
				this的作用于的问题，会在定义时的this，不想var在setTimeout的情况下this会跑到window上
				参数还能带默认值；直接在后面用等号；

			3：特有的方法，
				获取所有的对象的key值；属性值，以及转换成数组
				const obj={name:'imooc',age:18}
				console.log(Object.keys(obj))  //三个拿出来的都是数组，
				console.log(Object.values(obj))
				console.log(Object.entries(obj))

				多个对象的合并
				const obj1={name:"me",age:20}
				const obj2={name:"me2",age:30,from:"home"}
				const obj={...obj1,...obj2}
				console.log(obj)//相同属性也会被后面的覆盖

				解构赋值
				const arr=['hello','imooc']//这样可以一次定义多个变量，数组只能定义固定值
				let [arg1,arg2]=arr  //也就等于 let arg1=arr[0]  let arg2=arr[1]
				console.log(arg1,arg2)//确实可以分开打印--等于分成两个变了，可以直接用

				const obj ={name:"you",home:"age"}
				const {name,home}=obj
				console.log(name,home)//这里只打印了属性值，而不是变量与值

				class的语法糖，var里面要用原型；--extends--可以写成一个构造函数
		3：express的使用方法--测试文件：server/server.js
			cnpm install express --save
			mongodb的使用方法--安装--msi应用程序
			//brew  install mongodb  也是需要依赖到npm的  这个用不成
			cnpm  install mongodb  也是需要依赖到npm的
			cnpm install mongoose --save  这个是结合express的
			mongodb是需要自己建立一个文件夹的，然后运行exe，
			使用mongoose，connect 连接
				schema和mode新建文档
				create  remove  update  find  findone
			要把数据传到页面上还是要通过express定义的路径
			findOne的时候输出的不是数组而是对象了
		4：mongodb用独立工具函数，专门一个文件，用来操作数据
			express使用body-parser支持post参数
			使用cookie-parser存储登录信息cookie
	3：react基础知识；.
		1：直接import组件，变量用花括号包裹{}，class写成className，一切皆组件
		2：组件直接传递数据，第一种是标签里面，然后用 this.props来获取
			a:还能以函数的形式来写组件--前提是内部只有一个render函数--props不需要this
		3：通过state来管理状态，props是传递参数
			使用constructor设置初始state，固定的prop需要super，参数里得有props
			使用map渲染li列表，输出state的列表；列表里必须有key，只要唯一就行，什么都可以，map的参数是数组的值
		4：事件绑定，mouseover事件这样写：onMouseOver，而且需要在构造函数里绑定this，不然会找不到this
			this.setState({}) 这里必须用小括号包裹一层，要修改的数据放在花括号里面，引用是 this.state，要绑定this
		5：生命周期，这个没啥好用的，只有在用的时候作为回调函数
		6：chrom扩展-redux，还有性能调试的工具；也有react能看到数据结构，state状体
		7：antd-mobile的引用，也需要npm以及import组件
	4：redux的使用：--专门用来管理状态，angular，vue也可以用redux
		1：单一状态，单向数据流
		2：核心概念：
			store:管理贮存所有的state；
			state:
			action:要做什么，使用dispatch
			reducer：处理变化，根据state和action
		3：预期上面：
			一个地方专门管理所有的状态，会拿到所有的状态；
			然后分发到下面，被改动之后也能及时更新下面的状态分发
			store是一个函数，里确实存放了所有的状态，根据判断输出指定的值
			const store  =createStore(counter)  实例化出来了一个store
			const init=store.getState()         store是有方法的，应该是继承来的
			console.log(store.getState("加机关枪"))  直接这样无法修改状态
			store.dispatch({type:"减机关枪"})  必须用dispatch，传递action
			这个被改变的值还必须分发到其他的组件去
			store.subscribe(listener)  store上面还有方法，状态每改变一次就触发一次，简称订阅函数
			state最终也要传递到组件里面，以及组件里面的事件来修改状态，
			很多个事件来修改同一个状态；
		3-2：react与redux一起使用；
			store可以正常通过先在父组件定义然后通过props获取；可以创建多个store
			等于还是通过付组件传props的方式在走，只是把所有的状态放在一个文件里面了
			在子组件里也可以通过dispatch来传递参数，然后通过事件修改状态，然后从新渲染。
			点击函数没办法单独抽出来放dispatch（）  ，明明是一个函数，为什么无法抽出来呢？
			这种使用方式跟原理的state管理方式区别不大，甚至代码更多，只是剥离成了单独的组件
		3-3：更优雅的使用redux
			处理异步需要redux-thunk   需要安装：cnpm install redux-thunk --save
				还需要通过applyMiddleware来开启thunk中间件
			使用react-redux                   cnpm install react-redux --save
			仅仅是引入了异步处理插件thunk，并没有改进什么
		3-总结：redux确实实现了一个地方分发所有的状态，但是并没有发现什么好处
		4-1：redux调试工具，--chrome插件--这个就是redux黑色背景的调试面包，但没啥用
			不管好不好用，都是用这些已经实现了功能；
			redux中间件定义了初始的state和选项；store进行了实例化，然后还是标签传递参数
			然后在子组件中获取参数，修改的时候利用dispatch传递判断的参数，利用subscribe及时刷新
		5：使用react-redux替换原来的redux，里面的函数也改变了
			没有subscribe，只有reducer action 和dispatch，少了一个。reducer就是store
			react-redux提供provider和connect两个接口来连接
			5-1：provider作为标签放在最外层，掺入store即可，只用一次--在标签内引入
				 connect 负责从外部获取组件所需要的参数---
				 使用provider和connect连dispatch都没有用了，
			主要的走了两步，一个使用redux分发状态，一个是react-redux管理状态传递
		5-5：自己测试的对比：
			第一种方式：state直接定义在子组件里面；--事件写法在标签内花括号里面要带this，函数直接名字小括号花括号
				异步定时函数的时候，必须写两个函数，不然this就跑了，找不到
				参数就算传进去了，函数变成及时执行而不会延后执行了
			第二种方法：state定义在父组件里面--顶级父组件还没办法放
			第三种方法：除非传递到孙组件,可以通过绑定this，和传递props，执行父组件的函数，这种方法也可以啊，但是太多了就不行了；
			第四种方法：通过redux管理
				1：新建一个 test.redux.js文件，里面放上初始状态，判断，和操作函数
					需要带初始state，以及参数action  都需要export出去,
					里面并不需要引入任何依赖，操作函数返回的是对象而且是type，
					肯定被处理过了
				2：在顶级组件引入createStore,仅仅从redux中引入
					同时引入创建的redux  state函数
				3：然后利用引入的两个组件实例化一个store出来,然后从实例获取值
				4：通过标签把store传下去,可以通过getstate获取到值
				5：要把操作函数也传下去，然后使用dispatch来操作上级的state
					传是传成功了，却无法操作
				6：store.dispatch(add0())在实例上面执行dispatch方法，里面参数要执行
				7：绑定到事件之后，需要用store.subscribe() 订阅render才重新渲染,render不需要括号
				总结：所有的方法都是加在store上面，
			第五种方法：使用react-redux  ，使用previder，和connect替代subscribe
				1：Provider作为标签包裹在最顶级，仅仅传一个store，其他操作函数都不传了
				2：同时引入provider从reac-redux以及引入初始state函数和操作函数
					createStore也是需要带上的
				3：实例化还是一样的；
				4：需要在次级父组件引入与provider对应的connect，以及同样需要引入操作函数
				5：需要用connect方法对App这个组件进行处理；传入了两个参数并且自执行自己作为参数
				6：之后state通过参数传递给了num，等于从父组件的标签传递过来的属性
					值与操作函数都可以这么传
					两个参数实际上等于是connect的参数，一个用带返回值的函数传state，一个用对象传操作函数；
					这样也算是精简了，只需要顶级标签传store，然后用connect传state，和操作函数
				7：需要用装饰器来写connect --需要自己配置
					cnpm install eject --save   安装完居然没有config
					npm run eject --居然失败了  安装错地方了，不能在子目录里安装
						为啥还是失败了呢？居然跟git有关系，git文件夹就删掉就好了
					cnpm install babel-plugin-transform-decorators-legacy --save 这个重要的跟connect相关
					还需要在packagejson里面配置；json文件里面居然没啥东西，--save丢的太多了
					也不完全是；就算有--save还是没有写进去；
					重新start，"plugin":["transform-decorators-legacy"]  加入这一行；在babel下面
					npm install --save-dev babel-preset-es2015  加入这个也还是报错
					* Can't resolve 'promise/lib/es6-extensions.js' in 'E:\test2\config****
					更换了json文件还是不行；
					把新添加的片段放到一个对象里面而不是单独的对象；
					这个promise的文件本身就没有存在；复制过来，还是不行，找不到redux在src里面
					很可能是前面在src里面安装依赖导致出了问题；src里面果然有了依赖文件夹
					json文件什么时候变成一大堆了，难道是替换呢？名字是对的，不是我替换的
					重装：cnpm install 几秒钟就完了
					变成redux路径出问题，卸载，cnpm install redux --save-dev  不行
					npm install --save symbol-observable   装这个，装完了就可以了
					继续修改json文件  --重启没问题
				----继续使用装饰器--还是报错，以前正常的也报错了--键值对格式的错误，
					应该是plugins  而不是plugin
				----继续使用装饰器--不报错，但是数据没了；--删除掉多余的之后正常；
					等于是把自参数函数替换成了connect，里面的参数也简写了，state和操作函数也照传
	5：react-router--安装： cnpm install react-router-dom --save-dev
		1：最重要的概念；BrowserRouter包裹在顶级最外层，在Provider的里面
						Route路由对应渲染的组件
						Link跳转专用；
		2：包含两个大的组件，一个用link跳转，一个用route指定跳转的内容页面
			Link是用to一个地址，Route 进行判读，如果匹配path，则显示component对应的组件页面
			原来的默认主组件不能存在了
			-----出了问题，为什么我的会全部显示而不是跳转后单独显示呢？也不是外面包裹的问题
				是自己把单词拼错了的问题，path而不是patch
		3：其他组件：
			1：url参数： Route组件参数可以用冒号来标识参数：参数为location时代表后面有就会生效，而且全生效
				this.props  下面有很多东西；有history，有location 有match，下面都有location地址
			2：Redirect组件跳转  刷新之后就会跳转到指定页面to=""
			3：Switch只渲染一个子Route组件；渲染第一个匹配的；
			--当路由错误的时候会才会跳转到location这个带参数的页面，也就意味着只命中了这一个
			   而前面虽然也命中了location但是值渲染第一个，所以顺序很重要--用来做404如果连接失效
		4：登录页面：如果没有登录信息，统一跳转到登录页面
			Auth.js 认证的界面，Auth.redux.js 管理redux，dashboard路由都放到这里面
			如果纯粹自己去做：要实现登录页面，以及验证跳转，这两个只需要写出两个要么加上Redirect就行了
			---出现的问题，要小心render后面的return  div必须直接跟在后面而不能换行,加括号才能换行
			设计的判断：如果有cookie，就按需走，如果没有cookie，就回到首页，cookie暂时被truedaiti
			第一：肯定要用三元表达式判断显示哪一个
			第二：要传递state，而且是一个新的state，也需要实例化，也需要获取值，也需要能改变值
			reducer还需要合并，有多个state需要传递：combineReducers
			结果引用是出了问题，报要把对象换成数组，---应该是分发的时候出了问题
			打印出来的reducers，实例化之后获取到的值是一个对象，包含了两个state的值
			---果然是分发的问题；---虽然用对象引属性，还是没有改好；
			事实上所有的属性，state都在connect包裹的state里面，需要在里面找值
			在render里面写两个普通的render组件，赋值到const，后return用三元表达式也是一种方法
			注销的时候也是同样的方式，登录和注销都成功的修改了state，通过执行预定义操作函数的方式
			函数通过state引进来，也能传回去，也能分发修改后的状体
		4-**************学会的东西
			1：路由切换，路由的命中规则，第一个和额外的，--match跟url的区别；还有location
			2：redux的管理state的写法
			3：使用装饰器写redux的方法；
			4：使用reducer合并多个redux里的状态；
			***还有一个thunk没有解决；还需要中间件来开启--就是传了两个参数
			引入：thunk  引入{applyMiddleware}  然后放入到stroe里面applyMiddleware(thunk)  完事儿
	6：	需求分析---所有页面	--根据功能划分文件夹
		router怎么划分，权限怎么认证；各种分页面，以及如何共用公共组件
		以及mongodb，以及axios发送异步请求，以及socketio的跨域
		使用axios发送异步请求，端口不一致用proxy转发
		redux使用异步数据，如何使用？
		cnpm install axios --save-dev  安装之后就是统一，在最后加一个属性；
		axios.get找不到端口是为什么？他能找到，我却找不到
		Uncaught (in promise) Error: Request failed with status code 404
		重启3000，   重启之后居然成功了；
		console.log(this.state.data[0])   这里能找到，
		console.log(this.state.data[0].age)  这里居然就找不到了，啥情况
		存在这初始渲染的时候state是空，直接就报错后面就没渲染了，而在didmount之后才注入值是不行的
		必须先给一个初始值，然后覆盖掉。或者直接放在willmount里面先改一次state初始值；
	7：与redux配合获取，--payload是个什么东西？而且也用到了dispatch，即便是在用reducer的
		情况下，dispatch也是能用的。--纯粹用来传递action的，
		成功的跑通了，获取到数据库里的数据，并且传递到state里面，接下来是如何分发？
		2：第二部分是拦截器的使用：--就是加载的时候转圈的那个东西
		axios.interceptors  设置拦截器
		axios.get   post 发送请求  返回promise对象
		redux里获取数据，然后dispatch即可
		***测试又报错，找不到css动画路径；--即便是重装还是找不到
		即便是正常的引入方法：import  './config'还是不行；--更换了json文件也不行
		重启也不行；文件对照也是一模一样的，文件也是有的，
		修改了response也不行；替换使用以前的文件也不行；--彻底失败，放弃掉
	8：登录注册的实现；--需要用到cookie了；
		文件夹结构：组件放在component里面，页面放在cotainer里面，数据处理放在redux
		组件算是各种输出的函数，页面算是几个主要的界面，
		cnpm install cookie-parser --save-dev   是有操作cookie的组件的；
		**Unknown plugin "import" specified in "E:\\test2\\package.json" at 0
		**又出现找不到import的情况，什么鬼？？？
		注释掉所有多余文件：Module build failed: Error: No ESLint configuration found.
		恢复到初始状态呢？Module build failed: Error: No ESLint configuration found.
		居然还有错误，把json还原；--就是json文件的问题
		把json文件复制回去；换回去是可以的，重新npm install一下  还是不行
		cnpm install import --save-dev
		cnpm install babel-plugin-import --save-dev  还是不行；
		---又出新的问题，应该是全部安装导致的问题；Unknown plugin "transform-decorators-legacy" specified
		cnpm install transform-decorators-legacy --save-dev  这个不行
		cnpm install babel-plugin-transform-decorators-legacy --save  可以了，换json之后
		json返回去就不行了---
		---------------------------关键是用那两个输入框的样式以及校验-------------
		******************以后npm与cnpm不能混用了*************
		有css插件：InputItem  ---------  cnpm install  --save-dev  
		antd-mobile样式组件库 又找不到了 cnpm install antd-mobile --save-dev
		还是报错，npm i --save lodash.keys  ：：：: Can't resolve 'lodash.keys
		Can't resolve 'rmc-trigger   cnpm install  rmc-trigger --save-dev  好了
		一下子又不行了Can't resolve 'classnames cnpm install classnames --save-dev
		Can't resolve 'rc-checkbox  ：： cnpm install rc-checkbox --save-dev
		Can't resolve 'rc-collapse    cnpm install rc-collapse --save-dev
		Can't resolve 'component-classes  cnpm install component-classes --save-dev
		Can't resolve 'component-indexof  cnpm install component-indexof --save-dev 
		***********************删除原来的依赖文件夹再从新弄吧*************
		**********依赖文件夹又是空的，为啥？*************
		***先安装antd里面有东西了；然后安装完了其他的又自动给删了。啥情况？？
		***注销之后重装还是一样的给删掉了，而且位置还不对；彻底就是空的
		***把原来的给移走，还是自动给删除了--cnpm 是可以安装的，前面肯定被删除了很多；
		**之后也没有清空；start也成功，以后反而不敢用npm了；
		--------++++++======***  这个时候使用出问题的json文件也是可以的，config文件也没问题
		A <Router> may have only one child element
		路由里面已经嵌套在一个provider里面了，为啥还不行,删除只留一个或者加div包裹都行
		1：为什么antd-mobile的css样式都没有了呢？重装也应用不上去
		cnpm install babel-plugin-import --save-dev
		修改json文件的plugins果然是跟css样式有关系，修改之后就可以正常显示css了，
		按钮解决了，接下来是输入框组--List InputItem  不需要遍历，
		选择框：Radio RadioItem  checked  true或者false决定是否默认选择
		2:如何根据信息就是cookie来决定是否跳转，没cookie就跳转，有cookie就不跳转
			首先是读取cookie，cookie在哪里设置？这类
			然后是跳转，就是修改url，
			需要改造serverjs，引入中间件；--已经可以跑通--拦截器也已经可以正常运行；
			2：普通组件是没有路由属性的，找不到history相关的，需要引入withRouter组件
			3：需要判断路径中到底包含了什么，设置code状态，不等于0的时候会修改路由地址
				使用history.push() 确实成功强制修改了路径，但也不完全可靠，需要完善
			4:他的输入是通过onChange事件改变初始的state里面预定义的值，而不是提交的时候直接提交，不是采用submit的方法
				这种方法是跑通了，里面用到了一个自动扩展展开的方法：[key]:val
				虽然不是一一对应，但明显是各自改各自的，
				校验用户名与密码已经成功；--------数据链条是怎么？？？？？？
				1：reducer-redux里面有了初始的各种状态；和操作函数
					初始状态是获取到的输入框里面的值；初始定义为空；
					state是总的，一个个分函数就是它的子元素，经过实例化，provider，和connect之后，就能直接传递到引入它的组件了，不需要别的；
				2：基础数据已经可以分发了，接下来操作事件；
					都是依靠传递reducers里面的函数来操作顶层的state
				3：需要向后台发送数据库了,服务器端nodejs往外面输出的时候跟es6不一样
					要用 module.exports=
				4：利用工具函数创建表，还是有问题的，顺序不知道怎么弄 的？
					使用post方法之前，需要引入：cnpm install body-parser --save
					cnpm install cookie-parser --save
					还需要引入这两个中间件，如何才能把传过来的数据写入数据库？
				5:又出现500的问题；req.body.data去掉data之后正常了，数据库特定url下
					已经能够看到注册的用户名，密码，以及类型了
					它是怎么注册成功？怎么传递数据的？
					获取输入框的数据---传递到express--再传递到数据库---
					1：点击之后，已经通过state拿到输入框里面的值了，通过change事件改写原始state
					2：axios传递最重要的是接口就是端口后面的url要对上，post就能传
						也是用post接收，axios里面是干了两件事的，
				6：注册写入数据库已经成功了，接下来注册之后要跳转
					util.js 工具函数库--跳转是成功了的，但是数据怎么传的依旧不是很懂
					---参数肯定传错了--es6是可以自动将参数展开的，对象/
				7：接下来要解决md5的问题；cnpm install utility --save-dev
					pwd:utils.md5(pwd)  这样引用，赋值，起码require一个就行了
					还需要加盐；utils.md5(utils.md5(pwd+salt)) 多层嵌套
				8:解决登录的问题，也是通过onChange修改state来做的
					要把输入框的数据传给state，还要传给后台，后台还要作比较
					然后后台返回一个状态，如果成功，就跳转，如果失败，就报错，4
					还需要判断有没有详细信息
					dispatch 不是一个单独的函数，必须作为参数
					为什么会出现一次注册写入两条数据的情况？--注册函数只运行了一次
					就是后台的问题了，又只有一条了，啥情况？
					---************登录注册之后的跳转算是完成了**************
					接下来是完善信息；--依旧没有完全搞懂---
					一定要搞懂，搞透，一个是redux传递，一个是axios传递
					一个是express操作mongodb增删改查，
					还有一个数据的校验，返回不同的东西，根据返回值做出不同的反应
					还有express查询的时候，全部返回匹配以及不允许显示的字段
				9：设置cookie：res.cookie('userid',doc._id)
					读cookie在req里面---到底都搞了些什么东西？？？？
	9：完善信息--主要的是怎么搞那些头像，以及遍历他们的名字，一个个排出来
		速度快慢基本也就这样，不可能快多少了，只能一遍遍的做。忽略一些小的细节；
		第一次注册的一下子变成两个的问题依旧存在，而登录的时候为什么没有跳转？
		---为什么忽然间又自己能跳转了？就是不显示一个字段的问题
		onChange={v=>this.onChange("title",v)} ------这玩意儿又是如何实现的
		InputItem 还需要能换行的组件；TextareaItem 替换掉前面的
		使用Grid 宫格显示头像列表：两部分，icon代表图片地址，text:图片名字
		在css上面，把img图片的宽度设置成100%,高度自适应是可以的，固定大小是不行的
		是有自带的底部标题的---选择头像只能传递state，要用的地方还很多，但是背景可以改啊
		要把这些数据也传到数据库里面去，是有两个表的，一个用户表，一个信息表，另一个聊天信息表












++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
1：npm居然把node_modules文件夹里面的文件全部删光了，怪不得大量的依赖找不到，装不上
	这是极度严重的问题；
2：以后一些特别重要的笔记也必须给拿出来了
3：主要的难点----麻烦之处就是传来传去的，到处嵌套，
    axios  和 cookie 这两个东西是最主要的没有搞懂--从新弄
    这两个东西到底是怎么运作的？尤其是跟后台连接？--单独抽出来测试--还有各种url的规则

从新开始一次：---把所有的组件给抽出来测试-单个的输入框
	先测试：
	从安装react-dom开始 还需要配置webpack 跟server
1：安装webpack  webpack-server
npm init  会直接在当前文件夹创建json文件，而不是在下一级；
安装了webpack-dev-server，修改了json还是不行--  "start": "webpack-dev-server --inline"
再安装webpack-cli   --端口已经打开，却没有主文件；---不要用这个，还是用react创建
2：create-react-app test4  慢的要死；--还有生产环境，测试环境，改怎么运作；
	1：先测试redux--实现数据单独拿出来作为组件---自己按顺序写这样一个app
	2：还是需要先画图，不然太难了--
	3：获取输入框的值还不能以普通方式进行；--只有引用antd之后才能通过箭头函数获取
		在nodejs里面已经不能用event的方法了---函数名居然写错了
		change事件打印state是可以的；event的方法是可以的
		该怎样才能系统的放进去呢？state里面有多个值，只有一个change方法，控制两个
		没办法通过传参的方式弄，只能通过多个函数的方式弄
		用监听事件的方法太麻烦了，尝试使用表单提交
		只能用input的name属性的改变出发change时改变state;;第一次改变为什么是空的？
		显示的跟console打印不一样，要用didupdate才能正常打印出来
		***********不管怎样，值已经获取到了********
	4：接下来要写入数据库，要先创造数据库--打开express服务很简单
		输出端口也没问题；输出json内容也没问题；
		接下来要连接mongodb，也成功了，连接必须有特定的语句；
		如何写入数据呢？要先创建表:要用到 mongoose.model  还要安装
			schema到底要不要安装？能安装，但是创建的表还是找不到
			**必须创建一条数据，表才能出来**
		怎样才能传到后台，并写入数据库，肯定要用到axio和proxy
		连接成功很容易，
		改变url地址呢？还需要eject，才能配置转发端口--怎么才能找到？
		依赖库动不动就出问题，找不到依赖项，必须不停备份。
		是在eject之后出的问题，但是cnpm install 也不起作用，为啥
		cnpm install --save-dev
		---就算设置了转发，对应对了路径，也还是没有转发成功
		---也没有哪里写的不一样啊，为什么我的就失败了？？？
		****是自己把端口后面的路径配错了，前面遗留的端口根本就已经没用了，刷新一些就应该没了----.
		转发的问题解决了，该如何写入数据库？
		端口都是express定义的、只能get到，如何post呢？--post为什么找不到端口？
		express换成post也变成找不到地址了---要用到路由了
		从输入框拿到值--传递给后台--后台再写入数据库---
					怎么传递给后台？直接post不行,数据已经在发送，只是后端没接收到
		后台写入数据库并不是通过post的方法；
		get能找到端口，为什么post找不到端口？
		 从数据库获取数据并输出到页面上，没问题--必须打开创建表的代码，才能获取到
		 list这个路径到底什么时候建立的？6-7已经有了，是空的
		 6-6发送到/user/register 是这里新建的，而且在发送post请求；,user/list  已经存在，是空的，不知道从哪里建的
		 6-3list是完全没有，肯定在中间漏掉了6-4看不到，6-5也看不到；  --就是6-6有的，也不在3个服务文件里面
		 在6-7-6分的时候创建 的，前面为什么能看到？---到这里就算正常，哪里看到不管了
		 6-8的时候后台建立了post ：'/register' 需要安装body-parser--发过来的数据需要解析
		 6-8-2分半：后台建立：Router.post('/register')    自己后台： app.post('/user/post'
		 6-6-4分：axios.post("/user/register")            自己前台：axios.post('/user/post',
		 	对应起来就连成功了  后台post是不能return的，一return就报500错误-就算连成功，端口还是不能看到
		 接下来写入数据库；后台定义的数据入库成功，前台怎么传递后台？后台就是 req.body==前台对象格式数据
		 ***********写入数据彻底成功  req.body是需要解构的**************中间件是必须的
5：接下来要解决：路由切换，以及组件复用，以及消息分发，以及连接mysql  --尤其是连接mysql
		还有cookie判断的问题，以及过期时间如何设置；
		连接sql也容易，也需要用php语句查询内容，如何写入内容？发送请求还是需要用ajax，只是路径变成express路由的了
		如何增 删 改 ？--axios可以替代ajax发送，但为什么收不到？也没改成功
		改成功了，用的update，前面问题出在id没有对应上的问题
		为什么无法获取到前面提交过来的数据？奇了怪了
		*****get要用query   post要用body  res.json(rows)是返回的数据，里面没啥有用的
		改成功了，接下来是增，删；理论上只要连上，然后执行语句就行了，剩下的就是传参数了
		能新增数据，写入的是源码而不是数据；--写入也成功，有三个参数，一个命令，一个数据，一个回调
		ok----增删改查全部搞定，主要的就是参数的问题










 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


