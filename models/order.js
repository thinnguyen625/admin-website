var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;

var orderSchema = mongoose.Schema({
    orderID: Number,
    userID: ObjectId,
    customerName: String,
    phone: String,
    address: String,
    note: String,
    timeOrder: Number,
});

module.exports = mongoose.model('order', orderSchema, 'order');
