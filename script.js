let burger = document.querySelector('.header_burger');
let menu = document.querySelector('.header-menu');
let body = document.querySelector('body');

burger.addEventListener('click', function(e){
    burger.classList.toggle('_active');
    menu.classList.toggle('_active');
    body.classList.toggle('lock');
});

console.log("вёрстка валидная +10");
console.log("вёрстка семантическая +20");
console.log("для оформления СV используются css-стили +10");
console.log("контент размещается в блоке, который горизонтально центрируется на странице. +10");
console.log("вёрстка адаптивная: ни на одном из разрешений экрана до 320px включительно не появляется горизонтальная полоса прокрутки, при этом всё содержание страницы сохраняется +10");
console.log("есть адаптивное бургер-меню. Ссылки в пунктах меню ведут на основные разделы CV. При кликах по пунктам меню реализована плавная прокрутка по якорям. При уменьшении ширины экрана меню становится адаптивным. Внешний вид адаптивного меню можно скопировать с макета музея +10");
console.log("на странице СV присутствует изображение - фото или аватарка автора CV, пропорции изображения не искажены, у изображения есть атрибут alt (может быть пустым) +10");
console.log("контакты для связи и перечень навыков оформлены в виде списка ul > li +10");
console.log("CV содержит контакты для связи, краткую информацию о себе, перечень навыков, информацию об образовании и уровне английского +10");
console.log("CV содержит пример вашего кода (например, решение задачи с сайта codewars) с подсветкой кода. Для подсветки кода может использоваться js-библиотека, например, highlight.js +10");
console.log("CV выполнено на английском языке +10");
console.log("выполнены требования к Pull Request: есть ссылка на задание, скриншот страницы СV, ссылка на деплой страницы CV на GitHub Pages, выполнена самооценка (самооценку расписываем по пунктам критериев оценки, указывая балл за каждый пункт) +10");
console.log("дизайн, оформление, качество выполнения CV не ниже чем в примерах CV, приведённых в материалах к заданию (это дополнительные 10 баллов, поэтому некоторый субъективизм в оценке может присутствовать) +10?? вот не знаю");
console.log("Score: 130 -140??");