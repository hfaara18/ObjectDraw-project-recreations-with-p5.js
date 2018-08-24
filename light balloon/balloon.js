
function Balloon(x, y) {
  // the balloon parameters
  this.x = x;
  this.y = y;
  this.w = 80;
  this.h = 140;
  this.color = "#ffffff";

  // draws the balloon unto the canvas
  this.draw = function() {
    push();
    fill(this.color);
    ellipse(this.x, this.y, this.w, this.h);
    line(this.x, this.y + this.h /2, this.x,
      this.y + this.h /2 + 180 );
    pop();

  }

  // updates the balloon's color
  this.update = function() {
    // balloon color components
    let r = 0;
    let g = 0;
    let b = 0;

    // distance between balloon and bulb centers
    let distance = dist(this.x, this.y, redBulb.x, redBulb.y);

    // getting the effectiveness of the red bulb on balloon
    let effective = redEffective;
    if (distance < effective) {
      r = floor((1 - (distance/ effective)) * redBulb.r);
      console.log("r: "+ r);
      g = floor((1 - (distance/ effective)) * redBulb.g);
      console.log("g: " + g);
      b = floor((1 - (distance/ effective)) * redBulb.b);
      console.log("b: " + b);
    }

    // distance between balloon and bulb centers
    distance = dist(this.x, this.y, greenBulb.x, greenBulb.y);

    // getting the effectiveness of the green bulb on balloon
    effective = greenEffective;
    if (distance < effective) {
      r += floor((1 - (distance/ effective)) * greenBulb.r);
      g += floor((1 - (distance/ effective)) * greenBulb.g);
      b += floor((1 - (distance/ effective)) * greenBulb.b);
    }

    // distance between balloon and bulb centers
    distance = dist(this.x, this.y, blueBulb.x, blueBulb.y);

    // getting the effectiveness of the blue bulb on balloon
    effective = blueEffective;
    if (distance < effective) {
      r += floor((1 - (distance/ effective)) * blueBulb.r);
      g += floor((1 - (distance/ effective)) * blueBulb.g);
      b += floor((1 - (distance/ effective)) * blueBulb.b);
    }

    // retrieving the resulting color 
    this.color = color(Math.min(r, 255), Math.min(g, 255), Math.min(b, 255));
  }
}
