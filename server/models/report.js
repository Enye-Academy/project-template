import mongoose from "mongoose"

const reportSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    number: {
      type: Number,
      required: true
    },
    audio: {
      type: String,
      required: true
    },
    image: String,
    coords: {
      type: [Number],
      index: '2dsphere',
      required: true
    }
  });

module.exports = mongoose.model("Report", reportSchema);