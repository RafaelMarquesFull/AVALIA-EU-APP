import React from "react";
import { BrowserRouter, Routes, Route  } from 'react-router-dom'

import Home from "../features/pages/Home/index"
import Login from '../features/pages/Login/index'
import Register from '../features/pages/Register/index'
import PageBase from '../features/PageBase/index'
import Page404 from '../features/pages/notFound/Page404'

function AppRouters() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PageBase/>}>
                    <Route index element={<Home />}></Route>
                    <Route path="/login" element={<Login/>}></Route>
                    <Route path="/registre-se" element={<Register/>}></Route>
                    <Route path="*" element={<Page404/>}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouters;
