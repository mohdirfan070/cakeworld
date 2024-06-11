const express = require('express');
const router = express.Router();

const {AddCustomer} = require('../controllers/addCustoermController.js');

router.route("/").post(AddCustomer);

module.exports = router;