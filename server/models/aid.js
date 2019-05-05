import mongoose from "mongoose"
//const mongoosePaginate = require('mongoose-paginate');
const Schema = mongoose.Schema;

const aidSchema = new Schema(
  {
    aidTitle: {
      type: String,
      required: true
    },
    aidIntro: {
      type: String,
      required: true
    },
    videoLink: {
      type: String,
      required: true
    },
    imageLink: {
      type: String,
      required: false
    },
    aidDescription: {
      type: String,
      required: true
    }
  }
);

module.exports = mongoose.model("Aid", aidSchema);