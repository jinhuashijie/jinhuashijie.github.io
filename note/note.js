1:jquery修改input的值，不能使用获取值的方法
	$(".sendmsg input").val(),  
	$(".sendmsg textarea,input").val(" ");	  值写在后面的括号里才能设置；
2：手机端适配也是非常有问题的，不能是普通的写像素大小；
	不是不能写成普通像素大小，而是当原来设置的宽度远远大于屏幕宽度时，网页会严重缩放，
	解决办法是把所有的超宽的元素的宽度从新设定
3：移动端适配
	media="screen and (min-width: 767px) and (max-width: 1129px)"
	css里面可以不写尺寸，html里面必须写
	html里面也可以不写，css里面可以每个尺寸一个大括号就行；
	常用尺寸：大屏幕：大于1200px；   (min-width: 1130px) 
			  默认：980px；
			  平板：大于768px；  (min-width: 767px) and (max-width: 1129px)
			  手机 ：小于480px； (max-width: 500px)
4：html-css-js-jquery-php-mysql-nodejs-es6-git-(angular react  veu) -webpack-react router-web安全--动画
	关键是要能够利用这些东西作出各种效果来才行
                               /*            css知识点开始                               */
知识点：1：响应式布局，已经解决，
	2：css动画，画图；
	动画：百分比和from-to效果是一样的；animation-delay:2s;  -direction:normal/forwards（保持最后状态）
	animation:名字  周期时长     速度曲线     开始延迟  播放次数  是否逆向播放  运行或者暂停
		    name  duration(num) linear(匀速)   -iteration-count:num        -play-state:running /stop
		    					ease(慢-快-慢)
		    					ease-in(慢-快)
		    				ease-in-out(慢)
		    				cubic-bezier(n,n,n)速度曲线
5：2d变换---移动，缩放，转动，拉长，拉伸
	transform:translate(px,px)  rotate(角度deg)  scale(x,y)倍数  skew(xdeg,ydeg)  matrix(全部组合)
				位移，x , y      顺时针旋转     拉伸几倍        翻转角度,x,y      六个参数
    transform-origin:20% 40%;  旋转的中心点，点在哪里，定在哪里，其他地方围绕此旋转
6：3d变换
	transform:rotateX(120deg);  就是rotate有一点点变化；原点是元素的中心
	transform-style: 子元素是继续在2d还是跟随3d；flat:2d    preserve-3d  一起3d显示
	perspective:   设置父元素的
	perspective-orgin:
	backface-visibility:设置背面是否可见，visibilitey  hidden  就是元素透不透明，旋转之后还能看到后面
7：html引用php文件 <?php include 'footer.php';?>
8:纯粹css修改复选框的样式是可以的，主要利用label和伪元素，以及动画
	1:label里面for的是input对应 id；
	2：原来的选框被隐藏了
	3：利用span，以及伪元素新增加了一个形状
	4：当checked处于被选中时，触发了一个事件
	5:使用input[type="checkbox"]=checked是可以的
	6：最终证明简单的是可以的
	7:伪元素必须设置inline-block，要不然宽高失效

                      /*             jquery部分              */
1：jquery分页插件
	1：在逻辑架构上
		1：每循环一次，增加一次ul，然后判断ul的高度，小于预设值就往里面增加li
		2：大于ul的高度，就往页面的特定盒子里面增加一个按钮；同时设置其他的ul隐藏起来
	2：遇到的问题
		1：在最外面需要一个初始值，用于记录已经增加了多少个li
		2：在最外层的循环里必须让i的数值小于数组总长度，而这个总长度是余下的，
		3：不仅仅要小于剩下的，i的本身是增长的，所以需要另一个值把i值增加到剩余长度里，抵消i的增长；
		4：在ajax末尾用delegate的方法操作动态元素是没有问题的。
		5：在ajax末尾操作动态元素的属性也是没问题的；前面报错是自己写的问题
		6：在append方法后面是不能进行运算的，要把运算放在前面才行，
	3：类名指向解释：
		1：msg是所有ul的父元素，是最外面的容器
		2： btn是新增的按钮的父元素，
		3：data是ajax从PHP拿回来的数据，里面的名字要改成自己的；
	var len=data.length;
	var ulx=0;
	var x=0;
	for(i=0;i<len-ulx+x;i++){
		$(".msg").append("<ul></ul>");
		for(s=0;s<12;s++){
			var h=parseInt($(".msg ul").eq(i).css("height"));
			console.log(h);
			if(h>85){
				if(s+ulx<=len){
					$(".msg ul").not($(".msg ul").eq(0)).css("display","none");
					var n=i+1;
					$(".btn").append("<button>"+n+"</button>");
					x=i;
					ulx=ulx+s;
					break;
				}
			}else{//顺序错了就会报错；不应该是顺序的问题；
				$(".msg ul").eq(i).append("<li>"+data[s+ulx].msg+"</li>");
			}
		}
		
	}
2：<a href="javascript:;">  a标签取消默认行为






	/*            css知识点结束                               */

