const express  = require('express');

const auth = async(req, res , next)=>{
    let {username , password}=req.body;
    if(username==process.env.USERNAME && password == process.env.PASSWORD){
      return  next();
    }else{
       return null;
    }
}

module.exports = {auth};