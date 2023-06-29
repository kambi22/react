import React from "react";
import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";
import Create from "./Create";
import List from "./List";
import NavLinks from "./NavLinks";
import SingIn from "./SingIn";
import Update from "./Update";
import Login from "./Login";
import Logout from "../Resturent/Logout";
import Delete from "./Delete";
import Home from "./Home";
import Search from "./Search";
import Profile from "./Profile";

import Protected from "./Protected";
import Check from "./Check";
function Resturent() {
    return (
        <div>
            <BrowserRouter>
                <NavLinks />
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/list" element={<Protected Component={List} />}></Route>
                    <Route path="/search" element={<Search />}></Route>
                    <Route path="/check" element={<Check/>}></Route>
                    <Route path="/create" element={<Protected Component={Create} />}></Route>
                    <Route path="/update/:id" element={<Update />}></Route>
                    <Route path="/delete/:id" element={<Delete />}></Route>
                    <Route path="/profile" element={<Profile />}></Route>
                    <Route path="/singin" element={<SingIn />}></Route>
                    <Route path="/login" element={<Login />}></Route>
                    <Route path="/logout" element={<Logout />}></Route>
                    <Route path="/*" element={<h1 className="mt-5">Page 404 Not Found</h1>}></Route>
                </Routes></BrowserRouter>
        </div>
    )
}
export default Resturent;