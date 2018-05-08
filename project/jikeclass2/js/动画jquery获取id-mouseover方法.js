$(".cf li").mouseover(function(){//jquery的mouseover事件
var h = $(this).attr("id");
                //$("#"+h+" p").css("display","block");
                $("#"+h+" p").css("opacity","1");
                $("#"+h+" p").animate({height:"56px"});
                $("#"+h+" .lesson-infor").animate({height:"175px"});
                $("#"+h+" .lesson-infor").css("overflow","visible");
                $("#"+h+" .zhongji").css("display","block");
                $("#"+h+" .learn-number").css("display","block");
                $("#"+h+" .lessonplay").css("opacity","1");
});
	$(".cf li").mouseleave(function(){//jquery的mouseover事件
var h = $(this).attr("id");
               // $("#"+h+" p").css("display","none");
               // $("#"+h+" p").css("opacity","0");
                $("#"+h+" p").animate({height:"0px"});
                $("#"+h+" .lesson-infor").animate({height:"88px"});
                $("#"+h+" .lesson-infor").css("overflow","hidden");
                //$("#"+h+" .zhongji").css("display","none");
                $("#"+h+" .learn-number").css("display","none");
                $("#"+h+" .lessonplay").css("opacity","0.1");
});