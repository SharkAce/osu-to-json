class Slider {
  constructor(x, y, path) {
    this.pos = createVector(x, y);
    this.end = createVector(path.end.x, path.end.y);
    this.passthrough = createVector(path.passthrough.x, path.passthrough.y);
  }
  render() {
    noStroke();

    fill(0, 255, 100);
    text('Start point', this.pos.x, this.pos.y);
    ellipse(this.pos.x, this.pos.y, 4, 4);

    fill(0, 0, 255);
    text('Bezier passthrough', this.passthrough.x, this.passthrough.y);
    ellipse(this.passthrough.x, this.passthrough.y, 4, 4);

    fill(255, 0, 0);
    text('End point', this.end.x, this.end.y);
    ellipse(this.end.x, this.end.y, 4, 4);
  }
}