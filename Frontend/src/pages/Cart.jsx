import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import axios from "axios";
import Footer from "../components/Footer/Footer.jsx";
import { Link } from "react-router-dom";

export default function Cart() {
  // let [gotData, setGotData] = useState([]);
  let [products, setProducts] = useState([]);
  let[quantity,setQuantity]=useState("1");
  const username = localStorage.getItem("username") || false;

  let removeCartProduct = async (productId)=>{

    let givenData= { productId , username }
        
        let result =await axios.post("https://cakeworld.onrender.com/api/removecartproduct",givenData);
        
        console.log(result);
     
    }

  const fetchCartProducts = async () => {
    let result = await axios.post(
      `https://cakeworld.onrender.com/api/getcartproducts`,
      { username }
    );
    let arr = result.data;
    // console.log(arr.result);
    // setGotData(arr.result);
    setProducts([...arr.result.cart]);
  };

  if (username) {
    setTimeout(() => {
      fetchCartProducts();
    },1000);
    // fetchCartProducts();
  }
  return (
    <>
      <Navbar />

      <section className="mt-20 w-full min-h-screen ">
        <div className="main m-auto   w-full ">
          {(products.length!=0) ? (
            <React.Fragment>
              <div className="cards flex justify-center flex-wrap gap-2">
                {products.map((ele, i) => {
                  return (
                    <React.Fragment key={i}>
                      <div className="card card-compact overflow-hidden w-80 min-w-64  m-2    bg-neutral-content btn-ghost transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl  ">
                        <img
                          className="rounded-lg  h-44 "
                          id="card-img"
                          src={ele.Image}
                          alt=""
                        />
                        <div className="card-body">
                          <h2 className="card-title">{ele.name}</h2>
                          <h2 className="card-title">Price : ₹{ eval(ele.price*ele.quantity) }</h2>
                          <h2 className="card-title">Size : {ele.quantity}kg</h2>
                          <h2 className="card-title text-base">Msg : {ele.msg}</h2>
                        </div>
                        <div className="card-actions justify-center mb-4">
                        <button onClick={()=>{  setQuantity(ele.quantity) , removeCartProduct(ele._id)}}  className="btn    bg-neutral-content btn-outline focus:bg-neutral focus:text-neutral-content">Remove</button>
                      </div>
                      </div>
                    </React.Fragment>
                  );
                })}
              </div>
            </React.Fragment>
          ) : (
            <>
             <Link to={"/products"}> <h2 className="text-center my-80"> <button className="btn bg-neutral-content btn-outline focus:bg-neutral focus:text-neutral-content text-sm w-56 rounded-md hover:rounded-full transition-colors duration-300 ease-in ">  Cart is Empty! <br />Click to add Items </button></h2></Link>
              
              </>
          )}
        </div>
      </section>
      <Footer />

    </>
  );
}
