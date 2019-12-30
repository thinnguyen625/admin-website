var Product = require('../models/product');
var User = require('../models/user');
var functions = require('./functions');

// exports.index = (req, res) => {
// 	res.render('pages/index');
// }

exports.index = (req, res) => {
    User.find({})
    .then(users => {
       res.render('pages/index',{
          users: users
       });
    })
    .catch(err => {
       console.log('Error: ', err);
       throw err;
    });
 }