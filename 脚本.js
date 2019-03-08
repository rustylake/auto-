
var data={
    "学院":"冶金学院",
    "学号":"20182584",
    "姓名":"宋雨陶",
    "电话":"18629942592",
    "QQ":"272889270",
    "班级":"1811",
};


var change = function (i,data) {
    var fro=document.getElementsByTagName("input")[i];//对应输入框
    var spa=document.getElementsByTagName("span")[i-1].innerHTML.replace("\"","");
    var kk=document.createAttribute("value");//值
    if(data[spa]){
    kk.nodeValue=data[spa];
    fro.attributes.setNamedItem(kk);
    console.log(fro,spa,kk);}
};

for (var i=1;i<10;i++){
    change(i,data)
}



