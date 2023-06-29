import { BrowserRouter,Routes,Route } from "react-router-dom";
import React from "react";
import Home from "./Home";
import Category from "./category";
import Seller from "./seller";
import Search from "./Search";
import Cart from "./Cart";
import Footer from "./Footer";
import Products from "./Products";
import SingIn from "../Resturent/SingIn";
import Login from "./login";
import Notification from "./Notification";

import Headers from "./Navbar";
import Wishlist from "./Wishlist";
import Deals from "./Deals";
import OffcanvasExample from "./Header";


function Routing(){
    return(
        <div>
            <BrowserRouter>
        <Headers/>
        <Routes>
            <Route path='/' element={<Home/>}  />
            <Route path='/category' element={<Category/>}  />
            <Route path='/wishlist' element={<Wishlist/>}  />
            <Route path='/deals' element={<Deals/>}  />
            <Route path='/notification' element={<Notification/>}  />
            <Route path='/seller' element={<Seller/>}  />
            <Route path='/search' element={<Search/>}  />
            <Route path='/cart' element={<Cart/>}  />
            <Route path='/Footer' element={<Footer/>}  />
            <Route path='/Products' element={<Products/>}  />
            <Route path='/Login' element={<Login/>}  />
            <Route path='/sigin' element={<SingIn/>}  />
            
        </Routes>
        </BrowserRouter>
        </div>
    )
}
export default Routing;