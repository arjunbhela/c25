
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper,ground,bin1,bin2,bin3,dust
function preload()
{
dust = loadImage("dustbingreen.png")
}

function setup() {
	createCanvas(800, 700);
	

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(20,20)
	ground = new Ground(400,680,800,20)
	bin1 = new Box(650,660,200,25);
	bin2 = new Box(550,630,25,100);
	bin3 = new Box(750,630,25,100);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(100,50,100);
  paper.display();
  ground.display();
  bin1.display();
  bin2.display();
  bin3.display();
  image(dust,550,440,200,240)
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body,paper.body.position,{x:800,y:-1000})
	}
}


