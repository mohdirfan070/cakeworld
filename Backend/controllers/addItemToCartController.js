const express = require("express");
const mongoose = require('mongoose');
const Customer = require('../models/customerSchema.js');
const Cart = require("../models/cartSchema.js");



const addToCart = async (req, res) => {

    let { username, password, productId } = req.body;
    try {
        let result = await Customer.findOneAndUpdate({ username, password }, { $push: { cart: productId } }, { new: true });
        res.json({ result });
        // let cart = result.cart;
        // res.json({ cart, productId });


    } catch (error) {

    }



}

module.exports = { addToCart };