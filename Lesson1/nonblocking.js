// link to fileSystem library
var fs = require('fs');
var Promise = require('bluebird'); // http://stackabuse.com/avoiding-callback-hell-in-node-js/

// get drink
fs.readFile('drinks.txt', 'utf8', function (err, drinks) {
	if (err) {
		console.log(err);
		return;
	}
	
	// drink heading
	console.log('Drinks:');
	
	// if we get drinks, print  out
	console.log(drinks);
});

// food
fs.readFile('food.txt', 'utf8', function (err, food) {

	// food heading
	console.log('\nFOOD:');

	console.log(food);
});


