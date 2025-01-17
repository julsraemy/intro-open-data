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

document.addEventListener('DOMContentLoaded', function() {
    handleExternalLinks();
});