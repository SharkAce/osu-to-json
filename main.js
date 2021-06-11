let path = './songs/FREEDOM_DiVE.osu'
const osujson = require('osu-json');

const fs = require('fs');
let file = fs.readFileSync(path, 'utf8');


osujson.ParseOSUFileAsync(file).then( (output)=>{
	let data = JSON.stringify(output.HitObjects)
	fs.writeFileSync('./compiled/FREEDOM_DiVE.json', data)
})
.catch( (err)=>{
    throw new Error(err);
});