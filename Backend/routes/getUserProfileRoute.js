const express = require("express");
const router = express();
const {getUserProfile} = require('../controllers/getUserProfileController.js');
router.route("/").post(getUserProfile);

module.exports = router;