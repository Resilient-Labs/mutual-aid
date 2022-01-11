const mongoose = require("mongoose");

const UserProfileSchema = new mongoose.Schema({
  image: {
    type: String,
    require: true,
  },
  bio: {
    type: String,
    require: true,
  },
  goals: {
    type: String,
    require: true,
  },
  interests: {
    type: String,
    require: true,
  }
  cloudinaryId: {
    type: String,
    require: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("UserProfile", UserProfileSchema);
