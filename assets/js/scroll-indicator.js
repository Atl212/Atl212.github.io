const scrollIndicator = document.getElementById('scroll-indicator');
const delayBeforeShowingIndicator = 3000;

var scrollIndicatorEnabled = false;

updateArrowState = function() {
    if (!scrollIndicatorEnabled) {
        return;
    }

    if (window.scrollY === 0) {
        scrollIndicator.style.opacity = 1;
    } else {
        scrollIndicator.style.opacity = 0;
        scrollIndicatorEnabled = false; // Disable the arrow indicator once the user has scrolled at least once.
    }
}

setTimeout(function() {
    scrollIndicatorEnabled = true;
    updateArrowState();
}, delayBeforeShowingIndicator);

window.addEventListener('scroll', function() {
    updateArrowState();
});