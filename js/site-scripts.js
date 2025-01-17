(function() {
  // External links handler
  function handleExternalLinks() {
    var links = document.getElementsByTagName('a');
    for (var i = 0; i < links.length; i++) {
      var link = links[i];
      if (link.hostname !== window.location.hostname && 
          !link.href.startsWith('/') && 
          !link.href.startsWith('./') && 
          !link.href.startsWith('../')) {
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');
      }
    }
  }

  // Theme toggle functionality
  function initThemeToggle() {
    // Get the current theme from local storage or default to 'light'
    var storedTheme = localStorage.getItem('quarto-theme') || 'light';
    
    // Set the initial theme
    document.documentElement.setAttribute('data-bs-theme', storedTheme);
    
    // Create theme toggle button
    var themeToggle = document.createElement('button');
    themeToggle.classList.add('theme-toggle', 'btn');
    themeToggle.setAttribute('aria-label', 'Toggle dark/light mode');
    
    // Set initial button text based on current theme
    function updateButtonText() {
      themeToggle.innerHTML = storedTheme === 'light' 
        ? '🌙 Dark Mode' 
        : '☀️ Light Mode';
    }
    updateButtonText();
    
    // Add click event listener
    themeToggle.addEventListener('click', function() {
      // Get current theme
      var currentTheme = document.documentElement.getAttribute('data-bs-theme');
      
      // Toggle theme
      var newTheme = currentTheme === 'light' ? 'dark' : 'light';
      
      // Set new theme
      document.documentElement.setAttribute('data-bs-theme', newTheme);
      
      // Store in local storage
      localStorage.setItem('quarto-theme', newTheme);
      
      // Update button text
      updateButtonText();
    });
    
    // Add to navbar
    var navbar = document.querySelector('.navbar-nav');
    if (navbar) {
      var themeNavItem = document.createElement('li');
      themeNavItem.classList.add('nav-item', 'ms-auto');
      themeNavItem.appendChild(themeToggle);
      navbar.appendChild(themeNavItem);
    }
  }

  // Run both functions when DOM is fully loaded
  document.addEventListener('DOMContentLoaded', function() {
    handleExternalLinks();
    initThemeToggle();
  });
})();
