const mongoose = require('mongoose');
const Customer = require('../models/customerSchema');
const addUser = async (req, res) => {
    let { name, username, password, mobileNumber, address, pincode } = req.body;
    // console.log({ name, username, password, mobileNumber, address, pincode });

    if(await Customer.findOne({username})){
        let result =  await Customer.findOne({username,password});
        res.status(200).json(result);
    }else{
        const newCustomer = await Customer(
            { name, username, password, mobileNumber, address, pincode }
        );
      await newCustomer.save().then((result) => {     
        res.json(result);
    }) .catch((err) => {
        console.log(err);
    });
    }
  
}

module.exports = { addUser };