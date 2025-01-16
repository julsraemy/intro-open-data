// Theme toggle functionality
document.addEventListener('DOMContentLoaded', () => {
    const storedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-bs-theme', storedTheme);
  
    const themeToggle = document.createElement('button');
    themeToggle.classList.add('theme-toggle', 'btn');
    themeToggle.innerHTML = storedTheme === 'light' 
      ? '🌙 Dark Mode' 
      : '☀️ Light Mode';
    
    // Add to navbar
    const navbar = document.querySelector('.navbar-nav');
    if (navbar) {
      const themeNavItem = document.createElement('li');
      themeNavItem.classList.add('nav-item');
      themeNavItem.appendChild(themeToggle);
      navbar.appendChild(themeNavItem);
    }
  
    themeToggle.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-bs-theme');
      const newTheme = currentTheme === 'light' ? 'dark' : 'light';
      
      document.documentElement.setAttribute('data-bs-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      
      themeToggle.innerHTML = newTheme === 'light' 
        ? '🌙 Dark Mode' 
        : '☀️ Light Mode';
    });
  });