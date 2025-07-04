// ========== THEME TOGGLE (SLIDER STYLE) ==========
const toggleTheme = document.getElementById('toggle-dark');

toggleTheme.addEventListener('change', () => {
  document.body.classList.toggle('dark-mode');

  // Optional: save preference in localStorage
  const isDark = document.body.classList.contains('dark-mode');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

// Load saved theme
window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    toggleTheme.checked = true;
  }
});

// ========== NAVBAR HIDE ON SCROLL ==========
let prevScrollPos = window.pageYOffset;
const navbar = document.querySelector('nav');

window.addEventListener('scroll', () => {
  const currentScrollPos = window.pageYOffset;

  if (prevScrollPos > currentScrollPos || currentScrollPos < 100) {
    navbar.style.top = "0";
  } else {
    navbar.style.top = "-100px";
  }

  prevScrollPos = currentScrollPos;
});

// ========== SCROLL TO TOP BUTTON ==========
const scrollBtn = document.getElementById('scrollTopBtn');

window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    scrollBtn.style.display = 'block';
  } else {
    scrollBtn.style.display = 'none';
  }
});

scrollBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
