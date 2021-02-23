
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boy;

function preload()
{
	boyImage = loadImage("sprites/boy.png");
}

function setup() {
	createCanvas(1200, 700);
	boy = createSprite(250,550,50,100);
	boy.addImage(boyImage);
	boy.scale = 0.15
	
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	
	ground = new Ground(600,650,1200,30)
	tree  =new Tree(950,650);
	stone = new Stone(170,430,30)
	elastic = new Elastic(stone.body,{x:170,y:465});

	mango1=new Mango(1000,200,30);
  mango2=new Mango(1050,300,30);
	mango3=new Mango(1000,160,30);
	mango4=new Mango(880,120,30);
	mango5=new Mango(900,90,30);
	mango6=new Mango(860,320,30);
	mango7=new Mango(850,270,20);
	mango8=new Mango(950,200,20);
	mango9=new Mango(800,280,20);
	mango10=new Mango(900,250,20);
	mango11=new Mango(1000,100,20);
	mango12=new Mango(850,180,20);
}


function draw() {
	background(0);
	Engine.update(engine);
	drawSprites();
  
  tree.display();
  ground.display();
  stone.display();
elastic.display();

mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango6.display();
 mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();

  detectollision(stone,mango1);
  detectollision(stone,mango2);
  detectollision(stone,mango3);
  detectollision(stone,mango4);
  detectollision(stone,mango5);
  detectollision(stone,mango6);
  detectollision(stone,mango7);
  detectollision(stone,mango8);
  detectollision(stone,mango9);
  detectollision(stone,mango10);
  detectollision(stone,mango11);
  detectollision(stone,mango12);

text(mouseX + "," + mouseY, mouseX,mouseY);
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body, {x:mouseX,y:mouseY});
}

function mouseReleased(){
      	elastic.fly();
		  Matter.Body.setStatic(stone.body,false);
}

function detectollision(lstone,lmango){
	/*var collision = Matter.SAT.collides(lstone,lmango);
	if(collision.collided){
		console.log("collided");
		Matter.Body.setStatic(lmango,false);	
	}*/
  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  //console.log(distance)
 // console.log(lmango.r+lstone.r)
  	if(distance<=lmango.r+lstone.r)
    {
      //console.log(distance);
  	  Matter.Body.setStatic(lmango.body,false);
    }

  }

  function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(stone.body, {x:170, y:430}) 
	  elastic.attach(stone.body);
	}
  }