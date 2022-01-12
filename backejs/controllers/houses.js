const House = require("../models/House"); 

module.exports = {
  getHouse: async (req, res) => {
    try {
      console.log("working house")
      res.render("house.ejs");
    } catch (err) {
      console.log('herror is happening')
      console.log(err);
    }
  },
  joinHouse: async (req, res) => {
    try {
      const house = await House.find();
      console.log("working house",house)
      res.render("join-house.ejs",{house:house});
    } catch (err) {
      console.log('herror is happening')
      console.log(err);
    }
  },
  createHouse: async (req, res) => {
    console.log('hey I am working I am creatting Houses')
    try {
    

      await House.create({
        user: req.user.id,
        houseName: req.body.houseName,
        startDate:req.body.startDate,
        endDate:req.body.endDate,
        monthlyDueDate:req.body.monthlyDueDate,
        amountOfMembers:req.body.amountOfMembers,
        monthlyPaymentAmount:req.body.monthlyPaymentAmount,

      });
      console.log("Profile has been added!");
      res.redirect("/join");
    } catch (err) {
      console.log(err);
    }
  },
  chooseHouse:async (req,res) => {
    try {
      await House.findOneAndUpdate(
        { _id: HouseID},
        {
          $inc: { members: userName },
        }
      );
    
      res.redirect(`/post`);
    } catch (err) {
      console.log(err);
    }

  }
};
