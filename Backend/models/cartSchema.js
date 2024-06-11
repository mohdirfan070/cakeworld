const mongoose = require('mongoose');
const cartSchema = new mongoose.Schema({
      prodList:{
        type:[],
    }
},{timestamps:true});
module.exports = mongoose.model("Cart",cartSchema);