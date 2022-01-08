/* eslint-disable no-undef, no-unused-vars */
var Engine = Matter.Engine,
  // Render = Matter.Render,
  World = Matter.World,
  Bodies = Matter.Bodies;

let mySound;
let mySound2;
function preload() {
  glassImg = loadImage("glass.png");
  quarterImg = loadImage("quarter.png");
  cdImg = loadImage("coindrop.png");
  metalImg = loadImage("metal.png");
  mySound = loadSound("coindrop.mp3");
  mySound2 = loadSound("coindrop2.mp3");
}

var engine;
var world;
var circles = [];
let score = 0;

function setup() {
  createCanvas(1000, 1000);
  // background("red");
  engine = Engine.create();
  world = engine.world;
  engine.world.gravity.y = 0;
  Engine.run(engine);
  // checkout thedozer mass and density
  dozer = Bodies.rectangle(500, 10, 1000, 100, { density: 1 });
  World.add(world, dozer);
}

function mousePressed() {
  circles.push(new Circle(random(10, 700), 110, 30));
  mySound2.play();
}

dozerPos = 0;
dozerForward = true;

function draw() {
  background(51);
  // background("red");
  // Engine.update(engine);
  clear();
  fill("black");

  if (dozerForward == true) {
    dozerPos = dozerPos + 3;
    if (dozerPos > 70) {
      dozerForward = false;
    }
  } else {
    dozerPos--;
    if (dozerPos < 0) {
      dozerForward = true;
    }
  }

  // Cash out line
  line(0, 500, 1500, 500);
  image(cdImg, 0, 500, 1000, 500);
  dozer.position.y = dozerPos;
  //console.log(dozerPos);

  rectMode(CENTER);
  rect(dozer.position.x, dozer.position.y, 1000, 100);

  for (var i = 0; i < circles.length; i++) {
    circles[i].show();
    if (circles[i].body.position.y > 500) {
      console.log("YOu made it");
      circles.splice(i, 1);
      mySound.play();
      // circles.poped = true;
      score = score + 0.25;
      // score = score + circles.value;
    }
  }

  textSize(32);
  text(score + "$", 10, 300);
  // for (let coin of Circle) {
  // if (body.poped == false) {
  //   Circle(x, y, r);
}
// for (let coin of circle)
// for (let circle of circles) {
//   if (circle.body.position.y > 550) {
//     console.log("YOU MADE IT");
//     circles.poped = true;
//     score = score + 0.25;
//     score = score + circles.value;
//   }
// }

// This Redraws the Canvas when resized
windowResized = function () {
  resizeCanvas(windowWidth, windowHeight);
};
