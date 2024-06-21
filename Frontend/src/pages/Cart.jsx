import React , { useEffect,  useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import axios from "axios";
import Footer from "../components/Footer/Footer.jsx";
import { Link } from "react-router-dom";
import DelIcon from '../assets/deleteIcon.png'
export default function Cart() {
  let [cart, setCart] = useState([]);
  let [products,setProducts]=useState([]);
  let [quantity, setQuantity] = useState("1");
  const username = localStorage.getItem("username") || false;
  const cartId = localStorage.getItem("cartId") || false;
  let removeCartProduct = async (productId,productQuantity,productuuId,productPrice )=> {
    let newproductPrice = eval(productQuantity * productPrice);
    // console.log(newproductPrice);
    let givenData = { productId, cartId , productQuantity, productuuId , newproductPrice};
    let result = await axios.post(
      "https://cakeworld.onrender.com/api/removecartproduct",
      givenData
    );
    console.log(result);
  };

  const fetchCartProducts = async () => {
    await axios.post(`https://cakeworld.onrender.com/api/getcartproducts`, {
      username,
      cartId,
    }).then((result)=>{
      // console.log(result.data.result);
      setCart({...result.data.result});
      let arr = result.data.result.prodList;
      setProducts([...arr]);
      
    })
    
  };


  if (username) {
    setTimeout(() => {
      fetchCartProducts();
    }, 1000);
    // fetchCartProducts();
  }
 
  return (
    <>
      <Navbar />
      {/* The button to open modal */}

      <div className="parent-div pt-20 flex flex-wrap p-3 justify-center">
      <section className="border-2 p-3  rounded-md border-neutral bg-primary my-4">
        {
          (cart.totalPrice)?  <h2 className="btn  rounded-md  text-lg font-semibold">Total Price : ₹{cart.totalPrice}</h2>  :  <h2 className="btn text-lg font-semibold">Total Price : ₹0</h2> 

        }
      
        </section>
        <section onClick={()=>document.getElementById('my_modal_1').showModal()} className="border-2 p-3 m-3 rounded-md border-neutral bg-primary my-4">
        <h2  className="btn  rounded-md text-lg font-semibold">Place Order!</h2> 

{/* Open the modal using document.getElementById('ID').showModal() method */}

<dialog id="my_modal_1" className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Place Order</h3>
    <p className="py-4">place order for ₹{cart.totalPrice}</p>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
   
        </section>
        <section className=" w-full min-h-content min-w-80 ">
          <div className="main m-auto   w-full ">
            {products.length != 0 ? (
              <React.Fragment>
                
                <div className="cards flex justify-center flex-wrap gap-2">
                  {products.map((ele, i) => {
                    return (
                      <React.Fragment key={i}>
                        <div className="card card-compact overflow-hidden w-80 min-w-64  m-2    bg-neutral-content btn-ghost transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl ">
                          <img
                            className="rounded-lg  h-44 "
                            id="card-img"
                            src={ele.Image}
                            alt=""
                          />
                          <div className="card-body">
                            <h2 className="card-title">{ele.name}</h2>
                            <h2 className="card-title">
                              Price : ₹{eval(ele.price * ele.quantity)}
                            </h2>
                            <h2 className="card-title">
                              Size : {ele.quantity}kg
                            </h2>
                            <h2 className="card-title text-base">
                              Msg : {ele.msg}
                            </h2>
                          </div>
                          <div className="card-actions justify-center mb-4">
                            <button
                          
                              onClick={(e) => {
                                removeCartProduct(ele._id,ele.quantity ,ele.uuId , ele.price);
                              }}
                              className="btn   bg-neutral-content btn-outline focus:bg-neutral focus:text-neutral-content"
                            >
                              Remove
                             <img className="h-6" src={DelIcon} alt="" />
                            </button>
                          </div>
                        </div>
                      </React.Fragment>
                    );
                  })}
                </div>
                 
              
                  

              </React.Fragment>
            ) : (
              <>
                <Link to={"/products"}>
                  {" "}
                  <h2 className="text-center my-80">
                    {" "}
                    <button className="btn bg-neutral-content btn-outline focus:bg-neutral focus:text-neutral-content text-sm w-56 rounded-md hover:rounded-full transition-colors duration-300 ease-in  ">
                      {" "}
                    
                      Cart is Empty! <br />
                      Click to add Items{" "}
                    </button>
                  </h2>
                </Link>
              </>
            )}
          </div>
        </section>
      
      </div>
      
      <Footer />
    </>
  );
}
