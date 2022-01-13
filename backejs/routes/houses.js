const express = require("express");
const router = express.Router();
const houseController = require("../controllers/houses");
const { ensureAuth, ensureGuest } = require("../middleware/auth");
 

//get house
router.get("/house/house", ensureAuth, houseController.getHouse);


module.exports = router;
