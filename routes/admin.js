var express = require('express');
var router = express.Router();
var adminControllers = require('../controller/admin-controllers');

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

//Login Page
// router.get('/login', adminControllers.loginPage);

router.get('/login', function(req, res, next) {
  res.render('pages/login', { title: 'Express' });
});
module.exports = router;
