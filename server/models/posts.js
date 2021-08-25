const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
  },
  category: {
    type: String,
    trim: true,
  },
 created: {
    type: Date,
    default: Date.now
  },

  image: {
    type: String,
    trim: true,
  },

  content: {
    type: String,
    trim: true,
  }


 

});





module.exports = mongoose.model('Post', postSchema);