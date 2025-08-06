let canvas;
let world;
let keyboard = new Keyboard;

function init() {
    toggleSound(); 
    setupCanvas();
    setupStartButton();
}

function setupCanvas() {
    canvas = document.getElementById('canvas');
    if (!canvas) {
        console.error("Canvas-Element nicht gefunden!");
        return;
    }
    canvas.style.display = 'none'; // Canvas am Anfang verstecken
}

function setupStartButton() {
    const startButton = document.getElementById('startButton');
    if (!startButton) {
        console.error("Startbutton nicht gefunden!");
        return;
    }

    startButton.addEventListener('click', handleStartButtonClick);
}

function handleStartButtonClick() {
    const startScreen = document.getElementById('startScreen');
    startScreen.classList.add('fade-out');

    fadeOutIntroSound(); // Musik ausfaden

    setTimeout(() => {
        startScreen.style.display = 'none';
        canvas.style.display = 'block';
        startGame();
    }, 500);
}


window.onload = init;

function startGame() {
    world = new World(canvas, keyboard);
    console.log('Spiel gestartet! My Character is', world.character);
}


window.addEventListener('keydown', (event) => {
    if(event.keyCode == 39) {
        keyboard.RIGHT = true;
    }

    if(event.keyCode == 37) {
        keyboard.LEFT = true;
    }

    if(event.keyCode == 38) {
        keyboard.UP = true;
    }

    if(event.keyCode == 40) {
        keyboard.DOWN = true;
    }

    if(event.keyCode == 32) {
        keyboard.SPACE = true;
    }

    console.log(event);
});


window.addEventListener('keyup', (event) => {
    if(event.keyCode == 39) {
        keyboard.RIGHT = false;
    }

    if(event.keyCode == 37) {
        keyboard.LEFT = false;
    }

    if(event.keyCode == 38) {
        keyboard.UP = false;
    }

    if(event.keyCode == 40) {
        keyboard.DOWN = false;
    }

    if(event.keyCode == 32) {
        keyboard.SPACE = false;
    }

    console.log(event);
});