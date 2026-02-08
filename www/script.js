// ==== LOADING SCREEN =====
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    
    // Wait for circle animation to complete (2 seconds)
    setTimeout(() => {
        // Add loaded class to body
        document.body.classList.add('loaded');
        
        // Fade out loader
        loader.classList.add('fade-out');
        
        // Remove loader from DOM after fade completes
        setTimeout(() => {
            loader.remove();
        }, 500);
    }, 2100);
});

// ===== SMOOTH SCROLLING =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===== SCROLL EFFECTS =====
let lastScroll = 0;
const nav = document.querySelector('.nav');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Hide/show nav on scroll
    if (currentScroll > lastScroll && currentScroll > 100) {
        nav.style.transform = 'translateY(-100%)';
    } else {
        nav.style.transform = 'translateY(0)';
    }
    
    lastScroll = currentScroll;
});
