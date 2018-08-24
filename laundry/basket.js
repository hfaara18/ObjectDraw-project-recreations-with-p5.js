function Basket(x, y, label) {
  // storing variables
  this.x = x;
  this.y = y;
  this.label = label;

  // drawing a basket
  this.draw = function() {
    push();
    
    if (this.label == "LIGHT") {
      fill(255);
      rect(this.x, this.y, 100, 50);
      stroke(0);
      fill(0);
      text(label, this.x + 25, this.y + 30 );
    }
    else if (this.label == "DARK") {
      fill(0);
      rect(this.x, this.y, 100, 50);
      stroke(255);
      fill(255);
      text(label, this.x + 30, this.y + 30 );
    }
    else {
      fill("#0095DD");
      rect(this.x, this.y, 100, 50);
      stroke(255);
      fill(255);
      text(label, this.x + 30, this.y + 30 );
    }

    pop();

  }
}
