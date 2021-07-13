class Circle {
  constructor(x, y, time) {
    this.time = time;
    this.pos = createVector(x, y);
    this.size = 24;
    this.color = [0,0,0,50];
  }
  render() {
    noStroke();
    textSize(8);
    fill(255)
    text('circle', this.pos.x + 12, this.pos.y)
    fill(this.color[0],this.color[1],this.color[2],this.color[3]);
    ellipse(this.pos.x, this.pos.y, this.size, this.size);
  }
  // Add click event handling
}