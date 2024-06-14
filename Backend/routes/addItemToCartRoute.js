const express = require('express');
const router = express();

const {addToCart} = require('../controllers/addItemToCartController.js');

router.route("/").post(addToCart);
module.exports = router;

