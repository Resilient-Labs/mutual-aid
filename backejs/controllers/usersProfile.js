const cloudinary = require("../middleware/cloudinary");
const Profile = require("../models/UserProfile");
const Transactions = require("../models/Transactions");
const House = require("../models/House")
var ObjectId = require('mongodb').ObjectID;

module.exports = {
  getProfile: async (req, res) => {
    try {
      const profile = await Profile.find({ user: req.user.id });

      //Note for DevOps : to render .ejs template it can be 'profile.ejs' or what front-end called 'settings'. This is taking care of rendering the users' profile data comming from the database
      res.render("profile.ejs", { profile: profile, user: req.user });
    } catch (err) {
      console.log(err);
    }
  },
  //get dashboard
  getDashboard: async (req, res) => {
    try {
      console.log(req.user.id)
      const profile = await Profile.find({ user: req.user.id });
      const houses = await House.find({ 'members.userId': ObjectId(req.user.id) });
      const transactions = await Transactions.find({ paidBy: req.user.firstName })


      // const house = await House.find({})

      // find the specific house

      // const members = House.find()
      // let hasBeenRandomized = false

      // loop that needs to go thru the house object's members
      // for (let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], i = numbers.length; i--;) {
      //   const randomNum = numbers.splice(Math.floor(Math.random() * (i + 1)), 1)[0]
      //   console.log('this is the random number we have to assign to members', randomNum)
      //   hasBeenRandomized = true
      // }

      console.log('hello there')
      console.log(profile)
      //Note for DevOps : to render .ejs template it can be 'profile.ejs' or what front-end called 'settings'. This is taking care of rendering the users' profile data comming from the database
      res.render("dashboard.ejs", {
        profile: profile,
        houses: houses,
        transactions: transactions,
        user: req.user
      });
    } catch (err) {
      console.log(err);
    }
  },

  //get settings
  getSettings: async (req, res) => {
    try {
      const profile = await Profile.find({ user: req.user.id });
      res.render("settings.ejs", { profile: profile, user: req.user })
    } catch (err) {
      console.log(err);
    }
  },

  //Note for DevOps : Creates the profile sending the data that is collected in settings.ejs to the database. Now is just sending image,user,bio but more can be added.
  createProfile: async (req, res) => {
    console.log('hey I am working')
    try {
      // Upload image to cloudinary
      const result = await cloudinary.uploader.upload(req.file.path);

      await Profile.create({
        user: req.user.id,
        image: result.secure_url,
        cloudinaryId: result.public_id,
        bio: req.body.bio,
        interests: req.body.interests,
        goals: req.body.goals,
        firstName: req.body.firstName,
        lastNAme: req.body.lastName,
        currentEmail: req.body.currentEmail,
        newEmail: req.body.newEmail,
        phoneNumber: req.body.phoneNumber

      });
      console.log("Profile has been added!");
      res.redirect("/settings");
    } catch (err) {
      console.log(err);
    }
  },
};
