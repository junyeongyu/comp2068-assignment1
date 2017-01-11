var express = require('express')
  , http = require('http')
  , path = require('path');

var app = express();

http.createServer(function (request, response) {
	// send a response
	response.writeHead(200);
	response.write('<h3>Our first node page</h3>');
	response.end();
}).listen(3000);

console.log('Server running on port 3000');