var Product = require('../models/product');
var functions = require('./functions');

exports.index = (req, res) => {
	res.render('pages/index');
}