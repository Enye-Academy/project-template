import mongoose from 'mongoose';
// const mongoosePaginate = require('mongoose-paginate');
const { Schema } = mongoose;

const aidSchema = new Schema(
    {
        aidDescription: {
            required: true,
            type: String,
        },
        aidIntro: {
            required: true,
            type: String,
        },
        aidTitle: {
            required: true,
            type: String,
        },
        imageLink: {
            required: false,
            type: String,
        },
        videoLink: {
            required: true,
            type: String,
        },
    }
);

module.exports = mongoose.model('Aid', aidSchema);
