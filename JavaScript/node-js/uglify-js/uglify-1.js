//get a reference to the uglify-js module
var UglifyJS = require('uglify-js');

//get a reference to the minified version of file-1.js
var result = UglifyJS.minify("file-1.js");

//view the output
console.log(result.code);


