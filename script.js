let burger = document.querySelector('.header_burger');
let menu = document.querySelector('.header-menu');
let body = document.querySelector('body');

burger.addEventListener('click', function(e){
    burger.classList.toggle('_active');
    menu.classList.toggle('_active');
    body.classList.toggle('lock');
});