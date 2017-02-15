/*
File name : index.js
Author's name : Junyeong Yu
Web site name : Portfolio
File description : Initial Route
*/

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Junyeong\'s Portfolio' });
});

module.exports = router;
