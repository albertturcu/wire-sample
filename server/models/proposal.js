var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;

var ProposalSchema = new mongoose.Schema(
  {
    date: Date,
    description: String,
    negotiable: Boolean,
    status: {
      type: String,
      enum: ['pending', 'accepted', 'rejected', 'cancelled'],
    },
    company_id: ObjectId,
    job_id: ObjectId,
    created_at: Date,
    updated_at: Date,
  },
  { autoCreate: true }
);

module.exports = mongoose.model('Proposal', ProposalSchema);
