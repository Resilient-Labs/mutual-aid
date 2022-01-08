const cloudinary = require("../middleware/cloudinary");
const Profile = require("../models/UserProfile"); 

module.exports = {
  getProfile: async (req, res) => {
    try {
      const profile = await Profile.find({ user: req.user.id });
      res.render("profile.ejs", { profile: profile, user: req.user });
    } catch (err) {
      console.log(err);
    }
  },

  createProfile: async (req, res) => {
    try {
      // Upload image to cloudinary
      const result = await cloudinary.uploader.upload(req.file.path);

      await Profile.create({
        image: result.secure_url,
        cloudinaryId: result.public_id,
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
