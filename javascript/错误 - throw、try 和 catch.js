var txt="";
try {
    console("Welcome guest!");
}
catch(err) {
    txt="本页有一个错误。\n\n";
    txt+="错误描述：" + err.message + "\n\n";
    txt+="点击确定继续。\n\n";
    console.log(txt);
}
finally {
    throw '不论之前的 try 和 catch 中是否产生异常都会执行该代码块。'
}