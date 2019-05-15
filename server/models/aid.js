import mongoose from 'mongoose';
// const mongoosePaginate = require('mongoose-paginate');
const { Schema } = mongoose;

const aidSchema = new Schema(
    {
        description: {
            required: true,
            type: String,
        },
        imageId: {
            required: true,
            type: String,
        },
        imageUrl: {
            required: true,
            type: String,
        },
        intro: {
            required: true,
            type: String,
        },
        title: {
            required: true,
            type: String,
        },
        video: {
            required: true,
            type: String,
        },
    }
);

module.exports = mongoose.model('Aid', aidSchema);
