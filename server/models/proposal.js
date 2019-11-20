var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");

var ProposalSchema = new mongoose.Schema({
    active: Boolean,
    profile_pic: String,
    name: String,
    email: String,
    user_role_id: Int,
    password: String,
    phone_number: String,
    address: String,
    zip_code: String,
    created_at: Date,
    updated_at: Date
});

ProposalSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("Proposal", ProposalSchema);