var data = {
    "学院": "冶金学院",
    "学号": "20182584",
    "姓名": "宋雨陶",
    "手机": "18629942592",
    "qq": "272889270",
    "班级": "1811",
    "专业（如冶1701）":"冶1811"
};
const type ="type";

var change = function (i, data) {
    var fro = document.getElementsByTagName("input")[i];//对应输入框
    if(fro.type==="text") tex(fro, i - 1);//文本框
    if (fro.type==="radio") fro.checked=true;//填写只有一个的单选
};

var tex = function (fro, i) {
    var spa = document.getElementsByTagName("span")[i].innerHTML.replace("\"", "");
    var kk = document.createAttribute("value");//值
    // if(!data[spa]){
    // for (var key in data){
    //     var re=new RegExp(".*"+key);
    //     kk=re.exec(spa);
    // }}
    kk.nodeValue = data[spa];
    fro.attributes.setNamedItem(kk);
}

for (var i = 1; i < 15; i++) {
    change(i, data)
}





