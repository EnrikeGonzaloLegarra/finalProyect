const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const fileSchema = new mongoose.Schema({
  name: String,
  gpx_path: String,
  eventId: {
    type: Schema.Types.ObjectId,
    ref: 'event'
  }
});

var File = mongoose.model("File", fileSchema);
module.exports = File;
