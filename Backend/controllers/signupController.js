const app = require('express')();
const Customer = require('../models/customerSchema');
const Cart = require("../models/cartSchema");
const addUser  = async (req,res) =>{
    let { name, username, password, mobileNumber, address, pincode, gender, profileImg} = req.body;
    // console.log({ name, username, password, mobileNumber, address, pincode, gender, profileImg});
    let customerCart = await Cart();
    await customerCart.save();
    let cartId = customerCart._id;
   // console.log(cartId);
   // cart:cartId
   const newCustomer = await Customer(
       { name, username, password, mobileNumber, address, pincode ,  cart:cartId , profileImg ,gender }
   );
 await newCustomer.save().then((result) => {     
   res.json(result);
}) .catch((err) => {
   console.log(err);
});

}

module.exports= {addUser}