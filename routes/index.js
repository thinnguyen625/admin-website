var express = require('express');
var router = express.Router();
const passport = require('passport');

var homeControllers = require('../controller/home-controllers');
var productControllers = require('../controller/product-controllers');
var orderControllers = require('../controller/order-controllers');
var userControllers = require('../controller/user-controllers');
var storeControllers = require('../controller/store-controllers');
const upload = require('../uploadMiddleware');



/* GET home page. */
router.get('/', homeControllers.index);

router.get('/home', homeControllers.index);

// Product
router.get('/product', productControllers.displayProducts);
router.post('/product/add',upload.single('image'), productControllers.addProduct);
router.post('/product/edit',upload.single('image'), productControllers.editProduct);

// Category
router.get('/category', productControllers.displayCategory);

// Order
router.get('/order', orderControllers.displayOrder);
router.post('/order/update-status-order',orderControllers.updateOrder);

// Customer
router.get('/user', userControllers.displayUser);
router.post('/user/edit', userControllers.editUser);
router.get('/user/autho', userControllers.AuthoUser);
router.get('/user/lock', userControllers.lockUser);
router.get('/user/unlock', userControllers.unlockUser);
router.get('/user/delete/:id', userControllers.deleteUser);


// Store
router.get('/store', storeControllers.displayStore);
router.post('/store/add',upload.single('image'), storeControllers.addStore);
// router.post('/store/edit', upload.single('image'),storeControllers.editStore);
router.get('/store/delete/:id', storeControllers.deleteStore);

module.exports = router;
