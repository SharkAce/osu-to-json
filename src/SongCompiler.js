// File name, if not specified in cli, 'FREEDOM_DiVE' is default.
let name = process.argv[2] || 'FREEDOM DiVE [FOUR DIMENSIONS]';

// Where to find the .osu file
let path = './songs/'+name+'.osu';
// Where to save the file once compiled into .json.
let compiledPath = './compiled/'+name+'.json';

const osujson = require('osu-json');

const fs = require('fs');
let file = fs.readFileSync(path, 'utf8');


osujson.ParseOSUFileAsync(file).then( (output)=>{
	let data = JSON.stringify(output.HitObjects);
	fs.writeFileSync(compiledPath, data)
})
.catch( (err)=>{
    throw new Error(err);
});
