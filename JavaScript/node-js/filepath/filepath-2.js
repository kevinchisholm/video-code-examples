//get a reference to the filepath module
var FP = require('filepath');

//get a reference to the folder structure that leads up to the current file, set it to the path variable
var path = FP.newPath();

var files = path.list();

console.dir(files);

