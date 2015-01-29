"use strict";
//set a reference to the file system module
var fs = require('fs');//set a reference to the filepath module
var FP = require('filepath');

//set a reference to the old file name
var oldFileName = 're-name-me.txt';
//set a reference to the new file name
var newFileName = 'ive-been-renamed.txt';
  //set a reference to the folder structure that leads up to the current file, add a trailing slash
var fpFolder = FP.newPath() + '/';
//set a reference to the old file
var fpFile = FP.newPath(oldFileName);

//build the final file paths
var oldFilePath = fpFolder + oldFileName;
//set a reference to the new file path
var newFilePath = fpFolder + newFileName;

//use the fs object's rename method to re-name the file
fs.rename(oldFilePath, newFilePath, function (err) {
  if (err) {console.log(err); return; }

  console.log('The file has been re-named to: ' + newFilePath);
});