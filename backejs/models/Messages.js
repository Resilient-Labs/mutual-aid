const mongoose = require("mongoose");

const MessagesSchema = new mongoose.Schema({
  // user: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "User",
  // },
  postedBy: {
    type: String,
    require: true
  },
  message: {
    type: String,
    require: true,
  },
  postedOn: {
    type: Date,
    default: Date.now(),
  },
  houseId: {
    type: mongoose.Schema.Types.ObjectId,
  }
});

module.exports = mongoose.model("messages", MessagesSchema);