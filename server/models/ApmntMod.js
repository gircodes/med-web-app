
const mongoose = require('mongoose');

const ApmntSchema = new mongoose.Schema({
  status: {
    type: String,
    default: 'Pending'
  },
  date: {
    type: Date,
    required: true
  },
  doctor: {
    type: String,
    required: true
  },
  patient: {
    type: String,
    required: true
  },
  ptntcall: {
    type: String,
    default: 'Zoom link here'
  },
  prescription: {
    type: String,
    default: ''
  },
  ptntcancel: {
    type: String,
    default: 'No'
  },
});

module.exports = ApmntModel = mongoose.model('Apmnt', ApmntSchema);

// first arg 'Apmnt' represents 'apmnts' collection in the database.