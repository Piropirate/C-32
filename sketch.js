const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;
var block1, block2;
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12, box13, box14, box15;
var box16, box17, box18, box19, box20, box21, box22, box23, box24;
var polygon;
var sling;
var backgroundColor;
var gameState = "onSling";
var score = 0;

function setup() {
  createCanvas(1400,600);
  engine = Engine.create()
  world = engine.world;

  ground = new Ground(700,580,1400,40);
  block1 = new Block(800,400,300,30);
  block2 = new Block(1200,200,200,30);
  polygon = new Polygon(350,300,50);
  sling = new Sling(polygon.body,{x:350,y:300});

  //Pyramid 1 Level 1
  box1 = new Box(680,360,60,50);
  box2 = new Box(740,360,60,50);
  box3 = new Box(800,360,60,50);
  box4 = new Box(860,360,60,50);
  box5 = new Box(920,360,60,50);
  //Pyramid 1 Level 2
  box6 = new Box(710,310,60,50);
  box7 = new Box(770,310,60,50);
  box8 = new Box(830,310,60,50);
  box9 = new Box(890,310,60,50);
  //Pyramid 1 Level 3
  box10 = new Box(740,260,60,50);
  box11 = new Box(800,260,60,50);
  box12 = new Box(860,260,60,50);
  //Pyramid 1 Level 4
  box13 = new Box(770,210,60,50);
  box14 = new Box(830,210,60,50);
  //Pyramid 1 Level 5
  box15 = new Box(800,160,60,50);

  //Pyramid 2 Level 1
  box16 = new Box(1120,165,40,40);
  box17 = new Box(1160,165,40,40);
  box18 = new Box(1200,165,40,40);
  box19 = new Box(1240,165,40,40);
  box20 = new Box(1280,165,40,40);
  //Pyramid 2 Level 2
  box21 = new Box(1160,125,40,40);
  box22 = new Box(1200,125,40,40);
  box23 = new Box(1240,125,40,40);
  //Pyramid 2 Level 3
  box24 = new Box(1200,85,40,40);

  getBackground();

}

function draw() {
  if(backgroundColor)
  background(backgroundColor);  
  Engine.update(engine);

  textSize(35);
  fill("white");
  text("Score : " + score, width - 300, 50);
  
  ground.display();
  block1.display();
  block2.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box1.score();
  box2.score();
  box3.score();
  box4.score();
  box5.score();
  box6.score();
  box7.score();
  box8.score();
  box9.score();
  box10.score();
  box11.score();
  box12.score();
  box13.score();
  box14.score();
  box15.score();
  box16.score();
  box17.score();
  box18.score();
  box19.score();
  box20.score();
  box21.score();
  box22.score();
  box23.score();
  box24.score();
  polygon.display();
  sling.display();

}


function mouseDragged(){
  if (gameState !== "launched"){
      Matter.Body.setPosition(polygon.body,{x: mouseX , y: mouseY});
  }
}


function mouseReleased(){
  sling.fly();
  gameState = "launched";
}

function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(polygon.body, {x:350,y:300});
    sling.attach(polygon.body);
    gameState = "onSling";
  }
}

async function getBackground(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  
  if(hour>=06 && hour<18){
      bg = "white";
  }
  else{
      bg = "black";
  }

  backgroundColor = bg;
  console.log(backgroundColor);
}