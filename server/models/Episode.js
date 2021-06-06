const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Scheme 
const episodeSchema = new Schema({
    number: {
        type: Number,
        required: true
    },
    title: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true
    }
});

const Episode = mongoose.model('episode', episodeSchema);

module.exports = Episode;