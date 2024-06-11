import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import axios from "axios";
import "./Products.css";
import Footer from "../components/Footer/Footer.jsx";
import { Link } from "react-router-dom";

export default function Products() {
  let [model, setModel] = useState(false);
  let [ toast,setToast]=useState(false);
  let [gotData, setGotData] = useState(false);

  const fetchProducts = async () => {
    let result = await axios.get("https://cakeworld.onrender.com/api/products");
    let arr = result.data;
    setGotData([...arr]);
    // console.log(result.data);
  };

  const handleOrder = () => {
    if (localStorage.getItem("login")) {
      setToast(true);
      // alert("Product Added to Cart Successfully!");
      setTimeout(()=>{setToast(false)},1000);
    } else {
      // setModel(true);
      document.getElementById("my_modal_4").showModal();
    }
  };

  let[login,setLogin]=useState(localStorage.getItem("login")||false);
  const handlelogin = ()=>{
  //  localStorage.setItem("login","true");
  //  setLogin(true);

  }

  const handleLogout = ()=>{
    localStorage.clear("login");
    setLogin(false);
  }

  useEffect(()=>{

  },[login]);

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <Navbar />

    {
      (toast)?  <div className="toast toast-top fixed z-10 toast-center ">
        <div className="alert bg-green-200   ">
          <span>Product added to Cart</span>
        </div>
      </div>:""
    }
    

      <dialog id="my_modal_4" className="modal">
        <div className="modal-box w-11/12 max-w-lg">
          <h3 className="font-bold text-lg underline">Alert!</h3>
          <p className="py-4 font-medium">Please Login to make Orders</p>
          <div className="modal-action">
          
              {/* if there is a button, it will close the modal */}
           <Link to="/login"><h1 className="btn font-bold" onClick={handlelogin}>Login</h1> </Link>
          
          </div>
        </div>
      </dialog>
<div className="cover-div min-h-md">
      <div className="cards my-4   flex justify-center align-top flex-wrap">
        {
          (gotData)?
        gotData.map((ele, i) => (
          <React.Fragment key={i}>
            <div className="card card-compact overflow-hidden w-80 min-w-64 bg-base-100 m-12  m-2  shadow-xl">
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
                    onClick={handleOrder}
                    className="btn   btn-primary outline"
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </React.Fragment>
        ))
        :<span className="loading loading-bars loading-lg"></span>
        }
      </div>
</div>
      <Footer />
    </>
  );
}
