const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    Image: {
        type: String,
        required: true
    },
    description: {
        type: String,

    },
    quantity:{
        type:String,
        default:"1kg"
    },
    msg:{
        type: String,
        default:"no messege form customer"
    },
    uuId:{
        type:String,
    }
}, { timestamps: true });

module.exports = mongoose.model("Product", productSchema);
