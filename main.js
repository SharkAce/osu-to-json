let name = process.argv[2] ||  'FREEDOM_DiVE';

let path = './songs/'+name+'.osu'
const osujson = require('osu-json');

const fs = require('fs');
let file = fs.readFileSync(path, 'utf8');


osujson.ParseOSUFileAsync(file).then( (output)=>{
	let data = JSON.stringify(output.HitObjects)
	fs.writeFileSync('./compiled/'+name+'.json', data)
})
.catch( (err)=>{
    throw new Error(err);
});
