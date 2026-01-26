document.addEventListener('DOMContentLoaded', () => {
    // 1. Prologue / Intro Logic
    const prologue = document.getElementById('prologue');
    const manuscript = document.getElementById('manuscript');
    const hasSeenIntro = sessionStorage.getItem('introShown');

    const revealPortfolio = () => {
        prologue.classList.add('hidden');
        manuscript.classList.add('visible');
        sessionStorage.setItem('introShown', 'true');
    };

    if (hasSeenIntro) {
        // Skip animation if already seen in session
        prologue.style.display = 'none';
        manuscript.classList.add('visible');
    } else {
        // Play intro
        // Allow click to skip
        prologue.addEventListener('click', revealPortfolio);
        
        // Auto reveal after 2.5 seconds
        setTimeout(revealPortfolio, 2500);
    }

    // 2. Custom Cursor Logic
    const cursor = document.getElementById('custom-cursor');
    
    // Only activate custom cursor logic if device has fine pointer (mouse)
    if (window.matchMedia("(pointer: fine)").matches) {
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = `${e.clientX}px`;
            cursor.style.top = `${e.clientY}px`;
        });

        document.addEventListener('mouseover', (e) => {
            const target = e.target;
            const isLink = target.closest('a') || target.closest('button') || target.closest('.cta-button');
            const isProject = target.closest('.project-card');
            const isGuild = target.closest('.skill-category');

            // Reset classes
            document.body.classList.remove('hover-link', 'hover-project', 'hover-guild');

            if (isLink) {
                document.body.classList.add('hover-link');
            } else if (isProject) {
                document.body.classList.add('hover-project');
            } else if (isGuild) {
                document.body.classList.add('hover-guild');
            }
        });
    }

    // 3. Mobile Project Card Tap Logic
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') return; // Allow links to work
            this.classList.toggle('expanded');
        });
    });

    // 4. Scroll Animations (Fade-in sections)
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    document.querySelectorAll('section').forEach(section => {
        section.classList.add('fade-section');
        observer.observe(section);
    });

    // 5. Hero Text Staggered Animation
    const heroElements = document.querySelectorAll('.hero .container > *');
    heroElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        setTimeout(() => {
            el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, 500 + (index * 150)); // Start after prologue, stagger by 150ms
    });
});