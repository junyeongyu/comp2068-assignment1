var express = require('express')
  , ejs = require('ejs')
  , path = require('path')
  , bodyParser = require('body-parser')
  , mongo = require('./modules/bluebird-mongojs');

var app = express();
var db = mongo('localhost:27017/test', ['contact']);

var index = require('./routes/index');
var contact = require('./routes/contact');

app.set('port', process.env.PORT || 3000);
app.set('views', './views');
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req, res, next){ // setting db object in http request
	req.db = db;
	next();
});

app.use('/', index);
app.use('/contact', contact);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});