// Load Header and Footer Dynamically
document.addEventListener('DOMContentLoaded', () => {
    // Load Header
    fetch('components/header.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('header-container').innerHTML = data;
  
        // Initialize Bootstrap Dropdowns (Required if dynamically loaded)
        const dropdownElements = document.querySelectorAll('.dropdown-toggle');
        dropdownElements.forEach(dropdown => {
          new bootstrap.Dropdown(dropdown);
        });
      })
      .catch(error => console.error('Error loading header:', error));
  
    // Load Footer
    fetch('components/footer.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('footer-container').innerHTML = data;
      })
      .catch(error => console.error('Error loading footer:', error));
  });
  
