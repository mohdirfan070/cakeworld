const express = require("express");
const router = express();
const {getUsers} = require('../controllers/getUserController.js');
router.route("/").post(getUsers);

module.exports = router;