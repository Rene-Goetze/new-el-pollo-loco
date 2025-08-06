class Character extends MovableObject {
    height = 250;
    width = 180;
    y = 200;
    speed = 10;
    IMAGES_WALKING = [
        'img/2_character_pepe/2_walk/W-21.png',
        'img/2_character_pepe/2_walk/W-22.png',
        'img/2_character_pepe/2_walk/W-23.png',
        'img/2_character_pepe/2_walk/W-24.png',
        'img/2_character_pepe/2_walk/W-25.png',
        'img/2_character_pepe/2_walk/W-26.png'
    ];
    
    world;
    keyboard;

    constructor(keyboard) {
        super();
        this.keyboard = keyboard; // ✅ Keyboard speichern
        this.loadImage('img/2_character_pepe/2_walk/W-21.png');
        this.loadImages(this.IMAGES_WALKING);
        this.animate();
    }

    animate() {
        setInterval(() => {
            if (this.keyboard.RIGHT) {
                this.x += this.speed
            }

            if (this.keyboard.LEFT) {
                this.x -= this.speed
            }
        }, 1000/24 );



        setInterval(() => {
            if (this.keyboard.RIGHT || this.keyboard.LEFT) { 
                // Walk animation
                let i = this.currentImage % this.IMAGES_WALKING.length;
                let path = this.IMAGES_WALKING[i];
                this.img = this.imageCache[path];
                this.currentImage++;
            }
        }, 150);
    }

    jump() {
        // springe
    }
}
