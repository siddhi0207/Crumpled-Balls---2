const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var  ball, ground;
var world;
var dustbinobj;
function setup(){
	createCanvas(1600,700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	dustbinobj = new Dustbin(1200,550,250,250)
    ball = new Paper(200,450,40);
	ground = new Ground(width/2,670,width,20);
	//Create a Ground

	Engine.run(engine);
}

function draw(){

	rectMode(CENTER);
	background("white");

     ball.display();
	 ground.display();
     dustbinobj.display();

}

function keyPressed(){

	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85});
		
	}
	

}