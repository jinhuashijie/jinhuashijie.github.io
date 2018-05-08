$(document).ready(function(){
    $(".mynewshead1").click(function(){
        document.documentElement.scrollTop=document.body.scrollTop=0;
        $(".mynewsbody1").removeClass("non");
        $(".mynewsbody1").addClass("blo");
        $(".mynewsbody2").removeClass("blo");
        $(".mynewsbody2").addClass("non");
        $(".mynewshead1").css("background","#B4B4B4");
        $(".mynewshead2").css("background","#F3F3F3");
    });
    $(".mynewshead2").click(function(){
        document.documentElement.scrollTop=document.body.scrollTop=0;
        $(".mynewsbody2").removeClass("non");
        $(".mynewsbody2").addClass("blo");
        $(".mynewsbody1").removeClass("blo");
        $(".mynewsbody1").addClass("non");
        $(".mynewshead2").css("background","#B4B4B4");
        $(".mynewshead1").css("background","#F3F3F3");
    });
    $(".headskin21-10").mouseleave(function(){
  $(".headsample").css("background","");
});
     $(".headskin3 div div").mouseover(function(){
  $(".headsample").css("background","url(image2/skin2-1.jpg) no-repeat");
});
    $(".headskin31-10").mouseleave(function(){
  $(".headsample").css("background","");
});


})

function f1(){
    var a2 =document.documentElement.scrollTop||document.body.scrollTop;
    var a3 = document.documentElement.clientHeight;
    var a4 = document.documentElement.scrollHeight;
    var a = a4-a3-a2;
    var a5 = a4+100;
    var a6 = a4-1000;

    if (a<10) {
            document.getElementById("mynewsbody1").style.height=a5+"px";
       } else if (a>1000) {
            document.getElementById("mynewsbody1").style.height=a6+"px";
       }
    var a8 = document.getElementById("mynews").offsetTop;
    var a9 = a8-a2;
    if (a9<75) {
        document.getElementById("mynewshead").className = "mynewsheadf2";
        document.getElementById("mynewsbody1right").className = "mynewsbody1rightf2";
        document.getElementById("search").className = "searchf2";
    } else if (a9>75) {
        document.getElementById("mynewshead").className = "mynewshead";
        document.getElementById("mynewsbody1right").className = "mynewsbody1right";
        document.getElementById("search").className = "search";
    }
}/**/
function atop(){
    document.documentElement.scrollTop=document.body.scrollTop=0;
}