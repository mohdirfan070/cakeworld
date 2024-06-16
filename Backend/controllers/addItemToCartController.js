const express = require("express");
const mongoose = require('mongoose');
const Customer = require('../models/customerSchema.js');
const Product = require("../models/productSchema.js");
const cartProduct = require("../models/cartProductSchema.js");

// const checkProduct = (user, product) => {
//     return user.cart.every((item) => (item._id === product.id))
// }

const addToCart = async (req, res) => {

    //good Case
    let { username, password, productId, quantity, msg } = req.body;
    let product = await Product.findById(productId);
    product.msg = msg;
    product.quantity = quantity;

    try {
           let result = await Customer.findOneAndUpdate({ username, password }, { $push: { cart: product } }, { new: true });
        // console.log(result);
        res.json({ result });
        // let cart = result.cart;`
        // res.json({ cart, productId });
    } catch (error) {

    }
}

module.exports = { addToCart };