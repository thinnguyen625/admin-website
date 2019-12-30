// Model
var Product = require('../models/product');

exports.displayProducts = (req, res) => {
   Product.find({})
   .then(products => {
      res.render('pages/product',{
         products: products
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
