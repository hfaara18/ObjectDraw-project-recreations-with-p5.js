//the canvas and its location
let canvas;
let x, y;

// the buttons
let easyButton, mediumButton, hardButton;

// canvas components
let box, ball, _rect;

// hits and misses
let misses = 0;
let hits = 0;
let missesText, hitsText;

// the allowed ball drop area
let easyLine = 300;
let mediumLine = 200;
let hardLine = 100;

// the difficulty ine
let diffLine;

// if user missed
let missed = false;

function setup() {
  // the canvas
  canvas = createCanvas(600, 600);

  // creating the canvas
  createButtons();

  // initializing difficulty
  easyBox();

  // initializing ball
  ball = new Ball(-5, -5);
}

function draw() {

  // drawing canvas components
  background(255);
  centerCanvas();
  positionDOM();
  drawRect(diffLine);

  box.draw();
  drawText();

  // moving the ball
  if(ball.y > 0) {
    ball.y += 4;
  }

  // drawing the ball and checking its position
  ball.draw();
  ball.checkBox();
  
  // inform user to try again
  if(missed) {
	 text("Try again", 270, 90);
  }
}

function mousePressed() {
  
  // reset missed value
  missed = false;
  
  // drops a ball if user clicks within
  // allowed area
  
  if(mouseY < diffLine) {
    ball = new Ball(mouseX, mouseY);
  }
}

function centerCanvas() {

  //centering canvas
  x = (windowWidth - width) / 2;
  y = (windowHeight - height) / 2;
  canvas.position(x, y);
}

function positionDOM() {

  // positioning buttons relative to canvas
  easyButton.position(x +  120, y - 40);
  mediumButton.position(x + 270, y - 40);
  hardButton.position(x + 420, y  - 40);

}

function createButtons() {
  //the easy button
  easyButton = createButton("EASY");
  easyButton.addClass("btn btn-success");
  easyButton.mousePressed(easyBox);

  // the medium button
  mediumButton = createButton("MEDIUM");
  mediumButton.addClass("btn btn-primary");
  mediumButton.mousePressed(mediumBox);

  // the hard button
  hardButton = createButton("HARD");
  hardButton.addClass("btn btn-danger");
  hardButton.mousePressed(hardBox);
}

function easyBox() {
  // creates a box with the easy setting
  box = new Box("easy");
  _difficulty = "easy"
  diffLine = easyLine;
  hits = 0;
  misses = 0;
}

function mediumBox() {
  // creates a box with the medium setting
  box = new Box("medium");
  _difficulty = "medium";
  diffLine = mediumLine;
  hits = 0;
  misses = 0;
}

function hardBox() {
  // creates a box with the hard setting
  box = new Box("hard");
  _difficulty = "hard";
  diffLine = hardLine;
  hits = 0;
  misses = 0;
}

function drawText() {
  // creates the score texts
  textSize(15);
  missesText = text("Misses: " + misses, 10, 15);
  hitsText = text("Hits: " + hits,  500, 15);
}

function drawRect(_diff) {
  // draws the difficulty area
  _rect = rect(-1, -1, width + 1, _diff);
}
