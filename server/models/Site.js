const { Schema, model } = require('mongoose');

const siteSchema = new Schema({
  url: {
    type: String,
    required: [true, 'URL is required'],
    unique: true,
    trim: true,
  },
  title: {
    type: String,
    required: [true, 'Title is required'],
    trim: true,
  },
  type: {
    type: String,
    required: [true, 'Site type is required'],
    trim: true,
  },
  keywords: [{ type: String }],
});

// Check to see if model has already been built before rebuilding it
const Site = model('Site', siteSchema);

module.exports = Site;
