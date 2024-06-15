import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import About from './pages/About.jsx';
import Products from "./pages/Products.jsx"
import ErrorPage from './pages/Error.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Orders from './pages/Orders.jsx';
import Profile from './pages/Profile.jsx';
import AddProduct from './pages/AddProduct.jsx';
import Login from './pages/Login.jsx';
import Cart from './pages/Cart.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement:<ErrorPage/>
  },
  {
    path: "/home",
    element: <App/>,
    errorElement:<ErrorPage/>
  },
  {
    path: "/about",
    element: <About/>,
    errorElement:<ErrorPage/>
  },
  {
    path: "/products",
    element:<Products/> ,
    errorElement:<ErrorPage/>
  },
  {
    path: "/orders",
    element:<Orders/>,
    errorElement:<ErrorPage/>
  },
  {
    path: "/profile",
    element:<Profile/>,
    errorElement:<ErrorPage/>
  },
  {
    path: "/addproducts",
    element:<AddProduct/>,
    errorElement:<ErrorPage/>
  },
  {
    path: "/login",
    element:<Login/>,
    errorElement:<ErrorPage/>
  },
  {
    path: "/cart",
    element: <Cart/>,
    errorElement:<ErrorPage/>
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
     <RouterProvider router={router} />
  // </React.StrictMode>,
)
