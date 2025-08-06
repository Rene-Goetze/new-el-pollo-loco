class Chicken extends MovableObject {

    height = 70;
    width = 70;
    y = 400;
    speed = 0.5;
    currentImage = 0;
    IMAGES_WALKING = [
        'img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/3_w.png'
    ];

    constructor() {
        super();
        this.loadImage(this.IMAGES_WALKING[0]);
        this.loadImages(this.IMAGES_WALKING);

        this.x = 220 + Math.random() * 500;
        this.animate();
    }

    animate() {
        // Bewegung nach links
        setInterval(() => {
            this.x -= this.speed;

            // Optional: Huhn kommt von rechts zurück, wenn es ganz aus dem Bild läuft
            if (this.x + this.width < 0) {
                this.x = canvas.width + Math.random() * 200;
            }
        }, 1000 / 60);

        // Bildwechsel (Animation)
        setInterval(() => {
            let i = this.currentImage % this.IMAGES_WALKING.length;
            let path = this.IMAGES_WALKING[i];
            this.img = this.imageCache[path];
            this.currentImage++;
        }, 200);
    }
}

