const express = require("express");
const mongoose = require('mongoose');
const Customer = require('../models/customerSchema.js');
const Cart = require("../models/cartSchema.js");
const Product = require("../models/productSchema.js");

const checkProduct = (user, product) => {
    return user.cart.every((item) => (item._id === product.id))
}

const addToCart = async (req, res) => {
  
    //good Case
    let { username, password, productId } = req.body;
    let product = await Product.findById(productId);
    try {
        let result = await Customer.findOneAndUpdate({ username, password }, { $addToSet : { cart: product } }, { new: true });
        res.json({ result });
        // let cart = result.cart;
        // res.json({ cart, productId });
    } catch (error) {
    }




    //Worst Case
    //  let { username, password, productId } = req.body;

    //  let product = await Product.findById(productId);
    // let user = await Customer.findOne({ username, password })
    // if(checkProduct(user , product)){
    //     res.json({"msg":"Product ALready Exist!"});
    // }else{
    //     let result = await Customer.findOneAndUpdate({ username, password }, { $push: { cart: product } }, { new: true });
    //     res.json({ result });
    // }
    //     // res.json({product,user});
}

module.exports = { addToCart };