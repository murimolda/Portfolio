document.addEventListener("DOMContentLoaded", function () {


    /*Function to find the element that is wider than the body of the page*/
    const docWidth = document.documentElement.offsetWidth;

    [].forEach.call(
        document.querySelectorAll('*'),
        function (el) {
            if (el.offsetWidth > docWidth) {
                console.log(el);
            }
        }
    );

    /*Hamburger nav function*/
    const navBlock = document.getElementById('nav');
    const hamburgerIcon = document.getElementById('hamburger');
    const navLink = document.getElementsByClassName("nav-link");

    const hamburgerClick = () => {
        navBlock.classList.toggle("open");
        hamburgerIcon.classList.toggle("active");
    };

    hamburgerIcon.addEventListener('click', function () {
        hamburgerClick();
    });

    for (var i = 0; i < navLink.length; i++) {
        navLink[i].addEventListener('click', function () {
            hamburgerClick();
        });
    };


    console.log(
        'Самооценка: 110\n\
        1. Вёрстка валидная + 10\n\
        2. Вёрстка семантическая + 20. В коде странице присутствуют следующие элементы:\n\
            - <header>, <main>, <footer> +2\n\
            - шесть элементов < section > (по количеству секций) + 2\n\
            - только один заголовок < h1 > +2\n\
            - пять заголовков < h2 > (количество секций минус одна, у которой заголовок < h1 >) + 2\n\
            - один элемент < nav > (панель навигации) +2\n\
            - два списка ul > li > a(панель навигации, ссылки на соцсети) + 2\n\
            - десять кнопок < button > +2\n\
            - два инпута: <input type="email"> и <input type="tel"> +2\n\
            - один элемент <textarea> +2\n\
            - три атрибута placeholder +2\n\
        3. Вёрстка соответствует макету + 48\n\
            - блок < header > +6\n\
            - секция hero + 6\n\
            - секция skills + 6\n\
            - секция portfolio + 6\n\
            - секция video + 6\n\
            - секция price + 6\n\
            - секция contacts + 6\n\
            - блок < footer > +6\n\
        4. Требования к css + 12\n\
            - для построения сетки используются флексы или гриды + 2\n\
            - при уменьшении масштаба страницы браузера вёрстка размещается по центру,\n\
                а не сдвигается в сторону + 2\n\
            - фоновый цвет тянется на всю ширину страницы + 2\n\
            - иконки добавлены в формате.svg. SVG может быть добавлен любым способом + 2\n\
            - изображения добавлены в формате.jpg + 2\n\
            - есть favicon + 2\n\
        5. Интерактивность, реализуемая через css + 20\n\
            - плавная прокрутка по якорям + 5\n\
            - ссылки в футере ведут на гитхаб автора проекта\n\
                и на страницу курса https://rs.school/js-stage0/ +5\n\
            - интерактивность включает в себя не только изменение внешнего вида курсора,\n\
                например, при помощи свойства cursor: pointer, но и другие визуальные эффекты,\n\
                например, изменение цвета фона или цвета шрифта + 5\n\
            - обязательное требование к интерактивности: \n\
                плавное изменение внешнего вида элемента при наведении\n\
                и клике не влияющее на соседние элементы + 5'
    );

});