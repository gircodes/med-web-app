
const mongoose = require('mongoose');

const DocSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: String,
    required: true
  },
  gen: {
    type: String,
    required: true
  },
  speciality: {
    type: String,
    required: true
  },
  active: {
    type: String,
    default: 'No'
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

module.exports = DocModel = mongoose.model('Doctor', DocSchema);

// first arg 'Doctor' represents 'doctors' collection in the database.