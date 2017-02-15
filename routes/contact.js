/*
File name : contact.js
Author's name : Junyeong Yu
Web site name : Portfolio
File description : Save contact data into Mongo DB
*/
var express = require('express');
var router = express.Router();

router.post('/save', function(req, res, next) {
	console.log(req.body);
	req.db.contact.aggregateAsync([{ $group : { _id: null, max: { $max : "$id" }}}])
		.then(function (data) {
			var maxId = 1;
			if (data && data[0] && data[0].max) {
				maxId = data[0].max + 1;
			}
			return req.db.contact.insertAsync({
				id:      maxId,
				name:    req.body.name,
				email:   req.body.email,
				title:   req.body.title,
				message: req.body.message
			});
		})
		.then(function (data) {
			console.log(data);
			res.json(data);
		});
});

module.exports = router;