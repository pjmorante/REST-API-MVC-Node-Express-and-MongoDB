const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
  title: String,
  message: String,
  name: String,
  creator: String,
  comments: {
    type: [String],
    default: [],
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

module.exports = mongoose.model('Data', dataSchema);