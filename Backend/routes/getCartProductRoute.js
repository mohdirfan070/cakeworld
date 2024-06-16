const express = require("express");
const router = express();
const { getCartItems } = require('../controllers/getCartPRoductsController.js');

router.route("/").post(getCartItems);
module.exports = router;