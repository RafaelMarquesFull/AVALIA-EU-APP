import React from "react";
import { BrowserRouter, Routes, Route  } from 'react-router-dom'

import Home from "../features/pages/Home/home"
import Login from '../features/pages/Login/login'
import Register from '../features/pages/register/registe'


function Routers() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/"  element={<Home/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/register" element={<Register/>} />
            </Routes>
        
        </BrowserRouter>
    )
}

export default Routers;
