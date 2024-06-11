const express = require("express");
const router = express();
const {addUser} = require('../controllers/loginController.js');

router.route("/").post(addUser);

module.exports = router;
