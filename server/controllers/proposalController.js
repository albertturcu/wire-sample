const Proposal = require('../models/proposal');
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

exports.GetProposals = async function(req, res, next) {
  const promises = [];
  const company_id = ObjectId(JSON.parse(req.params.company_id));

  promises.push(
    new Promise((resolve, reject) => {
      Proposal.find({ company_id })
      .then(result => {
        resolve(result);
      })
      .catch(err => {
        reject(err);
      });
    })
  );

  Promise.all(promises)
    .then(result => {
      data = result[0];

      res.json({ proposal: data })
    })
    .catch(err => next(err));
};

exports.CancelProposal = async function(req, res, next){
  const promises = [];
  console.log(req.params);
  const proposal_id = ObjectId(req.params.proposal_id);

  promises.push(
    new Promise((resolve, reject) => {
      Proposal.findOneAndUpdate( {_id: proposal_id}, {status: 'cancelled'})
      .then(result => {
        resolve(result);
      })
      .catch(err => {
        reject(err);
      });
    })
  );

  Promise.all(promises)
    .then(result => {
      data = result[0];

      res.json({ message: 'success' })
    })
    .catch(err => next(err));
}