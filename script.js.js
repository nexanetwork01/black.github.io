// Smooth scrolling for anchor links
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

// Scroll-based reveal animations using Intersection Observer
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('reveal');
        }
    });
}, observerOptions);

// Observe all sections except hero (hero has its own animation)
document.querySelectorAll('.section').forEach(section => {
    observer.observe(section);
});

// Button interaction (example: log on click; replace with actual functionality)
document.querySelectorAll('.cta-button').forEach(button => {
    button.addEventListener('click', function() {
        console.log('CTA button clicked:', this.textContent);
        // Add form submission or other logic here
    });
});

// Form submission handler (basic example)
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you! We will get back to you soon.');
    // Add actual form handling (e.g., AJAX) here
});