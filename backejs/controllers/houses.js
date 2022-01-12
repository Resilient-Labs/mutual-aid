const House = require("../models/House"); 

module.exports = {
  getHouse: async (req, res) => {
    function getHouseStartDate(){
      return new moment('2022-12-13T03:24:00')
    }
console.log('please work')
    try {
      let paymentDate = null
      const startDate = getHouseStartDate()
      const currentDate = moment()
      
      if(currentDate.isAfter(startDate)){
        const dayOfMonth = startDate.date()
        paymentDate = moment().date(dayOfMonth)
        if (paymentDate.isBefore(currentDate)){
          paymentDate = paymentDate.add(1, 'month')
        }
      }
      else{
        paymentDate = startDate
      }
      let endOfCycle = startDate.add(1, 'year')
      let cycleOver = false
      if(paymentDate.isAfter(endOfCycle)){
        countDown = 0
        cycleOver = true
      }
      console.log(endOfCycle, cycleOver)
      //getting millisecs between the two dates (86,400 x 1000 = ms in a day)
      let millisecondsPerDay = 86400 * 1000
      let countDown = Math.floor((paymentDate - currentDate) / millisecondsPerDay)

      res.render("house.ejs", {
      endOfCycle,
      countDown,
      cycleOver,
      startDate: startDate.format('MM/DD/YYYY'),
      currentDate,
      paymentDate: paymentDate.format('MM/DD/YYYY'),
      });
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
