var express = require('express');
var path = require('path');
//var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors = require('cors');
var sms = require('./routes/sms');







var app = express();
app.set('view engine', 'ejs')
app.use(cors());
app.use(bodyParser.json({limit:'50mb',extended:true}));
app.use(bodyParser.urlencoded({ extended: false }));

//app.use(cookieParser())
app.get('/', (req, res) => res.send('Hello World!'))
app.use('/sms', sms);




module.exports = app;
