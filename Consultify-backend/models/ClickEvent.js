const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const clickEventSchema = new Schema({
  customer_id: {   
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Customers'
  },
  salon_id: {   
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Salon'
  },
  clicked_at: {
    type: Date,
    default: Date.now
  },
  status: {
    type: String,
    default: 'clicked'
  }
}, {
  timestamps: true
});

const ClickEvent = mongoose.model('ClickEvent', clickEventSchema);

module.exports = ClickEvent;
