所在位置--gitio-note
1：企业级前后端整站以及app开发；
**基本的：
1：定义变量的关键词：
	var  functio n
	数据类型：number   string  boolen(true,false) undefined null(空的对象指针) 
	          object ---array，object，functio n,
	2：函数表达式可以自执行，一个函数本身在后面加括号会报错=》 function a(){}()这样的不行--但是在最外面加括号可以实现自执行
		(function(){})()  这样的就可以自执行了，而且这个不是闭包
		在前面加个！也可以实现自执行；前面加加减号也能有同样的效果
	3：形参，实参，不定参；
		function a(a,b){

		}
		a(1,2)   a,b就是形参，1,2就是实参  arguments代表参数的集合，就是不定参
	4：函数科里化：
	5：变量提升：-跟执行顺序有关，先定义，后赋值
第二课：
	1：函数执行顺序--覆盖定义，变量与函数；
		var a=10;
		alert(a)
		a()
		function a(){ //
			alert(20)
		}
		弹出10  然后报错，a不是函数
		执行顺序：
			1：先定义函数
			2：然后顺序执行--var a=10 => alert(a)
			3：这个函数a() 指向的是10，而不是function=》等于是var a把函数a给覆盖了，
		连等式： var a=b=5  等价于： var a=b;b是全局变量在window下，严格模式会报错
		所有不加var的定义都是全局定义，哪怕是在函数里面=》函数外面还是不能访问
	2：闭包：
		1：什么叫做闭包？函数里面嵌套函数就是闭包；
		   内部函数引用了外部函数的参数或者变量
		   function a(c){
		   	   var g=5;  //这个g不会被回收；如果继续执行，就会一直自增
		   	   function b(){
		   	   	   g++
		   	   	   console.log(g)
		   	   }
		   	   return b
		   }
		   a(10)//a肯定是全局变量，这样会引用到g
		   var x=a(2)
		   x()
		   var t=a(2)
		   t()   // t和x会产生不同的作用域，g值会被分开来，各加各的
		   内部函数对外有持续的引用；
		   被引入的参数或者变量会持续的存在，不会被回收
		   局部作用域在执行完毕之后会被回收的；
		2：匿名函数的--自执行
			(function(){ //外面这层括号可以换成+ - ！
				var num =0
				console.log(num)
				document.onclick=function(){//事件监听属于全局函数
					num++ //里面没有函数的话就不是闭包
					console.log(num) //  必须外面对函数里面的函数有持续的引用
				}
			})()//加括号才能自执行
			函数自执行可以用来提高首页加载速度，--修改rul地址，加载其他引用
		3：在有多个p标签下，点击输出各自的内容--使用for循环，而不是一个个单独赋值
			var aP=document.getElementById("")
			for(var x=0;x<5;x++){
				aP[x].onclick=function(){//----是绑定了5个事件到每个元素上面，但没执行
					console.log(x)  //这样打出来的全是5
				} //等于在执行的时候，是全部绑定事件的，
			}     //但是x作为全局变量，不断的被后来覆盖了
			      //点击的时候，这个函数才会执行，里面没执行的的时候根本就是x，还不是数字
			//生成了5个函数；--没执行的时候x肯定还是x，没有上找，执行的时候才会找
            var aP=document.getElementById("")
			+for(var x=0;x<5;x++){
				aP[x].onclick=function(){//----是绑定了5个事件到每个元素上面，但没执行
					console.log(x)  //这样打出来的是顺序
				} 
			}(x)  //这样自执行传入参数，
			var test=[1,2,3,4,5];
			var test2=[]
			for(var x=0;x<5;x++){
				test2[x]=function(){
					console.log(x)
					test2[x]()
				}
				test2[x]()  //这样是顺序执行的，形成了闭包
			}
		4：es6的作用域；
			let不会有变量提升，都是从上到下，从左到右顺序执行，以及不能重复执行，函数也不行
			2： 变量提升：浏览器解析的时候会先找var functio n  ，引用可以放在前面
			3：const不允许出现等号重新赋值，修改push数组是可以的
			4：作用域--函数作用域，，script全局作用域；es6里面：
			5:let对于小括号，大括号都是作用域，在for后面的小括号里面也算是单独作用域 
		5：function(){var a=b=10 } //这个b就跑到全局作用域去了，外面可以访问到了
