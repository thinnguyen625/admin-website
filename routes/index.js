var express = require('express');
var router = express.Router();
var homeControllers = require('../controller/home-controllers');
var productControllers = require('../controller/product-controllers');
var orderControllers = require('../controller/order-controllers');
var userControllers = require('../controller/user-controllers');
var storeControllers = require('../controller/store-controllers');



/* GET home page. */
router.get('/', homeControllers.index);

router.get('/home', homeControllers.index);

// Product
router.get('/product', productControllers.displayProducts);

// Category
router.get('/category', productControllers.displayCategory);

// Order
router.get('/order', orderControllers.displayOrder);

// Customer
router.get('/user', userControllers.displayUser);

// Update User
router.post('/user/edit', userControllers.editUser);
// Delete User
router.get('/user/delete/:id', userControllers.deleteUser);
// Delete User
router.get('/user/autho', userControllers.AuthoUser);



// Store
router.get('/store', storeControllers.displayStore);

module.exports = router;
