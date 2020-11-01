var paperObject,ground,line1,line2;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	paperObject== Bodies.circle(width/2 , 200 , 5 , {restitution:0.1, isStatic:true});
	
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	line1=createSprite(300,600,20,130);
	line1.shapeColor="white";
    line2=createSprite(500,600,20,130);
	line2.shapeColor="white"

    engine = Engine.create();
	world = engine.world;


	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
    World.add(world,paperObject);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  display();
  drawSprites();
  keyPressed();
}

 var options={
	 isStatic:false,
	 restituition:0.3,
	 friction:0.5,
	 density:1.2,

 }

 function keyPressed() {
	 if (keyCode === UP_ARROW) {
		 Matter.Body.applyForce(paperObject.body.position,{x:85,y:-85})
	 }
 }

