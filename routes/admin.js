var express = require('express');
var router = express.Router();
var adminControllers = require('../controller/admin-controllers');
const { ensureAuthenticated } = require('../config/auth');

// Login Page
router.get('/login', adminControllers.loginPage);

// Login Handle
router.post('/login', adminControllers.loginHandle);

//// Logout Handle
router.get('/logout', adminControllers.logoutHandle);

module.exports = router;
