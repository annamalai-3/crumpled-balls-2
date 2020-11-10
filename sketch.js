
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

	//Create the Bodies Here.
     paper = new Paper(200,70,20);
     ground = new Ground(300,650,800,30);
     box = new Box(500,580,20,100);
     box2 = new Box(400,580,20,100);
     box3 = new Box(450,620,100,20);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  paper.display();
  ground.display();
  box.display();
  box2.display();
  box3.display()
  drawSprites();
 
}
function keyPressed(){

  if(keyCode===32){

    Matter.Body.applyForce(paper.body,paper.body.position,{x:45,y:-45});
  }



}


