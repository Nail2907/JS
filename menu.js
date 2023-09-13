var ocono = document.querySelectorAll('.fa-bars');
var milli = document.querySelector('.msoft');
var abc = document.querySelector('.icon');
var all = document.querySelector('.menu');

ocono.forEach(element => {element.addEventListener("click",function(){
    all.style.width="300px"
    milli.style.display="block"
    abc.style.display="none"
})});

var kres = document.querySelectorAll('.iks');

kres.forEach(item => {item.addEventListener("click",function(){
    all.style.width="80px"
    milli.style.display="none"
    abc.style.display="block"
})})