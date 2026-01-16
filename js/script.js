// Simple JavaScript for the Water & Wastewater SCADA website

// Mobile menu toggle functionality
document.addEventListener('DOMContentLoaded', function() {
  // Form validation
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Thank you for your message! This is a demo form. In a real implementation, this would send your information to our team.');
      contactForm.reset();
    });
  }

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 100,
          behavior: 'smooth'
        });
      }
    });
  });

  // Add active class to current page in navigation
  const currentPage = window.location.pathname.split('/').pop();
  const navLinks = document.querySelectorAll('nav ul li a');
  
  navLinks.forEach(link => {
    const linkPage = link.getAttribute('href');
    if (currentPage === linkPage || (currentPage === '' && linkPage === 'index.html')) {
      link.classList.add('active');
    }
  });

  // Simple animation for counter on services page
  const counterElement = document.querySelector('.counter-number');
  if (counterElement) {
    const targetNumber = parseInt(counterElement.textContent);
    let currentNumber = 0;
    const duration = 2000; // 2 seconds
    const interval = 50; // Update every 50ms
    const steps = duration / interval;
    const increment = targetNumber / steps;
    
    const counter = setInterval(() => {
      currentNumber += increment;
      if (currentNumber >= targetNumber) {
        clearInterval(counter);
        currentNumber = targetNumber;
      }
      counterElement.textContent = Math.floor(currentNumber) + '+';
    }, interval);
  }
});
