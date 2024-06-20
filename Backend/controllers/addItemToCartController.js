const express = require("express");
const mongoose = require('mongoose');
const Customer = require('../models/customerSchema.js');
const Product = require("../models/productSchema.js");
const cartProduct = require("../models/cartProductSchema.js");
const Cart = require("../models/cartSchema.js");

// const checkProduct = (user, product) => {
//     return user.cart.every((item) => (item._id === product.id))
// }

const addToCart = async (req, res) => {

    //good Case
    let { username, password, productId, cartId, quantity, msg } = req.body;
    // console.log(cartId);
    let product = await Product.findById(productId);
    product.msg = msg;
    product.quantity = quantity;
    //  console.log(product);

    try {
        //    let result = await Cart.findOneAndUpdate({ _id:cartId }, { $push: { prodList: product } }, { new: true });
        // console.log(cartId);
       
        //   console.log(result);
        let result = await Cart.findById(cartId);
        // console.log(result);
        result.totalPrice+=(eval(product.price*product.quantity));
        result.quantity=result.quantity+1;
        result = await Cart.findByIdAndUpdate(cartId, { $push:{prodList:product},totalPrice:result.totalPrice,quantity:result.quantity} , {new:true});
        // console.log(result);
        res.json({ result });
        // let cart = result.cart;`
        // res.json({ cart, productId });
    } catch (error) {

    }
}

module.exports = { addToCart };