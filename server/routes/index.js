///===============================
///      Imports
///===============================
const router = require("express").Router();
const middleware = require("../middleware/check-auth");
const passport = require("passport");
const User = require("../models/user");

///===============================
///      Post requests
///===============================
router.post('/login',  function (req, res, next) {
  // call passport authentication passing the "local" strategy name and a callback function
  passport.authenticate('local', function (error, user, info) {
    // this will execute in any case, even if a passport strategy will find an error
    // log everything to console
    console.log(error);
    console.log(user);
    console.log(info);

    if (error) {
      res.status(401).send(error);
    } else if (!user) {
      res.status(401).send(info);
    } else {
      next();
    }

    // res.status(401).send(info);
  })(req, res);
}, function (req, res) {
  res.status(200).send('logged in!');
})

router.post('/register', function(req, res){
  User.register(new User({name: 'wiresample'}), req.body.password, function(err, user){
      if(err){
          console.log(err);
          return res.render("register");
      }
  });
});

///===============================
///      Module exports
///===============================

module.exports = router;
