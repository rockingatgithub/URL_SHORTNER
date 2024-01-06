const mongoose = require('mongoose')

const linkSchema = new mongoose.Schema({
    originalURL: {
        type: String,
        required: true,
    },
    code: {
        type: String,
        required: true,
        unique: true
    },
    shortenedURL: {
        type: String,
        required: true,
        unique: true,
    },
    visited: {
        type: Number,
        required: true,
    }
}, {timestamps: true})


const Link = mongoose.model('Link', linkSchema)

module.exports = Link