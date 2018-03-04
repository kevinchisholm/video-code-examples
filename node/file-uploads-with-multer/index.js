const express = require('express')

const app = express()

const multer = require('multer')

const upload = multer({dest: 'uploads/'})

app.set('view engine', 'ejs')

app.get('/', (req, res) => res.render('home'))

app.post('/', upload.single('img'), (req, res) => {

    console.log(req.body);

    console.log(req.file);

res.send('ok')

})

app.listen(3000, () => console.log('running OK B...'))
