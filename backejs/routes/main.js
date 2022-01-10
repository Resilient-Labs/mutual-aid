const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth");
const homeController = require("../controllers/home");
const usersProfileController = require("../controllers/usersProfile");
const { ensureAuth, ensureGuest } = require("../middleware/auth");
const houseController = require("../controllers/houses");
//Main Routes - simplified for now
router.get("/", homeController.getIndex);
router.get("/dashboard", ensureAuth, usersProfileController.getDashboard); //note for DevOps: here we are calling the method getProfile from the controllers the route was name /profile as a plaseholder but it can be /settings because this will render users settings form.
router.get("/house", ensureAuth, houseController.getHouse);
////////////loging routs and this will render the loging and singdup calling the methods getLogin or getSingup from /controllers/auth
router.get("/login", authController.getLogin);
router.post("/login", authController.postLogin);
router.get("/logout", authController.logout);
router.get("/signup", authController.getSignup);
router.post("/signup", authController.postSignup);

module.exports = router;
