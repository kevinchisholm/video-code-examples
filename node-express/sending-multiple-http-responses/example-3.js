//require the express nodejs module
var express = require('express'),
  //set an instance of exress
  app = express();

//tell express what to do when the / route is requested
app.get('/', function (req, res) {
  var i = 1,
    max = 5;

  //set the appropriate HTTP header
  res.setHeader('Content-Type', 'text/html');

  //send multiple responses to the client
  for (; i <= max; i++) {
    res.write('<h1>This is the response #: ' + i + '</h1>');
  }

  //end the response process
  res.end();
});

//wait for a connection
app.listen(5000, function () {
  console.log('The web server is running. Please open http://localhost:5000/ in your browser.');
});