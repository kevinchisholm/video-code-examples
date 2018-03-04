var serverPort = 3000,
    express = require('express'),
    multer = require('multer'),
    upload = null,
    storage = null,
    app = express();

//overwrite the storage variable
storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        //call the callback, passing it the original file name
        cb(null, file.originalname);
    }
});

//overwrite the upload variable
upload = multer({storage});

//set the static folder
app.use(express.static('static'));

//add a handler for the GET / route
app.get('/', (req, res) => res.render('home'));

//add a handler for the POST / route
app.post('/', upload.single('img'), (req, res) => {
    //for demonstration purposes only:
    console.log(req.file);

    //send a response to the client
    res.send('<h2>File upload succeeded.</h2><a href="/">Upload another file<a>');
})

//start the web server
app.listen(serverPort, () => {
    console.log('server running on http://localhost:' + serverPort);
})
