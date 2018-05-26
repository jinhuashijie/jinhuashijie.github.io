1:前端js基础面试题，
2：js基础；js-web-api  js开发环境
3：dom查询，操作，ajax操作，事件绑定操作，什么是开发环境；
4：知识点部分
	基础知识部分：原型，原型链
				  作用域   闭包
				  异步，单线程
	js-web-api  dom操作
				ajax
				  事件绑定
	开发环境      版本管理
				  模块化
				打包工具
	运行环境	页面渲染
				性能优化
5：最后，课程收获
*如何应对面试题以及面试
*学会前端js基础知识以及知识体系
*帮助学员完成和通过面试
6：基层工程师----基础知识    应聘的标准
   高级工程师----项目经验
   架构师--------解决方案
7：工程师的自我修养--基础
	扎实的基础会让你高效学习新技术---学习新技术的文档需要基础知识
8：几个面试题
	1：js中typeof能得到哪些类型
	2：何时使用===  何时使用==
	3：window.onload   和DOMContentLoaded 的区别
	4：用js创建10个<a>标签，点击的时候弹出来对应的序号
	5：简述如何实现一个模块加载器，实现类似 requier.js的基本功能
	6：实现数组的随机排序---这中问题非常多。
	不仅要实现，而且要易读，精简，代码少。
9：如何搞定所有面试题；
	题海是万变不离器宗，变的是题目，不变的是知识
	关键是要考虑考点---题目--什么考点--什么知识--再做这个题目

10：js中 typeof有哪些数据类型？---考点：js变量类型，（还是数据类型）
	何时用===  何时用==          考点：强制类型转换（if语句，运算中
	window.onload DOMContentLoaded  考点：浏览器渲染过程
	用js创建10个a标签，点击弹出对应序号   考点：作用域，而不是创建标签和绑定事件
	简述如何实现一个模块加载器，   考点：js模块化
	实现数组的随机排序                考点：js基础算法   （针对数组，对象）
11：js中有哪些内置函数？
	js变量按照存储方式区分为哪些？
	如何理解json？	
12：知识点有哪些？
	变量类型，---值类型   ；  引用类型   一个是实际值（拷贝），一个仅仅是指针而已
	 引用类型：数组，对象，函数，---无限制扩展属性；
	变量计算；
13：typeof undefined  ---undefined    
	typeof "abc"       ---string
	typeof 123         ---number
	typeof true		   ---boolean    ---前面四个都是值类型，
	typeof {}          ---object
	typeof []          ---object
	typeof null        ---object
	typeof console.log ---function
	一共是6种    8种数据六中类型，两个大类               {}
	null是一个引用类型的对象，只一个空指针，没有指向任何对象
	type只能区分值类型的详细类型
	对引用类型就区分不出来，都是显示object，可是能区分出函数
	函数是非常特殊的引用类型；
14：变量计算---强制类型转换；
	引用类型的计算变换是api的变换，值是数值的变换
	1：字符串拼接  可能发生类型转换
	2：==  运算符，可能发生类型转换
	3：if语句      可能发生类型转换
	4：逻辑运算符  可能发生类型转换
    var a=100 +10   110
    var b = 100+ "10"   10010  发生转换
    100=="100 "   true
    0==""         true    0和空字符都会转换成false
    null==undefinded   true    null和undefinded 都可以转换成false

    var a=true
    if(a){
    	//
    }
    var b=100
    if(b){   b会被强制转成布尔类型，变成true
    	//
    }
    var c=""
    if(c){
    	//   false   会被强制转成false
    }
    逻辑运算符
    console.log(10&0)   0         10被转成true
    console.log(''||"abc")  abc   空转换成false
    console.log(!window.abc)  true  
    var a=100         //判断一个变量会被强制转成哪种类型
    console.log(!!a)  前面加两个非，强制转成true；  
15:何时使用== 何时使用===
	if(obj.a==null){
		这里相当于 obj.a===null ||  obj.a===undefind  除此以外全部三等
		这是jquery源码中的写法
	}

16:js中有哪些内置函数---数据封装类对象，
	不考虑运行环境，单纯作为变成语音，的内置函数
	object
	array
	boolean
	number
	string
	function
	data
	regexp
	error              {}
    六种处理数据类型，number  string  boolean array object function 
    一种日期，一种正则表达式    以及error  {}
 17：js按照存储方式区分为值类型和引用类型；
 	值是直接存储，引用是节省内存，共用--修改会相互影响  
 18：如何理解json 
 	json是一个js对象  同时也是一种数据格式
 	json.stringify({a:10,b:20})   对象转字符串，
 	json.parse('{"a":10,"b":20}')   有两个api  字符串转对象

19：测试结果
	1：数字变量赋值，赋值一次就固定了，后面就算修改引用，还是原值
	2：引用类型，所有多会变换；
	3：数字与字符串相加只会变成字符串；
	4：但是数字减去字符串就会变成数字；字符串减字符串会报错；
	5：在if里面会被当成false的情况
	  0  空字符串  null  NaN （not a number）  false本身
	6：内置函数  内置对象
	7：双等和三等的情况；看一个对象的属性是否存在，用双等
							以及函数的参数是否存在，用双等；

	1：原型和原型链
	2：如何准确判断一个变量是数组类型
		typeof是有缺陷的
	3：写一个原型链继承的例子
	4：描述 new 一个对象的过程 
	5：zepto或其他框架源码中如何使用原型链
