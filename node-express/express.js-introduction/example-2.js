//reuire the express nodejs module
var express = require('express'),
	//set an instance of exress
	app = express(),
	//reuire the path nodejs module
	path    = require("path");

//tell express that www is the root of our public web folder
app.use(express.static(path.join(__dirname, 'www')));

//wait for a connection
app.listen(3000, function () {
  console.log('Server is running. Point your browser to: http://localhost:3000');
});