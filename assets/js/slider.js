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