const express = require('express');
const app = express();

const Home = (req,res)=>{
    res.status(200).json({"msg":"Working On Home Route"});
}
module.exports= {Home};