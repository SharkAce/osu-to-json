// File name, if not specified in cli, 'FREEDOM DiVE [FOUR DIMENSIONS]' is default.
let name = process.argv[2] || 'FREEDOM_DiVE_[FOUR_DIMENSIONS]';

// Where to find the .osu file
let path = './songs/'+name+'.osu';
// Where to save the file once compiled into .json.
let compiledPath = './webapp/compiled_songs/'+name+'.json';

const osujson = require('osu-json');

const fs = require('fs');
let file = fs.readFileSync(path, 'utf8');


osujson.ParseOSUFileAsync(file).then( (output)=>{
	let data = JSON.stringify(output);
	fs.writeFileSync(compiledPath, data)
})
.catch( (err)=>{
    throw new Error(err);
});
