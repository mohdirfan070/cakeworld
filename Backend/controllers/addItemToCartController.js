const express = require("express");
const mongoose = require('mongoose');
const Customer = require('../models/customerSchema.js');
const Cart = require("../models/cartSchema.js");
const Product = require("../models/productSchema.js");
const cartSchema = require('../models/cartProductSchema.js');

const checkProduct = (user, product) => {
    return user.cart.every((item) => (item._id === product.id))
}

const addToCart = async (req, res) => {
  
    //good Case
    let { username, password, productId , quantity , msg } = req.body;
    let product = await Product.findById(productId);
    try {
        let result = await Customer.findOneAndUpdate({ username, password }, { $addToSet : { cart:{ product ,  quantity , msg }} }, { new: true });
        res.json({ result });
        // let cart = result.cart;
        // res.json({ cart, productId });
    } catch (error) {

    }
}

module.exports = { addToCart };