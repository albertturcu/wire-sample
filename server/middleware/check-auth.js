const passport = require("passport");
const jwt = require('jsonwebtoken');

exports.isLoggedIn = function(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/login");
};

exports.Verify = passport.authenticate("local");

exports.VerifyJwt = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token , process.env.JWT_SECRET);
    if(decoded.user){
      return next();
    }
    throw new Error   
  } catch (error) {
    return res.status(401).json({
      status_code: 401,
      message: "Auth failed",
      data:[]
    });
  };
}
