import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import { useParams } from "react-router-dom";
import axios from "axios";
import Footer from "../components/Footer/Footer";

export default function Profile() {
  let params = useParams();
  let [user, setUser] = useState({
    id:params.id,
    name: "",
    username: "",
    password: "",
    mobileNumber: "",
    address: "",
    pincode: "",
  });
  let [edit, setEdit] = useState(false);


  let loadUser = async () => {
    if(localStorage.getItem("username")){
      let  username  = localStorage.getItem("username");
      let result = await axios.post(
        "https://cakeworld.onrender.com/api/getuserprofile",
       { username}
      );
      // console.log(result.data);
      setUser({ ...result.data });
    }
 
  };

  useEffect(() => {
    loadUser();
  }, [edit]);

  const handleChange = (e) => {
    setError(false);
    if (e.target.name == "name") {
      setUser({ ...user, name: e.target.value });
    }
    if (e.target.name == "username") {
      setUser({ ...user, username: e.target.value });
    }
    if (e.target.name == "mobileNumber") {
      setUser({ ...user, mobileNumber: e.target.value });
    }
    //
    if (e.target.name == "pincode") {
      setUser({ ...user, pincode: e.target.value });
    }
    if (e.target.name == "address") {
      setUser({ ...user, address: e.target.value });
    }
    //
    if (e.target.name == "password") {
      setUser({ ...user, password: e.target.value });
    }
  };

  let [error, setError] = useState(false);
  const handleSubmit = async () => {
    if (
      user.username == "" ||
      user.password == "" ||
      user.name == "" ||
      user.address == "" ||
      user.pincode == "" ||
      user.mobileNumber == ""
    ) {
      setError(true);
      return null;
    } else {
       let result = await axios.put("https://cakeworld.onrender.com/api/updateuser" , user ) ;
      //  console.log(result);
      // console.log(user);
      setEdit(false);
    }
  };

  return (
    <>
      <Navbar />
      {/* <div className="profile-div mt-16 ">
    <div>Profile</div>
    <h2 >{params.id}</h2>
    </div> */}
      <div className="master min-h-screen">
        {user.name ? (
          edit ? (
            <>
              <div className="card w-full max-h-screen my-28 ">
                <div className="inner-card-div m-auto max-w-64">
                  {error ? (
                    <>
                      {" "}
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
                        <span> Empty Fields!</span>
                      </div>{" "}
                    </>
                  ) : (
                    " "
                  )}
                  <textarea
                    placeholder="Name"
                    name="name"
                    onChange={handleChange}
                    className="btn rounded-md  w-full text-start  mb-1 p-3  h-max"
                    id=""
                    value={user.name}
                  ></textarea>
                  <textarea
                    placeholder="Username"
                    name="username"
                    onChange={handleChange}
                    className="btn rounded-md  w-full text-start  mb-1 p-3  h-max"
                    id=""
                    value={user.username}
                  ></textarea>
                  <textarea
                    placeholder="Mobile Number"
                    name="mobileNumber"
                    onChange={handleChange}
                    className="btn rounded-md  w-full text-start  mb-1 p-3  h-max"
                    id=""
                    value={user.mobileNumber}
                  ></textarea>
                  <textarea
                    placeholder="Address"
                    name="address"
                    onChange={handleChange}
                    className="btn rounded-md  w-full text-start  mb-1 p-3 text-sm  h-24"
                    id=""
                    value={user.address}
                  ></textarea>
                  <textarea
                    placeholder="Pincode"
                    name="pincode"
                    onChange={handleChange}
                    className="btn rounded-md  w-full text-start  mb-1 p-3  h-max"
                    id=""
                    value={user.pincode}
                  ></textarea>
                  {/* <textarea  name="" onChange={handleChange} className="btn rounded-md  w-full text-start  mb-1 p-3  h-max" id=""></textarea> */}
                  <button
                    className="btn m-1 btn-outline w-26"
                    onClick={handleSubmit}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="card w-full max-h-screen my-28 ">
                <div className="inner-card-div m-auto max-w-64">
                  <img
                    className="avatar max-h-60 max-w-60 rounded-full shadow-lg"
                    src={user.profileImg}
                    alt="Profile Image"
                  />
                  <h2 className="my-2 font-medium btn h-min w-full text-sm rounded-md ">
                    Name: {user.name}{" "}
                  </h2>
                  <h2 className="my-2 font-medium btn h-min w-full text-sm rounded-md">
                    Username: {user.username}{" "}
                  </h2>
                  <h2 className="my-2 font-medium btn h-min w-full text-sm rounded-md">
                    Mobile Number: {user.mobileNumber}{" "}
                  </h2>
                  <h2 className="my-2 font-medium btn h-24 w-full  text-sm rounded-md">
                    Address: {user.address}{" "}
                  </h2>
                  <h2 className="my-2 font-medium btn h-min w-full text-sm rounded-md">
                    Pincode: {user.pincode}{" "}
                  </h2>

                  <button
                    className="btn btn-primary font-semibold w-28"
                    onClick={() => setEdit(true)}
                  >
                    Edit Info
                  </button>
                </div>
              </div>{" "}
            </>
          )
        ) : (
          <div className="inner-card-div mx-[50%] fixed top-64">
          <span className="loading loading-bars loading-lg"></span>
        </div>
        )}

       


      </div>
      <Footer />
    </>
  );
}
