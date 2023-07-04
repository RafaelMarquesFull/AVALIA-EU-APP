import React from "react";

import { Navigate } from "react-router-dom";

function PrivateRouter({ children }){
    const user = true

    return user ? children :<Navigate to="/pacient-inicio"/>
}
export default PrivateRouter;





