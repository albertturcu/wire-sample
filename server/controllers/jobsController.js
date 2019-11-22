const Jobs = require("../models/job");
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

exports.GetJob = function(req, res, next) {
  const promises = [];
  const company_id = ObjectId(JSON.parse(req.params.company_id));
  promises.push(
    new Promise((resolve, reject) => {
      Jobs.find({awarded_company_id: company_id})
        .then(result => {
          resolve(result);
        })
        .catch(err => reject(err));
    })
  );

  Promise.all(promises)
    .then(result => {
      data = result[0];
      res.json({ jobs: data })
    })
    .catch(err => next(err));
}