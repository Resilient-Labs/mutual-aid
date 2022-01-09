const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const groupController = require("../controllers/group");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Post Routes - simplified for now

router.post("/createGroup", groupController.createGroup);

module.exports = router;