1：构造函数
2：构造函数--扩展
3：原型规则-和示例
4：原型链。--原型串起来的结构
5：instanceof  类型判断，原型链的具体表现；
1：构造函数--大写字母开头的函数--必须大写字母开头，通用标准
function Foo(name,age){
	this.name=name;
	this.age=age;
	this.class="class-1";
	//return this；默认有这一行
}
var f=new Foo("zhangsan",20);

构造函数的特点：
1：名字大写开头
2：要有参数
3：里面的属性集合在this里面
4：这个this会被默认返回；
5：new是一个关键字
6：最后this会指向f这个变量名字，里面的属性会被共用，值就是参数；

1：var a={}  var a= new Object()  的语法糖
2：var a=[]  其实是 var a=new Array() 的语法糖
使用instanceof判断一个函数是否是一个变量的构造函数；
原型规则和示例；
5条原型规则
原型规则是学习原型链的基础；
1：所有的引用类型null除外，都具有对象特性，即可以自由扩展属性； 
2：所有的引用类型都有一个__proto__属性，属性值是一个普通的对象---隐式原型
	var obj={};obj.a=100;
	var arr=[];arr.a=100;
	function fn(){};
	fn.a=100;
	console.log(obj.__proto__);
	console.log(arr.__proto__);
	console.log(fn.__proto__);	
	打印出来确实是对象，里面一大堆属性，看不明白；属性的值是各种方法
3：所有的函数，都有一个prototype属性，属性值也是一个普通的对象；显式原型
4：所有的引用类型（数组，对象，函数）__proto__属性指向它的构造函数的 “ prototype ” 属性值；
	console.log(obj.__proto__ === Object.prototype)
    打印出来是true，说明一个是属性确实完全相等
      另一个说明：所有对象的隐式属性都对应Object这个内置函数的显式属性
      那就意味着，所有数组都对应 Array  所有函数都对应fn ,事实函数并不对应fn，那该对应什么？
5：当试图得到一个对象的某个属性时，如果这个对象本身没有这个属性，那么会去他的__proto__（即他的构造函数的prototype）中寻找
	隐式原型到底是什么，显式原型又到底是什么？
function Foo(name,age){
	this.name=name;
	this.alertName=function(){
	alert(this.name);//这个找上来的时候是越级了的；
}
}//构造函数，就是一个函数，包含了参数，默认返回了this，
Foo.alertName=function(){
	alert(this.name);//这个找上来的时候是越级了的；
}//设置了显式属性，显式属性里面还有属性，他的属性值是一个函数。
//创建实例
var f=new Foo("zhangsan");//实例化一个构造函数，
f.printName=function(){
	console.log(this.name)//这个this指向了哪里？自己没有，就找向了他的构造函数本身的显式原型；
}
f.printName();//f本身也没有alertName  也是找向了上一级；
f.alertName();//f代表构造函数的本身；后面的函数代表一个属性，这个属性本身是一个函数，进行了自执行
//alertName本身是一个函数名字，后面带上小括号，进行了自执行
//这个应该就是继承；所谓的隐式原型就是他本身没有属性，而这个属性被放在构造函数的显式原型里面；
//this里面有这个属性的时候，构造出来的函数才有显式属性，this没有的话，就只能找上一级显式原型，显式没有，就报错
//this不管几级永远都指向对象或者函数本身；
f.toString();//要去f.__proto__.__proto__中去查找；
//反正就是一级一级往上找，最最顶层的是Object对象，他要是没有，就彻底没有；
function Yes(name,age){//这个时候函数本身就是一个对象
	this.name=10;      //利用this给定属性和属性值；
	this.age=20;       //不仅仅会向上找属性和值，
}
var y=new Yes();
y.name=100;
console.log(y.name)
console.log(y.age)//这个完全继承下来；
	循环对象自身的属性
var item
for (item in f){
	//高级浏览器已经在for in中屏蔽了来自原型的属性
	//但是这里建议大家还是加上这个判断；保证程序的健壮性
	if(f.hasOwnPproperty(item)){
		console.log(item)
	}
}

1：原型链 
2：instanceOf的方法就是一级级往上找到最顶上，看看有没有独有的属性；
3：最开始提到的题目：
	1：如何准确判断一个变量是数组类型
	2：写一个原型链继承的例子
	3：描述new一个对象的过程
	4：zepto或其他框架源码中如何使用原型链；
var arr=[];
arr instanceof Array    返回true  toString是函数对象独有的
typeof arr  返回object
写一个原型链继承的例子
function Animal(){
	this.eat=function(){
		console.log("animal eat");
	}
}
function Dog(){
	this.bark=function(){
		console.log("dog bark")
	}
}
Dog.prototype=new Animal();
var hashiqi =new Dog();
这里需要分为原型继承，和原型链继承
原型继承就是里面this定义的属性
而原型链则是涉及到隐式属性和显式属性；所以一个必须有显隐，上一级应该不是必须的
 
 描述new一个对象的过程--考察对构造函数的理解
