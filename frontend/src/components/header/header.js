import Navbar from "../navbar/navbar"
import "./header.css"

export default function Header() {
    return(
        <div>
            <div>
                {Navbar}
            </div>

            <div>
                <button >
                    Login
                </button>
                <button>
                    Registre-se
                </button>
            </div>

        </div>
    )
}