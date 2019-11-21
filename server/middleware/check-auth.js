const passport = require("passport");

exports.isLoggedIn = function(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/login");
};

exports.Verify = passport.authenticate("local");

