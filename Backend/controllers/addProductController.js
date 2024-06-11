const express = require('express');
const mongoose = require('mongoose');
const Product =require('../models/productSchema.js');

const AddProduct = async (req, res) => {
        let { name, price, Image , description } = req.body;
        let gotData = { name, price, Image , description};
        let result =  await Product.create({name:gotData.name,price:gotData.price,Image:gotData.Image,description:gotData.description});
        // console.log(result);
        return res.json({ result });
};
module.exports = { AddProduct };