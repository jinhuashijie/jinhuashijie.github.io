//c可以不大写，utf大写小写都可以，带不带杠都行；结尾分号是必须的；
header("content-type:application/json;charset=utf-8");
$c=@$_POST["my"];//每一行都不能少分号

@$_POST  代表的是从前台传过来的整个对象，
@$_POST[""] 里面加上属性，就对应前台的属性，需要用php变量来接收




