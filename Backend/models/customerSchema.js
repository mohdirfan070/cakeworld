const mongoose = require('mongoose');
const Cart = require("./cartSchema.js");
const customerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true,
        enum: ["male", "female"],
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    mobileNumber: {
        type: Number,
        required: true
    },
    profileImg: {
        type: String,
        default: "https://static.vecteezy.com/system/resources/previews/000/662/785/original/man-face-cartoon-vector.jpg",
    },
    address: {
        type: String,
        required: true
    },
    pincode: {
        type: Number,
    },
    cart:{
      type:Array
    } 
}, { timestamps: { required: true } });
module.exports = mongoose.model("Customer", customerSchema);