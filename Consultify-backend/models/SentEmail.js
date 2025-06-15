const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const emailsentSchema = new Schema({
  salon_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'SaloonUser'
  },
  customer_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Customers'
  },
  precare_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Postcare'
  },
  sent_at: {
    type: Date,
    default: Date.now
  },
  
  acknowledgedAt: {
    type: String,
    default: "",
  },
  recently_updated:{
    type: String,
    default: "",
  },
  status:{
    type: Number,
    default: 0,
  }
}, {
  timestamps: true
});

const SentEmail = mongoose.model('SentEmail', emailsentSchema, 'SentEmails');

module.exports = SentEmail;