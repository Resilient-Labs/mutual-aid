const cloudinary = require("../middleware/cloudinary");
const Group = require("../models/Group");

module.exports = {

    createPost: async (req, res) => {
        try {
            await Group.create({
                admin: req.user._id,
                houseName: req.body.houseName,
                startDate: req.body.startDate,
                amountOfMembers: req.body.amountOfMembers,
                monthlyPaymentAmount: req.body.monthlyPaymentAmount,
                members:
                    [{
                        member: req.user._id,
                        memberPaid: false,
                        payConfirmation: [false, false],
                        position: 0
                    }]
            });

            console.log("Post has been added!");
            res.redirect("/profile");
        } catch (err) {
            console.log(err);
        }
    },
};
