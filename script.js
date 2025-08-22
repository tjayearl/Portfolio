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

  // ========== TYPING EFFECT FOR HERO TEXT ==========
  /**
   * Simulates a typewriter effect on a given HTML element.
   * @param {HTMLElement} element The DOM element to type into.
   * @param {string} text The full text string to type.
   * @param {number} speed The delay in milliseconds between each character.
   * @param {function} [callback] An optional function to call after typing is complete.
   */
  function typeWriter(element, text, speed, callback) {
    let i = 0;
    element.textContent = ''; // Clear content initially to prevent flash of un-typed text
    function type() {
      if (i < text.length) {
        element.textContent += text.charAt(i);
        i++;
        setTimeout(type, speed);
      } else if (callback) {
        callback();
      }
    }
    type(); // Start the typing process
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

  // Apply typing effect to hero section text
  const heroTitle = document.querySelector('.hero-text h2');
  const heroSubtitle = document.querySelector('.hero-text p');

  if (heroTitle && heroSubtitle) {
    const originalTitle = heroTitle.textContent;
    const originalSubtitle = heroSubtitle.textContent;

    // Start typing the title, then the subtitle after the title is done
    typeWriter(heroTitle, originalTitle, 70, () => { // 70ms per character for the title
      typeWriter(heroSubtitle, originalSubtitle, 50); // 50ms per character for the subtitle
    });
  }

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

  // ========== PROJECT FILTERS ==========
  const filterButtons = document.querySelectorAll('.project-filters button');
  const projects = document.querySelectorAll('.project-card');
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const category = btn.dataset.filter;
      projects.forEach(card => {
        card.style.display = (category === 'all' || card.dataset.category === category) ? 'block' : 'none';
      });
    });
  });

  // ========== TESTIMONIALS SECTION ==========
  const testimonialForm = document.getElementById('testimonial-form');
  const testimonialList = document.getElementById('testimonial-list');

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

  // Function to create and display a testimonial card
  const addTestimonial = (name, rating, comment) => {
    const card = document.createElement('div');
    card.className = 'testimonial-card';
    
    const ratingHTML = rating ? `
      <div class="testimonial-rating">
        ${generateStars(rating)}
      </div>
    ` : '';
    
    card.innerHTML = `
      <div class="testimonial-header">
        <span class="testimonial-name">${name}</span>
        ${ratingHTML}
      </div>
      <p class="testimonial-comment">"${comment}"</p>
    `;
    testimonialList.appendChild(card);
  };

  // Load testimonials from localStorage
  const loadTestimonials = () => {
    const testimonials = JSON.parse(localStorage.getItem('testimonials')) || [];
    // Clear default testimonial if there are saved ones
    if (testimonials.length > 0) {
      testimonialList.innerHTML = '';
    }
    testimonials.forEach(t => addTestimonial(t.name, t.rating, t.comment));
  };

  // Handle form submission
  testimonialForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('client-name').value;
    const comment = document.getElementById('client-comment').value;
    const ratingInput = document.querySelector('.star-rating input:checked');
    const rating = ratingInput ? ratingInput.value : null;
    
    addTestimonial(name, rating, comment);

    // Save to localStorage
    const testimonials = JSON.parse(localStorage.getItem('testimonials')) || [];
    testimonials.push({ name, rating, comment });
    localStorage.setItem('testimonials', JSON.stringify(testimonials));

    testimonialForm.reset();
  });

  // Initial load
  loadTestimonials();

  // ========== CONTACT FORM (FORMSPREE) ==========
  const contactForm = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');

  async function handleSubmit(event) {
    event.preventDefault();
    const confirmed = window.confirm("Are you sure you want to send this message?");
    if (!confirmed) {
      // If the user clicks "Cancel", we stop the function from running.
      return;
    }

    const data = new FormData(event.target);
    try {
      const response = await fetch(event.target.action, {
        method: contactForm.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      });
      if (response.ok) {
        formStatus.textContent = "Thanks for your submission!";
        formStatus.style.color = 'green';
        contactForm.reset();
      } else {
        formStatus.textContent = "Oops! There was a problem submitting your form.";
        formStatus.style.color = 'red';
      }
    } catch (error) {
      formStatus.textContent = "Oops! There was a problem submitting your form.";
      formStatus.style.color = 'red';
    }
  }
  contactForm.addEventListener("submit", handleSubmit);

  // ========== SCROLL-IN ANIMATIONS FOR SECTIONS ==========
  const sectionsToAnimate = document.querySelectorAll('main > section');

  const sectionObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      // When the section is in the viewport
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');

        // If the visible section is the skills section, animate the circles
        if (entry.target.id === 'skills') {
          const skillCircles = document.querySelectorAll('.skill-circle-progress');
          skillCircles.forEach(circle => {
            const skillCard = circle.closest('.skill-card');
            const level = skillCard.dataset.skillLevel;
            const radius = circle.r.baseVal.value;
            const circumference = 2 * Math.PI * radius;
            
            // Calculate the offset based on skill level
            const offset = circumference - (level / 100) * circumference;
            
            // Set the offset to trigger the CSS transition
            circle.style.strokeDashoffset = offset;
          });
        }

        // Stop observing the element so the animation doesn't re-run
        observer.unobserve(entry.target);
      }
    });
  }, {
    // Trigger the animation when the section is 15% visible
    threshold: 0.15
  });

  // Observe each section
  sectionsToAnimate.forEach(section => {
    sectionObserver.observe(section);
  });
});