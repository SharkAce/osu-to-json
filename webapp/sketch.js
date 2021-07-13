

let osu;
let meta;
let map_name;
let map_version;
let map_creator;
let map_artist;

function preload() {
  let osu_URL = "http://127.0.0.1:8080/compiled_songs/FREEDOM_DiVE_[FOUR_DIMENSIONS].json";
  // http request osu map from gh repo
  fetch(osu_URL)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    osu = data.HitObjects;
    meta = data.Metadata;
    map_name = meta.Title;
    map_version = meta.Version;  
    map_creator = meta.Creator;
    map_artist = meta.Artist;
  })
  .catch(function (error) {
    console.log("Error: " + error);
  });
}
let margin = 30;
let playArea_X = 512;
let playArea_Y = 384;
let wnx = (playArea_X*2) + margin*2;
let wny = (playArea_Y*2) + margin*2;
function setup() {
  let canvas = createCanvas(wnx, wny);
  canvas.parent('canvas');
  frameRate(60); 
}

// Time before object dissapears
let delay = 500;
// Speed at which hitobjects appear
let speed = 5;

// Time value
let time = 1500;

function draw() {
  if (osu === undefined) {
    // Display text for 'osu' not defined
    background(0);
    push();
    textSize(32);
    textAlign(CENTER);
    fill(255)
    text('osu map not found, please reload page', wnx/2, wny/2);
    text('try: ', wnx/2 - 160, wny/2 + 50);
    fill(155,255,100);
    text('npm run server-up',wnx/2 + 20, wny/2 + 50);
    pop();
  } else {
    
    background(51); 
    scale(2);

    push();
      // Graphic settings
      translate(margin/2, margin/2);
      stroke(0);
      noFill();
      // Render
      drawHitObjects();
    pop();
  }
}
