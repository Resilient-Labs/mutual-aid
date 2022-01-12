<<<<<<< HEAD
const mongoose = require("mongoose");
//profile schemma
const houseSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  admin: {
    type: String,
    require: true,
  },houseName: {
    type: String,
    require: true,
  },
  startDate: {
    type: String,
    require: true,
  },
  endDate: {
    type: String,
    require: true,
  },
  monthlyDueDate: {
    type: String,
    require: true,
  },
  memberCount: {
    type: Number,
    default: 12,
  },
  monthlyDues: {
    type: String,
    require: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  members: {
    type: Array,
    default: []
  },
});

module.exports = mongoose.model("house", houseSchema);
=======
//TBD
>>>>>>> origin/backejs
