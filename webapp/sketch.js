function setup() {
  let canvas = createCanvas(511, 383);
  canvas.parent('canvas');
  frameRate(60); 
}

// Time before object dissapears
let delay = 500;
// Speed at which hitobjects appear
let speed = 5;


// Time value
let time = 0;
function draw() {
  background(51);    
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
      let type = osu[i].type.type;
      if (type === 'circle') {
        hitObject = new Circle(osu[i].x, osu[i].y, osu[i].time);
      } else if (type === 'slider') {
        hitObject = new Slider(osu[i].x, osu[i].y, osu[i].path, osu[i].time);
      } else {
        console.log('Unhandled type');
      }
      hitObject.render();
    }
  }
}
