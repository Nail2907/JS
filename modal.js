var click = document.querySelectorAll('.child');

click.forEach(cont => {cont.addEventListener("click",function(){
    var abc=cont.children[1].src
    thread.src=abc
    modal.style.display="block"
    portfolio.style.display="none"
})})
document.querySelectorAll('.iks').forEach(item=>{item.addEventListener('click',function(){
    modal.style.display="none"
    portfolio.style.display="block"
})})