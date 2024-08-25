let currentSlide = 0;
    const slides = document.querySelectorAll('.sl-slide');
    const dots = document.querySelectorAll('#nav-dots span');
    const slideInterval = 5000; // 5 seconds

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = (i === index) ? 'block' : 'none';
            dots[i].classList.toggle('nav-dot-current', i === index);
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    // Initial call to display the first slide
    showSlide(currentSlide);

    // Set the interval for auto-slide
    setInterval(nextSlide, slideInterval);