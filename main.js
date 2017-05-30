/**
 * Created by taosang1992 on 2017/5/30.
 */
var page = document.getElementById('page');
var about = document.getElementById('about');
var works = document.getElementById('works');
var navLink = document.querySelectorAll('nav a');
console.log(navLink.length);
console.log(navLink[0].innerHTML);
console.log(navLink[1].innerHTML);
navLink[0].addEventListener('click', function () {
    page.innerHTML = '关于我';
    about.style.display = 'block';
    works.style.display = 'none';
});
navLink[1].addEventListener('click', function () {
    page.innerHTML = '我的作品';
    about.style.display = 'none';
    works.style.display = 'block';
});


