const Company = require('../models/company');
const ObjectId = require('mongoose').Types.ObjectId; 

exports.validateUserCompany = async function(req, res, next) {
  const isUserAllowed = await Company.findOne({user_id: ObjectId(req.user._id)});

  if(isUserAllowed){
    return next();
  }

  return res.status(401).send('Unauthorized');
};