创建一个对象；this指向这个新对象；执行代码，即对this赋值，返回this；

zepto或者其他框架源码中如何使用原型链
	1：阅读源码是高效提高技能的方式
	2：但不能埋头苦钻，有技巧在其中，网上有公开的经验
	3：穆克网有zepto源码阅读免费的
	4：告诉面试官，自己有阅读的经历，可以加分。
4：原型继承的实例
function Elem(id){                            //首先定义了一个母函数，而非对象函数
	this.elem=document.getElementById(id)     //然后定义了一个属性
}
Elem.prototype.html=function(val){         //然后定义显式原型
	var elem =this.elem;      //然后显式原型里面还有对象，这个对象又继承了母函数的属性
	if(val){
		elem.innerHTML=val;
		return val;
	}else{
		return elem.innerHTML;
	}
}
Elem.prototype.on=function(type,fn){
	var elem =this.elem;
	elem.addEventListener(type,fn);
	return this;
}
var div1=new Elem("test");//这里构造了一个实例，并传递了一个参数；
//这个实例等于母函数本身，继承了母函数的属性，
console.log(div1.html("987654"));
数组用instanceof Array 返回true
数组和对象用 instanceof Object 都返回true  用toString都报错
Object.prototype.toString.call([])   "[object,Array]"
Object.prototype.toString.call({})		"[object ,object]"
Object.prototype.toString.call(null)  "[object,null]"   这个没法直接用；
     5-3-1  作用域和闭包--执行上下文；
1：作用域和闭包
	题目
1：说一下对变量提升的理解---啥叫变量提升；
2：说明this几种不同的使用场景，有5种，至少3种
	1：作为构造函数执行；2：作为对象属性执行（就是指对象本身）
	3：作为普通函数执行（代表window）；4：call  apply  bind ：
3：创建10个a标签，点击时弹出对应的序号---实质是作用域的问题
4：如何理解作用域
5：实际开发中闭包的应用
   知识点
1：执行上下文 --js值类型只能顺序执行，引用类型可以前后顺序颠倒执行；
	范围：一段script标签之内或者一个函数内，都会执行上下文
			script标签内的是全局变量；变量定义，函数声明
	函数：变量定义，函数声明，this，arguments，函数；
		在执行之前会把函数类先拿出来；
		值类型拿出来先用undefined进行占位，函数拿出来就是函数
		然后再顺序执行；
2：this
3：作用域
	js没有块级作用域；只有函数和全局作用域；
	这个块级对应是大括号里面的；算是对象；是if出来的，也不完全是对象；
if(true){
	var name ="zhangsan";
}
console.log(name);这个是可以打印出来的，意味着变量的全局性；
var test1=function(){
	var abc=100;
	console.log(name); 函数里面可以访问外面的变量；
}
console.log(abc);这个是找不到的，意味着函数内部变量外面是访问不到的；
	自由变量也是相对的，不是本函数上一级的变量都算自由变量；
4：作用域链
5：闭包；
for(i=0;i<10;i++){
	(function(i){//这个函数本身在自执行；自执行的时候带了一个参数
		var a=document.createElement("a");//创建标签可以理解
		a.innerHTML=i+"1223456<br>";      //向标签内插入数据可以理解
		a.addEventListener("click",function(e){  //添加监听函数可以理解
			e.preventDefault();   //阻止默认事件也可以理解；
			alert(i);                //这里就有问题了；
		})
		document.body.appendChild(a) //把内容插入到页面中可以理解
	})(i);//这个i没有了，就会变成找不到，为什么？
}
********这里面的知识点：函数里面参数变了之后，整个函数就是一个新函数了；
for(i=0;i<9;i++){
	var h=function(i){
		var a=document.createElement("a");//创建标签可以理解
		a.innerHTML=i+"1223456<br>";      //向标签内插入数据可以理解
		a.addEventListener("click",function(e){  //添加监听函数可以理解
			e.preventDefault();   //阻止默认事件也可以理解；
			alert(i);                //这里就有问题了；
		})
		document.body.appendChild(a) 
	}
	h(i);//作为参数传进去是可以的；
	//他的意思，里面参数变了之后，整个函数就是一个新函数了；
}
2：闭包在实际中的使用主要用于封装变量，收敛权限---怎么封装--怎么收敛
function isFirstLoad(){
	var list=[];//变量只有他一个；如果在外面，理论上也是能行的；
	return function(id){
		if(list.indexof(id)>=0){
			return false
		}else{
			list.push(id);
			return true;
		}
	}
}
var firstload=isFirstLoad();
firstload(10);  true
firstload(10);  false 
firstload(20);  true
函数类型的闭包，被另一个变量引用时，返回的就是一个函数；
如果返回一个函数，后面加上小括号，等于母函数加两个小括号，就会执行；

1：异步和单线程；三座大山：原型和原型链，作用域和闭包，异步和单线程
2：题目
	1：同步和异步的区别是什么
	2：一个关于setTimeout的笔试题
	3：前端使用异步的场景有哪些？
3：知识点
	什么是异步（对比同步）
	前端使用异步的场景   不使用异步有什么问题？
	异步和单线程
