var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var package1,ground;
var line1,line2,line3;
var package1Sprite;
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
	

	package1=createSprite(width/2, 80, 10,10);
	package1.addImage(packageIMG)
	package1.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

  
	 line1=createSprite(width/2,height-50,200,20);
	 line1.shapeColor=color("red");
	 line2=createSprite(510,610,20,100);
	 line2.shapeColor=color("red");
	 line3=createSprite(310,610,20,100);
	 line3.shapeColor=color("red");
    


	engine = Engine.create();
	world = engine.world;

	package1 = Bodies.circle(width/2 , 200 , 5 , {restitution:1,isStatic:true});
	World.add(world, package1);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

     
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  package1.x= package1.position.x
  package1.y= package1.position.y

  packageSprite.collide(line1);
  package1Sprite.collide(line1);

  packageSprite.collide(line2);
  package1Sprite.collide(line2);

  packageSprite.collide(line3);
  package1Sprite.collide(line3);

  line1.display();
  line2.display();
  line3.display();


  Engine.run(engine);
  world = engine.world;


  keyPressed(packageBody);


drawSprites();
}





