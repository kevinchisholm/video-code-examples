var htmlString = ''
  + '<!DOCTYPE html>'
  + '<html>'
    + '<head> '
      + '<meta charset="utf-8"> '
      + '<title>App started using NPM scripts</title>'
    + '</head>'
    + '<body> '
      + '<h1>App started using NPM scripts!</h1>'
  + '</body> '
  + '</html>';

//set a reference to the http module
var http = require('http');

//call the http module's createServer method, to create a server instance
var server = http.createServer(function (req, res) {
	//access the response object, and create a Content-Type header
	res.writeHead(200, {'Content-Type': 'text/html'});

	//end the response, sending some text (the user will see this in their browser)
	res.end(htmlString);
})

//tell the server to listen for requests
server.listen(3000);

//just lets us know that the server is running
console.log('In your browser, go to: http://localhost:3000');