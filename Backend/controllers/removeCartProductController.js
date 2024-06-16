const express  = require('express');
const Customer = require("../models/customerSchema.js");
const mongoose  = require('mongoose');

const removeProduct = async(req, res )=>{
    let { username , productId } = req.body;
    console.log({username , productId });
    let result = await Customer.findOne({username});
    console.log(result);
    res.json({"msg":"Product is removed"});

}

module.exports = {removeProduct};