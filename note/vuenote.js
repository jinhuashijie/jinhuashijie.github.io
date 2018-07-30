1：hello world，跟模板引擎差不多；也是定义数据，双大括号展示数据，像angular；
	1：引用
	2：创建vue应用，好像过时了的版本；el代表选择器，可以是id，可以是class，可以是标签名字；
		不允许挂载到html或者body上面；
2：安装vue-cli  前面不知道为什么失败了，应该是网络的问题
	npm install --global vue-cli
    vue init webpack baoge  虽然安装过程中也有问题，但是服务启动成功了；
3：遍历数组，对象；v-for 
    <li v-for="item in arr">{{item}}</li>  遍历数组一个值，对象两个值；
    <li v-for="(value,index) in obj">{{value}}:{{index}}</li>
    <li v-for="(item,index) in arrobj">{{item.b}}</li>
    数组套对象的话里面的元素属性必须是统一的；
    v-for还能遍历整数；<li v-for="n in 10"> ，应该是自带的解析；
4：双向数据绑定：使用<div v-html="message"></div> 绑定传一个标签
    使用v-model="msg"  绑定数据属性,用于表单；
5：通过外部是可以修改一个vue实例里面的方法和数据的；
6：事件：v-on   <button v-on:click="action">点击打印</button>
    <button v-on:mouseover="action1" v-on:mouseleave="action">点击打印</button>绑定多个事件；
    <button @dblclick="action3">双击</button> 可以简写；
7：判断：v-show  
8:绑定属性-html内的属性：<a v-bind:href="url">
9：反转字符串的方法：{{ message.split('').reverse().join('') }}
10：函数直接是返回值：reversedMessage，双大括号写一个函数名会自动执行；
	需要在computed  属性里面的才会自动执行，method里面的是不行的；
11：<div v-bind:class="{ active: isActive }"></div> 
    isActive: false   这个判断是自带的，而且还是个对象
    数组形式绑定class，是纯粹的字符串值，而对象形式则是布尔值；对象还要注意加引号；

12：模板；   + 事件和属性，事件进阶-修饰符 键盘事件，过滤器
    解决可能存在的浏览器闪烁问题；
    v-html v-text 在普通数据的时候两个是一样的，但是在带标签的情况下
    v-html会转义标签，v-text会连标签一起展示在页面上；
    v-clock：主要是用来解决闪烁的问题，chrome没有，可能其他浏览器有；
    
要注意的地方：
1：绑定事件是用  v-on 
2：函数要是写在双花括号里面就要带执行，以及函数要带返回值
3：在computed里面的函数是可以直接执行的；
method与computed对比
    1：<p v-on:click="app2">321</p> 在computed里面这样是不行的
    <p v-on:click="test">321</p>  在method里面是可以的；
    <p v-on:click="app2()">321</p> 在computed里面通过返回值是函数再执行一次就可以
    2：<p>{{test()}}</p>    在method里必须执行
        <p>{{app2}}</p>   在computed里面会自动执行；
4:使用箭头函数的问题，在methods里面的箭头函数下，this会指向window











