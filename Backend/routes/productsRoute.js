const express = require('express');
const router = express();

const {getProducts} = require("../controllers/productsControler.js");

router.route("/").get(getProducts);

module.exports = router;