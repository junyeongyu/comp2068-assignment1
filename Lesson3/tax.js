"use strict";
//dependencies
let http = require('http');
let url = require('url');
let accounting = require('accounting');

http.createServer(function(req, res) {
	// get the whole querystring (parameter list) ?amount=100
	let qs = url.parse(req.url , true).query;
	let amount = qs.amount;
	
	// calculate tax and total
	let hst = parseFloat(amount) * .13;
	let total = parseFloat(amount) + parseFloat(hst);
	
	res.writeHead(200, {"Content-Type": "text/html"});
	// display all 3 values on the page
	res.write('Amount: ' + accounting.formatMoney(amount) + '<br />' +
			  'HST:    ' + accounting.formatMoney(hst)    + '<br />' +
			  'Total:  ' + accounting.formatMoney(total));
	res.end();
}).listen(3000);

console.log("Tas Server running on port 3000");