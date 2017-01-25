var http = require('http');

http.createServer(function(req, res) {
	  res.writeHead(200, {"Content-Type": "text/html"});
	  res.write("Our second node pageX");
	  res.end();
	;
}).listen(3000);

console.log("Web server is running on port 3000");