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
	1：单例模式：在构造函数下，new出来的对象是不相等的，而单例模式要变成相等的
    class Tip{
    	constructor(text){
    		let oDiv=document.createElement("div")
    		oDiv.style.cssText="position:fixed"
    		oDiv.innerText=text
    		document.body.appendChild(oDiv)
    	}
    	show(){

    	}
    }
    new Tip("阿飞")
    new Tip("狗蛋")
    let Tip=(function(){
		let ins=null;  //这个就放在了闭包里面；
		class Fn{
	    	constructor(text){
	    		if(ins){
	    			ins.oDiv.innerText=text  //这个div是共用的；
	    			return ins   
	    		}else{
	    			this.oDiv=document.createElement("div")
		    		this.oDiv.style.cssText="position:fixed"
		    		this.oDiv.innerText=text
		    		document.body.appendChild(this.oDiv)
		    		console.log(this)//打印出的是Fn
		    		ins=this  //ins为什么要等于this---this指向的Fn本身；
	    		}
		    		
	    	}
	    	show(){

	    	}
	    }
	    return Fn
	})()
	let x=    new Tip("阿飞")  //--产出是成功的；
	let y=    new Tip("狗蛋") //--第二次的时候只是运用了个不同的参数而已；
	console.log(x===y)  //  这里返回的居然是true，居然是相等的，
	x,y打印出来居然都是Fn这个函数，没有其他的区别，参数也跑掉了；
    要用闭包来判断到底是存在还是不存在；这个div是否已经被创建过；
    好处是节省内存，速度快；
2：单例模式的通例：
3：工厂模式；多个构造函数放在一个里面；最后返回一个新的类；利用switch判断的方式来return不同的构造函数

第七节：最后一课：js的性能优化
1：for循环的优化，可以提前定义length
2：数组去重，采取倒序的方式
let arr=[1,0,3,8,6,4,4,4,5,3,2]
let arr=[4,4,4]
for(let i=arr.length-1;i>=0;i--){                    
	// i 是倒序的下标；                              
	console.log(arr.length)//长度肯定是变化了的；
	var x=arr[i]                                     
	for(let j=i-1;j>=0;j--){ 
		//debugger;                        
		if(x===arr[j]){
			arr.splice(j,1)
		}
	}
}
console.log(arr)//   是没有问题的；

3：对象的合理分配；
1：惰性实例化，结果缓存，享元模式，事件监听的回收，闭包的合理使用
2： 手动垃圾回收，全局变量永远不会被回收；
3：缓存：ajax结果的缓存，cookie缓存，本地缓存，正则表达式缓存；
	正则表达式，常用的写成对象，对象占用堆内存；
4：判断优化：条件的先后顺序；对象数组映射代替判断；
let oWrap=document.getElementById('wrap')
oWrap.onclick=function(){
	console.log(1)
}
oWrap=null;  即便是定义为null，点击事件是还存在的；



1：函数的执行顺序问题
正常写法，顺序用var定义，也会顺序执行，同名的话，后面会覆盖前面的；
var a=1;
console.log(a);
var a=2;
console.log(a)
打印结果是顺序执行1,2
说明这是很纯粹的单线程，但是有同名函数时就不一样了；
var a=1;
console.log(a);
function b(){
    console.log(3)
}
b()
var a=2;
console.log(a)
这种情况下，也是顺序执行的；也是按照单线程执行的；

b()
function b(){
    console.log(3)
}
函数的顺序错乱也是能够正常执行的；

var b=10;
console.log(b)
function b(){
    console.log(3)
}
console.log(b)
b()
b=10可以正常打印出来，但是b的函数执行却报错说不是函数
无论这个打印在前还是在后都能够打印出10，说明函数被覆盖了；

var b=10;
console.log(b)
var b=function(){
    console.log(3)
}
console.log(b)
b()
这个变量函数是顺序执行的；等于说定义函数会被变量替代；而变量函数却不会；


var b=function(){
    console.log(1)
}
b()
function b(){
    console.log(3)
}
b()
打印出来全是1，说明定义函数会被变量函数所取代；

b()
var b=function(){
    console.log(1)
}
b()
function b(){
    console.log(3)
}
b()
但是最顶上的却打印出了3，说明顺序错乱的时候，会去找定义函数；

b()
var b=function(){console.log(1)}
b()
function b(){console.log(2)}
b()
var b=function(){console.log(3)}
b()
打印出2 1 1 3

b()
function b(){console.log(2)}
b()
var b=function(){console.log(1)}
b()
var b=function(){console.log(3)}
b()
打印出：2 2 1 3，同名变量会顺序覆盖函数，顺序错乱会去找函数，而不是找变量

2：关于闭包o:简单理解：第一个条件：函数里嵌套函数；第二个条件：子函数引用了母函数的参数或者变量；
第三个条件：内部函数对外部有持续的引用（子函数对母函数里的变量的持续引用；）；就是retrun出来，导致内部变量跑到window下，不会被回收；
function a(){
    var g=10;
    function b(){
         g++
        console.log(g)
    }
    return b
}
var x=a()
x()
x()  //打印出来11,12，说明这个g没有被回收，
var y=a()
y()
y()  //也是打印出11,12，说明虽然是引用了同一个，但是却生成两个作用域；
g虽然被挂载到了全局变量，单肯定不在window下；








































