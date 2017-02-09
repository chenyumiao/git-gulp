$(function(){
    //REM
    var a = document.documentElement.clientWidth;
    a > 640 ? a = 640 : 320 > a && (a = 320), document.documentElement.style.fontSize = a / 7.5 + "px";
});