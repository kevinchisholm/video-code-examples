var express = require('express'),
  path = require('path'),
  app = express(),
  server = null,
  webServerPort = 3000,
  staticWebServerFolder = '../www';

// Define the port to run on
app.set('port', webServerPort);

// Set the folder for the static web server
app.use(express.static(path.join(__dirname, staticWebServerFolder)));

// Listen for requests
server = app.listen(app.get('port'), function () {
  var port = server.address().port;
  console.log('Web server running on http://localhost:' + port);
});
