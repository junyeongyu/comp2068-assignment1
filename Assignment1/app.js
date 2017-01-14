var express = require('express')
  , ejs = require('ejs')
  , path = require('path')
  , mongojs = require('mongojs')
  , Promise = require('bluebird'); // http://stackabuse.com/avoiding-callback-hell-in-node-js/

var db = mongojs('localhost:27017/test', ["mycollection"]);
var app = express();

var index = require('./routes/index');
var users = require('./routes/users');

app.set('port', process.env.PORT || 3000);
app.set('views', './views');
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);

// test db (temp)
db.mycollection.find({abc: "def"}, function (err, data){
	console.log(data);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});