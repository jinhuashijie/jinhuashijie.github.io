function  bdlogin06(){
	document.getElementById("bdlogin-8").style.visibility="visible";
    document.getElementById("bdlogin-6").style.visibility="hidden";
    document.getElementById("bdlogin-7").style.visibility="visible";
}
function  bdlogin07(){
	document.getElementById("bdlogin-6").style.visibility="visible";
    document.getElementById("bdlogin-7").style.visibility="hidden";
    document.getElementById("bdlogin-8").style.visibility="hidden";
}/**/
function loginpage(){
	document.getElementById("bdlogin").style.visibility="visible";
    document.getElementById("bdlogin-6").style.visibility="visible";
	document.getElementById("search").style.pointerEvents="none";
	document.getElementById("bdimg").style.visibility="hidden";
	document.getElementById("bdsearch").style.background="#d8d8d8";
	document.body.style.background="#d8d8d8";
	document.getElementById("head1").style.pointerEvents="none";
    document.getElementById("foooter").style.pointerEvents="none";
}
function loginhide(){
	document.getElementById("bdlogin").style.visibility="hidden";
    document.body.style.background="white";
	document.getElementById("bdimg").style.visibility="visible";
	document.getElementById("search").style.pointerEvents="auto";
	document.getElementById("bdsearch").style.background="white";
	document.getElementById("head1").style.pointerEvents="auto";
	document.getElementById("bdlogin-6").style.visibility="hidden";
	document.getElementById("bdlogin-7").style.visibility="hidden";
	document.getElementById("bdlogin-8").style.visibility="hidden";
}
function $(id){return document.getElementById(id);}
window.onload = function(){

    $("bdlogininput1").onclick = function(b){
        $("bdlogininput1").style.background = "url(image/loginhead2.png) no-repeat white";
        $("bdlogininput2").style.background = "url(image/loginlock.png) no-repeat white";
        $("bdlogininput2").style.backgroundPosition= " 1px 9px";
        $("bdlogininput1").style.backgroundPosition= " 3px 11px";
        b = b||event; stopFunc(b);
    }
   
    document.onclick = function(c){
        $("bdlogininput1").style.background = "url(image/loginhead.png) no-repeat white";
        $("bdlogininput2").style.background = "url(image/loginlock.png) no-repeat white";
        $("bdlogininput2").style.backgroundPosition= " 1px 9px";
        $("bdlogininput1").style.backgroundPosition= " 1px 9px";
    }
    $("bdlogininput2").onclick = function(c){
        $("bdlogininput2").style.background = "url(image/loginlock2.png) no-repeat white";
         $("bdlogininput1").style.background = "url(image/loginhead.png) no-repeat white";
         $("bdlogininput1").style.backgroundPosition= " 1px 9px";
         $("bdlogininput2").style.backgroundPosition= " 3px 10px";
        c = c||event; stopFunc(c);
    }
    $("bdlogininput").onclick = function(c){
        c = a||event; stopFunc(c);
    }
}
function stopFunc(e){   
    e.stopPropagation?e.stopPropagation():e.cancelBubble = true;        
}/**/
