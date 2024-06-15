const mongoose = require('mongoose');
const cartProductSchema = new mongoose.Schema({
   productId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Product",
   },
    quantity:{
        type:String,
        required:true,
        default:1
    },
    msg:{
        type: String,
        default:"no messege form customer"
    }
}, { timestamps: true });

module.exports = mongoose.model("cartProduct", cartProductSchema);