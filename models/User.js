const mongoose = require('mongoose');

const { Schema } = mongoose;
const UserSchema = new Schema({
    // If there is an associated avatar it will show a placeholder avatar for images
    avatar: {
        type: String,
    },
    date: {
        default: Date.now,
        type: Date,
    },
    email: {
        required: true,
        type: String,
    },

    name: {
        required: true,
        type: String,
    },

    password: {
        required: true,
        type: String,
    },
    profile: [],
});

module.exports = mongoose.model('users', UserSchema);
