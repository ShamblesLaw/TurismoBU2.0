window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("abajo",window.scrollY>0);
})
window.addEventListener("scroll", function(){
    var header = document.querySelector(".act");
    header.classList.toggle("abajo",window.scrollY>0);
})