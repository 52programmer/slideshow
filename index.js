//要实现li的显示和隐藏
let lis = document.querySelectorAll('ul li');//获取所有的li 类数组
let index=0;//当前显示图片的下标

//onclick:点击事件
/**
 * 格式
 * 对象.onclick = function(){
 *  代码
 * }
 */

var leftbtn = $('.leftbtn');
leftbtn.onclick = function(){
    //如果点击的为第一张图片，下标为0，点击后为最后一张图片，下标为lis的长度
    if(index == 0){
        index = lis.length;
    }
    index--;
    showLi();
}

var rightbtn = $('.rightbtn');
rightbtn.onclick = function(){
    //如果点击的为最后一张图片，下标为lis的长度，点击后为第一张图片，下标为0
    index++;
    if(index == lis.length){
        index = 0;
    }
    showLi();
}
 function $(selector){
    return document.querySelector(selector);
 }  


let as = document.querySelectorAll('.nav span');//获取所有导航，类数组
function showLi(){
     //让页面所有的li隐藏
     for(let i =0;i<lis.length;i++){
        lis[i].style.display = "none";
        as[i].style.background = 'goldenrod';
    }

    //让当前下标的li显示
    lis[index].style.display = 'block';
    //让当前的导航span背景改成红色
    as[index].style.background = 'red';
}
//要求:点击导航实现图片的切换
for(let a =0;a<as.length;a++){
    as[a].onclick = function(){
        index = a;
        showLi();
    }
}


