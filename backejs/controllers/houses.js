const House = require("../models/House");

module.exports = {
  getHouse: async (req, res) => {
    try {

      res.render("house.ejs");
    } catch (err) {
      console.log(err);
    }
  },
// to render out to house.ejs  //getHouse is a function that is grabbing the infrormation from houses. 

  createHouse: async (req, res) => {
    try {
        await House.create({
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

        console.log("House has been created!");
        res.redirect("/profile");
    } catch (err) {
        console.log(err);
    }
},

};
