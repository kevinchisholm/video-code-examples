//get a reference to the filepath module
var FP = require('filepath');

FP.newPath(__dirname).recurse(function (path) {
	//console.dir(path);
	console.log(path.toString());
})