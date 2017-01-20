var express = require('express');
var router = express.Router();

router.get('/list', function(req, res, next) {
    req.db.heroes.find({}, {_id: 0}, function (err, data){
      res.json(data);
    });
});

router.get('/detail/:id', function(req, res, next) {
	req.db.heroes.findOne({id: parseInt(req.params.id)}, {_id: 0}, function (err, data) {
    	res.json(data);
    });
});

router.post('/save', function(req, res, next) {
	req.db.heroes.aggregateAsync([{ $group : { _id: null, max: { $max : "$id" }}}])
		.then(function (data) {
			var maxId = data[0].max + 1;
			return req.db.heroes.insertAsync({id: maxId, name: req.body.name});
		})
		.then(function (data) {
			res.json(data);
		});
	
});

router.put('/save/:id', function(req, res, next) {
	req.db.heroes.update({id: parseInt(req.params.id)}, req.body, function (err, data) {
		res.json(data);
	});
});

router.delete('/delete/:id', function(req, res, next) {
	req.db.heroes.remove({id: parseInt(req.params.id)}, function (err, data) {
		res.json(data);
	});
});

module.exports = router;