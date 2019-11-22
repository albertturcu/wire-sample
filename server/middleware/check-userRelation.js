const Company = require('../models/company');
const ObjectId = require('mongoose').Types.ObjectId; 

exports.validateUserCompany = async function(req, res, next) {
  const company = await Company.findOne({user_id: ObjectId(req.user._id)});

  if(company){
    return res.status(200).send({userId: req.user._id, companyId: company._id});
  }

  return res.status(401).send('Unauthorized');
};
