var Translate = function(option,callback){
    // 默认给URL参数 ?lang=en
    this.lang_key = (option && option.lang) || 'lang';
    // 回调函数
    this.callback = callback || function(){};
    this.langs = getElems() || []
    
}
// 获取所有节点里面的注释信息
// 返回一个数组
function getElems(){
    var str = document.getElementById("box").innerHTML;
    var str1 = str.replace(/<.*>(.*)<.*>/i,"$1"); 
    var str2 = str.replace(/^.*<!--(.*)-->.*$/,"$1");
    var elems = document.getElementsByTagName('*');
    
    for(var i = 0;i<elems.length;i++){
        var tagName = elems[i].tagName.toString();
        if(tagName !== 'HEAD' 
           && tagName !== 'HTML' 
           && tagName !== 'BODY' 
           && tagName !== 'TITLE' 
           && tagName !== 'META' 
           && tagName !== 'SCRIPT' ){
            console.log(tagName,elems[i].childNodes);
            for(var e =0 ;elems[i].childNodes.length;e++){
                console.log(elems[i].childNodes[e],elems[i].childNodes[e].nodeType);
            }
        }
    }
}



Translate.prototype = {
    setLang:function(name){
        console.log('dd')
    }
}