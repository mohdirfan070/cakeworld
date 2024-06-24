import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Navbar() {
  let [isAdmin, setIsAdmin] = useState(
    localStorage.getItem("isAdmin") || false
  );
  let [theme, setTheme] = useState(
    localStorage.getItem("theme") || "valentine"
  );
  const handleTheme = () => {
    if (theme == "valentine") {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    } else {
      setTheme("valentine");
      localStorage.setItem("theme", "valentine");
    }
  };

  document.getElementsByTagName("html")[0].setAttribute("data-theme", theme);
  // let html =   console.log(html);
  // html
  const navigate = useNavigate();
  let [login, setLogin] = useState(localStorage.getItem("login") || false);
  // const handlelogin = ()=>{
  //  localStorage.setItem("login","true");
  //  setLogin(true);
  // }

  const handleLogout = () => {
    localStorage.setItem("login", "");
    localStorage.setItem("username", "");
    localStorage.setItem("password", "");
    localStorage.setItem("isAdmin", "");
    localStorage.setItem("cartId", "");
    setLogin(false);
    navigate("/home");
  };

  const [user, setUser] = useState({});
  const [cart,setCart]=useState({});
  const getUser = async () => {
    let username = localStorage.getItem("username");
    let password = localStorage.getItem("password");
   
    let sendData = { username, password };
    await axios
      .post("https://cakeworld.onrender.com/api/getuserdata", sendData)
      .then((result) => {
        // https://cakeworld-production.up.railway.app
        // console.log("This is from Navbar");
          // console.log(result.data);
        setUser({ ...result.data });
      })
      .catch((err) => {
        console.log(err);
      });

       
  };

    const getCart = async()=>{
      let cartId = localStorage.getItem("cartId") || false;
      await axios.post(`https://cakeworld.onrender.com/api/getcartproducts`, { cartId } ).then((result)=>{
       
        // console.log(result.data.result);
        setCart({...result.data.result});
       });
    }


  useEffect(() => {
    if (localStorage.getItem("username")) {
       getUser();
    //getCart();
       setInterval(()=>{getCart()},2000)
    }
  },[]);

  return (
    <>
      <div className="navbar fixed top-0 z-10 bg-neutral  ">
        <div className="navbar-start ">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-md dropdown-content mt-3 z-[1] p-2 shadow-2xl rounded-md min-w-80 max-w-xl border-2 border-neutral bg-neutral-content "
            >
              <li>
                {" "}
                <Link className="rounded-sm " to={"/home"}> Home </Link> 
              </li>
              <li>
                <Link className="rounded-sm" to={"/products"}>Products</Link>
              </li>
              {
                (login)? <li>
                <Link className="rounded-sm" to={"/orders"}>Orders</Link>
              </li> : " "
              }
             
             
              {isAdmin ? ( 
                <>
                <li>
                <Link className="rounded-sm" to={"/about"}>About</Link>
              </li>
                <li>
                  <Link className="rounded-sm" to={"/addproducts"}>Add Products</Link>
                </li>
                </>
              ) : (
                ""
              )}
            </ul>
          </div>
        </div>
        <div className="flex-1 ">
          <Link
            to={"/home"}
            className="btn absolute left-14  bg-base-100 text-2xl font-extrabold "
            style={{ fontFamily: "Dancing Script" }}
          >
            CakeWorld
          </Link>
        </div>
      
        {login ? (
          <div className="flex-none ">
            <div className="dropdown dropdown-end">
              <div 
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle"
              >
                <div className="indicator">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  {cart.prodList ? (
                    <span className="badge badge-sm indicator-item">
                      {cart.quantity} 
                    </span>
                  ) : (
                    <span className="badge badge-sm indicator-item"> 0 </span>
                  )}
                </div>
              </div>

              <div
                tabIndex={0}
                className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
              >
                <div className="card-body">
                  {cart.prodList ? (
                      // <span className="font-bold text-lg"> {user.cart.length} Items</span>
                      <span className="font-bold text-lg">  {cart.quantity}  Items</span>

                  ) : ( 
                     <span className="font-bold text-lg">0 Items</span>
                  )}

                  {/* <span className="font-bold text-lg">3 Items</span> */}
                  <span className="text-pretty font-semibold">Subtotal: <span className="text-success">₹{(cart.totalPrice)?cart.totalPrice:0 }</span></span>
                  <div className="card-actions">
                    <Link to={"/cart"}>
                    <button  className="btn btn-primary btn-block">
                      View cart
                    </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Profile Image"
                    src={
                      user.profileImg ||
                      "https://th.bing.com/th/id/OIP.B4Mr-qMsaGmPk6XR2T5wJAHaHO?rs=1&pid=ImgDetMain"
                    }
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link to={`/profile`} className="justify-between">
                    Profile
                    {/* <span className="badge">New</span> */}
                  </Link>
                </li>
                {
                  (isAdmin)? <li>
                  <a>Settings</a>
                </li> : ""

                }
               
                <li onClick={handleLogout}>
                  {" "}
                  <a> Logout</a>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <h2
            onClick={() => navigate("/login")}
            className="btn ml-3 font-semibold text-md"
          >
            Login
          </h2>
        )}
      </div>
    </>
  );
}

export default Navbar;
