const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
    required: true,
    unique: true,
  },

});

const Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;