4：所谓的异步就是js的顺序执行；---就是单线程
    而同步就是定时函数相对于js正在运行的函数
    浏览器会先把定时函数拿出来，
    alert会导致阻塞；会在点击确定之后才会执行后面的命令
    同步会阻塞，异步不会阻塞；
5:什么时候需要异步---前端是用异步的场景；
	*定时任务--setTimeout   setInterval
	*网络请求：ajax请求，动态 img标签加载；--存在可能请求不到的情况
	*事件绑定--什么时候点不知道，不点也得往下走

总结：主题讲的是异步与单线程
主要的问题
	什么时候需要异步？就是三种情况：定时任务，网络请求，事件绑定
	定时好理解，网络请求好理解，可是绑定事件是什么？
	$.get("url",function(data){
		这个是简写的请求；
	})
网络请求事件怎么弄的？普通的写法，只是在执行的时候，最后执行ajax而已
var img =document.createElement("img")
img.onload=function(){
	console.log("图片加载完成后才会执行")
}
img.src="url";那么是不是这幅图片加载完成后才会加载接下来的图片
也不是，至少html 和css 是允许错误的；
绑定事件的情况--几乎所有的事件本身就是异步的，并没有特别的
他仅仅是属于异步的情况
6：异步和单线程；因为是单线程，所以必须是异步；要不然就会阻塞；
怎样提高效率，目前来看，绝对的专注，已经在提高效率
以此为基础再说‘
所有的异步请求都会先被拿出去，程序执行完之后再看；
两个定时函数是并行的，计时是同时开始的，不会等前一个完了之后，后一个再计时

7：解答问题：
	同步和异步的却别是什么？分别举一个同步和异步的例子
		alert是同步，setTimeout是异步
		同步会阻塞代码的执行，而异步不会，这是最大的区别；
	一个关于setTimeout的面试题

	前端使用异步的场景；

8：其他知识--对js 的补充
	题目：
		1：获取 2017-06-10 格式的日期   ---日期时间函数
		2：获取随机数，要求是长度一致 的字符串格式   ---数学计算 math
		3：写一个能遍历对象和数组的通用forEach函数----数组对象的api
	知识点
9：date是js内置的函数；
	Date.now()  1970年算起到现在的毫秒数
	var dt=new Date()
	dt.getTime()   获取毫秒数
	dt.getFullYear()  返回年，  2017  2018
	dt.getMonth()   返回月：0-11
	dt.getDate()     返回日：0-31
	dt.getHours()     返回小时：0-23
	dt.getMinutes()   返回分：0-59
	dt.getSeconds()   返回秒：0-59
10：math也是内置的函数
	math.random()  获取0-1的随机数，包含0,1 用于清除缓存
	小数点后面的位数不会是等长度的；
	在控制台输入 Math. 会展示出一大堆底下的api函数，方法
11：数组API  
	forEach()
	every()     判断所有的数组元素都满足一个条件
	some()      判断是否有至少一个元素符合条件
	sort()      排序
	map()       对元素重新组装，生成新数组
	filter     过滤符合条件的元素
12：var arr=[1,2,3];    
	arr.forEach(function(item,index){ //先元素，后下标
		console.log(index ,item)
	})
	var arr=[1,2,3]; 
	var result =arr.every(function(item,index){
		if(item<4){
			return true;//这个是自动遍历的；
		}
	})  //只能用来干这一件事情；
	console.log(result)  //有一个大于等于4就会返回false
	var arr=[1,2,3]; 
	var result =arr.some(function(item,index){
		if(item<4){
			return true;//这个是自动遍历的；
		}
	})  //只能用来干这一件事情；
	console.log(result)  //有一个小于4就会返回false
	var arr=[1,3,5,2,0,4];
	var arr2=arr.sort(function(a,b){//这个是怎么算的
		return a-b
		//return b-a  从大到小排序；
	})
	console.log(arr2)//确实是从小到大排序了
	var arr=[1,2,3,4];
	var arr2=arr.map(function(item,index){
		//将元素重新组装，并返回；
		return '<b>'+item+'</b>'
	})
	console.log(arr2)
	var arr =[1,2,3];
	var arr2=arr.filter(function( item ,index){
		//通过某一个条件过滤数组；
		if(item>2){
			return true  //false部分的元素就被过滤掉了
		}
	})
	console.log(arr2)  //打印出来只有一个3；
13：对象API
var obj={
	x:100,
	y:200,
	z:300
}
var key 
for(key in obj){
	//注意这里的hasOwnProperty,讲原型链的时候已经讲过了
	//这个是判断是否为自身的属性，而不是继承自原型链；
	if(obj.hasOwnProperty(key)){
		console.log(key,obj[key])//原对象被切分打印了
	}     //key肯定代表属性，后面肯定代表值；
}
console.log(obj[x])//只有当放在in循环里面的时候，这种方法才有效
console.log(obj[1]) // 这两个都有问题；那上面是怎么运作的？

14：获取月份的时候需要加 1 ；
15：获取长度一致的随机数，知识点在于数字与字符串的转换；
	以及slice（0,10） 截取字符串
	forEach是用来遍历数组
	for in是用来遍历对象；
