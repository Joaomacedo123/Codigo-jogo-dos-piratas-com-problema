const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var tower, canon, canonB, canvas;
var angle;
var balls = [];
var boats = []

var json1,json2,spritesheet1,spritesheet2;
var boatAnimation = []
var brokenBoatAnimation = []

function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  spritesheet1 = loadImage("./assets/boat/boat.png");
  json1 = loadJSON("./assets/boat/boat.json"); 
  spritesheet2=loadImage("./assets/boat/broken_boat.png");
  json2=loadJSON("./assets/boat/broken_boat.json");

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
 
  var boatFrames=json1.frames;

  for(var i=0; i<boatFrames.length;i++){
    var pos = boatFrames[i].position;
    var img = spritesheet1.get(pos.x,pos.y,pos.w,pos.h);
    boatAnimation.push(img)
  }

  var brokenBoatFrames = json2.frames;

  for(var i=0; i<brokenBoatFrames.length;i++){
    var pos = brokenBoatFrames[i].position;
    var img = spritesheet2.get(pos.x,pos.y,pos.w,pos.h);
    brokenBoatAnimation.push(img)
  }
}

function draw() {
  Engine.update(engine);
  background(189);
  image(backgroundImg, 0, 0, 1200, 600);

  tower.showT()
  canon.display()

  criarbarcos()
  
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


function criarbarcos() {
  if(boats.length > 0) {
    if(boats[boats.length- 1].body.position.x < width-300){
      var positions = [-50, -80, -73, -61, -90]
      var position = random(positions)
      var barco = new Boat(width, height-60, 170, 170, position, boatAnimation)
      boats.push(barco)
    }

    for(var i =0; i<boats.length; i=i+1){
      Body.setVelocity(boats[i].body, {x:-1, y:0})
      boats[i].display();
      boats[i].animate();
    }

  } else {
    var barco = new Boat(width, height-60, 170, 170, -60, boatAnimation)
    boats.push(barco)
  }
}