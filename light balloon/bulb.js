function Bulb(x, y, _color, drag) {
  // storing the bulb parameters
  this.x = x - 20;
  this.y = y - 35;
  this.w = 40;
  this.h = 70;
  this.drag = drag;

  // the color components of each bulb
  if (_color == "red") {
    this.r = 255;
    this.g = 0;
    this.b = 0;
  }
  else if (_color == "green") {
    this.r = 0;
    this.g = 255;
    this.b = 0;
  }

  else if (_color == "blue") {
    this.r = 0;
    this.g = 0;
    this.b = 255;
  }

  // the color of the bulb
  this.color = color(this.r, this.g, this.b);

  this.draw = function() {
    // drawing the bulb
    push();
    fill(this.color);
    ellipse(this.x, this.y, this.w, this.h);
    pop();

    push();
    fill(0);
    rect(this.x - 1, this.y - (this.h /2), 24, 16);
    pop();
  }

  this.update = function() {
    // dragging the bulb
    if (this.drag) {
      this.x = mouseX + dx;
      this.y = mouseY + dy;
    }
  }
}
