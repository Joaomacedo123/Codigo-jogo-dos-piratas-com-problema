class Canon {
    constructor(x, y, w, h, a) {
        this.width=  w
        this.height= h
        this.x=  x
        this.y= y
        this.angle= a

        this.img= loadImage("./assets/CANON.png")
        this.base= loadImage("./assets/cannon_base.png")
    }

    display() {
        image(this.base, 60, 20, 210, 200)

        if(keyIsDown(RIGHT_ARROW) && this.angle < 1) {
            this.angle = this.angle+ 0.02
        }

        if(keyIsDown(LEFT_ARROW) && this.angle > -1.45) {
            this.angle -= 0.02
        }

        push()
        translate(this.x, this.y)
        rotate(this.angle)
        imageMode(CENTER)
        image(this.img, 0, 0, this.width, this.height)
        pop()
    }
}