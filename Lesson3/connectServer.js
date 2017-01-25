"use strict";
// link to the connect npm package we installed
let connect = require('connect');

// create a new instance of a connect application
let app = connect();

// index
let index = function(req, res) {
	res.end('Home / Index Page');
};

// hello function
let hello = function(req, res) {
	res.end('Hello');
};

// goodbye
let goodbye = function(req, res) {
	res.end('GoodBye');
};

let tax = function(req, res, next) {
	res.sendFile('tax.js');
}

// route the urls the correct function
app.use('/hello', hello);
app.use('/goodbye', goodbye);
app.use('/tax', tax)
app.use('/', index);

// start the server on port 3000
app.listen(3000);
console.log('Connect running on port 3000');