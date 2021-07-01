const express = require('express');
var bodyParser = require('body-parser');
var userRouter = require('./routers/user.router');

const app = express();
const port = 3001;
app.set('view engine', 'pug');
app.set('views', './views');
// const path = require('path');
//body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/user',userRouter);

//get home page
app.get('/', (req, res, next) => {
    res.render('index', {
        name: 'Express js'
    });
});

app.listen(port, () => {
    console.log('=======================>>>app is running with port: ' + port);
});