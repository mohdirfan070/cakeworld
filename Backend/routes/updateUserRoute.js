const express = require('express');
const router = express();

const {updateUser} = require('../controllers/updateUserController.js');

router.route("/").put(updateUser);

module.exports = router;