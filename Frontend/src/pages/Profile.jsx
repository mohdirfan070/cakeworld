import React, { useEffect } from 'react'
import Navbar from '../components/Navbar/Navbar'
import { useParams } from 'react-router-dom'
import axios from 'axios';

export default function Profile() {
  let params= useParams();
   let {userId} = params.id;
      let loadUser = async ()=>{
        let result = await axios.post("https://cakeworld.onrender.com/api/getuserprofile",userId);
        console.log(result);
      }

    useEffect(()=>{loadUser()},[]);

  return (
    <>
    <Navbar/>
    <div className="profile-div mt-16 ">
    <div>Profile</div>
    <h2 >{params.id}</h2>
    </div>
    </> 
  )
}
