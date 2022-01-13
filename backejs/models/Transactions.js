const mongoose = require("mongoose");

const TransactionsSchema = new mongoose.Schema({
  // user: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "User",
  // },
  paidBy: {
    type:String,
    require: true
  },
  house: {
    type: String,
    require: true
  },
  payment: {
    type: Number,
    require: true,
  },
  paidOn: {
    type: Date,
    default: Date.now(),
  },
});


module.exports = mongoose.model("transactions", TransactionsSchema);