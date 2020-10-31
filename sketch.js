
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var tree,ground,shot;
var mango1,mango2,mango3,mango4;
var boy,boyImg;
function preload()
{
	boyImg = loadImage("Plucking mangoes/boy.png")
}

function setup() {
	createCanvas(1000, 800);
	background("white");


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	boy = createSprite(200,550);
	boy.addImage(boyImg);
	boy.scale = 0.1;
	tree = new Tree(200,200,50,50)

	Engine.run(engine);
	
}


function draw() {
  rectMode(CENTER);
  background(450);
  tree.display();
  boy.display();
  
  drawSprites();
 
}



