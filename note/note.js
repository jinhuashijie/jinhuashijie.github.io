1:jquery修改input的值，不能使用获取值的方法
	$(".sendmsg input").val(),  
	$(".sendmsg textarea,input").val(" ");	  值写在后面的括号里才能设置；
2：手机端适配也是非常有问题的，不能是普通的写像素大小；
	不是不能写成普通像素大小，而是当原来设置的宽度远远大于屏幕宽度时，网页会严重缩放，
	解决办法是把所有的超宽的元素的宽度从新设定
3：移动端适配
	media="screen and (min-width: 767px) and (max-width: 1129px)"
	css里面可以不写尺寸，html里面必须写
	常用尺寸：大屏幕：大于1200px；   (min-width: 1130px) 
			  默认：980px；
			  平板：大于768px；  (min-width: 767px) and (max-width: 1129px)
			  手机 ：小于480px； (max-width: 500px)
4：html-css-js-jquery-php-mysql-nodejs-es6-git-(angular react  veu) -webpack-react router-web安全--动画
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

