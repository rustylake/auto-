
var data={
"项":"内容"，//可添加
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



