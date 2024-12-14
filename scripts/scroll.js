// Change Navbar Background on Scroll
document.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});


// Add smooth scrolling to all internal links
document.addEventListener('DOMContentLoaded', () => {
    const smoothLinks = document.querySelectorAll('a[href^="#"]');
  
    smoothLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
  
        const targetId = link.getAttribute('href').slice(1);
        const targetElement = document.getElementById(targetId);
  
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      });
    });
  });
