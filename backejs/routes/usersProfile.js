const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const profileController = require("../controllers/usersProfile");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Post Routes - simplified for now
router.get("/profile", ensureAuth, profileController.getProfile);
router.get("/dashboard", ensureAuth, profileController.getDashboard);
router.post("/createProfile", upload.single("imageUpload"), profileController.createProfile);

module.exports = router;
