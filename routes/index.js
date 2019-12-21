var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('pages/index', { title: 'Express' });
});

router.get('/home', function(req, res, next) {
  res.render('pages/index', { title: 'Express' });
});

router.get('/category', function(req, res, next) {
  res.render('pages/category', { title: 'Express' });
});

router.get('/login', function(req, res, next) {
  res.render('pages/login', { title: 'Express' });
});

router.get('/product', function(req, res, next) {
  res.render('pages/product', { title: 'Express' });
});

router.get('/order', function(req, res, next) {
  res.render('pages/order', { title: 'Express' });
});

router.get('/store', function(req, res, next) {
  res.render('pages/store', { title: 'Express' });
});

router.get('/user', function(req, res, next) {
  res.render('pages/user', { title: 'Express' });
});

router.get('/logout', function(req, res, next) {
  res.render('pages/login', { title: 'Express' });
});
module.exports = router;
