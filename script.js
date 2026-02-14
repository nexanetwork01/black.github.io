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
const form = document.querySelector('.contact-form');
if (form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you! We will get back to you soon.');
    });
}

document.addEventListener("DOMContentLoaded", function() {

    document.querySelectorAll(".accordion-header").forEach(header => {
        header.addEventListener("click", function() {

            const content = this.nextElementSibling;
            const icon = this.querySelector(".icon");

            const isOpen = content.style.maxHeight && content.style.maxHeight !== "0px";

            document.querySelectorAll(".accordion-content").forEach(c => c.style.maxHeight = null);
            document.querySelectorAll(".icon").forEach(i => i.textContent = "+");

            if (!isOpen) {
                content.style.maxHeight = content.scrollHeight + "px";
                icon.textContent = "−";
            }
        });
    });

});

