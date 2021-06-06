const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Scheme 
const characterSchema = new Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true
    },
    alias: {
        type: String
    },
    actor: {
        type: String
    }
});

const Character = mongoose.model('character', characterSchema);

module.exports = Character;