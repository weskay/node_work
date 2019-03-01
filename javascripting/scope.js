var a = 1, b = 2, c = 3;
(() => {
    var b = 5, c = 6;

    (() => {
	var b = 8;
	console.log('a: '+a+', b: '+b+', c: '+c);
	(() => {
	    var a = 7, c = 9;

	    (() => {
		var a = 1, c = 8;
		
	    })();
	})();
    })();
})();
