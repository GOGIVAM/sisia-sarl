// Carousel functionality for Services
function initServicesCarousel() {
  const carousel = document.querySelector('.services-carousel');
  if (!carousel) return;

  const slides = carousel.querySelectorAll('.carousel-slide');
  const indicators = carousel.querySelectorAll('.indicator');
  const prevBtn = carousel.querySelector('.prev-btn');
  const nextBtn = carousel.querySelector('.next-btn');

  if (slides.length === 0) return;

  let currentSlide = 0;
  let autoplayInterval;

  function showSlide(index) {
    slides.forEach(slide => {
      slide.classList.remove('active', 'prev');
    });
    indicators.forEach(indicator => {
      indicator.classList.remove('active');
    });
    if (slides[index]) slides[index].classList.add('active');
    if (indicators[index]) indicators[index].classList.add('active');
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      nextSlide();
      resetAutoplay();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      prevSlide();
      resetAutoplay();
    });
  }

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
}

// Testimonials Carousel functionality
function initTestimonialsCarousel() {
  const carousel = document.querySelector('.testimonials-carousel');
  if (!carousel) return;

  const track = carousel.querySelector('.testimonials-track');
  const slides = carousel.querySelectorAll('.testimonial-card');
  const prevBtn = carousel.querySelector('.testimonial-prev');
  const nextBtn = carousel.querySelector('.testimonial-next');
  const indicators = carousel.querySelectorAll('.testimonial-indicator');

  if (slides.length === 0) return;

  let currentIndex = 0;
  let autoplayInterval;
  let slidesPerView = getSlidesPerView();

  function getSlidesPerView() {
    if (window.innerWidth < 768) return 1;
    if (window.innerWidth < 1024) return 2;
    return 3;
  }

  function updateCarousel() {
    const slideWidth = slides[0].offsetWidth + 30; // 30px gap
    const offset = -currentIndex * slideWidth;
    track.style.transform = `translateX(${offset}px)`;

    indicators.forEach((ind, i) => {
      ind.classList.toggle('active', i === currentIndex);
    });
  }

  function nextSlide() {
    const maxIndex = Math.max(0, slides.length - slidesPerView);
    currentIndex = currentIndex >= maxIndex ? 0 : currentIndex + 1;
    updateCarousel();
  }

  function prevSlide() {
    const maxIndex = Math.max(0, slides.length - slidesPerView);
    currentIndex = currentIndex <= 0 ? maxIndex : currentIndex - 1;
    updateCarousel();
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      nextSlide();
      resetAutoplay();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      prevSlide();
      resetAutoplay();
    });
  }

  indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
      currentIndex = index;
      updateCarousel();
      resetAutoplay();
    });
  });

  function startAutoplay() {
    autoplayInterval = setInterval(nextSlide, 4000);
  }

  function resetAutoplay() {
    clearInterval(autoplayInterval);
    startAutoplay();
  }

  window.addEventListener('resize', () => {
    slidesPerView = getSlidesPerView();
    updateCarousel();
  });

  startAutoplay();

  carousel.addEventListener('mouseenter', () => {
    clearInterval(autoplayInterval);
  });

  carousel.addEventListener('mouseleave', () => {
    startAutoplay();
  });

  // Touch support
  let touchStartX = 0;
  let touchEndX = 0;

  carousel.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  });

  carousel.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    if (touchEndX < touchStartX - 50) {
      nextSlide();
      resetAutoplay();
    }
    if (touchEndX > touchStartX + 50) {
      prevSlide();
      resetAutoplay();
    }
  });

  updateCarousel();
}

// Initialize all carousels
document.addEventListener('DOMContentLoaded', function() {
  initServicesCarousel();
  initTestimonialsCarousel();
});
// ========================================
// TESTIMONIALS CAROUSEL WITH AVATARS
// ========================================

