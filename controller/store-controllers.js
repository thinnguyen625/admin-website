 var Store = require('../models/store');

 
 exports.displayStore = (req, res) => {
    Store.find({})
    .then(stores => {
       res.render('pages/store',{
          stores: stores
       });
    })
    .catch(err => {
       console.log('Error: ', err);
       throw err;
    });
 }