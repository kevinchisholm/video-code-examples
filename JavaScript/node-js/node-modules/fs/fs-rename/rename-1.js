//set a reference to the file system module
var fs = require('fs');
	//set a reference to the filepath module
	FP = require('filepath'),
	//set a reference to the old file name
	oldFileName = 're-name-me.txt',
	//set a reference to the new file name
	newFileName = 'ive-been-renamed.txt',
	//set a reference to the folder structure that leads up to the current file, add a trailing slash
	fpFolder = FP.newPath() + '/',
	//set a reference to the old file
	fpFile = FP.newPath(oldFileName),
	//set a reference to the old file path
	//oldFilePath = fpFolder + fpFile,
	oldFilePath = fpFolder + (fs.existsSync(fpFolder + fpFile) ? oldFileName  : newFileName);

	//set a reference to the new file path
	newFilePath = fpFolder + (fs.existsSync(fpFolder + fpFile) ? newFileName  : oldFileName);


//console.log('fs.exists: ' + fs.existsSync(oldFilePath))

//console.log('newFilePath: ' + newFilePath);

//console.log('fpFolder: ' + fpFolder);

//console.log('oldFilePath: ' + oldFilePath);

//console.log('newFilePath: ' + newFilePath);

//use the fs object's rename method to re-name the file
fs.rename(oldFilePath, newFilePath, function(err){
	if (err){console.log(err); return; }

	console.log('The file has been re-named!');
})