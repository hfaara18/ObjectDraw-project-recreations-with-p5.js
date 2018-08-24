let sign;
let circle;
let _line;
let lamp;
let _text;
let base;


function setup() {
  createCanvas(500, 600);
}

function draw() {

  fill("#ffff00");
  sign = rect(150, 100, 100, 100);
  circle = ellipse(200, 150, 95, 95);
  _line = line(165, 115, 234, 184);

  push();
  fill(0);
  lamp = rect(200, 200, 5, 100);
  _text = text("CLICKING", 170, 155);
  base = line(150, 300, 250, 300);
  pop();
}

function mousePressed() {
  push();
  stroke("#ff0000");
  _text = text("CLICKING", 170, 155);
  pop();
}

function mouseReleased() {
  push();
  stroke(0);
  _text = text("CLICKING", 170, 155);
  pop();
}
