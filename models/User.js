const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Schema Validation: Please provide a name'],
    minlength: 3,
    maxlength: 50,
  },
  email: {
    type: String,
    required: [true, 'Schema Validation: Please provide an email address'],
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      'Schema Validation: Please provide valid email',
    ],
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'Schema Validation: Please provide a password'],
    minlength: 6,
    maxlength: 12,
  },
});

module.exports = mongoose.model('User', UserSchema);
