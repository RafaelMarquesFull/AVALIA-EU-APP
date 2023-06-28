import Navbar from "../navbar/navbar"
import "./header.css"

function Header() {
    return(
        <div className='container_header'>
            <Navbar />
            <div>
                <button>
                    Login
                </button>
                <button>
                    Registre-se
                </button>
            </div>
        </div>
    )
}
export default Header;
