const express = require('express');
const mongoose = require('mongoose');
const Product = require('../models/productSchema.js');
const getProducts = async(req,res)=>{
        let result = await Product.find({});
        // console.log(result);
        res.json(result);
};
module.exports = {getProducts};