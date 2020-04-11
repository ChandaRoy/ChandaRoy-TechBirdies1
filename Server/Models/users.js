var mongoose = require('mongoose'),
usersSchema = new mongoose.Schema({
email: String,
password: String,
role: String,
contact: String,
photo: String
});


module.exports = mongoose.model('users', usersSchema, 'Users');;