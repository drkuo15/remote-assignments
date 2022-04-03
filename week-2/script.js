const welcome = document.querySelector('.message');
welcome.addEventListener ('click', () => {
    welcome.innerHTML=`<h1> Have a Good Time! </h1>`;
})

const show = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
show.addEventListener ('click', () => {
    menu.classList.add("menu-show");
})
const close = document.querySelector('.hamburger_close');
close.addEventListener ('click', () => {
    menu.classList.remove("menu-show");
})

const hidden = document.querySelector('.action');
const content = document.querySelector('.hidden-content');
hidden.addEventListener ('click', () => {
    if (content.style.display === "none" || content.style.display == false){
        content.style.display = "block";
    } else {
        content.style.display = "none";
    }
})

