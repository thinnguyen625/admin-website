var express = require('express');
var router = express.Router();
var adminControllers = require('../controller/admin-controllers');


router.get('/login', function(req, res, next) {
  res.render('pages/login', { title: 'Express' });
});
module.exports = router;
