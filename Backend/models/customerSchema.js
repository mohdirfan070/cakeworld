const mongoose = require('mongoose');
const customerSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    password:{
        type:Number,
        required:true
    },
    mobileNumber:{
        type:Number,
        required:true
    },
    profileImg:{
        type:String,
        default:"https://static.vecteezy.com/system/resources/previews/005/544/718/original/profile-icon-design-free-vector.jpg",   
    },
    address:{
        type:String,
        required:true
    },
    pincode:{
        type:Number,
    },
    cart:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Cart",
    }
},{timestamps:{required:true}});
module.exports = mongoose.model("Customer",customerSchema);