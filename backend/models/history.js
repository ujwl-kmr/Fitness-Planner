const mongoose = require('mongoose');

const historySchema = new mongoose.Schema({
  response: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  user_id: {
    type: String,
    required: true,
  },
  status: {
    type: Boolean,
    default: false
  }
});

const History = mongoose.model('History', historySchema);

module.exports = History;
