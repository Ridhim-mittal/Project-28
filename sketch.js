
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var mango1, mango2, mango3, mango4, mango5;
var boy, rock, slingshot, tree, ground;
var mangoBodyPosition, stoneBodyPosition;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;


	ground = new Ground(400,695,800,20);
	mango1 = new Mango(600,300);
	mango2 = new Mango(710,170);
	mango3 = new Mango(650,240);
	mango4 = new Mango(760,240);
	mango5 = new Mango(490,310);
	mango6 = new Mango(600,160);
	tree = new Tree(650,400);
	boy = new Boy(150,630);
	rock = new Rock(110,565);
	slingshot = new Rope(rock.body,{x:110,y:565});

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightgreen");

  keyPressed();
  
  
ground.display();
tree.display();
mango1.display();
mango2.display();
mango3.display();
mango4.display();
mango5.display();
mango6.display();
boy.display();
rock.display();
slingshot.display();

detectCollision(mango1, rock);
detectCollision(mango2, rock);
detectCollision(mango3, rock);
detectCollision(mango4, rock);
detectCollision(mango5, rock);



  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(rock.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}


function detectCollision(lmango,lstone){

  mangoBodyPosition = lmango.body.position;
  stoneBodyPosition = lstone.body.position;


  var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y );
   if(distance<=lmango.width + lstone.width){
	  
	Matter.Body.setStatic(lmango.body,false);

   }

}

function keyPressed(){
if(keyCode === 32){

  Matter.Body.setPosition(rock.body,{x:110, y: 565});
  slingshot.attach(rock.body);

}



}