const mongoose = require('mongoose');
const Customer = require('../models/customerSchema');
// const Cart = require("../models/cartSchema");
const addUser = async (req, res) => {
   
    let { name, username, password, mobileNumber, address, pincode , gender , profileImg    } = req.body;
   
    // console.log({ name, username, password, mobileNumber, address, pincode });
   
    if(await Customer.findOne({username})){
        let result =  await Customer.findOne({username});
        res.status(200).json(result);
    }else{
        // let customerCart = await Cart();
        // await customerCart.save();
        // let cartId = customerCart._id;
        // console.log(cartId);
        // cart:cartId
        const newCustomer = await Customer(
            { name, username, password, mobileNumber, address, pincode ,  cart:[] , profileImg ,gender }
        );
      await newCustomer.save().then((result) => {     
        res.json(result);
    }) .catch((err) => {
        console.log(err);
    });
    
    }
  
}

module.exports = { addUser };