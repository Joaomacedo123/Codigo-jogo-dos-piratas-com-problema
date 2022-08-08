class Boat {
    constructor(x, y, width, height, boatPos, boatAnimation) {
      var options = {
        restitution: 0.8,
        friction: 1.0,
        density: 1.0,
      };
  
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      this.speed = 0.05
      this.boatPosition = boatPos;
      this.animation = boatAnimation;
      World.add(world, this.body);
    }
  
    animate(){
      this.speed = this.speed + 0.05
    }

    remove(index) {
      Matter.World.remove(world, boats[index].body);
      boats.splice(index, 1);
    }
  
    display() {
      var angle = this.body.angle;
      var pos = this.body.position;
      var indice = floor(this.speed % this.animation.length)
  
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.animation[indice], 0, this.boatPosition, this.width, this.height);
      pop();
    }
  }