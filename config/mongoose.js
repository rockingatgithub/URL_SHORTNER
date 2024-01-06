const mongoose = require('mongoose')

const mongoDB = mongoose.connect('mongodb://localhost:27017/urlshortner')

module.exports = mongoDB