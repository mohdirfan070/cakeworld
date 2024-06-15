const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
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
        type:Number,
        required:true,
        default:1
    },
    msg:{
        type: String,
    }
}, { timestamps: true });

module.exports = mongoose.model("Product", productSchema);