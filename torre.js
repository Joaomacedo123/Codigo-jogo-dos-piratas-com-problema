class Torre{

    constructor(x, y, w, h) {
        this.width=  w
        this.height= h
        this.corpo= Bodies.rectangle(x, y, w, h, {isStatic:true})   
        World.add(world, this.corpo)
        this.imagem= loadImage("./assets/tower.png")
    }

    showT() {
        push()
        imageMode(CENTER)
        image(this.imagem, this.corpo.position.x, this.corpo.position.y, this.width, this.height)
        pop()
    }
}