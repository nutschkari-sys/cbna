// CBNA Landing Page - Animations and Effects
// Handles all animations, transitions, and visual effects

// Animation Configuration
const ANIMATION_CONFIG = {
    duration: 600,
    easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
    stagger: 100
};

// Initialize Animations
document.addEventListener('DOMContentLoaded', function() {
    initializeAnimations();
    setupParallaxEffects();
    setupTypingEffects();
    setupCounterAnimations();
    setupScrollTriggers();
    setupHoverEffects();
});

// Initialize All Animations
function initializeAnimations() {
    // Add animation classes to elements
    addAnimationClasses();
    
    // Setup intersection observer for scroll animations
    setupScrollAnimations();
    
    // Initialize loading animations
    setupLoadingAnimations();
}

// Add Animation Classes
function addAnimationClasses() {
    // Hero section animations
    const heroElements = document.querySelectorAll('.hero-title, .hero-subtitle, .hero-actions, .hero-visual');
    heroElements.forEach((element, index) => {
        element.classList.add('animate-on-load');
        element.style.animationDelay = `${index * 200}ms`;
    });
    
    // Feature cards animations
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach((card, index) => {
        card.classList.add('animate-on-scroll');
        card.setAttribute('data-animation-delay', index * 100);
    });
    
    // Pricing cards animations
    const pricingCards = document.querySelectorAll('.pricing-card');
    pricingCards.forEach((card, index) => {
        card.classList.add('animate-on-scroll');
        card.setAttribute('data-animation-delay', index * 150);
    });
}

// Setup Scroll Animations
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                const delay = element.getAttribute('data-animation-delay') || 0;
                
                setTimeout(() => {
                    element.classList.add('animate-in');
                }, delay);
                
                observer.unobserve(element);
            }
        });
    }, observerOptions);
    
    // Observe elements with animation classes
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(element => {
        observer.observe(element);
    });
}

// Setup Loading Animations
function setupLoadingAnimations() {
    // Add loading animation to page
    document.body.classList.add('page-loading');
    
    // Remove loading class after page loads
    window.addEventListener('load', function() {
        setTimeout(() => {
            document.body.classList.remove('page-loading');
            document.body.classList.add('page-loaded');
        }, 500);
    });
}

// Parallax Effects
function setupParallaxEffects() {
    const parallaxElements = document.querySelectorAll('.parallax');
    
    window.addEventListener('scroll', throttle(function() {
        const scrolled = window.pageYOffset;
        
        parallaxElements.forEach(element => {
            const speed = element.getAttribute('data-speed') || 0.5;
            const yPos = -(scrolled * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
    }, 16));
}

// Typing Effects
function setupTypingEffects() {
    const typingElements = document.querySelectorAll('.typing-effect');
    
    typingElements.forEach(element => {
        const text = element.textContent;
        element.textContent = '';
        element.classList.add('typing-cursor');
        
        let index = 0;
        const typeInterval = setInterval(() => {
            if (index < text.length) {
                element.textContent += text.charAt(index);
                index++;
            } else {
                clearInterval(typeInterval);
                element.classList.remove('typing-cursor');
            }
        }, 100);
    });
}

// Counter Animations
function setupCounterAnimations() {
    const counters = document.querySelectorAll('.counter');
    
    const counterObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.getAttribute('data-target'));
                const duration = parseInt(counter.getAttribute('data-duration')) || 2000;
                
                animateCounter(counter, 0, target, duration);
                counterObserver.unobserve(counter);
            }
        });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => {
        counterObserver.observe(counter);
    });
}

// Animate Counter
function animateCounter(element, start, end, duration) {
    const startTime = performance.now();
    const difference = end - start;
    
    function updateCounter(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const current = start + (difference * easeOutQuart);
        
        element.textContent = Math.floor(current).toLocaleString();
        
        if (progress < 1) {
            requestAnimationFrame(updateCounter);
        }
    }
    
    requestAnimationFrame(updateCounter);
}

// Scroll Triggers
function setupScrollTriggers() {
    const triggers = document.querySelectorAll('[data-scroll-trigger]');
    
    triggers.forEach(trigger => {
        const target = document.querySelector(trigger.getAttribute('data-scroll-trigger'));
        if (target) {
            trigger.addEventListener('click', function(e) {
                e.preventDefault();
                
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = target.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            });
        }
    });
}

// Hover Effects
function setupHoverEffects() {
    // Card hover effects
    const cards = document.querySelectorAll('.feature-card, .pricing-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
            this.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.1)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '';
        });
    });
    
    // Button hover effects
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}

// Particle Background Effect
function setupParticleBackground() {
    const canvas = document.createElement('canvas');
    canvas.id = 'particleCanvas';
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '-1';
    canvas.style.opacity = '0.1';
    
    document.body.appendChild(canvas);
    
    const ctx = canvas.getContext('2d');
    const particles = [];
    const particleCount = 50;
    
    // Resize canvas
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Particle class
    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.vx = (Math.random() - 0.5) * 0.5;
            this.vy = (Math.random() - 0.5) * 0.5;
            this.size = Math.random() * 2 + 1;
            this.opacity = Math.random() * 0.5 + 0.2;
        }
        
        update() {
            this.x += this.vx;
            this.y += this.vy;
            
            if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
            if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
        }
        
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(37, 99, 235, ${this.opacity})`;
            ctx.fill();
        }
    }
    
    // Create particles
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }
    
    // Animation loop
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach(particle => {
            particle.update();
            particle.draw();
        });
        
        requestAnimationFrame(animate);
    }
    
    animate();
}

// Smooth Reveal Animation
function smoothReveal(element, delay = 0) {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    
    setTimeout(() => {
        element.style.transition = `opacity 0.6s ease, transform 0.6s ease`;
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
    }, delay);
}

// Pulse Animation
function pulseAnimation(element, duration = 1000) {
    element.style.animation = `pulse ${duration}ms ease-in-out`;
    
    setTimeout(() => {
        element.style.animation = '';
    }, duration);
}

// Shake Animation
function shakeAnimation(element, duration = 500) {
    element.style.animation = `shake ${duration}ms ease-in-out`;
    
    setTimeout(() => {
        element.style.animation = '';
    }, duration);
}

// Fade In Animation
function fadeInAnimation(element, delay = 0) {
    element.style.opacity = '0';
    
    setTimeout(() => {
        element.style.transition = 'opacity 0.6s ease';
        element.style.opacity = '1';
    }, delay);
}

// Slide In Animation
function slideInAnimation(element, direction = 'left', delay = 0) {
    const transforms = {
        left: 'translateX(-100%)',
        right: 'translateX(100%)',
        up: 'translateY(-100%)',
        down: 'translateY(100%)'
    };
    
    element.style.opacity = '0';
    element.style.transform = transforms[direction] || transforms.left;
    
    setTimeout(() => {
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        element.style.opacity = '1';
        element.style.transform = 'translate(0, 0)';
    }, delay);
}

// Utility Functions

// Throttle function for performance
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Debounce function for performance
function debounce(func, wait, immediate) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            timeout = null;
            if (!immediate) func(...args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func(...args);
    };
}

// Initialize particle background on page load
window.addEventListener('load', function() {
    setTimeout(setupParticleBackground, 1000);
});

// Export animation functions for global use
window.CBNAAnimations = {
    smoothReveal,
    pulseAnimation,
    shakeAnimation,
    fadeInAnimation,
    slideInAnimation,
    animateCounter
};
