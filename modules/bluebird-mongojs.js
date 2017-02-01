'use strict';
var mongojs = require('mongojs')
  , Promise = require('bluebird'); // http://stackabuse.com/avoiding-callback-hell-in-node-js/

module.exports = function () {
	var COLLECTION = 1;
	var args = Array.from(arguments);
	var db = mongojs.apply(null, args);
	
	// Make collections promise to avoid callback hell (Default suffix is Async: find() --> findSync()) 
	args.length > COLLECTION && args[COLLECTION].forEach(function(collectionName) {
		db[collectionName] = Promise.promisifyAll(db[collectionName]);
	});
	
	return db;
};
