// Step 1: namspacing physics Engine world and bodies
const Engine = Matter.Engine;  //Universe
const World = Matter.World;   //Earth
const Bodies = Matter.Bodies;  //Humans, Trees, Animals etc

// Step 2: Create Engine and World for ouwn game
var myEngine, myWorld;

var object1, ground, ball;

function setup() {
  createCanvas(400, 400);
  //Step 3: creating engine for your own engine
  myEngine = Engine.create(); // myEngine will have it's own world
  myWorld = myEngine.world;

  //Step 4 : Creating a rectangular body
  object1 = Bodies.rectangle(200, 200, 50, 50)

  //Intermediate step as per requirement
  var ground_options = {
    isStatic: true
  } //JSON format

  ground = Bodies.rectangle(200, 390, 400, 20, ground_options)

  var ball_options = {
    restitution: 0.8
  }
  ball = Bodies.circle(100, 10, 10, ball_options)

  //Step 5 : Add the body to the world
  World.add(myWorld, object1)
  World.add(myWorld, ground)
  World.add(myWorld, ball)

  console.log(ball);
}

function draw() {
  // Step 6 : Update your engine using physics engine
  Engine.update(myEngine)
  background("lightblue");

  //Step 7: drawing the object
  rectMode(CENTER)
  fill("grey");

  rect(object1.position.x, object1.position.y, 50, 50)

  fill("brown");

  rect(ground.position.x, ground.position.y, 400, 20)

  ellipseMode(RADIUS)
  fill("purple");
  ellipse(ball.position.x, ball.position.y, 20, 20)

}