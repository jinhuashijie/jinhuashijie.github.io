$(".page-number").click(function(){

    var t=$(this).parent().attr("id");//获取到被点击元素的父元素的id
    var m = $("#"+t+" .page-number").index(this);//获取到被点击元素在父元素内的下标
    //var j = $(".face").eq(t);
    //var e = $($(this).parent()).index(this);直接获取被点元素在父元素下的位置是不行的
    console.log(t);
    //console.log(m);
    //console.log(e);
    var y = $(".face").eq(m);//要先获取到这个下标在另外的相同元素里面的那个div
    $(".face").eq(m).addClass("pagebl");
    $(".face").eq(m).removeClass("pageno");
    $(".face").not(y).addClass("pageno");
    $(".face").not(y).removeClass("pagebl");
});
$(".pgNext").click(function(){
        var r = $(this).parent().attr("id");//获取到被点击元素在父元素的id
        var pgNext = $("#"+r+" .pgNext").index(this); 
        if (pgNext=="0") {
            $(".face").eq(0).addClass("pagebl");
            $(".face").eq(0).removeClass("pageno");
            var y = $(".face").eq(0);
            $(".face").not(y).addClass("pageno");//not里面装数字就会出现问题
            $(".face").not(y).removeClass("pagebl");/**/
        }    else if (pgNext=="1") {
            $(".pagebl input[type='text']").each(function(){
              var a1=$(this).val();
              var y = $(".face").eq(a1-2);
              console.log(a1);
                $(".face").eq(a1-2).addClass("pagebl");
                $(".face").eq(a1-2).removeClass("pageno");
                $(".face").not(y).addClass("pageno");//not里面装数字就会出现问题
                $(".face").not(y).removeClass("pagebl");/**/
            });
        }   else if (pgNext=="2") {
            $(".pagebl input[type='text']").each(function(){
              var a1=$(this).val();
              var y = $(".face").eq(a1);
              console.log(a1);
                $(".face").eq(a1).addClass("pagebl");
                $(".face").eq(a1).removeClass("pageno");
                $(".face").not(y).addClass("pageno");//not里面装数字就会出现问题
                $(".face").not(y).removeClass("pagebl");/**/
            });
            
        }else if (pgNext=="3") {
            $(".face").eq(2).addClass("pagebl");
            $(".face").eq(2).removeClass("pageno");
            var y = $(".face").eq(2);
            $(".face").not(y).addClass("pageno");//not里面装数字就会出现问题
            $(".face").not(y).removeClass("pagebl");/**/
        }
        
    })
