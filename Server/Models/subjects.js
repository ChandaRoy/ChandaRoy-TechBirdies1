var mongoose = require('mongoose'),
subjectsSchema = new mongoose.Schema({
  title: String,
  brief: String,
  topics: Array,
  createdDate: Date,
  updatedDate: { type: Date, default: Date.now },
});


module.exports = mongoose.model('subjects', subjectsSchema, 'Subjects');;