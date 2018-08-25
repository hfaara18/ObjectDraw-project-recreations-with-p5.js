function Ball(x, y) {
  // the ball parameters
  this.x = x;
  this.y = y;
  this.r = 15;

  this.draw = function() {
    // drawing the ball
    push();
    fill(0);
    ellipse(this.x, this.y, this.r, this.r);
    pop();
  }

  this.checkBox = function() {
    //checking to see if ball falls into box
    if(ball.y > box.y) {
      if(ball.x > box.x && ball.x < box.x + box.w) {
        hits += 1;
        ball = new Ball(-5, -5);
        box.x = random(0, width - box.w);
      }
      else {
        if (ball.y > 600) {
          misses += 1;
          ball = new Ball(-5, -5);
          box.x = random(0, width - box.w);
        }
      }
    }
  }
}
