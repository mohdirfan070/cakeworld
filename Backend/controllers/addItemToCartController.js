const express = require("express");
const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');
const Customer = require('../models/customerSchema.js');
const Product = require("../models/productSchema.js");
const Cart = require("../models/cartSchema.js");

const addToCart = async (req, res) => {

    //good Case
    let { username, password, productId, cartId, quantity, msg } = req.body;
    //  console.log("This is CartID:"+cartId);
    let product = await Product.findById(productId);
    product.msg = msg;
    product.quantity = quantity;
    product.uuId = uuidv4();
    //   console.log(product);

    try {
       
        let result = await Cart.findById(cartId);
        //  console.log(result);
        result.totalPrice+=(eval(product.price*product.quantity));
        result.quantity=result.quantity+1;
        result = await Cart.findByIdAndUpdate(cartId, { $push:{prodList:product},totalPrice:result.totalPrice,quantity:result.quantity} , {new:true});
        // console.log(result);
        res.json({ result });
        // let cart = result.cart;`
        // res.json({ cart, productId });
    } catch (error) {
        console.log(error);
    }
}

module.exports = { addToCart };