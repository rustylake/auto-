
var data={
"项":"内容"，//可添加
//例如：
    "学院": "冶金学院",
    "学号": "77414114",
    "姓名": "赵继",
    "手机": "1864621028",
    "qq": "345555880",
    "班级": "1701",
    "专业":"冶金"
};

var change = function (i, data) {
    var fro = document.getElementsByTagName("input")[i];//对应输入框
    if (fro.type === "text") tex(fro, i - 1);//文本框
    if (fro.type==="radio") fro.checked=true;//填写只有一个的单选
};

var tex = function (fro, i) {
    var spa = document.getElementsByTagName("span")[i].innerHTML.replace("\"", "");
    var kk = document.createAttribute("value");//值
    kk.nodeValue = data[spa];
    fro.attributes.setNamedItem(kk);
}

for (var i = 1; i < 15; i++) {
    change(i, data)}



