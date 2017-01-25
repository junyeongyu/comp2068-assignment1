"use strict";
let url = require('url');
let express = require('express');
let app = express();

app.get('/', function (req, res) {
	let fullUrl = req.protocol + '://' + req.get('Host') + req.url;
	let query = url.parse(req.url,true).query;
	let method = query.method;
	let x = query.x;
	let y = query.y;
	let operator = getOperator(method);
	
	if (!operator) {
		res.end("Method needs to be correct.");
		return;
	} else if (!x || isNaN(x)) {
		res.end("x value needs to be correct.");
		return;
	} else if (!y || isNaN(y)) {
		res.end("y value needs to be correct.");
		return;
	}

	x = parseFloat(x);
	y = parseFloat(y);
	
	let result = calculate(method, x, y);
	let html = "Sample URL: " +  fullUrl + "<br />";
	html    += "Sample Output: " + x + " " + operator + " " + y + " = " + result;
	
	res.writeHead(200, {"Content-Type": "text/html"});
	res.end(html);
});

app.listen(3000);
console.log("Server is running on port 3000");

function getOperator(method) {
	return {
		"add": "+",
		"subtract": "-",
		"multiply": "*",
		"divide": "/"
	}[method];
}
function calculate(method, x, y) {
	let result;
	if (method === "add") {
		result = x + y;
	} else if (method === "subtract") {
		result = x - y;
	} else if (method === "multiply") {
		result = x * y;
	} else if (method === "divide") {
		result = x / y;
	}
	return result;
}