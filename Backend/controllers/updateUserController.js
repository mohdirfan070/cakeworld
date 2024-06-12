const express = require('express');
const mongoose = require("mongoose");
const Customer = require('../models/customerSchema');

const updateUser = async (req,res)=>{
    let {id , mobileNumber , username , password , address , pincode , name } = req.body;
    try {
        let result = await Customer.findOneAndUpdate({id},{username,password,address,pincode,mobileNumber,name},{new:true});
        // let result = await  Customer.findByIdAndUpdate({id},{username,password,address,pincode,mobileNumber,name},{new:true});
        // res.status(200).json({id , mobileNumber , username , password , address , pincode , name });
        res.status(200).json(result);
    } catch (error) {
        console.log(error);
    }
};

module.exports = {updateUser};