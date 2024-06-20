const express  = require('express');
const Customer = require("../models/customerSchema.js");
const mongoose  = require('mongoose');
const Cart = require('../models/cartSchema.js');




const removeProduct = async(req, res )=>{

  let { cartId , productId, productQuantity,productMsg , newproductPrice  } = req.body;
  // console.log({ cartId , productId, productQuantity,productMsg , newproductPrice    });
  let result  = await Cart.findById(cartId);
  
  let newArr  = result.prodList.filter((ele)=>ele._id!=productId && ele.msg!=productMsg || ele.quantity!=productQuantity);

   if(result.totalPrice>0 &&  result.quantity>0){
    result.totalPrice-=newproductPrice;
    result.quantity-=1;
  result  = await Cart.findByIdAndUpdate(cartId,{prodList:newArr,quantity:result.quantity,totalPrice:result.totalPrice},{new:true});
   }

  
  // console.log(result);
}

module.exports = {removeProduct};