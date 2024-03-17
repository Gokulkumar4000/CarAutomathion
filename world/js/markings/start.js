class Start extends Marking {
    constructor(center, directionVector, width, height) {
        super(center, directionVector, width, height);
        this.img = new Image();
        this.img.src = "car.png";
        this.img.alt = "carpic";

        // Define new width and height for the car
        this.imgWidth = 30; // Example width
        this.imgHeight = 50; // Example height
        this.type="start";
    }

    draw(ctx) {
        ctx.save();
        ctx.translate(this.center.x, this.center.y);
        ctx.rotate(angle(this.directionVector) + Math.PI / 2);
        ctx.drawImage(this.img, -this.imgWidth / 2, -this.imgHeight / 2, this.imgWidth, this.imgHeight); // Use updated width and height
        ctx.restore();
    }
}
