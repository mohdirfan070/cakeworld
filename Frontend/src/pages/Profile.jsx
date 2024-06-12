import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import { useParams } from "react-router-dom";
import axios from "axios";
import Footer from "../components/Footer/Footer";

export default function Profile() {
  let params = useParams();
  let [user, setUser] = useState({});
  let [edit, setEdit] = useState(false);
  let { userId } = params.id;
  let loadUser = async () => {
    let result = await axios.post(
      "https://cakeworld.onrender.com/api/getuserprofile",
      userId
    );
    // console.log(result.data);
    setUser({ ...result.data });
  };

  useEffect(() => {
    loadUser();
  }, []);

  return (
    <>
      <Navbar />
      {/* <div className="profile-div mt-16 ">
    <div>Profile</div>
    <h2 >{params.id}</h2>
    </div> */}
      {
       (user.name)? (
        (edit) ? 
          <>
                <div className="card w-full max-h-screen my-28 ">
                <div className="inner-card-div m-auto max-w-64">
            <textarea className="btn btn-outline" id="" value={user.name}></textarea>
            <textarea className="btn btn-outline" id="" value={user.username}></textarea>
            <textarea className="btn btn-outline" id="" value={user.mobileNumber} ></textarea>
            <textarea className="btn btn-outline" id="" value= {user.address} ></textarea>
            <textarea className="btn btn-outline" id="" value={user.pincode} ></textarea>
            <textarea className="btn btn-outline" id=""></textarea>
            </div>
            </div>
          </>
         :
        <>
          <div className="card w-full max-h-screen my-28 ">
            <div className="inner-card-div m-auto max-w-64">
              <img
                className="avatar max-h-60 max-w-60 rounded-full shadow-lg"
                src={user.profileImg}
                alt="Profile Image"
              />
              <h2 className="my-2 font-medium ">Name: {user.name} </h2>
              <h2 className="my-2 font-medium ">Username: {user.username} </h2>
              <h2 className="my-2 font-medium ">
                Mobile Number: {user.mobileNumber}{" "}
              </h2>
              <h2 className="my-2 font-medium ">Address: {user.address} </h2>
              <h2 className="my-2 font-medium ">Pincode: {user.pincode} </h2>

            <button className="btn btn-primary font-semibold w-28" onClick={()=>setEdit(true)}>Edit Info</button>

            </div>
          </div>{" "}
        </>
      ) : (
        <div className="inner-card-div m-auto">
          <span className="loading loading-bars loading-lg"></span>
        </div>
      )}
      <Footer />
    </>
  );
}
