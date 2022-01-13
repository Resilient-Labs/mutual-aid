const mongoose = require("mongoose");
//profile schemma
const houseSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  admin: {
    type: mongoose.Schema.Types.ObjectId,
  },
  houseName: {
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
  monthlyPaymentAmount: {
    type: Number,
    require: true,
  },
  monthlyPool: {
    type: Number,
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
