// the balloons
let balloon1, balloon2;
let balloons = [];

// the bulbs
let redBulb, greenBulb, blueBulb;
let bulbs = [];

// the dragging offset
let dx, dy;

// the effectiveness of a bulb's color
let redEffective = 300;
let greenEffective = 200;
let blueEffective = 250;


function setup() {
  createCanvas(600, 600);
  rectMode(CENTER);

  // creating the balloons
  balloon1 = new Balloon(180 , 130);
  balloon2 = new Balloon(330, 270);
  balloons.push(balloon1);
  balloons.push(balloon2);

  // creating the bulbs
  redBulb = new Bulb(130, 85, "red", false);
  greenBulb = new Bulb(280, 230, "green", false);
  blueBulb = new Bulb(430, 370, "blue", false);

  bulbs.push(redBulb);
  bulbs.push(greenBulb);
  bulbs.push(blueBulb);

}

function draw() {
  background(255);

  // drawing and updating the balloons
  for (var balloon of balloons) {
    balloon.draw();
    balloon.update();
  }

  // drawing and updating the bulbs
  for (var bulb of bulbs) {
    bulb.draw();
    bulb.update();
  }

}

function mousePressed() {

  // checking if the user wants to drag the bulb
  for (var i = 0; i < bulbs.length; i++) {
    bulb = bulbs[i];
    if (mouseX > bulb.x - bulb.w / 2&&
      mouseX < bulb.x + bulb.w / 2 &&
      mouseY > bulb.y - bulb.h / 2 &&
      mouseY < bulb.y + bulb.h / 2) {

      bulb.drag = true;

      // bringing the dragged bulb to front
      bulbs.splice(i, 1);
      bulbs.push(bulb);

      // setting dragging offset
      dx = bulb.x - mouseX;
      dy = bulb.y - mouseY;
    }
  }
}

function mouseReleased() {
  // stop dragging
  for (var bulb of bulbs) {
    bulb.drag = false;
  }
}
