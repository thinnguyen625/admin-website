var Product = require('../models/product');
var User = require('../models/user');
var Order = require('../models/order');

var functions = require('./functions');

// exports.index = (req, res) => {
// 	res.render('pages/index');
// }

exports.index = (req, res) => {
	User.countDocuments({}) // Count the number of users
		.then(countUsers => {
			Order.aggregate([ // Group items and count quantity per order
				{
					'$unwind': {
						'path': '$items'
					}
				}, {
					'$group': {
						'_id': '$items.name',
						'totalAmount': {
							'$sum': '$items.quantity'
						}
					}
				}
			]).sort({'totalAmount': -1 }).limit(10) // Top 10
			.then(top10 => {
				res.render('pages/index', {
					countUsers: countUsers,
					top10: top10
				});
			})
			.catch(err => {
				console.log('Error: ', err);
				throw err;
			});
		})
		.catch(err => {
			console.log('Error: ', err);
			throw err;
		});
}