const mongoose = require('mongoose');
const Customer = require('../models/customerSchema');
const Cart = require("../models/cartSchema");
const addUser = async (req, res) => {
   
    let { name, username, password, mobileNumber, address, pincode , gender , profileImg ,loginUsername , loginPassword   } = req.body;
   
    console.log({ name, username, password, mobileNumber, address, pincode ,loginUsername , loginPassword  });
    if(loginUsername!=''){
        username = loginUsername;
        let result =  await Customer.findOne({username});
        console.log(result);
        res.status(200).json(result);
    }else{
    // if(await Customer.findOne({username})){
    //     let result =  await Customer.findOne({username});
    //     res.status(200).json(result);
    // }else{
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
    
    // }
}
}

module.exports = { addUser };