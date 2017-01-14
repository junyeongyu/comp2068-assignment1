var express = require('express');
var router = express.Router();

router.get('/list', function(req, res, next) {
    req.db.heroes.find({}, function (err, data){
      res.json(data);
    });
});

router.get('/detail/:id', function(req, res, next) {
	req.db.heroes.findOne({id: parseInt(req.params.id)}, function (err, data) {
    	res.json(data);
    });
});

module.exports = router;