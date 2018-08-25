
function Box(difficulty) {

  //sets box with according to difficulty
  switch(difficulty) {
    case "easy":
      this.w = 50;
      break;
    case "medium":
      this.w = 35;
      break;
    case "hard":
      this.w = 20;
  }

  // box height
  this.h = 50;

  // the box location
  this.x = random(0, width - this.w);
  this.y = height - this.h;

  this.draw = function() {
    // drawing the box
    push();
    fill(0);
    rect(this.x, this.y, this.w, this.h);
    pop();
  }
}
