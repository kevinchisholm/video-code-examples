//get a reference to the file system module
var fs = require('fs');

//get a reference to the uglify-js module
var UglifyJS = require('uglify-js');

//get a reference to the minified version of file-1.js
var result = UglifyJS.minify("file-1.js");

//view the output
console.log(result.code);

fs.writeFile("output.min.js", result.code, function(err) {
    if(err) {
        console.log(err);
    } else {
        console.log("File was successfully saved.");
    }
});