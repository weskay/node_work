let fs = require('fs');
let path = require('path');

module.exports = function (dir, ext, cb) {
    fs.readdir(dir, print);

    function print(err, list){
	if(err){
	   return cb(err);
	}
	list = list.filter(checkExt);
	cb(null, list);
    }

    function checkExt(item){
	if(path.extname(item) === ('.'+ext)){
	    return item;
	}
    }
}