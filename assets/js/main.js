// Main navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Mobile menu toggle (if you add one later)
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    if (mobileMenuButton) {
        mobileMenuButton.addEventListener('click', function() {
            const nav = document.querySelector('nav ul');
            nav.classList.toggle('active');
        });
    }

    // Add active class to current navigation item
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('nav ul li a').forEach(link => {
        const linkPage = link.getAttribute('href').split('/').pop() || 'index.html';
        if (linkPage === currentPage) {
            link.classList.add('active');
        }
    });

    // Project page specific functionality
    if (window.location.pathname.includes('projects/')) {
        // Add any project-specific JavaScript here
        console.log('Project page loaded');
    }
});

// Function to handle Power BI dashboard embedding
function embedPowerBIDashboard() {
    // This would be replaced with actual Power BI embedding code
    console.log('Power BI dashboard embedded');
}

// Initialize any additional components
document.addEventListener('DOMContentLoaded', embedPowerBIDashboard);

// LIGHTBOX FUNCTIONALITY
const lightbox = document.getElementById('lightbox');
const lightboxImg = lightbox.querySelector('img');
const projectImages = document.querySelectorAll('.project-img');

projectImages.forEach(img => {
    img.addEventListener('click', () => {
        lightbox.style.display = 'flex';
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
    });
});

// Close lightbox when clicking overlay
lightbox.addEventListener('click', () => {
    lightbox.style.display = 'none';
});
// Close lightbox when clicking overlay
lightbox.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

// LIGHTBOX FUNCTIONALITY
const lightbox = document.getElementById('lightbox');
const lightboxImg = lightbox.querySelector('img');
const projectImages = document.querySelectorAll('.project-img');

projectImages.forEach(img => {
    img.addEventListener('click', () => {
        lightbox.style.display = 'flex';
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
    });
});

// Close lightbox when clicking overlay
lightbox.addEventListener('click', () => {
    lightbox.style.display = 'none';
});
