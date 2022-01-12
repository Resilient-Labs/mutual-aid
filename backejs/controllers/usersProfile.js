const cloudinary = require("../middleware/cloudinary");
const Profile = require("../models/UserProfile"); 

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
      const profile = await Profile.find({ user: req.user.id });
      console.log('hello there')
      //Note for DevOps : to render .ejs template it can be 'profile.ejs' or what front-end called 'settings'. This is taking care of rendering the users' profile data comming from the database
      res.render("dashboard.ejs", { profile: profile, user: req.user });
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
        bio:req.body.bio,
        interests:req.body.interests,
        goals:req.body.goals,
        firstName:req.body.firstName,
        lastNAme:req.body.lastName,
        currentEmail:req.body.currentEmail,
        newEmail:req.body.newEmail,
        phoneNumber:req.body.phoneNumber

      });
      console.log("Profile has been added!");
      res.redirect("/settings");
    } catch (err) {
      console.log(err);
    }
  },
};
