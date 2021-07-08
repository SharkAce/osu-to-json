function setup() {
  let canvas = createCanvas(511, 383);
  canvas.parent('canvas');
  frameRate(60); 
}

// Time before object dissapears
let delay = 1000;
// Speed at which hitobjects appear
let speed = 5;


// Time value
let time = 0;
function draw() {
  background(220);    
  if (time >= osu[osu.length-1].time - speed - 1) {
    // If max time exceeded, restart at 0.
    time = 0;
  } else {
    // Increment time value
    time+=speed;
  }
  // Scan every hitobject & display at right time
  for (let i = 0; i < osu.length; i++) {
    if (osu[i].time >= time && osu[i].time <= (time + delay)) {
      // Save x,y coordinates
      let x = osu[i].x;
      let y = osu[i].y;
      // Draw every hitobject coordinate as a circle
      circle(x, y, 4);
      // Display type
      text(osu[i].type.type, x, y)
    }
  }
}
