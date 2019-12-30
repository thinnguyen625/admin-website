// Model
var Product = require('../models/product');

exports.displayProducts = (req, res) => {
   res.render('pages/product');
}

exports.displayCategory = (req, res) => {
   res.render('pages/category');
}