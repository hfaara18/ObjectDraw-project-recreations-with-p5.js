// the baskets
let lightBasket, darkBasket, colorBasket;

// the correct basket and the laundry
let correctBasket;
let _laundry;

// if user is dragging
let dragging = false;

// the laundry parameters
let x, y, w, h, dx, dy;

// the color components
let r, g, b;

// color index to check correctness
let colorIndex = 0;

// scores
let correctScore = 0;
let incorrectScore = 0;
let correct, incorrect;


function setup() {
  createCanvas(600, 500);

  // the laundry parameters
  x = 250;
  y = 400;
  w = 100;
  h = 50;

  // the baskets
  lightBasket = new Basket( 50, 10, "LIGHT");
  darkBasket = new Basket(250, 10, "DARK" );
  colorBasket = new Basket(450, 10, "COLOR");

  // the laundry
  _laundry = new Laundry();
}


function draw() {
  background(255);
  // drawing baskets
  drawBaskets();

  // drawing laundry
  _laundry.draw();
  _laundry.update();

  //checking laundry position and updating scores
  checkLaundry();
  drawScores();

}

function drawBaskets() {

  // drawing the 3 baskets
  lightBasket.draw();
  darkBasket.draw();
  colorBasket.draw();

}

function drawScores() {

  // Updating user scores
  push();
  textSize(20);
  correct = text("Correct : " + correctScore, 10, 420);
  incorrect = text("Incorrect : " + incorrectScore, 10, 450);
  pop();
}

function mousePressed() {

  // checking if user is dragging laundry
  if (mouseX > x && mouseX < x + w
    && mouseY > y && mouseY < y + h) {
    dragging = true;

    // setting dragging offset
    dx = x - mouseX;
    dy = y - mouseY;

  }
}

function mouseReleased() {
  // stop dragging
  dragging = false
}

function checkLaundry() {

  // allocating a correct basket
  if (colorIndex <= 230) {
  	correctBasket = darkBasket;
  } else if (colorIndex >= 600) {
  	correctBasket = lightBasket;
  } else if (colorIndex > 230 &&
    colorIndex < 600) {
  	correctBasket = colorBasket;
  }

  // check correctness of dragged laundry
  if(dragging) {
    if (mouseX > correctBasket.x && mouseX < correctBasket.x + w
      && mouseY > correctBasket.y && mouseY < correctBasket.y + h) {
        // increase correct score
        correctScore += 1;

        //stop dragging
        dragging = false;

        // create new laundry
        x = 250;
        y = 400;
        _laundry = new Laundry();
      }

  }
  if(!dragging) {
    if (x != 250) {
      // return laundry to its original position
      x = 250;
      y = 400;

      // increase incorrect score
      incorrectScore += 1;

    }
  }
}
