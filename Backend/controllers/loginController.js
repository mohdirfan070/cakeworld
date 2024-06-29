const mongoose = require('mongoose');
const Customer = require('../models/customerSchema');
const Cart = require("../models/cartSchema");



const loginUser = async (req, res) => {

    let { loginUsername } = req.body;
    let username = loginUsername;
    // console.log(username);
    await Customer.findOne({ username }).then((result) => {
        //   console.log(result);
        res.status(200).json(result);
    }).catch((err)=>{
        res.status(404).json(err.messege);
    })



}
module.exports = { loginUser };