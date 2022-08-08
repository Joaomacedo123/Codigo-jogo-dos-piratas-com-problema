class CannonB {

    constructor(x, y) {
        this.r = 40
        this.body = Bodies.circle(x, y, this.r, {isStatic:true})
        World.add(world, this.body)
        this.trajetoria=[]
        this.imagem = loadImage("assets/cannonball.png")
    }


    tiro() {
        var velocity = p5.Vector.fromAngle(canon.angle)
        velocity.mult(20)

        Body.setStatic(this.body, false)
        Body.setVelocity(this.body, {x:velocity.x, y:velocity.y})
    }


    display() {
        var angle = this.body.angle
        var pos = this.body.position

        push()
        translate(pos.x, pos.y)
        rotate(angle)
        imageMode(CENTER)
        image(this.imagem, 0, 0, this.r, this.r)
        pop()

        if(this.body.velocity.x>0&& pos.x>300){
            var posicao=[pos.x,pos.y]
            this.trajetoria.push(posicao)
        }

        for(var i=0; i<this.trajetoria.length; i++) {
            image(this.imagem, this.trajetoria[i][0], this.trajetoria[i][1], 5, 5)
        }

    }
}