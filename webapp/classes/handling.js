class Handling {}

Handling.error = function error(info) {
  let type = info.type;
  let sliderType = info.sliderType;
  let i = info.index;
  if (sliderType !== undefined) {
    console.log('Unhandled type: ' + type + '/' + sliderType+ ' found at index: ' + i);
  } else {
    console.log('Unhandled type: ' + type + ' found at index: ' + i);
  }
  console.log('Here is the hitObject: ', osu[i]);
  console.trace();
}