function formatDate(dt){
	if(!dt){
		dt=new Date()
	}
	var year=dt.getFullYear();
	var month=dt.getMonth()+1;
	var day=dt.getDate();
	if(month<10){//当月数小于10 的时候前面加上0，变成字符串
		month="0"+month
	}
	if(day<10){
		day="0"+day
	}
	return year+"-"+month+"-"+day
}
console.log(formatDate())//这样是可以直接产出的
16：遍历数组，对象的公共组件；api
原本各自单独的写法
遍历数组：
var arr=[1,2,3];
forEach(arr,function(item,index){//为什么会报错呢》？
	console.log(index,item)
})
var arr=[1,2,3];    //下面就能行，上面就不悉尼港；
arr.forEach(function(item,index){ //先元素，后下标
	console.log(index ,item)
})
遍历对象
var obj ={x:100,y:200}
forEach(obj,function(key,val){//这个也是报错的
	console.log(key,val)
})
var obj ={x:100,y:200}
obj.forEach(function(key,val){//这个还是是报错的
	console.log(key,val)
})
var obj ={x:100,y:200}  //这样是可以的；
for(key in obj){
	console.log(key,obj[key])
}


function forEach(obj,fn){
	var key
	if(obj instanceof Array){
		obj.forEach(function(item,index){
			fn(index,item)
		})
	} else{
		for (key in obj){
			if(obj.hasOwnProperty(key)){
				console.log(key ,obj[key]);
			}
		}
	}
}
1：从基础知识到js-web-api
	变量类型和计算
	原型和原型链
	闭包和作用域
	异步和单线程
	其他（如日期，math，api）---
	特点：表面看来并不能用于工作中开发代码
	内置函数，内置对象
	js基础基于：ECMA 262标准
	js-web-api：基于：w3c标准
2：W3C标准中关于js的规定有
	dom操作
	bom操作
	事件绑定
	ajax请求，包括http协议
	存储；
3：页面弹框是window.alert(123) 浏览器需要做
	1：定义一个window全局变量，对象类型
	2：给window定义一个alert属性，属性值是一个函数。
4：w3c标准没有规定任何js基础知识的东西；	
5：常说的js浏览器执行的js包含两部分
	1：js基础知识  ecma262标准
	2：js-web-api   W3C标准
6：nodejs没有W3C标准；
7：dom本质 document object model
	1：dom是哪种基本的数据结构？--
	2：dom操作常用的api有哪些？
	3：dom节点的attr和property有和区别？都翻译成属性
8：dom本质，dom节点操作，
 文档形式；
 就是将XML（或者HTML）内的节点定义成基本统一的对象数据可以供程序语言（如javaScript）控制的技术规范。
 dom可以理解为：浏览器把拿到的html代码结构化一个浏览器能识别并且js可操作的一个模型
获取dom节点；
prototype和attribute
获取标签，id，类名
nodeName   nodeType   本身是属性；

