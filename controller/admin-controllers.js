// User Model
var User = require('../models/user');

// Login Page
exports.loginPage = (req, res) => {
    res.render('pages/login');
}

