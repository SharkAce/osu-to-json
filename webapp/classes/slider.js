class Slider {
  constructor(x, y, path, type) {
    this.pos = createVector(x, y);
    this.end = createVector(path.end.x, path.end.y);
    this.type = type;
    this.color = [0, 0, 0, 50];
    this.passthrough = [];
    if (type === 'bezier' || type === 'perfect') {
      for (let i = 0; i < path.passthrough.length; i++) {
        this.passthrough.push(createVector(path.passthrough[i].x, path.passthrough[i].y));
      }
    }

  }
  render() {
      // Render bezier curve only supports 1 passthrough
      if (this.type === 'bezier') {
        let args = [this.pos.x, this.pos.y];
        for (let i = 0; i < this.passthrough.length; i++) {
          args.push(this.passthrough[i].x);
          args.push(this.passthrough[i].y);
        }
        args.push(this.end.x);
        args.push(this.end.y);
        console.log(args);
        // Looks like passthrough points != control points
        bezier.apply(this, args);
        // bezierCurve(
        //   [this.pos.x, this.pos.y], [this.passthrough.x, this.passthrough.y], [this.end.x, this.end.y],
        //   100,
        //   24,
        //   this.color
        // );
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

      if (this.type === 'bezier' || this.type === 'perfect') {
        for (let i = 0; i < this.passthrough.length; i++) {
          fill(0, 0, 255);
          text('Bezier passthrough', this.passthrough[i].x + 10, this.passthrough[i].y);
          ellipse(this.passthrough[i].x, this.passthrough[i].y, 2, 2);
        }
      }

      fill(255, 0, 0);
      text('End point', this.end.x + 10, this.end.y);
      ellipse(this.end.x, this.end.y, 2, 2);
    }
    //Add click event handling
}