var pList=document.querySelectorAll("p")
var p=pList[0];
p.getAttribute("data-name")
p.setAttribute("data-name","imooc")
p.getAttribute("style")
p.setAttribute("style","font-size:30px;")
设置style，只能这样，
s.setAttribute("style","height:30px;width:30px;background:url(image/s1.png) no-repeat;");
for(i=0;i<96;i++;){++的后面有分号，也会报错的；

dom结构操作
新增节点，获取父元素，获取子元素，删除节点；
获取父元素：.parentNode;
创建标签  document.createElement("p")
插入位置：获取目标id . appendChild(创建的标签)
移动位置：目标位置di  .removeChild(要移动的元素)
目标id.childNodes     获取子标签；会把换行空一格也算一个标签
目标.nodeType  元素类型，p是1  text是3 就是换行或空格
nodeName就是标签名字；是大写的；

dom操作常用的节点：
获取dom节点，获取父节点，获取子节点，增加节点，删除节点，还有移动节点；
property是对一个js对象属性的xiug 
attribute是对html标签属性的修改；

bom操作；browser object model 浏览器对象模型
1：如何检测浏览器的类型；
	navigator   screen     location    history 
	var ua =navigator.userAgent;//是一个字符串；
	console.log(navigator.userAgent)
	var isChrome=ua.indexOf("Chrome");//返回位置下标
	console.log(isChrome)//就是下标
	console.log(screen.width)
	console.log(screen.height)//屏幕分辨率，而非浏览器大小
	console.log(location.href) //网站地址==整个地址；
	console.log(location.protocol)  //协议头 http https 本地 file
	console.log(location.pathname)  //还是网站地址；去掉头  --域名+路径
	console.log(location.search)   // ？后面的参数
	console.log(location.hash)      // #后面的东西就是hash
	history.back();   //这个为什么没有起作用--可以起作用，前提是有u，不然就是undefined
	history.forward();//这个起作用了，确实触发了前进
2：拆解url的各部分；
3：
事件与事件绑定；
1：编写一个通用的事件监听函数；
2：描述事件冒泡流程
3：对于一个无限下拉加载图片的页面，如何给每个图片绑定事件--代理  


function bindEvent(elem,type,fn){
	elem.addEventListener(type,fn)
}
var a=document.getElementById("test");
bindEvent(a,"click",function(e){
	e.preventDefault();
	console.log("test");
})
var a2=document.getElementById("test2");
bindEvent(a2,"mouseover",function(e){
	e.preventDefault();
	console.log("test2");
}) //这样是看一下的，减少代码量；

委托和代理
代理：--父元素代理子元素
var div1=document.getElementById("div1")
div1.addEventListener("click",function(e){
	var target=e.target  //获取到被点击的元素
	if(target.nodeName==="A"){//标签名必须大写
		console.log(target.innerHTML)
	}
})
完善通用事件绑定函数，添加了一个参数，如果是新增的需要代理的元素
function bindEvent(elem,type,selector,fn){
	if(fn==null){//这个参数为什么要判断null，这个参数是必须的啊；
		fn=selector;//当标签这个参数没有的时候，第四个参数就变成第三个参数了
		selector=null;  //就需要把第四个参数等于第三个参数，然后第三个参数因为后面还要用，就定义为null；
	}
	elem.addEventListener(type,function(e){//这里为什么只有两个参数了？两个参数是可以的；
		var target;
		if(selector){			//如果传入了这个选择器参数的话；
			target=e.target;
			if(target.matches(selector)){//matches判断仅仅是有或者没有；
				fn.call(target,e)//这个是回调函数，前面函数结束之后再执行的；
			}        //这个e也是必须的了，this指向target，target指向点击触发的元素
		}else{
			fn(e)//这个函数参数本身自执行；为什么要带e这个参数？
		} //这个参数是必须的，不然就等于把原来的参数给拿掉了；
	})
}
var a2=document.getElementById("test2");
bindEvent(a2,"mouseover",function(e){
	e.preventDefault();
	console.log("test2");
})
涉及到call方法，函数.call(标签或者对象) this就会指向这个标签或者对象；
	call(标签或对象，第二个参数) 可以传两个参数，第二个参数是函数的参数


2：阻止冒泡，冒泡的应用场景

1：ajax是js自己的api
2：题目：手动编写一个ajax 不依赖第三方库
	跨域的几种实现方式--中大型公司，不同产品线不同域；
	跨域怎么做，跨域的原理，跨域有什么用？
3：ajax  在js中自身的api函数：XMLHttpRequest  
	状态码说明；跨域最终的实现是什么样子的；
var xhr =new XMLHttpRequest();
xhr.open("get","url",false)  //false 代表异步
xhr.onreadystatechange=function(){
	//这里的函数异步执行
	if(xhr.readyState==4){//readyState每次变化都会触发这个函数；
		if(xhr.status==200){
			console.log(xhr.responseText);//这是返回的内容；
		}
	}
}
xhr.send(null)//会监听，
ie兼容性问题；
ie低版本使用ActiveObject     和w3c标准不一样；

状态码说明：
0  --未初始化--还没发送，还没调用send() 方法 一般不用管
1  --载入，以调用send()方法，正在发送请求；
2  --载入完成，send() 方法执行完成；已接收到全部响应内容；
3  -- 交互--正在解析响应内容
4  -- 完成--响应内容解析完成，可以在客户端调用了；

2XX    表示成功处理请求；如200  
3XX    需要重新定向；浏览器直接跳转
4XX    客户端请求错误，如404  
5XX    服务端错误  如501  服务端没运行完就出现bug了
4：跨域--基本都会考察
1：什么是跨域？  jsonP   服务器端设置 http header
浏览器的同源策略，不允许ajax访问其他域接口；
不同协议，不同域名，不同端口，有一个不同就算跨域；
主要是不能使用别人的接口；默认端口就是80；
但有三个标签允许跨域加载资源
img src="url"    防盗链的问题； img标签用于打点统计，统计网站可能是其他域；
link href= "url"
script src="url"   
link标签，script标签，可以使用cdn，cdn也是其他域名；
三个标签的场景；

5：jsonp实现原理
	当访问一个域名里的一个文件的时候
	服务器端不一定真的有这个文件
	服务器可以根据请求，动态生成一个文件并返回；
6：
<script>
window.callback=function(data){
	//这里是我们跨域得到信息
	//事实上这个函数名定义在数据里面，data就是数据里面的内容
	console.log(data)
}
</script>
<script src="url：是一个js文件"></script>
/*这个url将返回一个数据；数据里面包含一个名为callback的函数*/
另一个解决跨域的方法--将来的趋势
需要服务器端来做；
设置http header
response.setHeader("Access-Control-Allow-Origin","http://a.com,http://b.com")

window.callback=function(data){
	console.log(data)
}
<script src='http://likun2008.top/js/a.js'></script>
callback({
	x:100,
	y:200
})    
这三个联合起来用，果然能够打印出获取到的数据；
/
jsonp 在jquery中的使用；


1：存储：
	cookie  localStorage   sessionStorage 
2：html5之前是cookie，
 cookie用于客户端和服务器通信
 但是他有本地存储的功能，于是就被借用；
 使用document.cookie= ...获取和修改即可；以键值对形式存储；
3：cookie只有4kb；
所有http请求都带着，会影响获取资源的效率
locationStorage
最大有5M
api简洁易用
localStorage.setItem(key,value)
localStorage.getItem(key )
sessionStorage  浏览器关闭即失效
loaclStorage  存储在本地；
会有坑：
ios  safari  隐藏模式下：localStorage.getItem 会报错
建议统一使用try-catch封装；
区别：容量，api简洁易用；是否会携带到ajax中；

1：开发环境介绍；
	面试官想通过开发环境来了解面试者的经验；
	开发环境，最能体现工作产出的效率
	会以聊天的形式为主，而不是出具体的问题；
2：ide 代码编辑器，写代码的效率；
	git 代码版本管理，多人协作开发；

1:模块化；
		不是用模块化的情况
		使用模块化
		AMD
		Commonjs

	util.js   getFormatDate
	a-util.js aGetFormatDate  函数 ，使用getFormatDate
	a.js  aGetFormatDate   
假如说有 a b c 三个业务；
业务段，函数之间要相互依赖；  引用是顺序不能错，因为是强依赖关系；
1：纯粹script标签引用，变量必须是全局变量，才能暴露给其他使用；
2：a.js 知道依赖与a-util.js 但他知道还需要依赖于 util.js 吗？
全局污染就是自己定义一个变量，别人又定义一个同样的变量，会取代掉
AMD是一种规范  require.js   是一个工具
通过 require.js   定义一个全局define函数，一个全局require函数，依赖js会自动，异步加载

require是引入，report是输出；
<script src="./require.min.js" data-main="./main.js"></scipt>   /
util.js
define(function(){
	var util={
		getFormatDate:function(date,type){
			if(type==1){
				return "201-06-20"
			}
		}
	}
	return util ;
})

a-util.js
define(["./util.js"],function(util){
	var aUtil={
		aGetFormatDate:function(date){
			return util.getFormatDate(date,2)
		}
	}
	return aUtil;
})
a.js
define(["./a-util.js"],function(aUtil){
	var a={
		printDate:function(date){
			console.log()
		}
	}
})
return a
 
main.js  //入口文件  写在data-main的值里面
require(["./a.js"],function(a){
	var date =new Date();
	a.printDate(date);
})
//别的都是define ，唯独这个是require；
//别的都有返回，唯独他没有返回；
//根据依赖关系自动加载；
//---------返回的必须是对象吗？以及函数吗？
AMD
2：CommonJS
nodejs 模块化规范；现在大量被用于前端
前端开发依赖的插件和库，都可以从npm中获取；
构建工具的高度自动化，使得使用npm的成本非常低；
CommonJS不会异步加载js，而是同步一次性加载完成；
因为服务器端不需要同步或者异步，一次性加载完成即可；
没有define //也没有require，
有require，吐出来由 module.exports来完成
AMD  与CommonJS的使用场景；90%都是在用jquery zepto
需要异步加载js，使用AMD
使用npm之后建议使用CommonJS，
grunt ---gulp ----fis 
gulp 速度快，fis3百度自己用的
webpack用的最多的；
webpack.config.js
var path =require("path")
var webpack=require("webpack")  //这两个是系统自己所需的依赖

module.exports={//输出一个对象
	//定义一个属性；找到这个目录；这个函数在处理拼接目录
	context:path.resolve(__dirname,"./src"),
	entry:{ //入口文件
		app:"./app.js",
	},
	output:{  //输出的目录以及文件
		path:path.resolve(__dirname,"./dist"),
		filename:"bundle.js"
	},
	plugins:[ //引用了一个插件--自身的插件；
		new webpack.optimize.UglifyJsPlugin()
	]
}

app.js
var $=jquery.js  //这个用jquery，就要引入；页面里反而不需要引用；
console.log("test")

/**/
$("#div").html("<p>这是jquery插入的文字；</p>")

a-util.js
module.exports={//这个包裹之后会自动返回
	print:function(){
		console.log(123)
	}
}

app1.js
var aUtil=require("./a-util.js");//这个也会自动引入
aUtil.print();             //肯定被工具处理过的
//这个对象名变成了获取时定义的变量名，就是aUtil

1：上线和回滚；不会有具体的问题，交流询问的方式
2：上线和回滚的基本流程；
3：linux基本命令；--服务器没有鼠标没有桌面，只有命令
4：是非常重要的开发环节，由专门的工具或者系统完成，无需关心细节；
上线流程要点：
讲测试完成的代码提交到git版本库的master分支
//个人测试需要新建分支，测试好后再合并
将当前服务器的代码全部打包并记录版本好，备份；
讲master分支的代码提交覆盖到线上服务器，生成新版本号
回滚流程要点
将当前服务器的代码打包并记录版本号，备份
讲备份的上一个版本号解压，覆盖到线上服务器，并生成新的版本号；

1：linux基本命令
测试环境要匹配线上环境，因此也是linux
经常需要登陆测试机来自己配置，获取环境；
首先是登陆，有公用账号，有私人账号；
需要用ssh name@server；
mkdir a            创建一个名为a的文件夹
ls              查看当前目录都有哪些文件
ll              以列表形式查看文件
cd a            进入a文件夹
pwd             查看当前文件的路径
cd ..           返回上一级目录；
rm -rf a        删除a文件夹
vi a.js         新建文件并打开---里面可以写代码了
cp a.js  a1.js  拷贝 源文件  新的文件名        
mkdir  src
mv a1.js  src/a1.js   移动文件，源文件夹，目标目录与名字
cd src 
cd ..
rm a.js         删除文件，是没有回收站的；
vim a.js        创建文件并进入编辑环境
点击esc回到命令行界面；
cat a.js        会在命令行直接输出执行结果
head a.js
tail a.js
head -n 2 a.js  输出指定的一行；
grep "2" a.js   搜素
tail -n 2 a.js  后两行，问题是从哪里算起？
vi a.js        编辑
		基本命令就这么多  --书上给出更多命令

1：运行环境，开发环境对应的运行环境---就是浏览器
浏览器可以通过访问链接来得到页面的内容
通过绘制和渲染，显示出页面最终的样子
整个过程中，我们需要考虑什么样的问题？
a:页面加载过程----
b:性能优化，不仅仅是加载，还有渲染
c:安全性，如何做安全防御；
2：从输入url到html 的详细过程百分之七八十会考这个问题
window.onload和DOMContentLoaded的区别是什么
加载资源的形式---加载资源的过程--浏览器渲染页面的过程；
输入url或跳转页面加载url --html就是模板；--就两种
另一种形式：加载html中的静态资源
如script标签，img标签，以及css  视频，媒体之类的文件，都是静态资源
浏览器根据dns服务器得到域名的ip地址，域名就是英文组成的，ip是一串数字用点分隔开
向这个IP的机器发送http请求
服务器收到，处理，并返回http请求
浏览器得到返回内容；
浏览器渲染页面的过程，浏览器怎么用html代码
根据html结构生成DOM Tree
根据css生成cssom  = css  object model
讲dom和cssom整合成rendertree  渲染树，跟结构树的区别是增加了样式；
根据人的人tree 开始选软和展示
遇到script标签时，会执行并阻塞渲染；什么时候script里的代码执行完了，才会继续选软
因为js有权力改变dom结构，不能同时进行；

页面加载的集中实例；
为何把css放在head中，一个是因为规定；

window.onload 是将所有的资源加载完
DOMContentLoaded  dom加载完即执行，
window.addEventListener("load",function(){
	//页面全部资源加载完之后才会执行，包括图片，视频
})
document.addEventListener("DOMContentLoaded",function(){
	//dom渲染完成即可，此时图片和视频等资源尚未加载完成；
})

1：性能优化，本身就是一个综合性的问题，没有标准答案，
	只关注核心点，针对面试；
2：多用内存和缓存，或者其他的方法，减少cpu计算，减少网络；
3：（减少网络请求，减少硬盘请求，这个后端搞；
4：从哪里入手
	加载页面和静态资源（如何加载更快），页面渲染；如何让页面渲染更快；
a:静态资源的压缩合并；b：静态资源缓存，改名字了就会从新加载文件
c:使用cdn让资源加载更快，
d:使用SSR后端渲染，数据直接输出到HTML中；不用再通过ajax拿数据，再通过js渲染到页面；
渲染优化：a：css放前面，js放后面，b：懒加载，（图片懒加载，下拉加载跟多；）
c:减少dom查询，对dom查询做缓存，d：减少dom操作，多个操作尽量合并在一起执行；
事件节流；尽早执行操作；如domcontentloaded；
图片懒加载：先命名一个很小的图片占位
img src="preiew.png" data-realsrc="abc.png"/
 var img1=document.getElementById("img1");
 img1.src=img1.getAttribute("data-realsrc")
 缓存dom查询的例子
 var i   //无缓存的写法
 for(i=0;i<document.getElementsByTagName("p").length;i++){

 }
 var pList=document.getElementsByTagName("p").length;
 var i     //有缓存的写法
 for(i=0;i<pList;i++){
 	
 }
合并DOM插入
第一种：循环插入10次
第二种;定义一个片段，创造10个标签后插入片段，最后再把片段插入页面；
var frag=document.createDocumentFragment();//定义这个片段
frag.appendChild(li);  //把新增节点循环插入片段
事件节流：--针对打字快的情况下，input框 的change事件会发生多次
var textarea=document.getElementById("text");
var timeoutId;
textarea.addEventListener("keyup",function(){
	if(timeoutId){ //有的话就清除掉，
		clearTimeout(timeoutId)
	}
	timeoutId=setTimeout(function(){//没有就创建；
		//触发change事件，
	},100)//这个最后一次还是会执行的；不会被清除；
})
尽早操作：：：：

1：安全性---被问的概率不是很大；面试快结束的时候会被问一句；
基本都是由后端来做的；
综合性的问题：场景的前端安全问题有哪些？
常见的安全攻击----XSS跨站请求攻击---XSRF跨站请求伪造；
在文章输入的过程中插入一段script标签和内容
攻击代码中，获取cookie，发送到自己的服务器；--
xss：前端关键字替换；<替换为&lt; >替换为&gt;--后端替换
XSRF  把付费请求的接口链接加到图片上，然后发送邮件，点击邮件就会
对此增加验证流程，如输入指纹，密码，短信验证码；

简历技巧：
简洁明了，重点突出项目经历和解决方案；
把个人博客放在简历中，并且定期维护更新博客
把个人的开源项目放在简历中，并维护开源项目；






















































