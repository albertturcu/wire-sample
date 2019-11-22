const User = require("../models/user");
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

exports.GetUser = function(req, res, next) {
  const promises = [];
  const user_id = ObjectId(req.params.id);
  promises.push(
    new Promise((resolve, reject) => {
      User.find({_id: user_id})
        .then(result => {
          resolve(result);
        })
        .catch(err => reject(err));
    })
  );

  Promise.all(promises)
    .then(result => {
      data = result[0];
      res.json({ user: data })
    })
    .catch(err => next(err));
}