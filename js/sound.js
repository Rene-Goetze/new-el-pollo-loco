
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
        soundOnIcon.classList.remove('sound-playing');
    } else {
        if (!introSound) {
            introSound = new Audio('audio/mexicana.mp3');
            introSound.loop = true;
            introSound.volume = 0.8;
        }
        introSound.play().catch(err => console.error("Audio-Fehler:", err));
        isPlaying = true;
        soundOnIcon.style.display = 'inline';
        soundOffIcon.style.display = 'none';
        soundOnIcon.classList.add('sound-playing');
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
            introSound.volume = 0.8;
            clearInterval(fadeInterval);
        }
    }, 100);
}

