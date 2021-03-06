/**
 * Draws the hitObjects from the osu map.
 * This method needs to be called in a p5 canvas context.
 * 
 * @method drawHitObjects
 * 
 */
function drawHitObjects() {
  //Play area
  rect(0, 0, playArea_X, playArea_Y);
  if (time >= osu[osu.length - 1].time - speed - 1) {
    // If max time exceeded, restart at 0.
    time = 0;
  } else {
    // Increment time value
    time += speed;
  }
  // Scan every hitobject & display at right time
  for (let i = 0; i < osu.length; i++) {
    if (osu[i].time >= time && osu[i].time <= (time + delay)) {
      let type = osu[i].type.type;
      let sliderType = osu[i].path.sliderType;
      if (type === 'circle') {
        hitObject = new Circle(osu[i].x, osu[i].y, osu[i].time);
      } else if (type === 'slider') {
        hitObject = new Slider(osu[i].x, osu[i].y, osu[i].path, sliderType);
        if (sliderType !== 'bezier' && sliderType !== 'linear' && sliderType !== 'perfect') {
          Handling.error({
            type: type,
            sliderType: sliderType,
            index: i
          });
        }
      } else {
        Handling.error({
          type: type,
          sliderType: sliderType,
          index: i
        });
      }
      hitObject.render();
    }
  }
}
