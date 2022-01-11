const mongoose = require("mongoose");

const UserProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  image: {
    type: String,
    require: true,
  },
  cloudinaryId: {
    type: String,
    require: true,
  },
  bio: {
    type: String,
    require: true,
  },
  interests: {
    type: String,
    require: true,
  },
  goals: {
    type: String,
    require: true,
  },
  firstName: {
    type: String,
    require: true
  },
  lastNAme: {
    type: String,
    require: true
  },
  currentEmail: {
    type: String,
    require: true
  },
  newEmail: {
    type: String,
    require: true
  },
  phoneNumber: {
    type: Number,
    require: true
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("UserProfile", UserProfileSchema);
