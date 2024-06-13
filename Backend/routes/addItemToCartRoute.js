const express = require('express');
const router = express();

const {addToCart} = require('../controllers/addItemToCartController.js');

router.route("/").put(addToCart);
module.exports = router;

