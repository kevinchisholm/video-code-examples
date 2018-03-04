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
        //regular expressions to break apart
        //the original file name and extension
        var regExFileName = /([\w\d_-]*)\.?[^\\\/]*$/i,
            regExFileNameExtension =/\.[0-9a-z]{1,5}$/i,
            fileNameBase = file.originalname.match(regExFileName)[1],
            fileNameExtension = file.originalname.match(regExFileNameExtension)[0],
            //build a dynamic file name using Date.now()
            fileName = fileNameBase + '_' + Date.now() + fileNameExtension;

        //call the callback, passing it the dynamic file name
        cb(null, fileName);
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
