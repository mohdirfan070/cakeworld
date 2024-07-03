import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import axios from "axios";
import "./Products.css";
import Footer from "../components/Footer/Footer.jsx";
import { Link } from "react-router-dom";
import Sound from "../assets/successSound.mp3";
export default function Products() {
  let [model, setModel] = useState(false);
  let [toast, setToast] = useState(false);
  let [gotData, setGotData] = useState(false);
  let [quantity, setQuantity] = useState("1");
  let [msg, setMsg] = useState("");
  // const audio = new Audio(Sound);

  const fetchProducts = async () => {
    let result = await axios.get("https://cakeworld.onrender.com/api/products");
    let arr = result.data;
    setGotData([...arr]);
    // audio.play();
    // console.log(result.data);
  };
  const hanldeChange = (e) => {
    if (e.target.name == "msg") {
      setMsg(e.target.value);
    }
    if (e.target.name == "quantity") {
      //  console.log(e.target.value);
      setQuantity(e.target.value);
    }
  };

  function play() {
    let audio = new Audio(Sound);
    audio.play();
  }

  const handleOrder = async (e) => {
    if (localStorage.getItem("login")) {
      
      const userData = {
        username: localStorage.getItem("username"),
        password: localStorage.getItem("password"),
        cartId:localStorage.getItem("cartId"),
        productId: e.target.value,
        quantity,
        msg,
      };
      // console.log(userData);
      try {
        await axios
          .post("http://localhost:8080/api/additemtocart", userData)
          .then((result) => {
            //  console.log(result.data);
            play();
            setToast(true);
            setMsg("");
            setQuantity("1");
          //  fetchProducts();
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
                <div className="card card-compact overflow-hidden w-80 min-w-64  m-2    bg-neutral-content btn-ghost transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl ">
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

                    <div className="dropdown dropdown-top">
                      <div tabIndex={0} role="button" className="btn m-1">
                        Have a messege?
                       </div>
                      <ul
                        tabIndex={0}
                        className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                      >
                        <li>
                          <textarea
                            value={msg}
                            name={"msg"}
                            onChange={hanldeChange}
                            className="textarea z-10"
                            placeholder="Have a messege?"
                            id=""
                          ></textarea>
                        </li>
                      </ul>
                    </div>

                    <div className="card-actions justify-end">
                      <select
                        name="quantity"
                        onChange={hanldeChange}
                        className="select font-semibold "
                        id="quantity"
                        defaultValue={"1"}
                      >
                        <option className="font-semibold p-4 h-3 " value={0.25}>
                          0.25Kg
                        </option>{" "}
                        <option className="font-semibold p-4 h-3 " value={0.5}>
                          0.5Kg
                        </option>{" "}
                        <option className="font-semibold p-4 h-3  " value={"1"}>
                          1Kg
                        </option>{" "}
                        <option className="font-semibold p-4 h-3 " value={1.5}>
                          1.5Kg
                        </option>{" "}
                        <option className="font-semibold p-4 h-3 " value={2}>
                          2Kg
                        </option>{" "}
                      </select>

                      <button
                        onClick={handleOrder}
                        value={ele._id}
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
            <>
              <div className="m-auto flex  h-screen">
                <p className="my-auto block">
                  Please wait while we get the data...
                </p>
                <span className="loading loading-bars  loading-lg   my-auto blcok"></span>
              </div>
            </>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
