const express = require('express');
const Customer = require("../models/customerSchema.js");

 const getCartItems = async (req,res)=>{
        let {username} = req.body;
        console.log(username);
        try {
            let result = await Customer.findOne({username});
            console.log(result);
            res.json({result});
        } catch (error) {
            res.json({error});
        }
}

module.exports= {getCartItems};