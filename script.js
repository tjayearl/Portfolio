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
        // Use the 'data-full-src' attribute for the high-res image, fall back to src
        lightboxImg.src = img.dataset.fullSrc || img.src;
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

  // ========== BLOG DISCLAIMER MODAL ==========
  const blogBtn = document.getElementById('visit-blog-btn');
  const blogModal = document.getElementById('blog-disclaimer-modal');
  const proceedBtn = document.getElementById('proceed-blog-btn');
  const cancelBtn = document.getElementById('cancel-blog-btn');
  const blogUrl = "https://blog-seven-phi-zlmj7ushe9.vercel.app/";

  if (blogBtn && blogModal && proceedBtn && cancelBtn) {
    blogBtn.addEventListener('click', (e) => {
      e.preventDefault();
      blogModal.style.display = 'block';
    });

    proceedBtn.addEventListener('click', () => {
      window.open(blogUrl, '_blank');
      blogModal.style.display = 'none';
    });

    cancelBtn.addEventListener('click', () => {
      blogModal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
      if (e.target === blogModal) {
        blogModal.style.display = 'none';
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