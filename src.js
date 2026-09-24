// Smooth scroll behavior
window.addEventListener('load', function() {
    document.documentElement.style.scrollBehavior = 'smooth';
});

// Navigation smooth scrolling
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Update active nav link on scroll
window.addEventListener('scroll', function() {
    let current = '';
    const sections = document.querySelectorAll('.section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Scroll to section function
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Form submission
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const message = document.getElementById('message').value;
            
            // Validation
            if (!name || !email || !message) {
                alert('Please fill in all required fields.');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address.');
                return;
            }
            
            // Success message
            alert(`Thank you, ${name}! Your message has been received. I'll get back to you at ${email} soon.`);
            contactForm.reset();
        });
    }
});

// Skill bars animation on scroll
const observerOptions = {
    threshold: 0.3,
    rootMargin: '0px 0px -100px 0px'
};

const skillObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const skillBar = entry.target.querySelector('.skill-bar');
            if (skillBar && !skillBar.classList.contains('animated')) {
                const width = skillBar.style.width;
                skillBar.style.width = '0%';
                skillBar.classList.add('animated');
                setTimeout(() => {
                    skillBar.style.width = width;
                }, 100);
            }
        }
    });
}, observerOptions);

// Observe all skill cards
const skillCards = document.querySelectorAll('.skill-card');
skillCards.forEach(card => {
    skillObserver.observe(card);
});