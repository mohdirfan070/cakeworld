const express = require("express");
const mongoose = require('mongoose');
const Customer = require('../models/customerSchema.js');
const Cart = require("../models/cartSchema.js");

const addToCart = async (req,res)=>{

    let {username , password , productId} = req.body;
    try {
        await Customer.findOne({username,password}).then(async(result)=>{

            

        })
    } catch (error) {
        
    }

}