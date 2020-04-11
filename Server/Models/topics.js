var mongoose = require('mongoose'),
topicsSchema = new mongoose.Schema({
  title: String,
  brief: String,
  instructorID: String,
  subtopics: Array,
  createdDate: Date,
  updatedDate: Date,
});


module.exports = mongoose.model('topics', topicsSchema, 'Topics');;