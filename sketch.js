var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,box1,box2,box3,box1a,box2a,box3a;
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
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	box1a = createSprite(400,655,180,10);
	box2a = createSprite(310,650,10,20);
	box3a = createSprite(490,650,10,20);
	box1a.shapeColor = "red";
	box2a.shapeColor = "red";
	box3a.shapeColor = "red";
	
	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.3, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	box1 = Bodies.rectangle(400,640,180,10,{isStatic:true});
	World.add(world,box1);
	
	box2 = Bodies.rectangle(300,640,10,20,{isStatic:true});
	World.add(world,box2,{isStatic:true});

	box3 = Bodies.rectangle(400,640,10,20,{isStatic:true});
	World.add(world,box3);
	 
	
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x ;
  packageSprite.y= packageBody.position.y ;
  
  

  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
    Matter.Body.setStatic(packageBody,false);
  
  }
}



