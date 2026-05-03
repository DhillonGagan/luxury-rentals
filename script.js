// Smooth scrolling for navigation links
function scrollTo(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Filter rentals by category
function filterCategory(category) {
    const cards = document.querySelectorAll('.property-card');
    const buttons = document.querySelectorAll('.tab-btn');
    
    // Update active button
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    // Filter cards
    cards.forEach(card => {
        if (category === 'all' || card.getAttribute('data-category') === category) {
            card.style.display = 'block';
            setTimeout(() => card.style.opacity = '1', 0);
        } else {
            card.style.display = 'none';
        }
    });
}

// Handle contact form submission
function handleSubmit(event) {
    event.preventDefault();
    
    const form = event.target;
    const name = form.querySelector('input[type="text"]').value;
    const email = form.querySelector('input[type="email"]').value;
    const message = form.querySelector('textarea').value;
    
    // Show success message
    alert(`Thank you, ${name}! We've received your message and will get back to you at ${email} soon.`);
    
    // Reset form
    form.reset();
}

// Add active state to navigation links on scroll
document.addEventListener('scroll', () => {
    const navLinks = document.querySelectorAll('.nav-links a');
    const sections = document.querySelectorAll('section');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Lazy load images
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('load', () => {
            img.style.opacity = '1';
        });
    });
});

// Add rental card click handlers
document.addEventListener('DOMContentLoaded', () => {
    const rentalButtons = document.querySelectorAll('.btn-secondary');
    rentalButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const card = e.target.closest('.property-card');
            const itemName = card.querySelector('h3').textContent;
            alert(`Would you like to rent the ${itemName}? Contact us for availability and booking details!`);
        });
    });
});
