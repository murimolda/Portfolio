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
                htmlColor.dataset.color = 'white'
            });
        } else if (theme === 'dark') {
            whiteThemeElements.forEach(element => {
                element.classList.remove("white-theme");
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

    const activeLangButton = document.querySelectorAll('[data-lang]');

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
        activeLangButton.forEach(element => {
            if (element.dataset.lang === lang && !element.classList.contains("active")) {
                element.classList.add("active")
            } else if (element.dataset.lang !== lang && element.classList.contains("active")) {
                element.classList.remove("active")
            }
        });
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

    /*Video player function*/

    const videoPlayer = document.querySelector('.video-player-video');
    const videoPlayerCover = document.querySelector('.video-player-cover');
    const progressBar = document.querySelector('.video-progressbar');
    const currTime = document.querySelector('.video-controls-time');
    const durationTime = document.querySelector('.video-controls-duration');
    const videoPlayerButton = document.querySelector('.video-player-button');
    const playButton = document.querySelector('.video-controls-play');
    const volumeButton = document.querySelector('.video-controls-volume');
    const volumeScale = document.querySelector('.volume-progressbar');
    const titleColor = '#BDAE82';
    const videoCotrolsColor = '#C8C8C8';


    const videoActive = () => {
        if (videoPlayer.paused) {
            videoPlayer.play();
            playButton.classList.add("video-controls-pause");
            videoPlayerButton.classList.add("hidden");
            videoPlayerCover.classList.add("hidden");
        } else {
            videoPlayer.pause();
            playButton.classList.remove("video-controls-pause");
            videoPlayerButton.classList.remove("hidden");
            videoPlayerButton.classList.add("open-video");
        }
        if (durationTime.innerHTML == '00:00') {
            durationTime.innerHTML = videoTime(videoPlayer.duration);
        }
    }

    playButton.addEventListener('click', videoActive);
    videoPlayerButton.addEventListener('click', videoActive);
    videoPlayer.addEventListener('click', videoActive);

    const videoTime = (time) => {
        time = Math.floor(time);
        let minutes = Math.floor(time / 60);
        let seconds = Math.floor(time - minutes * 60);
        let minutesValue = minutes;
        var secondsValue = seconds;
        if (minutes < 10) {
            minutesValue = `0${minutes}`;
        }
        if (seconds < 10) {
            secondsValue = `0${seconds}`;
        }
        return `${minutesValue}:${secondsValue}`;
    }

    const videoProgress = () => {
        let progress = (Math.floor(videoPlayer.currentTime) / (Math.floor(videoPlayer.duration) / 100));
        progressBar.value = progress;
        currTime.innerHTML = videoTime(videoPlayer.currentTime);
        progressBar.style.background = `linear-gradient(to right, ${titleColor} 0%, ${titleColor} ${progress}%, ${videoCotrolsColor} ${progress}%, ${videoCotrolsColor} 100%)`;
        if (videoPlayer.currentTime === videoPlayer.duration) {
            playButton.classList.remove("video-controls-pause");
        }
    }

    videoPlayer.addEventListener('timeupdate', videoProgress);

    progressBar.addEventListener("input", function () {
        let newTime = videoPlayer.duration * (progressBar.value / 100);
        videoPlayer.currentTime = newTime;
    })


    const videoChangeVolume = () => {
        let volume = volumeScale.value / 100;
        videoPlayer.volume = volume;
        if (videoPlayer.volume == 0) {
            volumeButton.classList.add("video-controls-mute");
        } else {
            volumeButton.classList.remove("video-controls-mute");
        }
    }
    const videoMute = () => {
        if (videoPlayer.volume == 0) {
            videoPlayer.volume = volumeScale.value / 100;
            volumeButton.classList.remove("video-controls-mute");
        } else {
            videoPlayer.volume = 0;
            volumeButton.classList.add("video-controls-mute");
        }
    }
    volumeButton.addEventListener('click', videoMute);
    volumeScale.addEventListener('change', videoChangeVolume);

    volumeScale.addEventListener('input', function () {
        const value = this.value;
        console.log(value)
        this.style.background = `linear-gradient(to right, ${titleColor} 0%, ${titleColor} ${value}%, ${videoCotrolsColor} ${value}%, ${videoCotrolsColor} 100%)`
    })

    const videoWrap = document.querySelector('.video-wrap');
    const videoFullscreenButton = document.querySelector('.video-controls-fullscreen');

    const openFullscreen = () => {
        if (document.fullscreenElement === null) {
            videoWrap.requestFullscreen();
        } else {
            document.exitFullscreen();
        }
    }

    videoFullscreenButton.addEventListener('click', openFullscreen);

    document.addEventListener("fullscreenchange", () => {
        videoFullscreenButton.classList.toggle("active");
    });

});

