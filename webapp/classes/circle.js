class Circle {
  constructor(x, y, time) {
    this.time = time;
    this.pos = createVector(x, y);
    this.size = 8;
  }
  render() {
    noStroke();
    fill(255);
    text('circle', this.pos.x, this.pos.y)
    ellipse(this.pos.x, this.pos.y, this.size, this.size);
  }
  // Add click event handling
}