import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import axios from "axios";
import Footer from "../components/Footer/Footer";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const femaleProfileURL = "https://thumbs.dreamstime.com/b/female-avatar-profile-icon-round-woman-face-flat-vector-illustration-female-avatar-profile-icon-round-woman-face-102767911.jpg";
  let [loginStatus, setLoginStatus] = useState(false);
  let [gender , setGender] = useState("male");
  let [inpData, setInputData] = useState({
    name: "",
    username: "",
    password: "",
    mobileNumber: "",
    address: "",
    pincode: "",
    gender,
    profileImg:"https://static.vecteezy.com/system/resources/previews/000/662/785/original/man-face-cartoon-vector.jpg",
  });
  let [response, setRes] = useState(false);
  let [login, setLogin] = useState(localStorage.getItem("login") || false);

  let handleChange = (e) => {
    setRes(false);

    if (e.target.name == "name") {
      setInputData({ ...inpData, name: e.target.value });
    }
    if (e.target.name == "username") {
      setInputData({ ...inpData, username: e.target.value });
    }
    if (e.target.name == "mobileNumber") {
      setInputData({ ...inpData, mobileNumber: e.target.value });
    }
    //
    if (e.target.name == "pincode") {
      setInputData({ ...inpData, pincode: e.target.value });
    }
    if (e.target.name == "address") {
      setInputData({ ...inpData, address: e.target.value });
    }
    //
    if (e.target.name == "password") {
      setInputData({ ...inpData, password: e.target.value });
    }
  };
  let reset = () => {
    setLoginStatus(false);
    setInputData({
      name: "",
      username: "",
      password: "",
      mobileNumber: "",
      address: "",
      pincode: "",
      gender,
      profileImg:"https://static.vecteezy.com/system/resources/previews/000/662/785/original/man-face-cartoon-vector.jpg",
    });
  };

  const navigate = useNavigate();

  let handleSubmit = async (e) => {
    if (
      inpData.username == "" ||
      inpData.password == "" ||
      inpData.name == "" ||
      inpData.address == "" ||
      inpData.pincode == "" ||
      inpData.mobileNumber == ""
    ) {
      setRes(true);
      // reset();
    } else {
      setLoginStatus(true);
      //  console.log(inpData);
      let result = await axios.post("https://cakeworld.onrender.com/api/login", inpData);
      setLogin(true);
      localStorage.setItem("login", "true");
      localStorage.setItem("username", result.data.username);
      localStorage.setItem("password", result.data.password);
      if (result.data.username == "irfan" && result.data.password == "070") {
        localStorage.setItem("isAdmin", true);
      }
      navigate("/home");
      reset();
      setLoginStatus(false);
    }
  };

  return (
    <>
      <Navbar />

      <div className="forms flex w-max gap-2 justify-center align-middle flex-wrap m-auto">
        {/* SignUp */}
        <div className="border-neutral p-12   border-2 max-w-fit rounded-md m-auto min-h-max bg-ghost my-4 mt-20">
          {response ? (
            <div role="alert" className="alert alert-error">
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
              <span> Invalid Credentials!</span>
            </div>
          ) : (
            " "
          )}

          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="relative">
              <h2 className="input mx-16 text-xl font-medium">Login</h2>

              <input
                className="input  border-neutral-400 block mb-3 "
                onChange={handleChange}
                value={inpData.name}
                type="text"
                name="name"
                placeholder="Name"
              />
              <input
                className="input  border-neutral-400 block mb-3 "
                onChange={handleChange}
                value={inpData.username}
                type="text"
                name="username"
                placeholder="Username"
              />
              <input
                className="input  border-neutral-400 block mb-3 "
                onChange={handleChange}
                value={inpData.password}
                type="text"
                name="password"
                placeholder="Password"
              />
              <input
                className="input  border-neutral-400 block mb-3 "
                onChange={handleChange}
                value={inpData.mobileNumber}
                type="text"
                name="mobileNumber"
                placeholder="Mobile Number"
              />

              <div className="form-control ">
                <label  className=" cursor-pointer m-2">
                  <span onClick={()=>{setGender("male") }} className="btn mx-4">Male</span>
                  <input
                    type="radio"
                    name="gender"
                    className="radio checked:bg-neutral-content-400"
                    defaultChecked
                  />
                </label>
              </div>
              <div className="form-control">
                <label className=" cursor-pointer m-2">
                  <span onClick={()=>{setGender("female") , setInputData({...inpData,profileImg:femaleProfileURL}) }} className="btn mx-4">Female</span>
                  <input
                    type="radio"
                    name="gender"
                    className="radio checked:bg-neutral-content-400"
                    
                  />
                </label>
              </div>

              {/* <select className=" input  border-neutral-400 block mb-3 min-w-max" name="gender" id="">
              <option className="input" value="male">Male</option>
              <option value="female">Female</option>
            </select> */}

              {/* <input
                className="input  border-neutral-400 block mb-3 "
                onChange={handleChange}
                value={inpData.gender}
                
                // type="text"
                // name="gender"
                // placeholder="Gender"
              /> */}

              <input
                className="input  border-neutral-400 block mb-3 "
                onChange={handleChange}
                value={inpData.address}
                type="text"
                name="address"
                placeholder="Address"
              />
              <input
                className="input border-neutral-400 block mb-3 "
                onChange={handleChange}
                value={inpData.pincode}
                type="text"
                name="pincode"
                placeholder="Pin code"
              />

              {loginStatus ? (
                <span className="loading block mx-auto my-3 loading-spinner loading-sm">
                  Submitting Data
                </span>
              ) : (
                ""
              )}

              <button
                onClick={handleSubmit}
                className="btn font-bold mx-1 text-md min-w-24"
              >
                Login
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
      </div>
      <Footer />
    </>
  );
}
