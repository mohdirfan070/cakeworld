const express = require('express');
const router = express.Router();

const {Home} = require("../controllers/homeController.js");

router.route("/").get(Home);
router.route("/home").get(Home);

module.exports = router;