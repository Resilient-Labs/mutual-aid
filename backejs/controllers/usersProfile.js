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
 //Note for DevOps : Creates the profile sending the data that is collected in settings.ejs to the database. Now is just sending image,user,bio but more can be added.
  createProfile: async (req, res) => {
    try {
      // Upload image to cloudinary
      const result = await cloudinary.uploader.upload(req.file.path);

      await Profile.create({
        image: result.secure_url,
        cloudinaryId: result.public_id,
        interests:req.body.interests,
        goals:req.body.goals,
        user: req.user.id,
        bio:req.body.bio
      });
      console.log("Profile has been added!");
      res.redirect("/profile");
    } catch (err) {
      console.log(err);
    }
  },
};
