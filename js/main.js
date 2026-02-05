/**
 * F1 Hub - Main JavaScript
 * Handles navigation, animations, and UI interactions.
 */

document.addEventListener('DOMContentLoaded', () => {
    initMobileMenu();
    initScrollAnimations();
    initSmoothScroll();
});

/**
 * Mobile Navigation Toggle
 */
function initMobileMenu() {
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.getElementById('main-nav');
    const hamburger = document.querySelector('.hamburger-inner');
    
    if (!menuBtn || !nav) return;

    menuBtn.addEventListener('click', () => {
        const isExpanded = menuBtn.getAttribute('aria-expanded') === 'true';
        
        // Toggle Menu State
        menuBtn.setAttribute('aria-expanded', !isExpanded);
        nav.classList.toggle('active');
        
        // Animate Hamburger (Simple Class Toggle strategy)
        if (!isExpanded) {
            hamburger.style.background = 'transparent';
            hamburger.style.transform = 'rotate(45deg)'; // Custom simple logic for demo
            // In a real production app with more css, we'd toggle a class on the parent
        } else {
             hamburger.style.background = '';
             hamburger.style.transform = '';
        }
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!nav.contains(e.target) && !menuBtn.contains(e.target) && nav.classList.contains('active')) {
            nav.classList.remove('active');
            menuBtn.setAttribute('aria-expanded', 'false');
        }
    });
}

/**
 * Scroll Animations using Intersection Observer
 * Adds 'visible' class to elements when they enter viewport.
 */
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Target elements to animate
    const animatedElements = document.querySelectorAll('.news-card, .section-title, .hero-content');
    animatedElements.forEach(el => observer.observe(el));
}

/**
 * Smooth Scroll for Anchors with Header Offset
 */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
                
                // Close mobile menu if open
                const nav = document.getElementById('main-nav');
                if (nav.classList.contains('active')) {
                    nav.classList.remove('active');
                    document.querySelector('.mobile-menu-btn').setAttribute('aria-expanded', 'false');
                }
            }
        });
    });
}
