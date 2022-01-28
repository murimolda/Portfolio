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
        elemsCollection.forEach((elem, i) => {
            elem.addEventListener("click", function () {
                for (var i = 0; i < elemsCollection.length; i++) {
                    if (elemsCollection[i] != this) {
                        elemsCollection[i].classList.remove("active");
                    }
                }
                this.classList.add("active");
            });
        });
    }

    /*Change image in section Portfolio*/
    const portfolioImages = document.querySelectorAll('.portfolio-image');
    const portfolioButtons = document.querySelector('.portfolio-button-wrap');

    portfolioButtons.addEventListener('click', (event) => {
        {
            if (event.target.classList.contains('portfolio-button')) {
                let season = event.target.dataset.season;
                portfolioImages.forEach((img, index) => img.src = `assets/img/portfolio-photo/${season}/${index + 1}.jpg`);
            }
        }
    });
    changeClassActive("portfolio-button");

    /*Image cache*/
    const seasons = ['winter', 'spring', 'summer', 'autumn'];
    function preloadSummerImages() {
        for (let i = 1; i <= 6; i++) {
            const img = new Image();
            img.src = `assets/img/portfolio-photo/summer/${i}.jpg`;
            console.log('cash summer');
        }
    }
    preloadSummerImages();


    /*Page translation by clicking on the language buttons*/
    const i18Obj = {
        'en': {
            'skills': 'Skills',
            'portfolio': 'Portfolio',
            'video': 'Video',
            'price': 'Price',
            'contacts': 'Contacts',
            'hero-title': 'Alexa Rise',
            'hero-text': 'Save sincere emotions, romantic feelings and happy moments of life together with professional photographer Alexa Rise',
            'hire': 'Hire me',
            'skill-title-1': 'Digital photography',
            'skill-text-1': 'High-quality photos in the studio and on the nature',
            'skill-title-2': 'Video shooting',
            'skill-text-2': 'Capture your moments so that they always stay with you',
            'skill-title-3': 'Rotouch',
            'skill-text-3': 'I strive to make photography surpass reality',
            'skill-title-4': 'Audio',
            'skill-text-4': 'Professional sounds recording for video, advertising, portfolio',
            'winter': 'Winter',
            'spring': 'Spring',
            'summer': 'Summer',
            'autumn': 'Autumn',
            'price-description-1-span-1': 'One location',
            'price-description-1-span-2': '120 photos in color',
            'price-description-1-span-3': '12 photos in retouch',
            'price-description-1-span-4': 'Readiness 2-3 weeks',
            'price-description-1-span-5': 'Make up, visage',
            'price-description-2-span-1': 'One or two locations',
            'price-description-2-span-2': '200 photos in color',
            'price-description-2-span-3': '20 photos in retouch',
            'price-description-2-span-4': 'Readiness 1-2 weeks',
            'price-description-2-span-5': 'Make up, visage',
            'price-description-3-span-1': 'Three locations or more',
            'price-description-3-span-2': '300 photos in color',
            'price-description-3-span-3': '50 photos in retouch',
            'price-description-3-span-4': 'Readiness 1 week',
            'price-description-3-span-5': 'Make up, visage, hairstyle',
            'order': 'Order shooting',
            'contact-me': 'Contact me',
            'send-message': 'Send message',
            'E-mail': 'E-mail',
            'Phone': 'Phone',
            'Message': 'Message',
        },
        'ru': {
            'skills': 'Навыки',
            'portfolio': 'Портфолио',
            'video': 'Видео',
            'price': 'Цены',
            'contacts': 'Контакты',
            'hero-title': 'Алекса Райс',
            'hero-text': 'Сохраните искренние эмоции, романтические переживания и счастливые моменты жизни вместе с профессиональным фотографом',
            'hire': 'Пригласить',
            'skill-title-1': 'Фотография',
            'skill-text-1': 'Высококачественные фото в студии и на природе',
            'skill-title-2': 'Видеосъемка',
            'skill-text-2': 'Запечатлите лучшие моменты, чтобы они всегда оставались с вами',
            'skill-title-3': 'Ретушь',
            'skill-text-3': 'Я стремлюсь к тому, чтобы фотография превосходила реальность',
            'skill-title-4': 'Звук',
            'skill-text-4': 'Профессиональная запись звука для видео, рекламы, портфолио',
            'winter': 'Зима',
            'spring': 'Весна',
            'summer': 'Лето',
            'autumn': 'Осень',
            'price-description-1-span-1': 'Одна локация',
            'price-description-1-span-2': '120 цветных фото',
            'price-description-1-span-3': '12 отретушированных фото',
            'price-description-1-span-4': 'Готовность через 2-3 недели',
            'price-description-1-span-5': 'Макияж, визаж',
            'price-description-2-span-1': 'Одна-две локации',
            'price-description-2-span-2': '200 цветных фото',
            'price-description-2-span-3': '20 отретушированных фото',
            'price-description-2-span-4': 'Готовность через 1-2 недели',
            'price-description-2-span-5': 'Макияж, визаж',
            'price-description-3-span-1': 'Три локации и больше',
            'price-description-3-span-2': '300 цветных фото',
            'price-description-3-span-3': '50 отретушированных фото',
            'price-description-3-span-4': 'Готовность через 1 неделю',
            'price-description-3-span-5': 'Макияж, визаж, прическа',
            'order': 'Заказать съемку',
            'contact-me': 'Свяжитесь со мной',
            'send-message': 'Отправить',
            'E-mail': 'Электронный ящик',
            'Phone': 'Номер телефона',
            'Message': 'Сообщение',
        }
    }

    const getTranslate = (lang) => {
        const dataTranslate = document.querySelectorAll('[data-i18]');
        dataTranslate.forEach((element) => {
            let a = element.dataset.i18;
            if (element.placeholder) {
                element.placeholder = element.innerHTML = i18Obj[`${lang}`][`${a}`];
                element.textContent = '';
            } else {
                element.innerHTML = i18Obj[`${lang}`][`${a}`];
            }
        });
    }

    const langButtons = document.querySelector('.header-lang');
    langButtons.addEventListener('click', (event) => {
        {
            if (event.target.classList.contains('lang-button')) {
                getTranslate(event.target.dataset.lang);
            }
        }
    });

    changeClassActive("lang-button");


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