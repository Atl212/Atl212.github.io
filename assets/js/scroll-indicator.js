const scrollIndicator = document.getElementById('scroll-indicator');
const delayBeforeShowingIndicator = 750;

var scrollIndicatorEnabled = false;

updateArrowState = function() {
    if (!scrollIndicatorEnabled) {
        return;
    }

    if (window.scrollY === 0) {
        scrollIndicator.style.opacity = 1;
    }
    else {
        scrollIndicator.style.opacity = 0;
        
        // Disable the arrow indicator once the user has scrolled at least once.
        scrollIndicatorEnabled = false; 
    }
}

setTimeout(function() {
    scrollIndicatorEnabled = true;
    updateArrowState();
}, delayBeforeShowingIndicator);

window.addEventListener('scroll', function() {
    updateArrowState();
});