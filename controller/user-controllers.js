const bcrypt = require('bcryptjs');
const passport = require('passport');

var User = require('../models/user');


exports.displayUser = (req, res) => {
   User.find({})
      .then(users => {
         res.render('pages/user', {
            users: users
         });
      })
      .catch(err => {
         console.log('Error: ', err);
         throw err;
      });
}
// Edit Profile User
exports.editUser = (req, res) => {
   console.log(req.body)
   let errors = [];
   const newName = req.body.name;
   const newPhone = req.body.phone;
   const newAddress = req.body.address;

   User.findOne({ _id: req.body.id }) // Find user by ID
      .then(user => {
         console.log(user)
         if (newName != '') {
            user.name = newName;
         }
         if (newPhone != '') {
            user.phone = newPhone;
         }
         if (newAddress != '') {
            user.address = newAddress;
         }
         user.save()
            .then(user => {
               req.flash('success_msg', 'Bạn đã cập nhật thành công');
               res.redirect('/user');
            })
            .catch(err => console.log(err));
      })
      .catch(err => console.log(err));
}

exports.deleteUser = function (req, res, next) {
   const id = req.params.id;
   console.log("id user deleted:", id);

   User.findOne({ id: req.body.id })
      .then(user => {
         if (id != '') {
            user.deleteOne({ id: req.params.id });
         }
         res.redirect('/user');
      })
}
//No fix
exports.AuthoUser = function (req, res, next) {
   const id = req.query.id;
   console.log("id user:", id);
   const role = 1;

   User.updateOne({ id: req.body.id }, {
      $set: {
         role: role
      }
   }) 
   const rol = req.params.role;
   console.log("role user:", rol);
   res.redirect('/user');

}



