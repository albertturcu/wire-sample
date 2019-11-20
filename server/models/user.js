var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");

var UserSchema = new mongoose.Schema({
    active: Boolean,
    profile_pic: String,
    name: String,
    email: String,
    password: String,
    phone_number: String,
    address: String,
    zip_code: String,
    created_at: Date,
    updated_at: Date
});

UserSchema.statics.authenticate = function (username, password, done) {
  User.findOne({
    name: username
  }, function (err, user) {
    if (err) {
      return done(err)
    }

    if (!user) {
      return done(null, false, {
        message: 'Incorect email.'
      });
    }
    if (!bcrypt.compareSync(password, user.password, function (err, result) {
        if (result === true) {
          return result;
        } else {
          return false;
        }
      })) {
      return done(null, false, {
        message: 'Incorrect password.'
      });
    }

    if (!user.isVerified) {
      return done(null, false, {
        message: 'User not verified.'
      });
    }
    return done(null, user);
  })
};

// UserSchema.plugin(passportLocalMongoose, { usernameField: 'name'});

let User = mongoose.model('User', UserSchema);
module.exports = User;