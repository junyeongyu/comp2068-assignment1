// reference the fileSystem module that ships with node
var fs = require('fs');

// drink
console.log('DRINK:');

var drinks = fs.readFileSync('drinks.txt', 'utf8');
console.log(drinks);

// food
console.log('\nFOOD:');

var food = fs.readFileSync('food.txt', 'utf8');
console.log(food);