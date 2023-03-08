const preloader = document.getElementById('preloader');
const about = document.getElementById('about');
const video = document.getElementById('video');

window.onload = function () {
    document.body.classList.add('loader');
    window.setTimeout(function () {
        document.body.classList.remove('loader');
        preloader.classList.add('hide');
        about.classList.add('animate__fadeInUp');
        about.classList.add('animate__animated');
        video.classList.add('animate__fadeInUp');
        video.classList.add('animate__animated');
    }, 1000);
}

if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
} else {
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }
}