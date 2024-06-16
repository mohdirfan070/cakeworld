const express  = require('express');
const Customer = require("../models/customerSchema.js");
const mongoose  = require('mongoose');




const removeProduct = async(req, res )=>{
    let { username , productId   } = req.body;
    //  console.log({username , productId  });

   await Customer.findOne({username}).then(async(result)=>{
        let newArr = [];
                let arr = result.cart;
            for(i=0;i<arr.length;i++){
              if(arr[i]._id!=productId){
                newArr.push(arr[i]);
              }
            }

            // console.log(newArr);
            await Customer.findOneAndUpdate({username},{cart:newArr});
            newArr=[];

   });
   
  //  res.json({"msg":"Product is removed"});

}

module.exports = {removeProduct};