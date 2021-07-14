class Slider {
  constructor(x, y, path, type) {
    this.pos = createVector(x, y);
    this.end = createVector(path.end.x, path.end.y);
    this.type = type;
    this.color = [0,0,0,50];
    if (type === 'bezier' || type === 'perfect') {
      this.passthrough = createVector(path.passthrough.x, path.passthrough.y);
    }
  }
  render() {
    // Render bezier curve
    if (this.type === 'bezier') {
      bezierCurve(
        [this.pos.x, this.pos.y],
        [this.passthrough.x, this.passthrough.y],
        [this.end.x, this.end.y],
        100,
        24,
        this.color
      );
    } else if (this.type === 'linear') {
      stroke(
        this.color[0],
        this.color[1],
        this.color[2],
        this.color[3]
      );
      strokeWeight(24);
      line(this.pos.x, this.pos.y, this.end.x, this.end.y);
    }

    // Render points
    noStroke();
    textSize(8);
    fill(0, 255, 100);
    text('Start point', this.pos.x + 10, this.pos.y);
    ellipse(this.pos.x, this.pos.y, 2, 2);

    if (this.type === 'bezier') {
      fill(0, 0, 255);
      text('Bezier passthrough', this.passthrough.x + 10, this.passthrough.y);
      ellipse(this.passthrough.x, this.passthrough.y, 2, 2);
    }

    fill(255, 0, 0);
    text('End point', this.end.x + 10, this.end.y);
    ellipse(this.end.x, this.end.y, 2, 2);
  }
  //Add click event handling
}