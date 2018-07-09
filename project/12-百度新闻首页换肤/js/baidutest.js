$(document).ready(function(){
	var strKey = "strKey"; 
    var storage = window.sessionStorage; 

            if(storage.getItem(strKey)!=null){ 
                $(".bdbody").css("background",storage.getItem(strKey));
            }
        
	$(".skin").click(function(){
	    $(".headskin1").removeClass("hi");
        $(".headskin1").addClass("vi");
        $(".headskin2").removeClass("hi");
        $(".headskin2").addClass("vi");
        $(".skinfoot").removeClass("hi");
        $(".skinfoot").addClass("vi");
        $(".headsample").removeClass("hi");
        $(".headsample").addClass("vi mar1");
        $(".headskin").removeClass("head02");
        $(".headskin").addClass("head01");
    });/**/
		$(".skinfoot1").click(function(){
		if($(".headskin2").hasClass("vi")){
			$(".headskin2").removeClass("vi");
			$(".headskin2").addClass("hi");
			$(".headskin2b").removeClass("hi");
			$(".headskin2b").addClass("vi");

    }else  if($(".headskin2b").hasClass("vi")){
            $(".headskin2a").removeClass("hi");
			$(".headskin2a").addClass("vi");
			$(".headskin2b").removeClass("vi");
			$(".headskin2b").addClass("hi");
    }  else  if($(".headskin2a").hasClass("vi")){
            $(".headskin2a").removeClass("vi");
			$(".headskin2a").addClass("hi");
			$(".headskin2").removeClass("hi");
			$(".headskin2").addClass("vi");
    } 
});
	
	$(".skinfoot2").click(function(){
		$(".headskin2").removeClass("hi");
		$(".headskin2").addClass("vi");
		$(".headskin2a").removeClass("vi");
		$(".headskin2a").addClass("hi");
		$(".headskin2b").removeClass("vi");
		$(".headskin2b").addClass("hi");
});
	$(".skinfoot3").click(function(){
        $(".headskin2a").removeClass("hi");
		$(".headskin2a").addClass("vi");
		$(".headskin2").removeClass("vi");
		$(".headskin2").addClass("hi");
		$(".headskin2b").removeClass("vi");
		$(".headskin2b").addClass("hi");
});
	
	$(".skinfoot4").click(function(){
        $(".headskin2a").removeClass("hi");
		$(".headskin2a").addClass("vi");
		$(".headskin2").removeClass("hi");
		$(".headskin2").addClass("vi");
		$(".headskin2b").removeClass("hi");
		$(".headskin2b").addClass("vi");
});/**/
    $(".skinfoot8").click(function(){
		if($(".headskin2").hasClass("vi")){
			$(".headskin2").removeClass("vi");
			$(".headskin2").addClass("hi");
			$(".headskin2a").removeClass("hi");
			$(".headskin2a").addClass("vi");

    }else  if($(".headskin2a").hasClass("vi")){
            $(".headskin2b").removeClass("hi");
			$(".headskin2b").addClass("vi");
			$(".headskin2a").removeClass("vi");
			$(".headskin2a").addClass("hi");
    }  else  if($(".headskin2b").hasClass("vi")){
            $(".headskin2b").removeClass("vi");
			$(".headskin2b").addClass("hi");
			$(".headskin2").removeClass("hi");
			$(".headskin2").addClass("vi");
			$(".headsample").removeClass("mar1");
			$(".headsample").addClass("mar2");
    } 
});
    $(".headskin1-1").click(function(){
    	    $(".headskin3").removeClass("vi");
			$(".headskin3").addClass("hi");
			$(".headskin2").removeClass("hi");
			$(".headskin2").addClass("vi");
			$(".skinfoot").removeClass("hi");
            $(".skinfoot").addClass("vi");
            $(".headsample").removeClass("mar2");
			$(".headsample").addClass("mar1");
			$(".headskin3head").removeClass("vi");
			$(".headskin3head").addClass("hi");
			$(".headskin").removeClass("headskinhei2");
			$(".headskin").addClass("headskinhei1");
			$(".autoskin").removeClass("vi");
			$(".autoskin").addClass("hi");
			$(".headskin1-1").removeClass("bgc2");
			$(".headskin1-1").addClass("bgc1");
			$(".headskin1-2").removeClass("bgc1");
			$(".headskin1-2").addClass("bgc2");
			$(".headskin1-3").removeClass("bgc1");
			$(".headskin1-3").addClass("bgc2");
			$(".headskin1-4").removeClass("bgc1");
			$(".headskin1-4").addClass("bgc2");
			$(".headskin1-5").removeClass("bgc1");
			$(".headskin1-5").addClass("bgc2");
			$(".headskin1-6").removeClass("bgc1");
			$(".headskin1-6").addClass("bgc2");
			$(".headskin1-7").removeClass("bgc1");
			$(".headskin1-7").addClass("bgc2");
			$(".headskin1-8").removeClass("bgc1");
			$(".headskin1-8").addClass("bgc2");
			$(".headskin1-9").removeClass("bgc1");
			$(".headskin1-9").addClass("bgc2");
			$(".headskin1-10").removeClass("bgc1");
			$(".headskin1-10").addClass("bgc2");

});
	$(".headskin1-2").click(function(){
            $(".headskin2b").removeClass("vi");
			$(".headskin2b").addClass("hi");
			$(".headskin2a").removeClass("vi");
			$(".headskin2a").addClass("hi");
			$(".headskin2").removeClass("vi");
			$(".headskin2").addClass("hi");
			$(".headskin3").removeClass("hi");
			$(".headskin3").addClass("vi");
			$(".skinfoot").removeClass("vi");
            $(".skinfoot").addClass("hi");
            $(".headsample").removeClass("mar1");
			$(".headsample").addClass("mar2");
			$(".headskin3head").removeClass("hi");
			$(".headskin3head").addClass("vi");
			$(".headskin").removeClass("headskinhei1");
			$(".headskin").addClass("headskinhei2");
			$(".autoskin").removeClass("hi");
			$(".autoskin").addClass("vi");
			$(".headskin1-2").removeClass("bgc2");
			$(".headskin1-2").addClass("bgc1");
			$(".headskin1-1").removeClass("bgc1");
			$(".headskin1-1").addClass("bgc2");
			$(".headskin1-3").removeClass("bgc1");
			$(".headskin1-3").addClass("bgc2");
			$(".headskin1-4").removeClass("bgc1");
			$(".headskin1-4").addClass("bgc2");
			$(".headskin1-5").removeClass("bgc1");
			$(".headskin1-5").addClass("bgc2");
			$(".headskin1-6").removeClass("bgc1");
			$(".headskin1-6").addClass("bgc2");
			$(".headskin1-7").removeClass("bgc1");
			$(".headskin1-7").addClass("bgc2");
			$(".headskin1-8").removeClass("bgc1");
			$(".headskin1-8").addClass("bgc2");
			$(".headskin1-9").removeClass("bgc1");
			$(".headskin1-9").addClass("bgc2");
			$(".headskin1-10").removeClass("bgc1");
			$(".headskin1-10").addClass("bgc2");
    });
    $(".headskin1-3").click(function(){
            $(".headskin2b").removeClass("vi");
			$(".headskin2b").addClass("hi");
			$(".headskin2a").removeClass("vi");
			$(".headskin2a").addClass("hi");
			$(".headskin2").removeClass("vi");
			$(".headskin2").addClass("hi");
			$(".headskin3").removeClass("hi");
			$(".headskin3").addClass("vi");
			$(".skinfoot").removeClass("vi");
            $(".skinfoot").addClass("hi");
            $(".headsample").removeClass("mar1");
			$(".headsample").addClass("mar2");
			$(".headskin3head").removeClass("hi");
			$(".headskin3head").addClass("vi");
			$(".headskin").removeClass("headskinhei1");
			$(".headskin").addClass("headskinhei2");
			$(".autoskin").removeClass("hi");
			$(".autoskin").addClass("vi");
			$(".headskin1-3").removeClass("bgc2");
			$(".headskin1-3").addClass("bgc1");
			$(".headskin1-2").removeClass("bgc1");
			$(".headskin1-2").addClass("bgc2");
			$(".headskin1-1").removeClass("bgc1");
			$(".headskin1-1").addClass("bgc2");
			$(".headskin1-4").removeClass("bgc1");
			$(".headskin1-4").addClass("bgc2");
			$(".headskin1-5").removeClass("bgc1");
			$(".headskin1-5").addClass("bgc2");
			$(".headskin1-6").removeClass("bgc1");
			$(".headskin1-6").addClass("bgc2");
			$(".headskin1-7").removeClass("bgc1");
			$(".headskin1-7").addClass("bgc2");
			$(".headskin1-8").removeClass("bgc1");
			$(".headskin1-8").addClass("bgc2");
			$(".headskin1-9").removeClass("bgc1");
			$(".headskin1-9").addClass("bgc2");
			$(".headskin1-10").removeClass("bgc1");
			$(".headskin1-10").addClass("bgc2");
    });
    $(".headskin1-4").click(function(){
    	    $(".headskin1-4").removeClass("bgc2");
			$(".headskin1-4").addClass("bgc1");
			$(".headskin1-2").removeClass("bgc1");
			$(".headskin1-2").addClass("bgc2");
			$(".headskin1-3").removeClass("bgc1");
			$(".headskin1-3").addClass("bgc2");
			$(".headskin1-1").removeClass("bgc1");
			$(".headskin1-1").addClass("bgc2");
			$(".headskin1-5").removeClass("bgc1");
			$(".headskin1-5").addClass("bgc2");
			$(".headskin1-6").removeClass("bgc1");
			$(".headskin1-6").addClass("bgc2");
			$(".headskin1-7").removeClass("bgc1");
			$(".headskin1-7").addClass("bgc2");
			$(".headskin1-8").removeClass("bgc1");
			$(".headskin1-8").addClass("bgc2");
			$(".headskin1-9").removeClass("bgc1");
			$(".headskin1-9").addClass("bgc2");
			$(".headskin1-10").removeClass("bgc1");
			$(".headskin1-10").addClass("bgc2");
    });
    $(".headskin1-5").click(function(){
    	    $(".headskin1-5").removeClass("bgc2");
			$(".headskin1-5").addClass("bgc1");
			$(".headskin1-2").removeClass("bgc1");
			$(".headskin1-2").addClass("bgc2");
			$(".headskin1-3").removeClass("bgc1");
			$(".headskin1-3").addClass("bgc2");
			$(".headskin1-4").removeClass("bgc1");
			$(".headskin1-4").addClass("bgc2");
			$(".headskin1-5").removeClass("bgc1");
			$(".headskin1-5").addClass("bgc2");
			$(".headskin1-6").removeClass("bgc1");
			$(".headskin1-6").addClass("bgc2");
			$(".headskin1-7").removeClass("bgc1");
			$(".headskin1-7").addClass("bgc2");
			$(".headskin1-8").removeClass("bgc1");
			$(".headskin1-8").addClass("bgc2");
			$(".headskin1-9").removeClass("bgc1");
			$(".headskin1-9").addClass("bgc2");
			$(".headskin1-10").removeClass("bgc1");
			$(".headskin1-10").addClass("bgc2");
    });
    $(".headskin1-6").click(function(){
    	    $(".headskin1-6").removeClass("bgc2");
			$(".headskin1-6").addClass("bgc1");
			$(".headskin1-2").removeClass("bgc1");
			$(".headskin1-2").addClass("bgc2");
			$(".headskin1-3").removeClass("bgc1");
			$(".headskin1-3").addClass("bgc2");
			$(".headskin1-4").removeClass("bgc1");
			$(".headskin1-4").addClass("bgc2");
			$(".headskin1-5").removeClass("bgc1");
			$(".headskin1-5").addClass("bgc2");
			$(".headskin1-1").removeClass("bgc1");
			$(".headskin1-1").addClass("bgc2");
			$(".headskin1-7").removeClass("bgc1");
			$(".headskin1-7").addClass("bgc2");
			$(".headskin1-8").removeClass("bgc1");
			$(".headskin1-8").addClass("bgc2");
			$(".headskin1-9").removeClass("bgc1");
			$(".headskin1-9").addClass("bgc2");
			$(".headskin1-10").removeClass("bgc1");
			$(".headskin1-10").addClass("bgc2");
    });
    $(".headskin1-7").click(function(){
    	    $(".headskin1-7").removeClass("bgc2");
			$(".headskin1-7").addClass("bgc1");
			$(".headskin1-2").removeClass("bgc1");
			$(".headskin1-2").addClass("bgc2");
			$(".headskin1-3").removeClass("bgc1");
			$(".headskin1-3").addClass("bgc2");
			$(".headskin1-4").removeClass("bgc1");
			$(".headskin1-4").addClass("bgc2");
			$(".headskin1-5").removeClass("bgc1");
			$(".headskin1-5").addClass("bgc2");
			$(".headskin1-6").removeClass("bgc1");
			$(".headskin1-6").addClass("bgc2");
			$(".headskin1-1").removeClass("bgc1");
			$(".headskin1-1").addClass("bgc2");
			$(".headskin1-8").removeClass("bgc1");
			$(".headskin1-8").addClass("bgc2");
			$(".headskin1-9").removeClass("bgc1");
			$(".headskin1-9").addClass("bgc2");
			$(".headskin1-10").removeClass("bgc1");
			$(".headskin1-10").addClass("bgc2");
    });
    $(".headskin1-8").click(function(){
    	    $(".headskin1-8").removeClass("bgc2");
			$(".headskin1-8").addClass("bgc1");
			$(".headskin1-2").removeClass("bgc1");
			$(".headskin1-2").addClass("bgc2");
			$(".headskin1-3").removeClass("bgc1");
			$(".headskin1-3").addClass("bgc2");
			$(".headskin1-4").removeClass("bgc1");
			$(".headskin1-4").addClass("bgc2");
			$(".headskin1-5").removeClass("bgc1");
			$(".headskin1-5").addClass("bgc2");
			$(".headskin1-6").removeClass("bgc1");
			$(".headskin1-6").addClass("bgc2");
			$(".headskin1-7").removeClass("bgc1");
			$(".headskin1-7").addClass("bgc2");
			$(".headskin1-1").removeClass("bgc1");
			$(".headskin1-1").addClass("bgc2");
			$(".headskin1-9").removeClass("bgc1");
			$(".headskin1-9").addClass("bgc2");
			$(".headskin1-10").removeClass("bgc1");
			$(".headskin1-10").addClass("bgc2");
    });
    $(".headskin1-9").click(function(){
    	    $(".headskin1-9").removeClass("bgc2");
			$(".headskin1-9").addClass("bgc1");
			$(".headskin1-2").removeClass("bgc1");
			$(".headskin1-2").addClass("bgc2");
			$(".headskin1-3").removeClass("bgc1");
			$(".headskin1-3").addClass("bgc2");
			$(".headskin1-4").removeClass("bgc1");
			$(".headskin1-4").addClass("bgc2");
			$(".headskin1-5").removeClass("bgc1");
			$(".headskin1-5").addClass("bgc2");
			$(".headskin1-6").removeClass("bgc1");
			$(".headskin1-6").addClass("bgc2");
			$(".headskin1-7").removeClass("bgc1");
			$(".headskin1-7").addClass("bgc2");
			$(".headskin1-8").removeClass("bgc1");
			$(".headskin1-8").addClass("bgc2");
			$(".headskin1-1").removeClass("bgc1");
			$(".headskin1-1").addClass("bgc2");
			$(".headskin1-10").removeClass("bgc1");
			$(".headskin1-10").addClass("bgc2");
    });
    $(".headskin1-10").click(function(){
    	    $(".headskin1-10").removeClass("bgc2");
			$(".headskin1-10").addClass("bgc1");
			$(".headskin1-2").removeClass("bgc1");
			$(".headskin1-2").addClass("bgc2");
			$(".headskin1-3").removeClass("bgc1");
			$(".headskin1-3").addClass("bgc2");
			$(".headskin1-4").removeClass("bgc1");
			$(".headskin1-4").addClass("bgc2");
			$(".headskin1-5").removeClass("bgc1");
			$(".headskin1-5").addClass("bgc2");
			$(".headskin1-6").removeClass("bgc1");
			$(".headskin1-6").addClass("bgc2");
			$(".headskin1-7").removeClass("bgc1");
			$(".headskin1-7").addClass("bgc2");
			$(".headskin1-8").removeClass("bgc1");
			$(".headskin1-8").addClass("bgc2");
			$(".headskin1-9").removeClass("bgc1");
			$(".headskin1-9").addClass("bgc2");
			$(".headskin1-1").removeClass("bgc1");
			$(".headskin1-1").addClass("bgc2");
    });
	$(".headskin3headb").click(function(){
		    $(".headskin3").removeClass("vi");
			$(".headskin3").addClass("hi");
			$(".headskin3a").removeClass("hi");
			$(".headskin3a").addClass("vi");
            
    });
    $(".headskin3heada").click(function(){
		    $(".headskin3a").removeClass("vi");
			$(".headskin3a").addClass("hi");
			$(".headskin3").removeClass("hi");
			$(".headskin3").addClass("vi");
            
    });
    $(".headskin21-10").mouseover(function(){
        $(".headsample").css("background","url(image1/skin1-1.jpg) no-repeat");
    });
    $(".headskin21-10").mouseleave(function(){
        $(".headsample").css("background","");
    });
    $(".headskin21-10").click(function(){
        $(".bdbody").css("background","url(image1/bdskin1-1.jpg) no-repeat");
        $(".bdbody").css("background-size","100% 100%");
        $(".weather a").css("color","white");
        $(".head0 div").css("color","white");
        $(".head1 a").css("color","white");
        $(".head1 div").css("color","white");
        $("#bdimg").attr("src","./image/logo2.png");
        $(".headsample").addClass("bdskin1-1");
        $(".headsample").removeClass("bdskin1-2");
        $(".headsample").removeClass("bdskin1-3");
        $(".headsample").removeClass("bdskin1-4");
        $(".headsample").removeClass("bdskin1-5");
        $(".headsample").removeClass("bdskin1-6");
        $(".headsample").removeClass("bdskin1-7");
        $(".headsample").removeClass("bdskin1-8");
        $(".headsample").removeClass("bdskin1-9");
        $(".headsample").removeClass("bdskin1-10");
        $(".headsample").removeClass("bdskin1-11");
        $(".headsample").removeClass("bdskin1-12");
        var strValue =$(".bdbody").css("background");
         if (storage) { 
            storage.setItem(strKey, strValue);   
        } 
    });
    $(".headskin21-20").click(function(){
        $(".bdbody").css("background","url(image1/bdskin1-2.jpg) no-repeat");
        $(".bdbody").css("background-size","100% 100%");
        $(".headsample").css("background","url(image1/skin1-2.jpg) no-repeat");
        $(".headsample").addClass("bdskin1-2");
        $(".headsample").removeClass("bdskin1-1");
        $(".headsample").removeClass("bdskin1-3");
        $(".headsample").removeClass("bdskin1-4");
        $(".headsample").removeClass("bdskin1-5");
        $(".headsample").removeClass("bdskin1-6");
        $(".headsample").removeClass("bdskin1-7");
        $(".headsample").removeClass("bdskin1-8");
        $(".headsample").removeClass("bdskin1-9");
        $(".headsample").removeClass("bdskin1-10");
        $(".headsample").removeClass("bdskin1-11");
        $(".headsample").removeClass("bdskin1-12");
        var strValue =$(".bdbody").css("background");
         if (storage) { 
            storage.setItem(strKey, strValue);   
        } 
    });
    $(".headskin21-30").click(function(){
        $(".bdbody").css("background","url(image1/bdskin1-3.jpg) no-repeat");
        $(".bdbody").css("background-size","100% 100%");
        $(".headsample").addClass("bdskin1-3");
        $(".headsample").removeClass("bdskin1-2");
        $(".headsample").removeClass("bdskin1-1");
        $(".headsample").removeClass("bdskin1-4");
        $(".headsample").removeClass("bdskin1-5");
        $(".headsample").removeClass("bdskin1-6");
        $(".headsample").removeClass("bdskin1-7");
        $(".headsample").removeClass("bdskin1-8");
        $(".headsample").removeClass("bdskin1-9");
        $(".headsample").removeClass("bdskin1-10");
        $(".headsample").removeClass("bdskin1-11");
        $(".headsample").removeClass("bdskin1-12");
        var strValue =$(".bdbody").css("background");
         if (storage) { 
            storage.setItem(strKey, strValue);   
        } 
    });
    $(".headskin21-40").click(function(){
        $(".bdbody").css("background","url(image1/bdskin1-4.jpg) no-repeat");
        $(".bdbody").css("background-size","100% 100%");
        $(".headsample").addClass("bdskin1-4");
        $(".headsample").removeClass("bdskin1-2");
        $(".headsample").removeClass("bdskin1-3");
        $(".headsample").removeClass("bdskin1-1");
        $(".headsample").removeClass("bdskin1-5");
        $(".headsample").removeClass("bdskin1-6");
        $(".headsample").removeClass("bdskin1-7");
        $(".headsample").removeClass("bdskin1-8");
        $(".headsample").removeClass("bdskin1-9");
        $(".headsample").removeClass("bdskin1-10");
        $(".headsample").removeClass("bdskin1-11");
        $(".headsample").removeClass("bdskin1-12");
        var strValue =$(".bdbody").css("background");
         if (storage) { 
            storage.setItem(strKey, strValue);   
        } 
    });
    $(".headskin21-50").click(function(){
        $(".bdbody").css("background","url(image1/bdskin1-5.jpg) no-repeat");
        $(".bdbody").css("background-size","100% 100%");
        $(".headsample").addClass("bdskin1-5");
        $(".headsample").removeClass("bdskin1-2");
        $(".headsample").removeClass("bdskin1-3");
        $(".headsample").removeClass("bdskin1-4");
        $(".headsample").removeClass("bdskin1-1");
        $(".headsample").removeClass("bdskin1-6");
        $(".headsample").removeClass("bdskin1-7");
        $(".headsample").removeClass("bdskin1-8");
        $(".headsample").removeClass("bdskin1-9");
        $(".headsample").removeClass("bdskin1-10");
        $(".headsample").removeClass("bdskin1-11");
        $(".headsample").removeClass("bdskin1-12");
        var strValue =$(".bdbody").css("background");
         if (storage) { 
            storage.setItem(strKey, strValue);   
        } 
    });
    $(".headskin21-60").click(function(){
        $(".bdbody").css("background","url(image1/bdskin1-6.jpg) no-repeat");
        $(".bdbody").css("background-size","100% 100%");
        $(".headsample").addClass("bdskin1-6");
        $(".headsample").removeClass("bdskin1-2");
        $(".headsample").removeClass("bdskin1-3");
        $(".headsample").removeClass("bdskin1-4");
        $(".headsample").removeClass("bdskin1-5");
        $(".headsample").removeClass("bdskin1-1");
        $(".headsample").removeClass("bdskin1-7");
        $(".headsample").removeClass("bdskin1-8");
        $(".headsample").removeClass("bdskin1-9");
        $(".headsample").removeClass("bdskin1-10");
        $(".headsample").removeClass("bdskin1-11");
        $(".headsample").removeClass("bdskin1-12");
        var strValue =$(".bdbody").css("background");
         if (storage) { 
            storage.setItem(strKey, strValue);   
        } 
    });
    $(".headskin21-70").click(function(){
        $(".bdbody").css("background","url(image1/bdskin1-7.jpg) no-repeat");
        $(".bdbody").css("background-size","100% 100%");
        $(".headsample").addClass("bdskin1-7");
        $(".headsample").removeClass("bdskin1-2");
        $(".headsample").removeClass("bdskin1-3");
        $(".headsample").removeClass("bdskin1-4");
        $(".headsample").removeClass("bdskin1-5");
        $(".headsample").removeClass("bdskin1-6");
        $(".headsample").removeClass("bdskin1-1");
        $(".headsample").removeClass("bdskin1-8");
        $(".headsample").removeClass("bdskin1-9");
        $(".headsample").removeClass("bdskin1-10");
        $(".headsample").removeClass("bdskin1-11");
        $(".headsample").removeClass("bdskin1-12");
        var strValue =$(".bdbody").css("background");
         if (storage) { 
            storage.setItem(strKey, strValue);   
        } 
    });
    $(".headskin21-80").click(function(){
        $(".bdbody").css("background","url(image1/bdskin1-8.jpg) no-repeat");
        $(".bdbody").css("background-size","100% 100%");
        $(".headsample").addClass("bdskin1-8");
        $(".headsample").removeClass("bdskin1-2");
        $(".headsample").removeClass("bdskin1-3");
        $(".headsample").removeClass("bdskin1-4");
        $(".headsample").removeClass("bdskin1-5");
        $(".headsample").removeClass("bdskin1-6");
        $(".headsample").removeClass("bdskin1-7");
        $(".headsample").removeClass("bdskin1-1");
        $(".headsample").removeClass("bdskin1-9");
        $(".headsample").removeClass("bdskin1-10");
        $(".headsample").removeClass("bdskin1-11");
        $(".headsample").removeClass("bdskin1-12");
        var strValue =$(".bdbody").css("background");
         if (storage) { 
            storage.setItem(strKey, strValue);   
        } 
    });
    $(".headskin21-90").click(function(){
        $(".bdbody").css("background","url(image1/bdskin1-9.jpg) no-repeat");
        $(".bdbody").css("background-size","100% 100%");
        $(".headsample").addClass("bdskin1-");
        $(".headsample").removeClass("bdskin1-2");
        $(".headsample").removeClass("bdskin1-3");
        $(".headsample").removeClass("bdskin1-4");
        $(".headsample").removeClass("bdskin1-5");
        $(".headsample").removeClass("bdskin1-6");
        $(".headsample").removeClass("bdskin1-7");
        $(".headsample").removeClass("bdskin1-8");
        $(".headsample").removeClass("bdskin1-1");
        $(".headsample").removeClass("bdskin1-10");
        $(".headsample").removeClass("bdskin1-11");
        $(".headsample").removeClass("bdskin1-12");
        var strValue =$(".bdbody").css("background");
         if (storage) { 
            storage.setItem(strKey, strValue);   
        } 
    });
    $(".headskin21-20").mouseover(function(){
          $(".headsample").css("background","url(image1/skin1-2.jpg) no-repeat");
    });
    $(".headskin21-100").click(function(){
        $(".bdbody").css("background","url(image1/bdskin1-10.jpg) no-repeat");
        $(".bdbody").css("background-size","100% 100%");
        $(".headsample").addClass("bdskin1-10");
        $(".headsample").removeClass("bdskin1-2");
        $(".headsample").removeClass("bdskin1-3");
        $(".headsample").removeClass("bdskin1-4");
        $(".headsample").removeClass("bdskin1-5");
        $(".headsample").removeClass("bdskin1-6");
        $(".headsample").removeClass("bdskin1-7");
        $(".headsample").removeClass("bdskin1-8");
        $(".headsample").removeClass("bdskin1-1");
        $(".headsample").removeClass("bdskin1-1");
        $(".headsample").removeClass("bdskin1-11");
        $(".headsample").removeClass("bdskin1-12");
    });
    $(".headskin21-110").click(function(){
        $(".bdbody").css("background","url(image1/bdskin1-11.jpg) no-repeat");
        $(".bdbody").css("background-size","100% 100%");
        $(".headsample").addClass("bdskin1-11");
        $(".headsample").removeClass("bdskin1-2");
        $(".headsample").removeClass("bdskin1-3");
        $(".headsample").removeClass("bdskin1-4");
        $(".headsample").removeClass("bdskin1-5");
        $(".headsample").removeClass("bdskin1-6");
        $(".headsample").removeClass("bdskin1-7");
        $(".headsample").removeClass("bdskin1-8");
        $(".headsample").removeClass("bdskin1-1");
        $(".headsample").removeClass("bdskin1-10");
        $(".headsample").removeClass("bdskin1-1");
        $(".headsample").removeClass("bdskin1-12");
    });
    $(".headskin21-120").click(function(){
        $(".bdbody").css("background","url(image1/bdskin1-12.jpg) no-repeat");
        $(".bdbody").css("background-size","100% 100%");
        $(".headsample").addClass("bdskin1-12");
        $(".headsample").removeClass("bdskin1-2");
        $(".headsample").removeClass("bdskin1-3");
        $(".headsample").removeClass("bdskin1-4");
        $(".headsample").removeClass("bdskin1-5");
        $(".headsample").removeClass("bdskin1-6");
        $(".headsample").removeClass("bdskin1-7");
        $(".headsample").removeClass("bdskin1-8");
        $(".headsample").removeClass("bdskin1-1");
        $(".headsample").removeClass("bdskin1-10");
        $(".headsample").removeClass("bdskin1-11");
        $(".headsample").removeClass("bdskin1-1");
    });
    $(".headskin21-20").mouseleave(function(){
  $(".headsample").css("background","");
});
    $(".headskin21-30").mouseover(function(){
  $(".headsample").css("background","url(image1/skin1-3.jpg) no-repeat");
});
    $(".headskin21-30").mouseleave(function(){
  $(".headsample").css("background","");
});
    $(".headskin21-40").mouseover(function(){
  $(".headsample").css("background","url(image1/skin1-4.jpg) no-repeat");
});
    $(".headskin21-40").mouseleave(function(){
  $(".headsample").css("background","");
});
    $(".headskin21-50").mouseover(function(){
  $(".headsample vi mar1").css("background","url(image1/skin1-5.jpg) no-repeat");
});
    $(".headskin21-50").mouseleave(function(){
  $(".headsample").css("background","");
});
    $(".headskin21-60").mouseover(function(){
  $(".headsample").css("background","url(image1/skin1-6.jpg) no-repeat");
});
    $(".headskin21-60").mouseleave(function(){
  $(".headsample").css("background","");
});
    $(".headskin21-70").mouseover(function(){
  $(".headsample").css("background","url(image1/skin1-7.jpg) no-repeat");
});
    $(".headskin21-70").mouseleave(function(){
  $(".headsample").css("background","");
});
    $(".headskin21-80").mouseover(function(){
  $(".headsample").css("background","url(image1/skin1-8.jpg) no-repeat");
});
    $(".headskin21-80").mouseleave(function(){
  $(".headsample").css("background","");
});
    $(".headskin21-90").mouseover(function(){
  $(".headsample").css("background","url(image1/skin1-9.jpg) no-repeat");
});
    $(".headskin21-90").mouseleave(function(){
  $(".headsample").css("background","");
});
    $(".headskin21-100").mouseover(function(){
  $(".headsample").css("background","url(image1/skin1-10.jpg) no-repeat");
});
    $(".headskin21-100").mouseleave(function(){
  $(".headsample").css("background","");
});
    $(".headskin21-110").mouseover(function(){
  $(".headsample").css("background","url(image1/skin1-11.jpg) no-repeat");
});
    $(".headskin21-110").mouseleave(function(){
  $(".headsample").css("background","");
});
    $(".headskin21-120").mouseover(function(){
  $(".headsample").css("background","url(image1/skin1-12.jpg) no-repeat");
});
    $(".headskin21-120").mouseleave(function(){
  $(".headsample").css("background","");
});
      $(".headskin2a1-10").mouseover(function(){
  $(".headsample").css("background","url(image1/skin1a-1.jpg) no-repeat");
});
    $(".headskin2a1-10").mouseleave(function(){
  $(".headsample").css("background","");
});
    $(".headskin2a1-20").mouseover(function(){
  $(".headsample").css("background","url(image1/skin1a-2.jpg) no-repeat");
});
    $(".headskin2a1-20").mouseleave(function(){
  $(".headsample").css("background","");
});
    $(".headskin2a1-30").mouseover(function(){
  $(".headsample").css("background","url(image1/skin1a-3.jpg) no-repeat");
});
    $(".headskin2a1-30").mouseleave(function(){
  $(".headsample").css("background","");
});
    $(".headskin2a1-40").mouseover(function(){
  $(".headsample").css("background","url(image1/skin1a-4.jpg) no-repeat");
});
    $(".headskin2a1-40").mouseleave(function(){
  $(".headsample").css("background","");
});
    $(".headskin2a1-50").mouseover(function(){
  $(".headsample").css("background","url(image1/skin1a-5.jpg) no-repeat");
});
    $(".headskin2a1-50").mouseleave(function(){
  $(".headsample").css("background","");
});
    $(".headskin2a1-60").mouseover(function(){
  $(".headsample").css("background","url(image1/skin1a-6.jpg) no-repeat");
});
    $(".headskin2a1-60").mouseleave(function(){
  $(".headsample").css("background","");
});
    $(".headskin2a1-70").mouseover(function(){
  $(".headsample").css("background","url(image1/skin1a-7.jpg) no-repeat");
});
    $(".headskin2a1-70").mouseleave(function(){
  $(".headsample").css("background","");
});
    $(".headskin2a1-80").mouseover(function(){
  $(".headsample").css("background","url(image1/skin1a-8.jpg) no-repeat");
});
    $(".headskin2a1-80").mouseleave(function(){
  $(".headsample").css("background","");
});
    $(".headskin2a1-90").mouseover(function(){
  $(".headsample").css("background","url(image1/skin1a-9.jpg) no-repeat");
});
    $(".headskin2a1-90").mouseleave(function(){
  $(".headsample").css("background","");
});
    $(".headskin2a1-100").mouseover(function(){
  $(".headsample").css("background","url(image1/skin1a-10.jpg) no-repeat");
});
    $(".headskin2a1-100").mouseleave(function(){
  $(".headsample").css("background","");
});
    $(".headskin2a1-110").mouseover(function(){
  $(".headsample").css("background","url(image1/skin1a-11.jpg) no-repeat");
});
    $(".headskin2a1-110").mouseleave(function(){
  $(".headsample").css("background","");
});
    $(".headskin2a1-120").mouseover(function(){
  $(".headsample").css("background","url(image1/skin1a-12.jpg) no-repeat");
});
    $(".headskin2a1-120").mouseleave(function(){
  $(".headsample").css("background","");
});
        $(".headskin2b1-10").mouseover(function(){
  $(".headsample").css("background","url(image1/skin1b-1.jpg) no-repeat");
});
    $(".headskin2b1-10").mouseleave(function(){
  $(".headsample").css("background","");
});
    $(".headskin2b1-20").mouseover(function(){
  $(".headsample").css("background","url(image1/skin1b-2.jpg) no-repeat");
});
    $(".headskin2b1-20").mouseleave(function(){
  $(".headsample").css("background","");
});
    $(".headskin2b1-30").mouseover(function(){
  $(".headsample").css("background","url(image1/skin1b-3.jpg) no-repeat");
});
    $(".headskin2b1-30").mouseleave(function(){
  $(".headsample").css("background","");
});
    $(".headskin2b1-40").mouseover(function(){
  $(".headsample").css("background","url(image1/skin1b-4.jpg) no-repeat");
});
    $(".headskin2b1-40").mouseleave(function(){
  $(".headsample").css("background","");
});
    $(".headskin2b1-50").mouseover(function(){
  $(".headsample").css("background","url(image1/skin1b-5.jpg) no-repeat");
});
    $(".headskin2b1-50").mouseleave(function(){
  $(".headsample").css("background","");
});
    $(".headskin2b1-60").mouseover(function(){
  $(".headsample").css("background","url(image1/skin1b-6.jpg) no-repeat");
});
    $(".headskin2b1-60").mouseleave(function(){
  $(".headsample").css("background","");
});
    $(".headskin2b1-70").mouseover(function(){
  $(".headsample").css("background","url(image1/skin1b-7.jpg) no-repeat");
});
    $(".headskin2b1-70").mouseleave(function(){
  $(".headsample").css("background","");
});
    $(".headskin2b1-80").mouseover(function(){
  $(".headsample").css("background","url(image1/skin1b-8.jpg) no-repeat");
});
    $(".headskin2b1-80").mouseleave(function(){
  $(".headsample").css("background","");
});
    $(".headskin2b1-90").mouseover(function(){
  $(".headsample").css("background","url(image1/skin1b-9.jpg) no-repeat");
});
    $(".headskin2b1-90").mouseleave(function(){
  $(".headsample").css("background","");
});
    $(".headskin2b1-100").mouseover(function(){
  $(".headsample").css("background","url(image1/skin1b-10.jpg) no-repeat");
});
    $(".headskin2b1-100").mouseleave(function(){
  $(".headsample").css("background","");
});
    $(".headskin2b1-110").mouseover(function(){
  $(".headsample").css("background","url(image1/skin1b-11.jpg) no-repeat");
});
    $(".headskin2b1-110").mouseleave(function(){
  $(".headsample").css("background","");
});
    $(".headskin2b1-120").mouseover(function(){
  $(".headsample").css("background","url(image1/skin1b-12.jpg) no-repeat");
});
    $(".headskin2b1-120").mouseleave(function(){
  $(".headsample").css("background","");
});
     $(".headskin31-10").mouseover(function(){
  $(".headsample").css("background","url(image2/skin2-1.jpg) no-repeat");
});
    $(".headskin31-10").mouseleave(function(){
  $(".headsample").css("background","");
});
    $(".headskin31-20").mouseover(function(){
  $(".headsample").css("background","url(image2/skin2-2.jpg) no-repeat");
});
    $(".headskin31-20").mouseleave(function(){
  $(".headsample").css("background","");
});
    $(".headskin31-30").mouseover(function(){
  $(".headsample").css("background","url(image2/skin2-3.jpg) no-repeat");
});
    $(".headskin31-30").mouseleave(function(){
  $(".headsample").css("background","");
});
    $(".headskin31-40").mouseover(function(){
  $(".headsample").css("background","url(image2/skin2-4.jpg) no-repeat");
});
    $(".headskin31-40").mouseleave(function(){
  $(".headsample").css("background","");
});
    $(".headskin31-50").mouseover(function(){
  $(".headsample").css("background","url(image2/skin2-5.jpg) no-repeat");
});
    $(".headskin31-50").mouseleave(function(){
  $(".headsample").css("background","");
});
    $(".headskin31-60").mouseover(function(){
  $(".headsample").css("background","url(image2/skin2-6.jpg) no-repeat");
});
    $(".headskin31-60").mouseleave(function(){
  $(".headsample").css("background","");
});
    $(".headskin31-70").mouseover(function(){
  $(".headsample").css("background","url(image2/skin2-7.jpg) no-repeat");
});
    $(".headskin31-70").mouseleave(function(){
  $(".headsample").css("background","");
});
    $(".headskin31-80").mouseover(function(){
  $(".headsample").css("background","url(image2/skin2-8.jpg) no-repeat");
});
    $(".headskin31-80").mouseleave(function(){
  $(".headsample").css("background","");
});
    $(".headskin31-90").mouseover(function(){
  $(".headsample").css("background","url(image2/skin2-9.jpg) no-repeat");
});
    $(".headskin31-90").mouseleave(function(){
  $(".headsample").css("background","");
});
    $(".headskin31-100").mouseover(function(){
  $(".headsample").css("background","url(image2/skin2-10.jpg) no-repeat");
});
    $(".headskin31-100").mouseleave(function(){
  $(".headsample").css("background","");
});
    $(".headskin31-110").mouseover(function(){
  $(".headsample").css("background","url(image2/skin2-11.jpg) no-repeat");
});
    $(".headskin31-110").mouseleave(function(){
  $(".headsample").css("background","");
});
    $(".headskin31-120").mouseover(function(){
  $(".headsample").css("background","url(image2/skin2-12.jpg) no-repeat");
});
    $(".headskin31-120").mouseleave(function(){
  $(".headsample").css("background","");
});
    $(".headskin3a1-10").mouseover(function(){
  $(".headsample").css("background","url(image2/skin2a-1.jpg) no-repeat");
});
    $(".headskin3a1-10").mouseleave(function(){
  $(".headsample").css("background","");
});
    $(".headskin3a1-20").mouseover(function(){
  $(".headsample").css("background","url(image2/skin2a-2.jpg) no-repeat");
});
    $(".headskin3a1-20").mouseleave(function(){
  $(".headsample").css("background","");
});
    $(".headskin3a1-30").mouseover(function(){
  $(".headsample").css("background","url(image2/skin2a-3.jpg) no-repeat");
});
    $(".headskin3a1-30").mouseleave(function(){
  $(".headsample").css("background","");
});
    $(".headskin3a1-40").mouseover(function(){
  $(".headsample").css("background","url(image2/skin2a-4.jpg) no-repeat");
});
    $(".headskin3a1-40").mouseleave(function(){
  $(".headsample").css("background","");
});
    $(".headskin3a1-50").mouseover(function(){
  $(".headsample").css("background","url(image2/skin2a-5.jpg) no-repeat");
});
    $(".headskin3a1-50").mouseleave(function(){
  $(".headsample").css("background","");
});
    $(".headskin3a1-60").mouseover(function(){
  $(".headsample").css("background","url(image2/skin2a-6.jpg) no-repeat");
});
    $(".headskin3a1-60").mouseleave(function(){
  $(".headsample").css("background","");
});
    $(".headskin3a1-70").mouseover(function(){
  $(".headsample").css("background","url(image2/skin2a-7.jpg) no-repeat");
});
    $(".headskin3a1-70").mouseleave(function(){
  $(".headsample").css("background","");
});
    $(".headskin3a1-80").mouseover(function(){
  $(".headsample").css("background","url(image2/skin2a-8.jpg) no-repeat");
});
    $(".headskin3a1-80").mouseleave(function(){
  $(".headsample").css("background","");
});
    $(".headskin3a1-90").mouseover(function(){
  $(".headsample").css("background","url(image2/skin2a-9.jpg) no-repeat");
});
    $(".headskin3a1-90").mouseleave(function(){
  $(".headsample").css("background","");
});
    $(".headskin3a1-100").mouseover(function(){
  $(".headsample").css("background","url(image2/skin2a-10.jpg) no-repeat");
});
    $(".headskin3a1-100").mouseleave(function(){
  $(".headsample").css("background","");
});
    $(".headskin3a1-110").mouseover(function(){
  $(".headsample").css("background","url(image2/skin2a-11.jpg) no-repeat");
});
    $(".headskin3a1-110").mouseleave(function(){
  $(".headsample").css("background","");
});
    $(".headskin3a1-120").mouseover(function(){
  $(".headsample").css("background","url(image2/skin2a-12.jpg) no-repeat");
});
    $(".headskin3a1-120").mouseleave(function(){
  $(".headsample").css("background","");
});

    /* $(".headskin31-10").mouseover(function(){
  $(".headsample").css("background","url(image2/skin2-1.jpg) no-repeat");
});
    $(".headskin31-10").mouseleave(function(){
  $(".headsample").css("background","");
});*/
    $(".headskin1-12").click(function(){
        $(".bdbody").css("background",""); 
        $(".headsample").removeClass("bdskin1-12");
        $(".headsample").removeClass("bdskin1-2");
        $(".headsample").removeClass("bdskin1-3");
        $(".headsample").removeClass("bdskin1-4");
        $(".headsample").removeClass("bdskin1-5");
        $(".headsample").removeClass("bdskin1-6");
        $(".headsample").removeClass("bdskin1-7");
        $(".headsample").removeClass("bdskin1-8");
        $(".headsample").removeClass("bdskin1-1");
        $(".headsample").removeClass("bdskin1-10");
        $(".headsample").removeClass("bdskin1-11");
        $(".headsample").removeClass("bdskin1-1");
        $(".weather a").css("color","black");
        $(".head0 div").css("color","black");
        $(".head1 a").css("color","black");
        $(".head1 div").css("color","black");
        $("#bdimg").attr("src","./image/logo1.png");

    });
    $(".headskin1-13").click(function(){
        
        $(".headskin").addClass("head02");
        $(".headskin").removeClass("head01");
       
    });
})
function bgopacity(){
    	//var m = (document.getElementById("range1").innerHTML)*1;-929
        //var d = m/10;
        //document.body.style.opacity= d;
        var x = document.getElementById("range1").value;    
        document.getElementById("range2").innerHTML = x+"%";
        //var h =parseInt(document.getElementById("myRange").value);
        var m = x*1
        var d = m/100;
        document.getElementById("bdbody").style.opacity= d;
        var m1 = m+879;
        document.getElementById("range2").style.marginLeft=m1+"px";
    }
var end = document.getElementById("headskin1");
end.addEventListener("webkitAnimationEnd", function() {
       document.getElementById("headskin1").style.marginTop="0px";
})