// Theme toggle functionality
document.addEventListener('DOMContentLoaded', () => {
  // Get the current theme from local storage or default to 'light'
  const storedTheme = localStorage.getItem('quarto-theme') || 'light';
  
  // Set the initial theme
  document.documentElement.setAttribute('data-bs-theme', storedTheme);
  
  // Create theme toggle button
  const themeToggle = document.createElement('button');
  themeToggle.classList.add('theme-toggle', 'btn');
  themeToggle.setAttribute('aria-label', 'Toggle dark/light mode');
  
  // Set initial button text based on current theme
  const updateButtonText = () => {
    themeToggle.innerHTML = storedTheme === 'light' 
      ? '🌙 Dark Mode' 
      : '☀️ Light Mode';
  };
  updateButtonText();
  
  // Add click event listener
  themeToggle.addEventListener('click', () => {
    // Get current theme
    const currentTheme = document.documentElement.getAttribute('data-bs-theme');
    
    // Toggle theme
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    // Set new theme
    document.documentElement.setAttribute('data-bs-theme', newTheme);
    
    // Store in local storage
    localStorage.setItem('quarto-theme', newTheme);
    
    // Update button text
    updateButtonText();
  });
  
  // Add to navbar
  const navbar = document.querySelector('.navbar-nav');
  if (navbar) {
    const themeNavItem = document.createElement('li');
    themeNavItem.classList.add('nav-item', 'ms-auto');
    themeNavItem.appendChild(themeToggle);
    navbar.appendChild(themeNavItem);
  }
});
