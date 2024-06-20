const express = require("express");
const mongoose = require("mongoose");
const Customer = require("../models/customerSchema.js");
const getUserProfile = async (req,res)=>{
  
    let {username} = req.body  ;
   
        try {
            let result = await Customer.findOne({username} );
            // console.log(result);
            res.status(200).json(result);
        } catch (error) {
            res.status(204).json({"msg":"No users Found"});
        }
   
      
}
module.exports = {getUserProfile};