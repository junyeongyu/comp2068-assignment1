/*Lab 3 - Node.JS Simple Calculator

This lab is for you to practice working with Node and NPM.  To complete the lab:

- Create a node application called lab3
- Initialize npm and create package.json via the wizard
- Install the connect module with npm
- Modify package.json to use nodemon to start your app
- Create lab3.js
- Write a function that Accept 3 QueryString parameters: method, x, and y
- Possible values for the method parameter are: "add", "subtract", "multiply", and "divide"
- If the method value is anything else, show an error message
- Determine which math operation to run based on the value of the method parameter
- Perform this math operation on the other 2 values (x and y)
- Display the full math operation and its result on the page in this format: x [method] y = [result]

- Sample URL: http://localhost:3000/lab3?method=add&x=16&y=4
- Sample Output: 16 + 4 = 20

- Sample URL: http://localhost:3000/lab3?method=subtract&x=16&y=4
- Sample Output: 16 - 4 = 12

- Sample URL: http://localhost:3000/lab3?method=multiply&x=16&y=4
- Sample Output: 16 * 4 = 64

- Sample URL: http://localhost:3000/lab3?method=divide&x=16&y=4
- Sample Output: 16 / 4 = 4

- Install npm and use the wizard to create your package.json file
- Install the nodemon module so your application automatically restarts any time a change is saved to your lab3.js file

To submit your lab:

- Create a repo on GitHub called comp2106-lab3
- Push your files to your repo on GitHub
- Submit the link to your repo on Blackboard 
*/
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