import mongoose from 'mongoose';

const reportSchema = new mongoose.Schema({
    audioId: {
        required: true,
        type: String,
    },
    audioUrl: {
        required: true,
        type: String,
    },
    coords: {
        index: '2dsphere',
        required: true,
        type: [Number],
    },
    image: String,
    name: {
        required: true,
        type: String,
    },
    number: {
        required: true,
        type: Number,
    },
});

module.exports = mongoose.model('Report', reportSchema);
