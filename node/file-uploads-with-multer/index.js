var serverPort = 3000,
    express = require('express'),
    multer = require('multer'),
    upload = multer({dest: 'uploads/'}),
    app = express();

//set the static folder
app.use(express.static('static'));

//add a handler for the POST / route
app.post('/', upload.single('img'), (req, res) => {
    //for demonstration purposes only:
    console.log(req.file);

    //send a response to the client
    res.send('<h2>File upload succeeded.</h2><a href="/">Upload another file<a>');
});

//start the web server
app.listen(serverPort, () => {
    console.log('server running on http://localhost:' + serverPort);
});
