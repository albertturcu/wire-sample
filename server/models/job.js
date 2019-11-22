var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;

var JobSchema = new mongoose.Schema(
  {
    is_emergency: Boolean,
    title: String,
    description: String,
    allow_contact_by_app: Boolean,
    can_user_bring_boat: Boolean,
    allow_picking_from_spot: Boolean,
    allow_contact_by_phone: Boolean,
    allow_contact_by_email: Boolean,
    lat: String,
    lng: String,
    location: String,
    boat_type: String,
    price: Number,
    posted: Boolean,
    due_time: Date,
    is_done: Boolean,
    user_id: ObjectId,
    boat_id: ObjectId,
    service_id: ObjectId,
    awarded_company_id: ObjectId,
    created_at: Date,
    updated_at: Date,
  },
  { autoCreate: true }
);

module.exports = mongoose.model('Job', JobSchema);;
