const mongoose = require("mongoose");


//schema for all the information for each House that will be included in the database
const GroupSchema = new mongoose.Schema({
    admin: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    houseName: {
        type: String
    },
    startDate: {
        type: Date
    },
    amountOfMembers: {
        type: Number
    },
    monthlyPaymentAmount: {
        type: Number
    },
    members:
        [{
            member: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User",
            },
            memberPaid: {
                type: Boolean
            },
            payConfirmation: [{
                type: Boolean,
                type: Boolean
            }],
            position: {
                type: Number
            }
        }]
});

/* 
type: mongoose.Schema.Types.ObjectId,
ref: "User",
*/

module.exports = mongoose.model("Group", GroupSchema);
