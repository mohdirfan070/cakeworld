import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import axios from "axios";
import "./Products.css";
import Footer from "../components/Footer/Footer.jsx";
import { Link } from "react-router-dom";

export default function Products() {


  let [model, setModel] = useState(false);
  let [toast, setToast] = useState(false);
  let [gotData, setGotData] = useState(false);

  const fetchProducts = async () => {
    let result = await axios.get("https://cakeworld.onrender.com/api/products");
    let arr = result.data;
      setGotData([...arr]);
    // console.log(result.data);
  };

  const handleOrder =async (e) => {
    if (localStorage.getItem("login")) {

      const userData = {
        username:localStorage.getItem("username"),
        password:localStorage.getItem("password"),
        productId:e.target.value,
      }
      console.log(userData);
      try {
          await axios.put("https://cakeworld.onrender.com/api/additemtocart", userData ).then((result)=>{
              console.log(result.data);
      setToast(true);
      // alert("Product Added to Cart Successfully!");
      setTimeout(() => {
        setToast(false);
      }, 1000);
          });
      } catch (error) {
        console.log(error);
      }

    } else {
      // setModel(true);
      document.getElementById("my_modal_2").showModal();
    }
  };

  let [login, setLogin] = useState(localStorage.getItem("login") || false);
  const handlelogin = () => {
    //  localStorage.setItem("login","true");
    //  setLogin(true);
  };

  const handleLogout = () => {
    localStorage.clear("login");
    setLogin(false);
  };

  useEffect(() => {}, [login]);

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <Navbar />

      {toast ? (
        <div className="toast toast-top fixed  z-10 toast-center ">
          <div className="alert bg-green-200   ">
            <span>Product added to Cart</span>
          </div>
        </div>
      ) : (
        ""
      )}

    
        
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box w-11/12 max-w-lg">
          <h3 className="font-bold text-lg underline">Alert!</h3>
          <p className="py-4 font-medium">Please Login to make Orders</p>
          <div className="modal-action">
            
            <Link to="/login">
              <h1 className="btn font-bold" onClick={handlelogin}>
                Login
              </h1>{" "}
            </Link>
          </div>
        </div>
      </dialog>


      <div className="cover-div mt-20  min-h-lvh">
        <div className="cards my-4    flex justify-center align-center flex-wrap">
          {gotData ? (
            gotData.map((ele, i) => (
              <React.Fragment key={i}>
                <div className="card card-compact overflow-hidden w-80 min-w-64 bg-base-100   m-2    bg-neutral-content btn-ghost transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl" >
                  {/* <img src="ele.Image" alt="" /> */}
                  <img
                    className="rounded-lg  h-44 "
                    id="card-img"
                    src={ele.Image}
                    alt=""
                  />
                  <div className="card-body">
                    <h2 className="card-title">{ele.name}</h2>
                    <h2 className="card-title">₹{ele.price}/kg</h2>
                    <p>{ele.description}</p>
                    <div className="card-actions justify-end">
                      <button
                        onClick={handleOrder} value={ele._id}
                        className="btn    bg-neutral-content btn-outline focus:bg-neutral focus:text-neutral-content"
                      >
                        Buy Now
                      </button>
                    </div>
                  </div>
                </div>
              </React.Fragment>
            ))
          ) : (
            <span className="loading loading-bars  loading-lg my-80 "></span>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
