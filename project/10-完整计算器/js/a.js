function num1(){
    var i = document.getElementById("input2").value;
    var j = document.getElementById("input1").value;
    var h = document.getElementById("input3").value;
    if (i=="") {
        document.getElementById("input1").value=j+1;
    } else{
        document.getElementById("input3").value=h+1;
    }
}
function num2(){
    var i = document.getElementById("input2").value;
    var j = document.getElementById("input1").value;
    var h = document.getElementById("input3").value;
    if (i=="") {
        document.getElementById("input1").value=j+2;
    } else{
        document.getElementById("input3").value=h+2;
    }
}
function num3(){
    var i = document.getElementById("input2").value;
    var j = document.getElementById("input1").value;
    var h = document.getElementById("input3").value;
    if (i=="") {
        document.getElementById("input1").value=j+3;
    } else{
        document.getElementById("input3").value=h+3;
    }
}
function num4(){
    var i = document.getElementById("input2").value;
    var j = document.getElementById("input1").value;
    var h = document.getElementById("input3").value;
    if (i=="") {
        document.getElementById("input1").value=j+4;
    } else{
        document.getElementById("input3").value=h+4;
    }
}
function num5(){
    var i = document.getElementById("input2").value;
    var j = document.getElementById("input1").value;
    var h = document.getElementById("input3").value;
    if (i=="") {
        document.getElementById("input1").value=j+5;
    } else{
        document.getElementById("input3").value=h+5;
    }
}
function num6(){
    var i = document.getElementById("input2").value;
    var j = document.getElementById("input1").value;
    var h = document.getElementById("input3").value;
    if (i=="") {
        document.getElementById("input1").value=j+6;
    } else{
        document.getElementById("input3").value=h+6;
    }
}
function num7(){
    var i = document.getElementById("input2").value;
    var j = document.getElementById("input1").value;
    var h = document.getElementById("input3").value;
    if (i=="") {
        document.getElementById("input1").value=j+7;
    } else{
        document.getElementById("input3").value=h+7;
    }
}
function num8(){
    var i = document.getElementById("input2").value;
    var j = document.getElementById("input1").value;
    var h = document.getElementById("input3").value;
    if (i=="") {
        document.getElementById("input1").value=j+8;
    } else{
        document.getElementById("input3").value=h+8;
    }
}
function num9(){
    var i = document.getElementById("input2").value;
    var j = document.getElementById("input1").value;
    var h = document.getElementById("input3").value;
    if (i=="") {
        document.getElementById("input1").value=j+9;
    } else{
        document.getElementById("input3").value=h+9;
    }
}
function num0(){
    var i = document.getElementById("input2").value;
    var j = document.getElementById("input1").value;
    var h = document.getElementById("input3").value;
    if (i=="") {
        document.getElementById("input1").value=j+0;
    } else{
        document.getElementById("input3").value=h+0;
    }
}
function num11(){
    var i = document.getElementById("input2").value;
    var j = document.getElementById("input1").value;
    var h = document.getElementById("input3").value;
    var n = j.indexOf(".");
    var m = h.indexOf(".");
    if (i=="") {
        if(n==-1){
            document.getElementById("input1").value=j+".";
        } else if(n!=-1){
            document.getElementById("input1").value=j;
        }
        
    } else {
        if(m==-1){
            document.getElementById("input3").value=h+".";
        } else if(m!=-1){
            document.getElementById("input3").value=h;
        }
    }
}
function plus(){
    document.getElementById("input2").value="+";
}
function minus(){
    document.getElementById("input2").value="-";
}
function multiply(){
    document.getElementById("input2").value="X";
}
function divided(){
    document.getElementById("input2").value="÷";
}

function equals(){
    //需要用parseFloat来转换获取到的数字，把字符转换成数值；
    // parseInt 智能转换成数字，而且是取整的数字，parseFloat取到完整的值
    var a = parseFloat(document.getElementById("input1").value);
    var b = parseFloat(document.getElementById("input3").value);
    var c = document.getElementById("input2").value;//这里不需要转换成数值了
    if(c=="+"){
        var m = a+b;
        var h = m.toString();
        var n = h.indexOf(".");
        var j = h.substring(0,n);
        var g = j.length;
        var p = h.length;
        var k = p-g;
        if(k>6){
            document.getElementById("result").value=(a+b).toFixed(6); 
        } else{
            document.getElementById("result").value=a+b;
        }
    }
    if(c=="-"){
        document.getElementById("result").value=(a-b).toFixed(6);
    }
    if(c=="X"){
        document.getElementById("result").value=(a*b).toFixed(6);
    }
    if(c=="÷"){
        var i = document.getElementById("input3").value;
        if(i==0){
            document.getElementById("result").value="除数不能为0";
        } else{
        document.getElementById("result").value=(a/b).toFixed(6); 
        }
       
    }
    //num = num.toFixed(2); // 输出结果为 2.45
    
}
function percent(){
    var i = document.getElementById("result").value;
    var h = (parseFloat(document.getElementById("result").value)*100).toFixed(2);
    if(i==""){
          document.getElementById("result").value="0.00%";
    } else{
          document.getElementById("result").value=h+"%";
    }
}
function math(){
    var i =parseFloat(document.getElementById("input1").value);
    var h = Math.sqrt(i);
    document.getElementById("result").value=h;
}
function square(){
    var i =parseFloat(document.getElementById("input1").value);
    var h = i*i;
    document.getElementById("result").value=h;
}
function reset(){
    document.getElementById("input1").value = "";
    document.getElementById("input2").value = "";
    document.getElementById("input3").value = "";
    document.getElementById("result").value = "";
}
function delete1(){
    var i = document.getElementById("input2").value;
    var a = document.getElementById("input1").value;
    var b = document.getElementById("input3").value;
    if(i==""){
        document.getElementById("input1").value=a.substring(0,a.length-1)
    } else{
        document.getElementById("input3").value=b.substring(0,b.length-1)
    }
}