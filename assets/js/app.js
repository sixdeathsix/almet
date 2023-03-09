const preloader = document.getElementById('preloader');
const video = document.getElementById('video');
const about = document.getElementById('about');
const promo = document.getElementById('promo');

window.onload = function () {
    window.setTimeout(function () {
        document.body.classList.remove('loader');
        preloader.classList.add('hide');
        video.classList.add('animate__fadeInUp');
        video.classList.add('animate__animated');
        about.classList.add('animate__fadeInUp');
        about.classList.add('animate__animated');
        promo.classList.add('animate__fadeInUp');
        promo.classList.add('animate__animated');
    }, 1000);
}

if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
} else {
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }
}