let fs = require('fs');
let file = process.argv[2];

fs.readFile(file, spitNumber);

function spitNumber(err, contents) {
	if (err){
	    return console.error(err);
	}
	let lines = contents.toString().split('\n').length - 1;
	console.log(lines);
}