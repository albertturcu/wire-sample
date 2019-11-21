var mongoose = require("mongoose");
var ObjectId = mongoose.Schema.Types.ObjectId;

var CompanySchema = new mongoose.Schema({
    name: String,
    lat: Number,
    lng: Number,
    user_id: ObjectId,
    logo_image_url: String,
    cvr: {
      type: String,
      maxlength: 10
    },
    is_paid: Boolean,
    is_enabled: Boolean,
    is_visible: Boolean,
    created_at: Date,
    updated_at: Date
});

module.exports = mongoose.model('Company', CompanySchema);;