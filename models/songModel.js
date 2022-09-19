const mongoose = require('mongoose');

const songSchema = mongoose.Schema({
  Singer: {
    type: String,
    required: true,
  },
  SongName: {
    type: String,
    required: true,
  },
  Url: {
    type: String,
    required: true,
  },
  WhoLike: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Song', songSchema);
