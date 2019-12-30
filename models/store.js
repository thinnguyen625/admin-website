var mongoose = require('mongoose');

var StoreSchema = mongoose.Schema({
    name: { type: String },
    image: { type: String },
    producer: { type: String },
    describe: { type: String }
});

module.exports = mongoose.model('store', StoreSchema, 'store');