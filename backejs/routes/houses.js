const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const houseController = require("../controllers/house");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//get house
router.get("/house", ensureAuth, houseController.getHouse);
 

module.exports = router;
