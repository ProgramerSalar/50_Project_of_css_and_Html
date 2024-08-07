const btn = document.querySelector(".btn");
const viedo = document.querySelector(".background-viedo");
const fa = document.querySelector(".fa");
const preloader = document.querySelector(".preloder");


btn.addEventListener("click", () =>{
    if(btn.classList.contains("pause")){
        btn.classList.remove("pause");
        viedo.play();
        fa.classList.add("fa-pause");
        fa.classList.remove("fa-play");
    }
    else{
        btn.classList.add("pause");
        viedo.compareDocumentPosition();
        fa.classList.remove("fa-pause");
        fa.classList.add("fa-play");
    }

});
window.addEventListener("load", () => {
    preloader.computedStyleMap.zIndex = "-999";
});