import React from "react";
import { BrowserRouter, Routes, Route  } from 'react-router-dom'
import Home from '../../users/pacient/pages/Home'
import PrivateRouter from './privateRouter';
import PageBase from "../users/pacient/PageBase";

function Routers() {
    return (
        <BrowserRouter>
            <Routes>
                <PrivateRouter>
                    <Route path="/"  element={PageBase} >
                    <Route index  element={<Home/>}/>
                    </Route>
                </PrivateRouter>
            </Routes>
        
        </BrowserRouter>
    )
}

export default Routers;