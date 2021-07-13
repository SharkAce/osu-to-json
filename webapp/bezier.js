function bezierCurve(p0, p1, p2, resolution = 10, size = 1, color = [0,0,0,255]) {
  let p0_x = p0[0];
  let p0_y = p0[1];
  let p1_x = p1[0];
  let p1_y = p1[1];
  let p2_x = p2[0];
  let p2_y = p2[1];
  let points1 = [];
  let points2 = [];
  let points3 = [];
  let res = 1/resolution;
  noStroke();
  textSize(8)

  fill(0, 255, 100);
  text('Start point', p0_x + 10, p0_y);
  ellipse(p0_x, p0_y, 4, 4);


  fill(0, 0, 255);
  text('Bezier passthrough', p1_x + 10, p1_y);
  ellipse(p1_x, p1_y, 4, 4);

  fill(255, 0, 0);
  text('End point', p2_x + 10, p2_y);
  ellipse(p2_x, p2_y, 4, 4);


  fill(0);
  for (let t = 0; t < 1; t+=res) {
    // points1
    let mult_x = (1 - t)*p0_x;
    let mult_y = (1 - t)*p0_y;

    let second_x = t*p1_x;
    let second_y = t*p1_y;

    points1.push([mult_x+second_x, mult_y+second_y]);
  }
  for (let t = 0; t < 1; t+=res) {
    // points2
    let mult_x = (1 - t)*p1_x;
    let mult_y = (1 - t)*p1_y;

    let second_x = t*p2_x;
    let second_y = t*p2_y;

    points2.push([mult_x+second_x, mult_y+second_y]);
  }
  for (let t = 0; t < 1; t+=res) {
    // points3

    let i = Math.round(t*resolution);
    let mult_x = (1 - t)*points1[i][0];
    let mult_y = (1 - t)*points1[i][1];

    let second_x = t*points2[i][0];
    let second_y = t*points2[i][1];

    let ans_x = mult_x+second_x;
    let ans_y = mult_y+second_y;

    points3.push([ans_x, ans_y]);

  }
  noFill();
  stroke(color[0],color[1],color[2],color[3]);
  strokeWeight(size);
  beginShape();
  for (let i = 0; i < points3.length; i++) {
    let x = points3[i][0];
    let y = points3[i][1];
    vertex(x, y);
  }
  endShape();
}