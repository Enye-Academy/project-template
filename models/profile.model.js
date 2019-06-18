const mongoose = require('mongoose');

const { Schema } = mongoose;

const profileSchema = new Schema({
    bio: {
        required: true,
        type: String,
    },
    city: {
        required: true,
        type: String,
    },
    country: {
        required: true,
        type: String,
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
    user: {
        ref: 'users',
        type: Schema.Types.ObjectId,
    },
});

module.exports = mongoose.model('Profile', profileSchema);
