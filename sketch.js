const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var tower, canon, canonB;
var angle;
var balls= [];



function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  

}


function setup() {
  canvas = createCanvas(1200,600);

  engine = Engine.create();
  world = engine.world;


  angle = -PI/4
  rectMode(CENTER);
  ellipseMode(RADIUS);

  tower = new Torre(150, 350, 160, 310)
  canon = new Canon(180, 120, 130, 100, angle)
 // canonB = new CannonB(canon.x, canon.y)
  
}

function draw() 
{
  background(189);
  image(backgroundImg, 0, 0, 1200, 600);

  Engine.update(engine);
 tower.showT()
 canon.display()
//canonB.display()

for(var i=0; i<balls.length; i++) {
showCannonBalls(balls[i], i)

}


}

function showCannonBalls(canonB, index) {
canonB.display()

}




function keyReleased() {
  if(keyCode === DOWN_ARROW) {
    balls[balls.length-1].tiro()
    }

}

function keyPressed() {
  if(keyCode === DOWN_ARROW) {
  var canonB = new CannonB(canon.x, canon.y)
  balls.push(canonB)
  }
  
  }