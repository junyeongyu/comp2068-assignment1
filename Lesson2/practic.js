"use strict";
var foods = [
  ['sushi', ['rice', 'seaweed', 'fish']], 
  ['tacos', ['tortillas', 'meat', 'cheese', 'lettuce']], 
  ['pizza', ['dough', 'cheese', 'sauce']]
];

let favouritefoods = 'Favourite Foods: ';
let foodsAndIngredients = '';
for (let i = 0; i < foods.length; i++) {
	let food = foods[i];
	let foodName = food[0];
	let ingredients = food[1];
//	console.log(foodName);
	
//	favouritefoods += foodName + (i !== foods.length - 1 ? ", " : "");
	foodsAndIngredients += foodName + '\n';
	
	for (let j = 0; j < ingredients.length; j++) {
		let ingredient = ingredients[j];
		foodsAndIngredients += "  " + ingredient + '\n';
	}
}
//console.log(favouritefoods + '\n');
console.log(foodsAndIngredients);
