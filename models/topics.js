const mongoose = require('mongoose');
// Use global promise for mongoose
mongoose.Promise = global.Promise;

// Make Schema
const topicSchema = new mongoose.Schema({
    author: {
        ref: 'User',
        required: 'Forum topic Should have a valid User!',
        type: mongoose.Schema.ObjectId,
    },
    content: {
        required: 'Content cannot be empty',
        trim: true,
        type: String,
    },
    created: {
        default: Date.now,
        type: Date,
    },
    tags: [String],
    title: {
        require: 'Please enter a Title for the Forum topic!',
        trim: true,
        type: String,
    },
});
// Define Our Indexes for quick queries and searches
topicSchema.index({
    description: 'text',
    title: 'text',
});
// Model to get the tag list
topicSchema.statics.getTagsList = () => this.aggregate([
    { $unwind: '$tags' },
    { $group: { _id: '$tags', count: { $sum: 1 } } },
    { $sort: { count: -1 } },
]);
// Add a virtual field to find comments where post_id = comment article
topicSchema.virtual('comments', {
    foreignField: 'article', // Field on the Comment schema
    localField: '_id', // field on the post schema
    ref: 'Comment', // What model to link
});

module.exports = mongoose.model('Topic', topicSchema);
