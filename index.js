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
    const navBlock = document.querySelector('.nav');
    const hamburgerIcon = document.querySelector('.hamburger');
    const navLink = document.querySelectorAll(".nav-link");

    const hamburgerClick = () => {
        navBlock.classList.toggle("open");
        hamburgerIcon.classList.toggle("active");
    };

    hamburgerIcon.addEventListener('click', function () {
        hamburgerClick();
    });

    for (let i = 0; i < navLink.length; i++) {
        navLink[i].addEventListener('click', function () {
            hamburgerClick();
        });
    };
    /*Add elems class = "active"*/
    const changeClassActive = (classMarker) => {
        const elemsCollection = document.querySelectorAll(`.${classMarker}`);
        elemsCollection.forEach((elem) => {
            if (elem.classList.contains("active")) {
                elem.classList.remove("active");
            }
            elem.addEventListener('click', (event) => {
                event.target.classList.add("active");
            });
        });
    }

    /*Change image in section Portfolio*/
    const portfolioImages = document.querySelectorAll('.portfolio-image');
    const portfolioButtons = document.querySelector('.portfolio-button-wrap');

    portfolioButtons.addEventListener('click', (event) => {
        {
            changeClassActive('portfolio-button');
            if (event.target.classList.contains('portfolio-button')) {
                let season = event.target.dataset.season;
                portfolioImages.forEach((img, index) => img.src = `assets/img/portfolio-photo/${season}/${index + 1}.jpg`);
            }
        }
    });






    console.log(
        'Portfolio#2 Самооценка: 85\n\
        1. Вёрстка соответствует макету + 48\n\
            - блок < header > +6\n\
            - секция hero + 6\n\
            - секция skills + 6\n\
            - секция portfolio + 6\n\
            - секция video + 6\n\
            - секция price + 6\n\
            - секция contacts + 6\n\
            - блок < footer > +6\n\
            \n\
        2.Ни на одном из разрешений до 320px включительно\n\
        не появляется горизонтальная полоса прокрутки. \n\
        Весь контент страницы при этом сохраняется:\n\
        не обрезается и не удаляется +15\n\
        \n\
            - нет полосы прокрутки при ширине страницы от 1440рх до 768рх +5\n\
            - нет полосы прокрутки при ширине страницы от 768рх до 480рх +5\n\
            - нет полосы прокрутки при ширине страницы от 480рх до 320рх +5\n\
        3. На ширине экрана 768рх и меньше реализовано адаптивное меню +22\n\
            - при ширине страницы 768рх панель навигации скрывается,\n\
            появляется бургер-иконка +2\n\
            - при нажатии на бургер-иконку справа плавно появляется\n\
            адаптивное меню, бургер-иконка изменяется на крестик +4\n\
            - высота адаптивного меню занимает всю высоту экрана.\n\
            При ширине экрана 768-620рх вёрстка меню соответствует макету,\n\
            когда экран становится уже, меню занимает всю ширину экрана +4\n\
            - при нажатии на крестик адаптивное меню плавно скрывается\n\
            уезжая за правую часть экрана, крестик превращается в бургер-иконку +4\n\
            - бургер-иконка, которая при клике превращается в крестик,\n\
            создана при помощи css-анимаций без использования изображений +2\n\
            - ссылки в адаптивном меню работают, обеспечивая плавную прокрутку по якорям +2\n\
            - при клике по ссылке в адаптивном меню адаптивное меню плавно скрывается,\n\
            крестик превращается в бургер-иконку +4'
    );


});