2：整体的进程--难度阶梯--
	1：词法作用域上下文
		1：作用域
		2：上下文
		3：经验面试题解析
	2：函数进阶篇：
		1：高阶函数
		2：节流与防抖
		3：惰性函数
	3：面向对象与设计模式入门
		1：面向对象编程：
			1：new 构造函数等的概念
			2：原型与原型链，继承的实现
			3：es6的面向对象
		2：设计模式入门
			1：什么是设计模式，为什么要使用设计模式；
	4：mvvm封装
		1：mvvm
			1；什么事mvvm，原理解析
			2：如何实现mvvm
			3：动手封装自己的mvvm框架（vue核心）
	5：性能优化：
		1：for循环的优化
			1：关于length的优化
			2：倒序遍历
		2：判断的优化
			1：条件的先后顺序
			2：对象/数组映射代替判断
		3：dom优化
			1：减少dom节点数量
			2：类名代替样式操作
			3：减少dom与ecma交互
			4：通过fragment添加多个节点
			5：多操作换用克隆节点代替
			6：避免遍历大量节点
			7：事件委托
		4：对象的合理分配与重复利用
			1：惰性实例化
			2：结果缓存
			3：亨元模式
			4：手动垃圾回收
			5：事件监听的回收
			6：闭包的合理使用
		5：缓存
			1：ajax结果换成
			2：cookie缓存
			3：本地缓存
			4：正则表达式的缓存
		6：回流与重绘
			1：哪些操作导致回流
			2：如何避免或减少回流
		7：动画优化
			1：运动元素的定位选择
			2：启用硬件加速
			3：合并定时操作
		8：其他
			1：代码结构优化
			2：文件内容的压缩
			3：异步加载js
			4：懒加载技术



第五节：7-13  面向对象：--应该是第三部分：
1：对象：有多个相同属性时，一个共有对象，然后其他都是return和function造出来
	比如：
	var a={
		name:'A',
		age:12,
		home:'china'
	}
	var b={
		name:'B',
		age:22,
		home:'china'
	}
	var c={
		name:'C',
		age:17,
		home:'china'
	}
	可以结合成这个样子
	function test(a,b,c){
		var obj={
			name:a,
			age:b,
			home:c
		}
		return obj
	}
	var a=test('A',17,"china")
	var b=test("B",20,"china")
	console.log(a)  也能起到同样的效果，但是代码量少了
2：一个函数自执行之后的默认返回值是undefined ，   函数自执行的this指向的window，
new之后的this指向的是空对象，自执行之后返回的也是空对象
    function test(a,b,c){
			this.name=a,
			this.age=b,
			this.home=c
	}
	var a=new test('A',17,"china")
	console.log(a)  得到同样的效果，这样代码更精简；
	new用来帮我们创建对象；这个就是被称之为构造函数；
	约定构造函数的首字母大写；
3：工厂模式，new自带原料和产出，自己只需关注加工
	就是在构造的模板函数里面带很多方法，跟jquery的$一样；
4：构造函数的原型共用prototype
	function test(a,b,c){
		this.name=a,
		this.age=b,
		this.home=c
		this.getName=function(){
			console.log(this.name)
		}
	}
	var t1=new test()
	var t2=new test() 这个时候是相等的
	console.log(t1.getname==t2.getname)
	不能共用（私有方法，属性）的放在构造函数里面，公有属性放在原型里面--节省内存，面向对象的好处
5：原型链；
6：继承：私有属性；继承怎么写？es5写法，es6写法；原型继承，拷贝继承；
	class Test{  //  类的写法。类不允许直接执行，跟构造函数是一样的；
		//实例的私有属性，es6的写法
		constructor(name,age){//
			this.name=name;
			this.age=age;
		}//上面是构造函数，下面是原型
		//原型不用写出去；，es6原型只能有方法，不能有属性；
		sayName(){//一定要加的话要在外面使用prototype
			console.log(this.name)
		}
	}
	var t1= new Test("aa",20)
	console.log(t1)
	t1.sayName()
    Test.prototype也可以添加原型属性；
    //es6的继承方法；既要有构造函数属性，还要有原型属性，还要继承额外的新增的
    class X extends Test{
    	constructor(name,age){
    		super(name,age)
    		this.
    	}
    }
第六节：设计模式：前人规定好的解决方案，第一步，第二步，第三步；
1：多个设计模式配合在项目中，在开发项目中
创建型，结构型，行为型；
	1：单利模式：
    







你好，我是极客学院同学，希望有机会分享开发方面的知识



