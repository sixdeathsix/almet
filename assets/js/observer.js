const healthcenter = document.getElementById('health-center');
const attractions = document.getElementById('attractions');
const tours = document.getElementById('tours');
const happycenter = document.getElementById('happy-center');
const cafe = document.getElementById('cafe');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate__fadeInUp');
            entry.target.classList.add('animate__animated');
            return;
        }
    });
});

observer.observe(healthcenter);
observer.observe(attractions);
observer.observe(tours);
observer.observe(happycenter);
observer.observe(cafe);