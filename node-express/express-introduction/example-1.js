//reuire the express nodejs module
var express = require('express'),
	//set an instance of exress
	app = express();

//for any requests to the root of the application
app.get('/', function (req, res) {
	//construct the HTML that we will return
	var HTML = ''
	+ '<!DOCTYPE html>'
	+ '<html>'
		+ '<head>'
			+ '<meta charset=utf-8>'
			+ '<title>Express.js example</title>'
		+ '</head>'
		+ '<body>'
			+ '<h1>This is example # 1</h1>'
		+ '</body>'
	+ '</html>';

	//rethrn the HTML to the user's browser
	res.send(HTML);
});

//wait for a connection
app.listen(3000, function () {
  console.log('Server is running. Point your browser to: http://localhost:3000');
});