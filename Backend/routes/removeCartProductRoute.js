const express = require('express');
const router = express();
const {removeProduct}= require("../controllers/removeCartProductController.js");

router.route("/").post(removeProduct);
module.exports = router;