// Wait for the DOM to be fully loaded before running scripts
window.addEventListener('DOMContentLoaded', () => {
  // ========== MOBILE NAVBAR (HAMBURGER) ==========
  const hamburger = document.getElementById('hamburger-menu');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-menu .nav-links a');

  const toggleMenu = () => {
    const isExpanded = navMenu.classList.toggle('active');
    hamburger.setAttribute('aria-expanded', isExpanded);
    const icon = hamburger.querySelector('i');
    if (isExpanded) {
      icon.classList.remove('fa-bars');
      icon.classList.add('fa-times');
    } else {
      icon.classList.remove('fa-times');
      icon.classList.add('fa-bars');
    }
  };

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', toggleMenu);

    // Close menu when a link is clicked (for single-page nav)
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (navMenu.classList.contains('active')) toggleMenu();
      });
    });
  }

  // ========== THEME TOGGLE ==========
  const toggleThemeBtn = document.getElementById('toggle-theme');

  // Function to apply the theme
  const applyTheme = (theme) => {
    if (theme === 'dark') {
      document.body.classList.add('dark-mode');
      toggleThemeBtn.checked = true;
    } else {
      document.body.classList.remove('dark-mode');
      toggleThemeBtn.checked = false;
    }
  };

  // Load saved theme from localStorage
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    applyTheme(savedTheme);
  } else {
    // Optional: Check for user's system preference if no theme is saved
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    applyTheme(prefersDark ? 'dark' : 'light');
  }

  // Event listener for the theme toggle
  toggleThemeBtn.addEventListener('change', () => {
    const isDark = toggleThemeBtn.checked;
    document.body.classList.toggle('dark-mode', isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });

  // ========== HERO IMAGE SCROLL ANIMATION ==========
  const heroImg = document.querySelector('.hero-container .profile-img');
  // Make sure the element exists before adding an event listener
  if (heroImg) {
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      // The animation will happen over the first 500-800 pixels of scrolling.
      // We use Math.max to set a minimum size/opacity so it doesn't disappear completely.
      const scaleValue = Math.max(0.6, 1 - scrollY / 800);
      const opacityValue = Math.max(0.2, 1 - scrollY / 500);

      // Apply the transform and opacity. The CSS transition will smooth it out.
      heroImg.style.transform = `scale(${scaleValue})`;
      heroImg.style.opacity = opacityValue;
    }, { passive: true }); // Use passive listener for better scroll performance
  }

  // ========== NAVBAR HIDE ON SCROLL ==========
  let prevScrollPos = window.pageYOffset;
  const navbar = document.querySelector('.navbar');

  window.addEventListener('scroll', () => {
    const currentScrollPos = window.pageYOffset;
    if (prevScrollPos > currentScrollPos || currentScrollPos < 10) {
      navbar.style.top = "0";
    } else {
      // Hide completely by using the navbar's actual height
      navbar.style.top = `-${navbar.offsetHeight + 10}px`;
    }
    prevScrollPos = currentScrollPos;
  });

  // ========== SCROLL TO TOP BUTTON ==========
  const scrollBtn = document.getElementById('scrollTopBtn');
  window.addEventListener('scroll', () => {
    scrollBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
  });
  scrollBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  // ========== LIGHTBOX FOR PROJECT IMAGES ==========
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const projectImages = document.querySelectorAll('.project-image-container img');
  const lightboxClose = document.querySelector('.lightbox-close');

  if (lightbox && lightboxImg && projectImages.length > 0 && lightboxClose) {
    projectImages.forEach(img => {
      img.addEventListener('click', () => {
        lightbox.style.display = 'block';
        lightboxImg.src = img.src;
      });
    });

    const closeLightbox = () => {
      lightbox.style.display = 'none';
    };

    // Close on 'x' button click
    lightboxClose.addEventListener('click', closeLightbox);
    // Close on background click
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) closeLightbox();
    });
  }

  // ========== PROJECT FILTERS ==========
  // The scroller has been removed. The filter functionality now works on all screen sizes.
  const filterButtons = document.querySelectorAll('.project-filters button');
  const projects = document.querySelectorAll('.project-card');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Update active button
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Filter projects
      const category = btn.dataset.filter;
      projects.forEach(card => {
        const isInCategory = card.dataset.category === category;
        const isInType = card.dataset.type === category;
        const shouldShow = category === 'all' || isInCategory || isInType;
        card.style.display = shouldShow ? 'block' : 'none';
      });
    });
  });

  // ========== SKILL CARD HOVER EFFECT (NAME <-> PERCENTAGE) ==========
  const skillCards = document.querySelectorAll('.skill-card');

  skillCards.forEach(card => {
    const level = card.dataset.skillLevel;
    const iconWrapper = card.querySelector('.skill-icon-wrapper');
    const nameSpan = iconWrapper.querySelector('span');

    if (level && iconWrapper && nameSpan) {
      // 1. Add a class to the original name span for easier targeting.
      nameSpan.classList.add('skill-name');

      // 2. Create and append the percentage span, which will be shown on hover via CSS.
      const percentageSpan = document.createElement('span');
      percentageSpan.classList.add('skill-percentage');
      percentageSpan.textContent = `${level}%`;
      iconWrapper.appendChild(percentageSpan);
    }
  });

  // ========== TESTIMONIALS SECTION ==========
  const testimonialForm = document.getElementById('testimonial-form');
  const testimonialList = document.getElementById('testimonial-list');

  // Check for admin mode via URL parameter (e.g., ?admin=true)
  const isAdmin = () => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('admin') === 'true';
  };
  const adminMode = isAdmin();

  // Create an IntersectionObserver for fade-in animations on cards
  const cardObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        // Stagger the animation by adding a delay
        entry.target.style.transitionDelay = `${index * 100}ms`;
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  // Function to get initials from a name string
  const getInitials = (name) => {
    const words = name.trim().split(' ').filter(Boolean); // filter out empty strings
    if (words.length === 0) return '??';
    if (words.length > 1) {
      return (words[0][0] + words[words.length - 1][0]).toUpperCase();
    }
    // Only one word
    return words[0].substring(0, 2).toUpperCase();
  };

  // Function to generate a consistent color from a name string
  const generateColor = (name) => {
    const colors = [
      '#ef4444', '#f97316', '#f59e0b', '#eab308', '#84cc16', '#22c55e',
      '#10b981', '#14b8a6', '#06b6d4', '#0ea5e9', '#3b82f6', '#6366f1',
      '#8b5cf6', '#a855f7', '#d946ef', '#ec4899', '#f43f5e'
    ];
    let hash = 0;
    if (name.length === 0) return colors[0];
    for (let i = 0; i < name.length; i++) {
      const char = name.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash; // Convert to 32bit integer
    }
    const index = Math.abs(hash % colors.length);
    return colors[index];
  };

  // Function to generate star icons from a rating number
  const generateStars = (rating) => {
    let starsHTML = '';
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        starsHTML += '<i class="fas fa-star"></i>';
      } else {
        // This part is optional if you only want to show filled stars
        // starsHTML += '<i class="far fa-star"></i>'; // Font Awesome regular star
      }
    }
    return starsHTML;
  };

  // Function to handle testimonial deletion
  const deleteTestimonial = (indexToDelete) => {
    let testimonials = JSON.parse(localStorage.getItem('testimonials')) || [];
    const index = parseInt(indexToDelete, 10);
    if (index >= 0 && index < testimonials.length) {
      testimonials.splice(index, 1); // Remove the item
      localStorage.setItem('testimonials', JSON.stringify(testimonials));
      loadTestimonials(); // Reload the list to reflect the change
    }
  };

  // Add event listener for delete buttons using event delegation
  testimonialList.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete-testimonial-btn')) {
      const index = e.target.dataset.index;
      if (confirm('Are you sure you want to delete this testimonial?')) {
        deleteTestimonial(index);
      }
    }
  });

  // Function to create and display a testimonial card
  const addTestimonial = (testimonial, index) => {
    const { name, rating, comment, role } = testimonial;
    const card = document.createElement('div');
    card.className = 'testimonial-card';

    const ratingHTML = rating ? `
      <div class="testimonial-rating">
        ${generateStars(rating)}
      </div>
    ` : '';

    const roleHTML = role ? `<span class="testimonial-role">${role}</span>` : '';

    const initials = getInitials(name);
    const bgColor = generateColor(name);

    // Only add delete button if in admin mode
    const deleteButtonHTML = adminMode ? `<button class="delete-testimonial-btn" data-index="${index}" title="Delete Testimonial">&times;</button>` : '';

    card.innerHTML = `
      ${deleteButtonHTML}
      ${ratingHTML}
      <p class="testimonial-comment">${comment}</p>
      <div class="testimonial-author">
        <div class="testimonial-initials" style="background-color: ${bgColor};">${initials}</div>
        <div class="testimonial-author-info">
          <span class="testimonial-name">${name}</span>
          ${roleHTML}
        </div>
      </div>
    `;
    testimonialList.appendChild(card);

    // Observe the newly added card for the fade-in animation
    cardObserver.observe(card);
  };

  // Load testimonials from localStorage
  const loadTestimonials = () => {
    const testimonials = JSON.parse(localStorage.getItem('testimonials')) || [];
    // Always clear the list to ensure a fresh render
    testimonialList.innerHTML = '';

    if (testimonials.length > 0) {
      testimonials.forEach((t, index) => addTestimonial(t, index));
    } else {
      // If no testimonials in storage, re-insert the default one.
      testimonialList.innerHTML = `
        <div class="testimonial-card">
          <div class="testimonial-rating">
            <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
          </div>
          <p class="testimonial-comment">Tjay is incredibly dedicated and creative. He always delivers beyond expectations.</p>
          <div class="testimonial-author">
            <div class="testimonial-initials" style="background-color: #3b82f6;">PD</div>
            <div class="testimonial-author-info">
              <span class="testimonial-name">Peer Developer</span>
              <span class="testimonial-role">Lead Developer, Awesome Inc.</span>
            </div>
          </div>
        </div>
      `;
      const defaultCard = testimonialList.querySelector('.testimonial-card');
      if (defaultCard) {
        cardObserver.observe(defaultCard);
      }
    }
  };

  // Handle form submission
  testimonialForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('client-name').value;
    const role = document.getElementById('client-role').value;
    const comment = document.getElementById('client-comment').value;
    const ratingInput = document.querySelector('.star-rating input:checked');
    const rating = ratingInput ? ratingInput.value : null;
    
    const newTestimonial = { name, rating, comment, role };

    // Save to localStorage
    const testimonials = JSON.parse(localStorage.getItem('testimonials')) || [];
    testimonials.push(newTestimonial);
    localStorage.setItem('testimonials', JSON.stringify(testimonials));

    // Reload the whole list to ensure consistency
    loadTestimonials();

    testimonialForm.reset();
  });

  // Initial load
  loadTestimonials();

  // ========== COLLAPSIBLE CASE STUDIES ==========
  const modal = document.getElementById('case-study-modal');
  const closeModalBtn = document.querySelector('.close-modal-btn');
  const learnMoreLinks = document.querySelectorAll('.learn-more-link');

  if (modal && closeModalBtn && learnMoreLinks.length > 0) {
    const modalTitle = document.getElementById('modal-title');
    const modalTags = document.getElementById('modal-tags');
    const modalChallenge = document.getElementById('modal-challenge');
    const modalSolution = document.getElementById('modal-solution');
    const modalImpact = document.getElementById('modal-impact');
    const modalDescription = document.getElementById('modal-description');
    const modalAchievements = document.getElementById('modal-achievements');
    const modalLinks = document.getElementById('modal-links');

    learnMoreLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const card = e.target.closest('.project-card');
        const title = card.querySelector('h3').textContent;
        const tags = card.querySelectorAll('.project-tags span');
        const description = card.querySelector('.project-description-list');
        const achievements = card.querySelector('.achievement-badges');
        const links = card.querySelector('.project-footer-links');
        
        // Populate modal with data from the card's data attributes
        modalTitle.textContent = title;
        modalChallenge.textContent = card.dataset.challenge || 'Details not available.';
        modalSolution.textContent = card.dataset.solution || 'Details not available.';
        modalImpact.textContent = card.dataset.impact || 'Details not available.';

        // Populate tags
        modalTags.innerHTML = '';
        tags.forEach(tag => {
          modalTags.appendChild(tag.cloneNode(true));
        });

        // Populate description, achievements, and links
        if (description) {
          modalDescription.innerHTML = description.innerHTML;
        } else {
          modalDescription.innerHTML = '';
        }
        if (achievements) {
          modalAchievements.innerHTML = achievements.innerHTML;
        } else {
          modalAchievements.innerHTML = '';
        }
        if (links) {
          modalLinks.innerHTML = links.innerHTML;
        } else {
          modalLinks.innerHTML = '';
        }

        modal.style.display = 'block';
      });
    });

    const closeModal = () => {
      modal.style.display = 'none';
    };

    closeModalBtn.addEventListener('click', closeModal);
    window.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal();
      }
    });
  }

  // ========== SCROLL-IN ANIMATIONS FOR SECTIONS ==========
  const animatedElements = document.querySelectorAll('main > section, .project-card');

  const animationObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = entry.target;
        
        // Add staggered delay for project cards
        if (target.classList.contains('project-card')) {
          const cardIndex = Array.from(target.parentElement.children).indexOf(target);
          target.style.transitionDelay = `${cardIndex * 100}ms`;
        }

        target.classList.add('visible');

        if (target.id === 'skills') {
          const skillCircles = document.querySelectorAll('.skill-circle-progress');
          skillCircles.forEach(circle => {
            const skillCard = circle.closest('.skill-card');
            const level = skillCard.dataset.skillLevel;
            const radius = circle.r.baseVal.value;
            const circumference = 2 * Math.PI * radius;
            const offset = circumference - (level / 100) * circumference;
            circle.style.strokeDashoffset = offset;
          });
        }
        observer.unobserve(entry.target);
      }
    });
  }, {
    // Trigger the animation when the section is 15% visible
    threshold: 0.15
  });

  // Observe each section
  animatedElements.forEach(el => {
    animationObserver.observe(el);
  });
});