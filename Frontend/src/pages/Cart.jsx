import React, { useEffect, useState } from "react";
import Navbar from '../components/Navbar/Navbar'
import axios from 'axios';
export default function Cart() {

  let [gotData, setGotData] = useState([]);

  const fetchProducts = async () => {
    let result = await axios.get("https://cakeworld.onrender.com/api/products");
    let arr = result.data;
      setGotData([...arr]);
    // console.log(result.data);
  };
  return (
    <>
    <Navbar/>
    <div className='mt-28'>Cart</div>
    {gotData ? (
            gotData.map((ele, i) => (
              <React.Fragment key={i}>
                <div className="card card-compact overflow-hidden w-80 min-w-64 bg-base-100   m-2    bg-neutral-content btn-ghost transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl " >
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
    </>
  )
}
