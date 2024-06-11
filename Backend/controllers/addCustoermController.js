const express = require('express');
const app = express();

const AddCustomer = async(req,res)=>{
        console.log("Working");
        
        res.status(200).json({"msg":"Working POST AddCutomerRequest"});
};

module.exports = {AddCustomer};