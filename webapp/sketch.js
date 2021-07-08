

let osu;

function preload() {
  let osu_URL = "https://raw.githack.com/sharkAce/osu-to-json/main/compiled/FREEDOM DiVE [FOUR DIMENSIONS].json";

  // http request osu map from gh repo
  fetch(osu_URL)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    osu = data;
  })
  .catch(function (error) {
    console.log("Error: " + error);
  });
    // /!\ Will remove http request once moved to local server /!\
}

function setup() {
  let canvas = createCanvas(511*2, 383*2);
  canvas.parent('canvas');
  frameRate(60); 
}

// Time before object dissapears
let delay = 500;
// Speed at which hitobjects appear
let speed = 5;


// Time value
let time = 1000;
function draw() {
  scale(2)
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
        console.log('Unhandled type: ' + type);
      }
      hitObject.render();
    }
  }
}
