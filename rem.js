var ui = 750;
var font = 40;
// 得到比例值
var ratio = ui/font; //18.75
var oHtml = document.documentElement;
var screenWidth = oHtml.offsetWidth;
// 初始的时候调用一次
getSize();
window.addEventListener('resize', getSize);
function getSize(){
    screenWidth = oHtml.offsetWidth;
    console.log(screenWidth);
    // 限制区间
    if(screenWidth <= 320){
      screenWidth = 320;
    }else if(screenWidth >= ui){
      screenWidth = ui;
    }
    oHtml.style.fontSize = screenWidth/ratio + 'px';
}
