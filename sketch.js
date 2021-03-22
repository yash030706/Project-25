var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var world,engine;
var box;
var leftBox,baseBox,rightBox;
var leftboxBody,baseboxBody,rightboxBody;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale= 0.2;

	
	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4, isStatic:true});
	World.add(world, packageBody);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );

	boxPosition = width/2-100;
	boxY = 610;

	leftBox = createSprite(boxPosition,boxY,20,100);
	leftBox.shapeColor = color(255,0,0);

	//leftboxBody = Bodies.rectangle(boxPosition+20,boxY,20,100,{isStatic:true});
	//World.add(world,leftboxBody);

	baseBox = createSprite(boxPosition+100,boxY+40,200,20);
	baseBox.shapeColor = color(255,0,0);

	rightBox = createSprite(boxPosition+200,boxY,20,100);
	rightBox.shapeColor = color(255,0,0);


 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y
  keyPressed(); 
  drawSprites();
  
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	// Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	Matter.Body.setStatic(packageBody,false);    
  }

}



