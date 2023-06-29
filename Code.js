import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./Code.css"
import Add from './Projects/Addproduct';
import LoginPage from './Projects/login';
import Logout from './Projects/Logout';
import  Navbar  from './Projects/Navbar';
import SingUpPage from './Projects/SingUp';
import Update from './Projects/ÚpdatePro';

function Code() {
  return (
    <div className='Code'>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<h1>Product List Components</h1>}></Route>
        <Route path='/add' element={<Add/>}></Route>
        <Route path='/update' element={<Update/>}></Route>
        <Route path='/logout' element={<Logout/>}></Route>
        <Route path='/singup' element={<SingUpPage/>}></Route>
        <Route path='/login' element={<LoginPage/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Code;
