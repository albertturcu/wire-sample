///===============================
///      Imports
///===============================
const router = require("express").Router();
const jobsController = require("../controllers/jobsController")
const proposalController = require("../controllers/proposalController")


///===============================
///      Post requests
///===============================
router.get('/getProposals/:company_id', proposalController.GetProposals);
router.get('/getJobs/:company_id', jobsController.GetJob);
router.get('/cancelProposal/:proposal_id', proposalController.CancelProposal);

///===============================
///      Module exports
///===============================
module.exports = router;