document.addEventListener('DOMContentLoaded', function() {
  // Select all links
  var links = document.getElementsByTagName('a');
  
  for (var i = 0; i < links.length; i++) {
    var link = links[i];
    
    // Check if the link is external (doesn't start with the site URL or a relative path)
    if (link.hostname !== window.location.hostname && 
        !link.href.startsWith('/') && 
        !link.href.startsWith('./') &&
        !link.href.startsWith('../')) {
      link.setAttribute('target', '_blank');
      link.setAttribute('rel', 'noopener noreferrer');
    }
  }
});
