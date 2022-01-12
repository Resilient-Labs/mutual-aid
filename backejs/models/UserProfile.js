const mongoose = require("mongoose");
//profile schemma
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
  phoneNumber: {
    type: String,
    require: true
  },
  phoneNumber: {
    type: String,
    require: true
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("UserProfile", UserProfileSchema);