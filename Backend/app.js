require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());


//Connecting to DB
const connectDB = require('./controllers/mongooseController');
connectDB();

//parsing all data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//reuiring all Modules of Routes
const homeRoute = require('./routes/homeRoute');
const addCustomerRoute = require('./routes/addCustomerRoute.js');
const addProductRoute = require('./routes/addProductRoute.js');
const productRoute = require('./routes/productsRoute.js');
const loginRoute = require('./routes/loginRoute.js');
const signupRoute = require('./routes/signupRoute.js');
const getUserRoute = require('./routes/getUserRoute.js');
const getUserProfileRoute = require('./routes/getUserProfileRoute.js');
const updateUserRoute = require('./routes/updateUserRoute.js');
const addItemToCartRoute = require('./routes/addItemToCartRoute.js');
const getCartProduct = require('./routes/getCartProductRoute.js');
const removeCartProductRoute = require('./routes/removeCartProductRoute.js');

//All Middlewears
app.use("/", homeRoute);
app.use("/home", homeRoute);
app.use("/addcustomer", addCustomerRoute);
app.use("/api/addproduct", addProductRoute);
app.use("/api/products",productRoute);
app.use("/api/login",loginRoute);
app.use("/api/signup",signupRoute);
app.use("/api/getuserdata",getUserRoute);
app.use("/api/getuserprofile",getUserProfileRoute);
app.use("/api/updateuser",updateUserRoute);
app.use("/api/additemtocart",addItemToCartRoute);
app.use("/api/getcartproducts",getCartProduct);
app.use("/api/removecartproduct",removeCartProductRoute);




const PORT = process.env.PORT;
app.listen(PORT, (req, res) => {
    console.log(`Listennig on PORT:${PORT}`);
});