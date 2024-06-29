const express = require("express");
const router = express();
const {loginUser} = require('../controllers/loginController.js');

router.route("/").post(loginUser);

module.exports = router;
