
const mongoose = require('mongoose');

const PtntSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  gen: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  mobile: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  pwd: {
    type: String,
    required: true
  }
});

module.exports = PtntModel = mongoose.model('Patient', PtntSchema);

// first arg 'Patient' represents 'patients' collection in the database.