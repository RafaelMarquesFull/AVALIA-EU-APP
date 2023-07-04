import Navbar from "../navbar/navbar"
import Logo from "../../assets/img/logo.svg"
import "./header.css";
import { Link, useNavigate } from "react-router-dom";



function Header() {
    const navigate = useNavigate();
    return(
        <div className='container_header'>
           <Link to="/"> <img src={Logo} alt="Logomarca"/> </Link> 
            <Navbar />
            <div>
                <button onClick={()=> navigate("/Login")}>
                    Login
                </button>
                <button onClick={()=> navigate("/Login")}>
                    Registre-se
                </button>
            </div>
        </div>
    )
}
export default Header;
