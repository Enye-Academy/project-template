const mongoose = require('mongoose');

const { Schema } = mongoose;

const profileSchema = new Schema({
    city: {
        required: true,
        type: String,
    },
    country: {
        required: true,
        type: String,
    },
    email: {
        lowercase: true,
        required: true,
        type: String,
        unique: true,
    },
    firstName: {
        required: true,
        type: String,
    },
    followers: {
        default: 0,
        type: Number,
    },
    following: {
        default: 0,
        type: Number,
    },
    groups: {
        default: 0,
        type: Number,
    },
    image: {
        contentType: String,
        data: Buffer,
    },
    lastName: {
        required: true,
        type: String,
    },
});

module.exports = mongoose.model('Profile', profileSchema);
