const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var myEngine,myworld;
var ground;
var ball;
function setup() {
  var canvas=createCanvas(400,400);
  myEngine=Engine.create()
  myworld=myEngine.world
var option={
  isStatic: true
}

var option={
  restitution: 1.0
}


ground=Bodies.rectangle(200,380,400,50,option)
World.add(myworld,ground);
ball=Bodies.circle(200,100,20,option);
World.add(myworld,ball);


}

function draw() {
  background(0);
  Engine.update(myEngine);
  rectMode(CENTER);
  rect(200,200,50,50);
rect(ground.position.x,ground.position.y,400,20)
circle(ball.position.x,ball.position.y,50)

  drawSprites();
}

