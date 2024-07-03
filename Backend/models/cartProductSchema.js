const mongoose = require('mongoose');
const Cart = require('./cartSchema.js');
const cartProductSchema = new mongoose.Schema({
    username:{
        type:String
    },
    mobileNumber:{
        type:Number
    },
    cart:{
        type:mongoose.Schema.ObjectId,
        ref:'Cart'
    },
    utr:{
        type:String
    },
    orderTime:{
        type:Date()
    }
}, { timestamps: true });

module.exports = mongoose.model("cartProduct", cartProductSchema);