function setup() {
  let canvas = createCanvas(511, 383);
  canvas.parent('canvas');
  frameRate(60); 
}
function draw() {
  background(220);

  for (let i = 0; i < osu.length; i++) {
    // Draw every hitobject coordinate as a circle
    circle(osu[i].x, osu[i].y, 4);
  }
}
