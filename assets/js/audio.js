const musicButton = document.getElementById("musicButton");
const audio = document.getElementById("audio");

var everPlayed = false;

const playIconHTML = "<span class='" + musicButton.dataset.playIcon + "'></span>";
const pauseIconHTML = "<span class='" + musicButton.dataset.pauseIcon + "'></span>";

var updateMusicButtonIcon = function() {
    if (audio.paused) {
        musicButton.innerHTML = (!everPlayed ? "Better With " : "") + playIconHTML;
    } else {
        musicButton.innerHTML = pauseIconHTML;
    }
}

var onClick = function() {
    if (audio.paused) {
        everPlayed = true;
        audio.play();
        audio.volume = 0.3;
    } else {
        audio.pause();
    }

    updateMusicButtonIcon();
}

updateMusicButtonIcon();
musicButton.addEventListener('click', onClick, false);