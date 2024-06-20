const mongoose = require('mongoose');
const cartSchema = new mongoose.Schema({
      prodList:{
        type:[],
    },
    totalPrice:{
      type:Number,
      default:0,
    },
    quantity:{
      type:Number,
      default:0
    }
},{timestamps:true});
module.exports = mongoose.model("Cart",cartSchema);