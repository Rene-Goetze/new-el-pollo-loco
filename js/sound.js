
let introSound;
let isPlaying = false;

function toggleSound() {
    const soundOnIcon = document.getElementById('soundOnIcon');
    const soundOffIcon = document.getElementById('soundOffIcon');

    if (isPlaying) {
        fadeOutIntroSound();
        isPlaying = false;
        soundOnIcon.style.display = 'none';
        soundOffIcon.style.display = 'inline';
    } else {
        if (!introSound) {
            introSound = new Audio('audio/mexicana.mp3');
            introSound.loop = true;
            introSound.volume = 0.8;
        }
        introSound.play();
        isPlaying = true;
        soundOnIcon.style.display = 'inline';
        soundOffIcon.style.display = 'none';
    }
}

function fadeOutIntroSound() {
    if (!introSound) return;

    const fadeInterval = setInterval(() => {
        if (introSound.volume > 0.05) {
            introSound.volume -= 0.05;
        } else {
            introSound.pause();
            introSound.currentTime = 0;
            introSound.volume = 0.5; // Reset volume für nächsten Start
            clearInterval(fadeInterval);
        }
    }, 100);
}
