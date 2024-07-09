import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import axios from "axios";
export default function AddProduct() {
  let [inpData, setInputData] = useState({
    name: "",
    price: "",
    Image: "",
    description: "",
    msg:""
  });
  let [response, setRes] = useState(false);

  let handleChange = (e) => {
    setRes(false);
    if (e.target.name == "name") {
      setInputData({ ...inpData, name: e.target.value });
    }
    if (e.target.name == "price") {
      setInputData({ ...inpData, price: e.target.value });
    }
    if (e.target.name == "Image") {
      setInputData({ ...inpData, Image: e.target.value });
    }
   
    if (e.target.name == "description") {
      setInputData({ ...inpData, description: e.target.value });
    }
  };
  let reset = () => {
    setInputData({
      name: "",
      price: "",
      Image: "",
      description: "",
     
    });
  };

  let handleSubmit = async (e) => {
    if (
      inpData.name == "" ||
      inpData.price == "" ||
      inpData.Image == "" ||
      inpData.description == ""
    ) {
      setRes(true);
    } else {
      // console.log(inpData);
      let result = await axios.post(
        "https://cakeworld-production.up.railway.app/api/addproduct",
        inpData
      );
      // console.log(result);
      reset();
    }
  };
  return (
    <>
      <Navbar />
      <div className="border-neutral   p-12 mt-20 border-2 max-w-fit rounded-md m-auto min-h-max bg-ghost">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="relative">
            <h2 className="input mx-10 font-medium">Add Product</h2>
            {response ? (
              <div
                role="alert"
                className="alert transition-all duration-1000 animate-pulse absolute top-[-6rem] alert-error"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="stroke-current shrink-0 h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
                <span>Fields are empty</span>
              </div>
            ) : (
              " "
            )}
            <input
              className="input text-neutral  border-neutral-400 block mb-3   "
              onChange={handleChange}
              value={inpData.name}
              type="text"
              name="name"
              placeholder="Name"
            />
            <input
              className="input  border-neutral-400 block mb-3    "
              onChange={handleChange}
              value={inpData.price}
              type="text"
              name="price"
              placeholder="Price"
            />
            <input
              className="input  border-neutral-400 block mb-3 "
              onChange={handleChange}
              value={inpData.Image}
              type="text"
              name="Image"
              placeholder="Image URL"
            />
            <textarea
              onChange={handleChange}
              placeholder="Description"
              className="textarea  w-56 border-neutral-400 block mb-3 "
              name="description"
              value={inpData.description}
            ></textarea>
            <button
              onClick={handleSubmit}
              className="btn font-bold mx-1 text-md min-w-24"
            >
              Submit
            </button>
            <button
              onClick={reset}
              className="btn font-bold min-w-24"
              type="reset"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
