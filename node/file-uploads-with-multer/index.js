const serverPort = 3000,
    express = require('express'),
    multer = require('multer'),
    upload = multer({dest: 'uploads/'}),
    app = express();

//set the view engine
app.set('view engine', 'ejs')

//add a handler for the GET / route
app.get('/', (req, res) => res.render('home'))

//add a handler for the POST / route
app.post('/', upload.single('img'), (req, res) => {
    //for demonstration purposes only:
    console.log(req.body);
    console.log(req.file);

    //send a response to the client
    res.send('<h2>File upload succeeded.</h2><a href="/">Upload another file<a>');
})

//start the web server
app.listen(serverPort, () => {
    console.log('server running on http://localhost:' + serverPort);
})
