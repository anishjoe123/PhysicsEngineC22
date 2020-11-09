const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var g, b;
var canvas;
function setup()
{
engine = Engine.create();
world = engine.world;
canvas = createCanvas(400,400);
var g_op = {
  isStatic:true
}
g = Bodies.rectangle(200,350,400,10,g_op);
World.add(world,g);

var b_op = {
restitution:1.1
}
b = Bodies.circle(200,200,50,b_op);
World.add(world,b);


}

function draw()
{
  background("transperant");
  Engine.update(engine);

  rectMode(CENTER);
  rect(g.position.x,g.position.y,400,10);
  ellipseMode(RADIUS);
  ellipse(b.position.x, b.position.y,50,50)
}