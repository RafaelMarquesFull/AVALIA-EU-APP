import React from "react";

import { Navigate } from "react-router-dom";

export function PrivateRouter({ children }){
    const user = true

    return user ? children :<Navigate to="/login"/>
}






