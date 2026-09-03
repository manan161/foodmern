import React from 'react'
import Home from './screen/Home'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Login from './screen/Login'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Signup from './screen/Signup';
import { Cartprovider } from './component/ContextReducer';
const App = () => {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/login' element={<Login/>}/>
        <Route path="/createuser" element={<Signup/>}/>
        <Route path="*" element={<h1>Page Not Found</h1>} />

      </Routes>
    
    </BrowserRouter>
    
  )
}

export default App