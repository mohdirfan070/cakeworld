const express = require('express');

const router = express.Router();

const { AddProduct } = require('../controllers/addProductController.js');

//app.use me jo  path diye the usme sab hota so we dont need to give the path here

router.route("/").post( AddProduct);

module.exports = router;