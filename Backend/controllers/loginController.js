const mongoose = require('mongoose');
const Customer = require('../models/customerSchema');
const Cart = require("../models/cartSchema");



const loginUser = async (req, res) => {

    let { loginUsername , loginPassword } = req.body;
    let username = loginUsername;
    let password = loginPassword;
    // console.log(username);
    await Customer.findOne({username,password}).then((result) => {
        //   console.log(result);
        res.status(200).json(result);
    }).catch((err)=>{
        res.status(404).json(err.messege);
    })



}
module.exports = { loginUser };