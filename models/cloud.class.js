class Cloud extends MovableObject {
    y = 20;
    height = 250;
    width = 500;
    speed = 0.2;

    constructor() {
        super();
        this.loadImage('img/5_background/layers/4_clouds/1.png');
        this.x = Math.random() * 500;
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.x -= this.speed;

            if (this.x + this.width < 0) {
                this.x = canvas.width + Math.random() * 200;
            }
        }, 1000 / 60);
    }
}