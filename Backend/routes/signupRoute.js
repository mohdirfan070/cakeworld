const express = require("express");
const router = express();
const {addUser} = require('../controllers/signupController.js');

router.route("/").post(addUser);

module.exports = router;