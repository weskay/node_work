let mymodule = require('./filtered-ls-module.js');

let dir = process.argv[2];
let ext = process.argv[3];

mymodule(dir, ext, function (err, list) {
	if (err) {
	   return console.error(err);
	}
	list.forEach(function (item) {
		console.log(item);
	    });
    });