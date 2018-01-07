//require the express nodejs module
var express = require('express'),
	//set an instance of exress
	app = express(),
	//require the body-parser nodejs module
	bodyParser = require('body-parser');
	
//support parsing of application/json type post data
app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true })); 

//tell express what to do when the /about route is requested
app.post('/form',function (req, res) {
	//create a json response
	requestAsJson = JSON.stringify(req.body);

	//set the appropriate HTTP header
	res.setHeader('Content-Type', 'application/json');

	//log the output
	console.log('The POST data received was: ' + requestAsJson);

	//send the POST data back as JSON
	res.end(requestAsJson);
});

//wait for a connection
app.listen(5000, function () {
  console.log('POST test server is running on port 5000');
});