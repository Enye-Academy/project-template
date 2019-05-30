const mongoose = require('mongoose');

const { Schema } = mongoose;
const PostSchema = new Schema({
    avatar: {
        type: String,
    },
    // The comments should be linked to a user
    comments: [
        {
            avatar: {
                type: String,
            },
            name: {
                type: String,
            },
            text: {
                required: true,
                type: String,
            },
            user: {
                ref: 'users',
                type: Schema.Types.ObjectId,
            },
        },
    ],
    date: {
        default: Date.now,
        type: Date,
    },

    // The 'likes' should be linked to a user
    likes: [
        {
            user: {
                ref: 'users',
                type: Schema.Types.ObjectId,
            },
        },
    ],
    name: {
        type: String,
    },
    text: {
        required: true,
        type: String,
    },

    // The post will refernce a user through 'user id'
    user: {
        ref: 'users',
        type: Schema.Types.ObjectId,
    },
});
module.exports = mongoose.model('post', PostSchema);
