const sectionsWithCarousel = document.querySelectorAll(".section-with-carousel");
for (const section of sectionsWithCarousel) {
    let slidesPerView = [1.5, 2.5, 3.5];
    if (section.classList.contains("section-with-left-offset")) {
        slidesPerView = [1.5, 1.5, 2.5];
    }
    const swiper = section.querySelector(".swiper");
    new Swiper(swiper, {
        slidesPerView: slidesPerView[0],
        spaceBetween: 15,
        loop: true,
        lazyLoading: true,
        keyboard: {
            enabled: true
        },
        navigation: {
            prevEl: section.querySelector(".carousel-control-left"),
            nextEl: section.querySelector(".carousel-control-right")
        },
        breakpoints: {
            768: {
                slidesPerView: slidesPerView[1]
            },
            1200: {
                slidesPerView: slidesPerView[2]
            }
        }
    });
}

const about = document.getElementById('about');
const promo = document.getElementById('promo');
const healthcenter = document.getElementById('health-center');
const attractions = document.getElementById('attractions');
const tours = document.getElementById('tours');
const happycenter = document.getElementById('happy-center');
const cafe = document.getElementById('cafe');

// Create the observer, same as before:
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate__fadeInUp');
            entry.target.classList.add('animate__animated');
            return;
        }
    });
});

observer.observe(about);
observer.observe(promo);
observer.observe(healthcenter);
observer.observe(attractions);
observer.observe(tours);
observer.observe(happycenter);
observer.observe(cafe);