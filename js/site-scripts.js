(function() {
    console.log("CRITICAL: Theme toggle script is DEFINITELY LOADED");

    function findAndAddThemeToggle() {
        console.log("Attempting to find and add theme toggle");
        
        // Try multiple selectors to find the navbar
        var navSelectors = [
            '.navbar-nav',
            '.quarto-navbar .navbar-nav',
            'nav .navbar-nav',
            'body .navbar-nav'
        ];

        var navbarFound = false;

        navSelectors.forEach(function(selector) {
            var navbar = document.querySelector(selector);
            
            if (navbar) {
                console.log(`Navbar found with selector: ${selector}`);
                navbarFound = true;

                // Check if theme toggle already exists
                if (navbar.querySelector('.theme-toggle')) {
                    console.log("Theme toggle already exists");
                    return;
                }

                // Create theme toggle button
                var themeToggle = document.createElement('button');
                themeToggle.classList.add('theme-toggle', 'btn');
                themeToggle.setAttribute('aria-label', 'Toggle dark/light mode');
                
                // Get the current theme
                var storedTheme = localStorage.getItem('quarto-theme') || 'light';
                
                // Set initial button text
                themeToggle.innerHTML = storedTheme === 'light' ? '🌙' : '☀️';
                
                // Click event listener
                themeToggle.addEventListener('click', function() {
                    var currentTheme = document.documentElement.getAttribute('data-bs-theme');
                    var newTheme = currentTheme === 'light' ? 'dark' : 'light';
                    
                    document.documentElement.setAttribute('data-bs-theme', newTheme);
                    localStorage.setItem('quarto-theme', newTheme);
                    
                    themeToggle.innerHTML = newTheme === 'light' ? '🌙' : '☀️';
                });

                // Create nav item and add to navbar
                var themeNavItem = document.createElement('li');
                themeNavItem.classList.add('nav-item', 'ms-auto');
                themeNavItem.appendChild(themeToggle);
                
                navbar.appendChild(themeNavItem);
                console.log("Theme toggle added successfully");
            }
        });

        if (!navbarFound) {
            console.error("Could not find navbar with any of the selectors");
        }
    }

    // External links handler (kept from previous version)
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

    // Run functions when DOM is fully loaded
    document.addEventListener('DOMContentLoaded', function() {
        handleExternalLinks();
        findAndAddThemeToggle();
    });

    // Also try again after a short delay in case of slow-loading content
    setTimeout(function() {
        findAndAddThemeToggle();
    }, 1000);
})();