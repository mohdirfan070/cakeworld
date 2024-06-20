const express = require('express');
const Customer = require("../models/customerSchema.js");
const Cart = require("../models/cartSchema.js");
 const getCartItems = async (req,res)=>{
        let {username, cartId }  = req.body;
        // console.log(cartId);
        try {
            let result = await Cart.findOne({_id:cartId});
            //   console.log(result);
            res.json({result});
        } catch (error) {
            // console.log(error);
            res.json({error});
        }
}

module.exports= {getCartItems};