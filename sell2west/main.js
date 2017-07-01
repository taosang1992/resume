var img_boxs = document.querySelectorAll('.img-box');
var btn_prev = document.querySelector('.btn-prev');
var btn_next = document.querySelector('.btn-next');
var img_list = document.querySelector('.img-list');
var len = img_boxs.length;

// 每4个给第4个去掉margin-right
for (var i = 0; i < len; i++) {
    if ((i + 1) % 4 === 0) {
        img_boxs[i].classList.add('last-img-box');
    }
}
// 前一页点击事件
btn_prev.onclick = function () {
    if(img_list.offsetLeft<0){
        img_list.style.left = img_list.offsetLeft+820+'px';
    }
};

// 后一页点击事件
btn_next.onclick = function () {
    if(img_list.offsetLeft > -3280){
        img_list.style.left = img_list.offsetLeft-820+'px';
    }
};