document.addEventListener('DOMContentLoaded', function() {
  
  // ===== CAROUSEL FUNCTIONALITY =====
  const track = document.querySelector('.testimonials-track');
  const cards = document.querySelectorAll('.testimonial-card');
  const prevBtn = document.querySelector('.testimonial-prev');
  const nextBtn = document.querySelector('.testimonial-next');
  const indicators = document.querySelectorAll('.testimonial-indicator');
  
  if (!track || cards.length === 0) return;
  
  let currentIndex = 0;
  let cardsPerView = getCardsPerView();
  let maxIndex = Math.ceil(cards.length / cardsPerView) - 1;
  
  function getCardsPerView() {
    if (window.innerWidth <= 767) return 1;
    if (window.innerWidth <= 991) return 2;
    return 3;
  }
  
  function updateCarousel() {
    const cardWidth = cards[0].offsetWidth;
    const gap = 30;
    const offset = currentIndex * (cardWidth + gap) * cardsPerView;
    track.style.transform = `translateX(-${offset}px)`;
    
    // Update indicators
    indicators.forEach((indicator, index) => {
      indicator.classList.toggle('active', index === currentIndex);
    });
  }
  
  function nextSlide() {
    currentIndex = (currentIndex + 1) > maxIndex ? 0 : currentIndex + 1;
    updateCarousel();
  }
  
  function prevSlide() {
    currentIndex = (currentIndex - 1) < 0 ? maxIndex : currentIndex - 1;
    updateCarousel();
  }
  
  // Event listeners
  if (nextBtn) nextBtn.addEventListener('click', nextSlide);
  if (prevBtn) prevBtn.addEventListener('click', prevSlide);
  
  indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
      currentIndex = index;
      updateCarousel();
    });
  });
  
  // Auto-play
  let autoPlayInterval = setInterval(nextSlide, 5000);
  
  // Pause on hover
  track.addEventListener('mouseenter', () => {
    clearInterval(autoPlayInterval);
  });
  
  track.addEventListener('mouseleave', () => {
    autoPlayInterval = setInterval(nextSlide, 5000);
  });
  
  // Responsive recalculation
  window.addEventListener('resize', () => {
    cardsPerView = getCardsPerView();
    maxIndex = Math.ceil(cards.length / cardsPerView) - 1;
    if (currentIndex > maxIndex) currentIndex = maxIndex;
    updateCarousel();
  });
  
  // ===== GENERATE AVATARS WITH INITIALS =====
  function generateAvatar(name) {
    const names = name.trim().split(' ');
    let initials = '';
    
    if (names.length >= 2) {
      initials = names[0].charAt(0) + names[1].charAt(0);
    } else {
      initials = names[0].charAt(0) + (names[0].charAt(1) || '');
    }
    
    return initials.toUpperCase();
  }
  
  // Apply initials to all avatars
  cards.forEach(card => {
    const avatar = card.querySelector('.avatar');
    const nameElement = card.querySelector('.client-info h4');
    
    if (avatar && nameElement) {
      const name = nameElement.textContent;
      const initials = generateAvatar(name);
      
      // Remove image if exists and add initials
      const img = avatar.querySelector('img');
      if (img) img.remove();
      
      if (!avatar.textContent.trim()) {
        avatar.textContent = initials;
      }
    }
  });
  
  // ===== MODAL FOR ADDING REVIEWS =====
  const addReviewBtn = document.querySelector('.add-review-btn');
  const modal = document.querySelector('.review-modal');
  const modalClose = document.querySelector('.modal-close');
  const reviewForm = document.querySelector('.review-form');
  
  if (addReviewBtn && modal) {
    // Open modal
    addReviewBtn.addEventListener('click', () => {
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
    
    // Close modal
    function closeModal() {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }
    
    if (modalClose) {
      modalClose.addEventListener('click', closeModal);
    }
    
    // Close on outside click
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal();
      }
    });
    
    // Close on ESC key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
      }
    });
    
    // Handle form submission
    if (reviewForm) {
      reviewForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = new FormData(reviewForm);
        const data = {
          name: formData.get('name'),
          profession: formData.get('profession'),
          rating: formData.get('rating'),
          comment: formData.get('comment'),
          projectType: formData.get('projectType'),
          date: new Date().toLocaleDateString('fr-FR', { 
            year: 'numeric', 
            month: 'long' 
          })
        };
        
        // Here you would typically send this to your backend
        console.log('Review submitted:', data);
        
        // Show success message
        alert('Merci pour votre témoignage ! Il sera publié après validation.');
        
        // Reset form and close modal
        reviewForm.reset();
        closeModal();
        
        // Optional: Add the review to the carousel immediately (for demo)
        // addReviewToCarousel(data);
      });
    }
  }
  
  // Optional: Function to add review to carousel
  function addReviewToCarousel(data) {
    const newCard = document.createElement('div');
    newCard.className = 'testimonial-card';
    
    const initials = generateAvatar(data.name);
    const stars = '★'.repeat(parseInt(data.rating)) + '☆'.repeat(5 - parseInt(data.rating));
    
    newCard.innerHTML = `
      <div class="card-header">
        <div class="avatar">${initials}</div>
        <div class="client-info">
          <h4>${data.name}</h4>
          <span>${data.profession}</span>
        </div>
      </div>
      <div class="stars">
        ${Array(5).fill(0).map((_, i) => `
          <svg viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" 
                  fill="${i < data.rating ? '#FFC107' : '#ddd'}"/>
          </svg>
        `).join('')}
      </div>
      <p class="testimonial-text">"${data.comment}"</p>
      <div class="card-footer">
        <span class="date">${data.date}</span>
        <span class="project-type">${data.projectType}</span>
      </div>
    `;
    
    track.appendChild(newCard);
    
    // Update carousel
    cards.push(newCard);
    maxIndex = Math.ceil(cards.length / cardsPerView) - 1;
  }
  
});

// ========================================
// NOS METIERS CAROUSEL (SECTION 3)
// ========================================

document.addEventListener('DOMContentLoaded', function() {
  const slides = document.querySelectorAll('.carousel-slide');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  const indicators = document.querySelectorAll('.indicator');
  
  if (!slides || slides.length === 0) return;
  
  let currentSlide = 0;
  const totalSlides = slides.length;
  
  function showSlide(index) {
    // Remove active class from all
    slides.forEach(slide => {
      slide.classList.remove('active', 'prev');
    });
    
    indicators.forEach(indicator => {
      indicator.classList.remove('active');
    });
    
    // Add active class to current
    slides[index].classList.add('active');
    indicators[index].classList.add('active');
    
    // Add prev class to previous slide
    const prevIndex = (index - 1 + totalSlides) % totalSlides;
    slides[prevIndex].classList.add('prev');
  }
  
  function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
  }
  
  function prevSlideFunc() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
  }
  
  // Event listeners
  if (nextBtn) nextBtn.addEventListener('click', nextSlide);
  if (prevBtn) prevBtn.addEventListener('click', prevSlideFunc);
  
  indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
      currentSlide = index;
      showSlide(currentSlide);
    });
  });
  
  // Auto-play
  let autoPlay = setInterval(nextSlide, 6000);
  
  // Pause on hover
  const carousel = document.querySelector('.services-carousel');
  if (carousel) {
    carousel.addEventListener('mouseenter', () => {
      clearInterval(autoPlay);
    });
    
    carousel.addEventListener('mouseleave', () => {
      autoPlay = setInterval(nextSlide, 6000);
    });
  }
  
  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') prevSlideFunc();
    if (e.key === 'ArrowRight') nextSlide();
  });
});