function Laundry() {

  // random color components
  r = random(255);
  g = random(255);
  b = random(255);

  // random color
  this.col = color(r, g, b);

  // color index
  colorIndex = r + g + b;

  // drawing laundry
  this.draw = function() {
    push();
    fill(this.col);
    rect( x, y, w, h);
    pop();
  }

  // updating laundry position
  this.update = function() {
    if (dragging) {
      x = mouseX + dx;
      y = mouseY + dy;
    }
  }

}
