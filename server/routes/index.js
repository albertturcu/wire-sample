///===============================
///      Imports
///===============================
const router = require('express').Router();
const validate = require('../middleware/check-userRelation');
const passport = require('passport');
const User = require('../models/user');

///===============================
///      Post requests
///===============================
router.post(
  '/login',
  passport.authenticate('local'),
  validate.validateUserCompany,
  function(req, res) {
    res.status(200).send({userId: req.user._id});
  }
);

router.post('/register', function(req, res) {
  User.register(new User({ name: 'wiretest', active: true, profile_pic: '', email: '', phone_number: '', address: '', zip_code: '', created_at: new Date(), updated_at: new Date()}), 'wirepass', function(
    err,
    user
  ) {
    if (err) {
      console.log(err);
    }
  });
});

///===============================
///      Module exports
///===============================

module.exports = router;
