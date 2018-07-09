$(document).ready(function(){
	$("header .headall .headright ul").mouseover(function(){
		$(this).find("li").css("display","block");
	}).mouseleave(function(){
		$(this).find("li").css("display","none");
	})
	$(".info .infotab .infoul li").mouseover(function(){
		$(this).css("background","blue");
		$(this).css("color","white");
		var index=$(this).parent().find("li").index(this);
		console.log(index);
		$(".infomain").find(".infomaintab").eq(index).css("display","block");
		$(".infomain").find(".infomaintab").not($(".infomain .infomaintab").eq(index)).css("display","none");
	}).mouseleave(function(){
		$(this).css("background","#f9f9f9");
		$(this).css("color","black");
	})
	$(".info .infomaintab .infomainleft ul li").mouseover(function(){
		$(this).css("background","blue");
		$(this).css("color","white");

		var index=$(this).parent().find("li").index(this);
		console.log(index);// ul center  infomaintab 
		$(this).parent().parent().parent().find(".infomaincenter ul").find("li").eq(index).css("display","block");
		$(this).parent().parent().parent().find(".infomaincenter ul").find("li").not($(this).parent().parent().parent().find(".infomaincenter ul").find("li").eq(index)).css("display","none");
		/*$(".infomain").find(".infomaincenter ul li").not($(".infomain").find(".infomaincenter ul li").eq(index)).css("display","none");*/
	}).mouseleave(function(){
		$(this).css("background","#bbccec");
		$(this).css("color","black");
	})
})