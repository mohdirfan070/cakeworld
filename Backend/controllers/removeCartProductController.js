const express  = require('express');
const Customer = require("../models/customerSchema.js");
const mongoose  = require('mongoose');
const Cart = require('../models/cartSchema.js');




const removeProduct = async(req, res )=>{

  let { cartId , productId, productQuantity,productuuId , newproductPrice  } = req.body;
  //Good Case

    // console.log({ cartId , productId, productQuantity,productuuId , newproductPrice    });
  //  let result  = await Cart.findById(cartId);
  //  let newArr  = result.prodList.filter((ele)=>ele.uuId!=productuuId);
  // // console.log(newArr);
  //   if(result.totalPrice<=0 ||  result.quantity<=0){
  //    result.totalPrice=0;
  //    result.quantity=0;
  //     newArr.length=0;
  //  result  = await Cart.findByIdAndUpdate(cartId,{prodList:newArr,quantity:result.quantity,totalPrice:result.totalPrice},{new:true});
  //   }else{
  //     result.totalPrice-=newproductPrice;
  //    result.quantity-=1; 
  //     result  = await Cart.findByIdAndUpdate(cartId,{prodList:newArr,quantity:result.quantity,totalPrice:result.totalPrice},{new:true})
  //   }


  //try Case
     let result  = await Cart.findById(cartId);
   let newArr  = result.prodList.filter((ele)=>ele.uuId!=productuuId);
  // console.log(newArr);
  if(result.prodList.filter((ele)=>ele.uuId===productuuId)){
    if(result.totalPrice<=0 ||  result.quantity<=0){
      result.totalPrice=0;
      result.quantity=0;
        newArr.length=0;
       result  = await Cart.findByIdAndUpdate(cartId,{prodList:newArr,quantity:result.quantity,totalPrice:result.totalPrice},{new:true})
     }else{
       result.totalPrice-=newproductPrice;
      result.quantity-=1; 
       result  = await Cart.findByIdAndUpdate(cartId,{$pull:{prodList:{uuId:productuuId}},quantity:result.quantity,totalPrice:result.totalPrice},{new:true});
     }
  }
   



   
}

module.exports = {removeProduct};
