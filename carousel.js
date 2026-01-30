// Carousel functionality
document.addEventListener('DOMContentLoaded', function() {
  const slides = document.querySelectorAll('.carousel-slide');
  const indicators = document.querySelectorAll('.indicator');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  let currentSlide = 0;
  let autoplayInterval;

  function showSlide(index) {
    slides.forEach(slide => {
      slide.classList.remove('active', 'prev');
    });
    indicators.forEach(indicator => {
      indicator.classList.remove('active');
    });
    slides[index].classList.add('active');
    indicators[index].classList.add('active');
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  }

  nextBtn.addEventListener('click', () => {
    nextSlide();
    resetAutoplay();
  });

  prevBtn.addEventListener('click', () => {
    prevSlide();
    resetAutoplay();
  });

  indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
      currentSlide = index;
      showSlide(currentSlide);
      resetAutoplay();
    });
  });

  function startAutoplay() {
    autoplayInterval = setInterval(nextSlide, 5000);
  }

  function resetAutoplay() {
    clearInterval(autoplayInterval);
    startAutoplay();
  }

  startAutoplay();

  const carousel = document.querySelector('.services-carousel');
  carousel.addEventListener('mouseenter', () => {
    clearInterval(autoplayInterval);
  });

  carousel.addEventListener('mouseleave', () => {
    startAutoplay();
  });

  let touchStartX = 0;
  let touchEndX = 0;

  carousel.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  });

  carousel.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  });

  function handleSwipe() {
    if (touchEndX < touchStartX - 50) {
      nextSlide();
      resetAutoplay();
    }
    if (touchEndX > touchStartX + 50) {
      prevSlide();
      resetAutoplay();
    }
  }
});