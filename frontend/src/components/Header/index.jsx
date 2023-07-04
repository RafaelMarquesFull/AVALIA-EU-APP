import Navbar from "../navbar/navbar"
import Logo from "../../assets/img/logo.svg"
import "./header.css";
import { Link, useNavigate } from "react-router-dom";



function Header() {
    const navigate = useNavigate();
    return(
        <div className='container_header'>
           <Link to="/"> <img  className='logo' src={Logo} alt="Logomarca"/> </Link> 
            <Navbar />
            <div className="buttons">
                <button className="buttons" onClick={()=> navigate("/login")}>
                    Login
                </button>
                <button className="buttons" onClick={()=> navigate("/registre-se")}>
                    Registre-se
                </button>
            </div>
        </div>
    )
}
export default Header;
