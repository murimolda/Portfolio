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
    const preloadSummerImages = (arr) => {
        arr.forEach(element => {
            for (let i = 1; i <= portfolioImages.length; i++) {
                const img = new Image();
                img.src = `assets/img/portfolio-photo/${element}/${i}.jpg`;
            }
        });
    }
    preloadSummerImages(seasons);

    /*Change color theme*/
    const htmlColor = document.querySelector('[data-color]');
    const changeThemeButton = document.querySelector('.header-change-theme-button')

    const changeColorTheme = (theme) => {
        const whiteThemeElements = document.querySelectorAll('[data-theme]');
        if (theme === 'white') {
            whiteThemeElements.forEach(element => {
                element.classList.add("white-theme");
                changeThemeButton.classList.remove("dark-theme");
                htmlColor.dataset.color = 'white'
            });
        } else if (theme === 'dark') {
            whiteThemeElements.forEach(element => {
                element.classList.remove("white-theme");
                changeThemeButton.classList.add("dark-theme");
                htmlColor.dataset.color = 'dark'
            });
        }
        themeColor = theme
    }
    changeThemeButton.addEventListener('click', () => {
        if (htmlColor.dataset.color === 'dark') {
            changeColorTheme('white');
        } else if (htmlColor.dataset.color === 'white') {
            changeColorTheme('dark');
        }
    })


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
        language = lang;
    }

    const langButtons = document.querySelector('.header-lang');
    langButtons.addEventListener('click', (event) => {
        {
            if (event.target.classList.contains('lang-button')) {
                getTranslate(event.target.dataset.lang);
                activeLangButton = event.target.dataset.lang;
            }
        }
    });

    changeClassActive("lang-button");

    /*Saving settings to local storage*/
    let language = 'en';
    let themeColor = 'dark';

    const setLocalStorage = () => {
        localStorage.setItem('language', language);
        localStorage.setItem('themeColor', themeColor);
    }
    window.addEventListener('beforeunload', setLocalStorage)

    const getLocalStorage = () => {
        if (localStorage.getItem('language')) {
            const language = localStorage.getItem('language');
            getTranslate(language);
        }
        if (localStorage.getItem('themeColor')) {
            const themeColor = localStorage.getItem('themeColor');
            changeColorTheme(themeColor);
        }
    }
    window.addEventListener('load', getLocalStorage);


    console.log(
        'Portfolio#3 Самооценка: 83\n\
        Смена изображений в секции portfolio +25\n\
            при кликах по кнопкам Winter, Spring, Summer, Autumn \n\
            в секции portfolio отображаются изображения \n\
            из папки с соответствующим названием +20\n\
            кнопка, по которой кликнули, становится активной \n\
            т.е. выделяется стилем. Другие кнопки при этом будут неактивными +5\n\
        Перевод страницы на два языка +25\n\
            при клике по надписи ru англоязычная страница переводится на русский язык +10\n\
            при клике по надписи en русскоязычная страница переводится на английский язык +10\n\
            надписи en или ru, соответствующие текущему языку страницы, \n\
            становятся активными т.е. выделяются стилем +5n\n\
        Переключение светлой и тёмной темы +25\n\
            На страницу добавлен переключатель при клике по которому: \n\
            тёмная тема приложения сменяется светлой +10\n\
            светлая тема приложения сменяется тёмной +10\n\
            после смены светлой и тёмной темы интерактивные элементы \n\
            по-прежнему изменяют внешний вид при наведении и клике \n\
            и при этом остаются видимыми на странице (нет ситуации с белым шрифтом на белом фоне) +5\n\
        Дополнительный функционал: \n\
            выбранный пользователем язык отображения страницы \n\
            и светлая или тёмная тема сохраняются при перезагрузке страницы +3\n\
            Не удалось избавиться от моргания при перезагрзке, поэтому минус 2 балла\n\
        Дополнительный функционал:\n\
            сложные эффекты для кнопок при наведении и/или клике +5\n\
            Для получения максимального балла за пункт требований \n\
            достаточно добавить кнопкам только один эффект'
    );


});