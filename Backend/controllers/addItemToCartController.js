const express = require("express");
const mongoose = require('mongoose');
const Customer = require('../models/customerSchema.js');
const Cart = require("../models/cartSchema.js");
const Product = require("../models/productSchema.js");

const checkProduct = (user, product) => {
    return user.cart.every((item) => (item._id === product.id))
}

const addToCart = async (req, res) => {
    let { username, password, productId } = req.body;
    let user = await Customer.findOne({ username, password });
    // let product = await Product.findById(productId);
    let arrCart = user.cart;
    // console.log(arrCart.every((ele)=>ele._id!==productId));
    if(arrCart.every((ele)=>ele._id!==productId)){
        // console.log(true);
        res.json({"msg":"Product ALready Exist!"});
    }else{
        console.log(false);
        res.json({"msg":"Product Added to Cart!"});
    }
    // res.json({"msg":"Work in progress"});


    //good Case
    // let { username, password, productId } = req.body;

    // let product = await Product.findById(productId);
    // try {

    //     let result = await Customer.findOneAndUpdate({ username, password }, { $push: { cart: product } }, { new: true });
    //     res.json({ result });
    //     // let cart = result.cart;
    //     // res.json({ cart, productId });


    // } catch (error) {

    // }

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