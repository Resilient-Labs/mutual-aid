const express = require("express");
const router = express.Router();
const housesController = require("../controllers/houses");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//get house
router.get("/house", ensureAuth, housesController.getHouse);

//Post Routes - simplified for now
router.post("/createHouse", housesController.createHouse);

module.exports = router;