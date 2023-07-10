// import Header from ""
// import Footer from ""
// import "./home.css"
import React, {useContext} from "react";
import { AuthContex } from "../../../../contexts/routerContext";
import Header from "../../components/Header";


function PacientHome() {
    const {logout} = useContext(AuthContex)

    const handleLogout = ()=> {
        logout();
    };

    return(
        <div className="container_home">
           <h1>PAGINA DO USUARIO </h1>
           <Header/>
           <button onClick={handleLogout}>Sair</button>
        </div>
    )
}
export default PacientHome;