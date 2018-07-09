$(".cf li").hover(
	 function(){
          var h = $(this).attr("id");
        $("#"+h+" .lesson-infor").stop(true).animate({height:"175px"});
        $("#"+h+" p").stop(true).animate({height:"56px"});
        $("#"+h+" .lesson-infor").css("overflow","visible");
        $("#"+h+" .zhongji").css("display","block");
        $("#"+h+" .learn-number").css("display","block");
        $("#"+h+" .lessonplay").css("opacity","1");
        $("#"+h+" .lessonicon-box a img").stop(true).animate({marginTop:"8px"});
    }
     ,
     function(){
     	 var h = $(this).attr("id");
     	$("#"+h+" .lesson-infor").stop(true).animate({height:"88px"});
     	$("#"+h+" p").stop(true).animate({height:"0px"});
        $("#"+h+" .learn-number").css("display","none");
        $("#"+h+" .lessonplay").css("opacity","0");
        $("#"+h+" .lessonicon-box a img").stop(true).animate({marginTop:"-15px"});
  });
