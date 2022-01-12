const mongoose = require("mongoose");

const MessagesSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  message: {
    type: String,
    require: true,
  },
  postedOn: {
    type: Date,
    default: Date.now(),
  },
  house: {
    type: String,
  }
});

module.exports = mongoose.model("messages", MessagesSchema);