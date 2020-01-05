var Order = require('../models/order');



exports.displayOrder = (req, res) => {
    Order.find({})
        .then(orders => {
            res.render('pages/order', {
                orders: orders
            });
        })
        .catch(err => {
            console.log('Error: ', err);
            throw err;
        });
}
exports.updateOrder = (req, res) => {
    var id = req.query.id;
    console.log(id);
    var status = req.query.status;
    var statusNumber = parseInt(status, 10);
    console.log(statusNumber);
    if (statusNumber != -1) {
        if (status != undefined) {
            Order.updateOne({ id: req.body.id }, {
                $set: {
                    status: status,
                }
            })
        }
        res.redirect('/order');
    }
    res.redirect('/order');
}