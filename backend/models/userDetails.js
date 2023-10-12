const mongoose = require('mongoose');

const userDetailsSchema = new mongoose.Schema({
  user_id: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: false,
  },
  age: {
    type: String,
    required: true,
  },
  height: {
    type: String,
    required: true,
  },
  weight: {
    type: String,
    required: true,
  },
  active: {
    type: String,
    required: true,
  },
  fat: {
    type: String,
    required: true,
  },
  situation: {
    type: String,
    required: true,
  },
  physique: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  place: {
    type: String,
    required: true,
  },
  prevention: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
    status: {
      type: Boolean,
      default: false
    },
    response: String
  });
  

const UserDetails = mongoose.model('UserDetails', userDetailsSchema);

module.exports = UserDetails;
