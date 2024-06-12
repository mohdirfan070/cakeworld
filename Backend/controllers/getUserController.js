const express = require("express");
const mongoose = requie("mongoose");
const Customer = require("../models/customerSchema.js");
const getUsers = async (req,res)=>{
            try {
                let result = await Customer.find({});
                res.status(200).json(result.data);
            } catch (error) {
                res.status(204).json({"msg":"No users Found"});
            }
}
module.exports = {getUsers};