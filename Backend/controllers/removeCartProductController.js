const express = require('express');
const Customer = require("../models/customerSchema.js");
const mongoose = require('mongoose');
const Cart = require('../models/cartSchema.js');




const removeProduct = async (req, res) => {

  let { cartId, productId, productQuantity, productuuId, productPrice, newproductPrice } = req.body;
  let result = await Cart.findById(cartId);
  // consoloe.log( { cartId , productId, productQuantity,productuuId , productPrice , newproductPrice  } );

  // // try Case
  let item = result.prodList.filter((ele) => ele.uuId == productuuId);
  let items = result.prodList.filter((ele) => ele.uuId != productuuId);
  if (item.length!=0) {

    if(result.totalPrice<=0 ||  result.quantity<=0){
          result.totalPrice=0;
          result.quantity=0;
            items.length=0;
           result  = await Cart.findByIdAndUpdate(cartId,{prodList:items,quantity:result.quantity,totalPrice:result.totalPrice},{new:true})
          }else{
            result.totalPrice -= (productPrice * productQuantity);
            result.quantity -= 1;
            result  = await Cart.findByIdAndUpdate(cartId,{prodList:items,quantity:result.quantity,totalPrice:result.totalPrice},{new:true});
           
          }

  
   
  }



}

module.exports = { removeProduct };
