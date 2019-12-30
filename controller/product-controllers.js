// Model
var Product = require('../models/product');
var functions = require('./functions');

exports.displayProducts = (req, res) => {
   Product.find({})
   .then(products => {
      res.render('pages/product',{
         products: products,
         priceConverter: functions.numberWithCommas 
      });
   })
   .catch(err => {
      console.log('Error: ', err);
      throw err;
   });
}

exports.displayCategory = (req, res) => {
   res.render('pages/category');
}
