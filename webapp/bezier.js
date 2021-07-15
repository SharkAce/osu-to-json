/**
 * @method bezier
 * @param {Number} x0 Starting point x coordinate
 * @param {Number} y0 Starting point y coordinate
 * @param {Number} x1 Control point x coordinate
 * @param {Number} y1 Control point y coordinate
 * @param {Number} x2 End point x coordinate
 * @param {Number} y2 End point x coordinate
 * @param {Number} resolution Number of points
 * @returns 
 */
function bezier(x0, y0, x1, y1, x2, y2, resolution = 10) {
  let p0_x = x0;
  let p0_y = y0;
  let p1_x = x1;
  let p1_y = y1;
  let p2_x = x2;
  let p2_y = y2;

  let points1 = [];
  let res = 1 / resolution;
  for (let t = 0; t < 1; t += res) {
    // points1
    let mult_x = (1 - t) * p0_x;
    let mult_y = (1 - t) * p0_y;

    let second_x = t * p1_x;
    let second_y = t * p1_y;

    points1.push([mult_x + second_x, mult_y + second_y]);
  }
  let points2 = [];
  for (let t = 0; t < 1; t += res) {
    // points2
    let mult_x = (1 - t) * p1_x;
    let mult_y = (1 - t) * p1_y;

    let second_x = t * p2_x;
    let second_y = t * p2_y;

    points2.push([mult_x + second_x, mult_y + second_y]);
  }
  let points3 = [];
  for (let t = 0; t < 1; t += res) {
    // points3
    let i = Math.round(t * resolution);
    let mult_x = (1 - t) * points1[i][0];
    let mult_y = (1 - t) * points1[i][1];

    let second_x = t * points2[i][0];
    let second_y = t * points2[i][1];

    let ans_x = mult_x + second_x;
    let ans_y = mult_y + second_y;

    points3.push([ans_x, ans_y]);

  }
  for (let i = 0; i < points3.length; i++) {
    let x = points3[i][0];
    let y = points3[i][1];
    curve_points.push({ x: x, y: y });
  }
  return curve_points;
}
